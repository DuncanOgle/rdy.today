# Rdy.today

Rdy.today is a site that lets users check on train, tube, and weather information - combining information from multiple apps into one.

Want to run the code? Use `npm run build` in the `public` folder to build the assets

### API Details

#### Tube

GET `https://rdy.today/api/tube`

Status of all lines

```json
{
  "status": "success",
  "message": null,
  "data": [
    {
      "id": "district",
      "status": 10,
      "statusText": "Good Service",
      "disruption": null
    },
    {
      "line": "dlr",
      "status": 5,
      "statusText": "Part Closure",
      "disruption": "DLR: Saturday 20 and Sunday 21 May, no service between Stratford and Poplar due to improvement and maintenance work. Please use local buses as no replacement bus service will be operating."
    }
  ]
}
```

Possible Lines

```json
{
  "lines": [
    "bakerloo",
    "central",
    "circle",
    "district",
    "hammersmith-city",
    "jubilee",
    "metropolitan",
    "northern",
    "piccadilly",
    "victoria",
    "waterloo-city",
    "london-overground",
    "dlr"
  ]
}
```

Possible Status'

```json
{
  "0": "Special Service",
  "1": "Closed",
  "2": "Suspended",
  "3": "Part Suspended",
  "4": "Planned Closure",
  "5": "Part Closure",
  "6": "Severe Delays",
  "7": "Reduced Service",
  "8": "Bus Service",
  "9": "Minor Delays",
  "10": "Good Service",
  "11": "Part Closed",
  "12": "Exit Only",
  "13": "No Step Free Access",
  "14": "Change of frequency",
  "15": "Diverted",
  "16": "Not Running",
  "17": "Issues Reported",
  "18": "No Issues",
  "19": "Information",
  "20": "Service Closed"
}
```

------

GET `https://rdy.today/api/tube/bakerloo`

Status of single line

```json
{
  "status": "success",
  "message": null,
  "data": [
    {
      "id": "bakerloo",
      "status": 10,
      "statusText": "Good Service",
      "disruption": null
    }
  ]
}
```

#### Weather

GET `https://rdy.today/api/weather`

Get next 24 hours of hourly weather (Default location is London)

```json
{
  "status": "success",
  "message": null,
  "data": [
    {
      "hour": 17,
      "temperature": 15,
      "feelsLike": 15,
      "pop": 0,
      "condition": "Partly Cloudy",
      "windSpeed": 24,
      "windDirection": "SW",
      "humidity": 62
    },
    {
      "hour": 18,
      "temperature": 15,
      "feelsLike": 15,
      "pop": 0,
      "condition": "Partly Cloudy",
      "windSpeed": 24,
      "windDirection": "SW",
      "humidity": 63
    }
  ]
}
```

`pop` = Possibility of Precipitation (% Chance of rain)

Temperatures are in Centigrade

Wind Speed is in mph

------

GET `https://rdy.today/api/weather/51.4651295,-0.0121473`

Get 24 hours of hourly weather for specific latitude/longitude

*Same response format as above*

------

 GET `https://rdy.today/api/weather/GB/London`

Get 24 hours of hourly weather for specific Country/Location

*Same response format as above*

#### Train

GET `https://rdy.today/api/rail/LEW/LBG`

Get next (up to) 15 trains running FROM/TO

```json
{
  "status": "success",
  "message": null,
  "data": {
    "meta": {
      "to": "LBG",
      "from": "LEW"
    },
    "messages": [
      "Delays in both directions due to some reason"
    ],
    "times": [
      {
        "from": "Hayes (Kent)",
        "to": "London Charing Cross",
        "std": "10:10",
        "etd": "On time",
        "platform": "1",
        "cancelReason": "",
        "delayReason": ""
      },
      {
        "from": "Dartford",
        "to": "London Charing Cross",
        "std": "10:19",
        "etd": "10:21",
        "platform": "3",
        "cancelReason": "",
        "delayReason": ""
      }
    ]
  }
}
```

`std` = Scheduled time of departure

`etd` = Estimated time of departure ("On time" if same as `std`)

------

GET `https://rdy.today/api/rail/51.4651295,-0.0121473/LBG`

GET `https://rdy.today/api/rail/LEW/51.4651295,-0.0121473`

Get next (up to) 15 trains running FROM/TO using Latitude/Longitude (finds nearest station)

*Same response format as above*

------

GET `https://rdy.today/api/rail/LEW/LBG/51.4651295,-0.0121473`

Get next (up to) 15 trains running in either direction using Latitude/Longitude to find closest of the two stations (which becomes the start location)

*Same response format as above*