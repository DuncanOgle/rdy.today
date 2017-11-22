webpackJsonp([0],{107:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return a(e,null,[{key:"getRailData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LEW",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LBG",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new Promise(function(r,a){fetch("/api/rail/"+e+"/"+t+(n?"/"+n:"")).then(function(e){r(e.json())}).catch(function(){a()})})}},{key:"getRailStations",value:function(e){var t=this;return new Promise(function(n,r){fetch("/api/rail/search/"+e).then(function(e){t.lastSearch=e.json(),n(t.lastSearch)}).catch(function(){r()})})}},{key:"getLastSearch",value:function(){return this.lastSearch}}]),e}();t.default=i},169:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return a(e,null,[{key:"getGeoPosition",value:function(){return new Promise(function(e,t){navigator.geolocation.getCurrentPosition(function(t){e({lat:t.coords.latitude,lon:t.coords.longitude})},function(){return t()})})}}]),e}();t.default=i},170:function(e,t){e.exports={rail:"rail__15JkG",nextTrain:"nextTrain__3Aobx"}},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return e.sort(function(e,t){return e.position<t.position?-1:e.position>t.position?1:0})}function i(e){return"rail"===e.type?u.default.createElement(g.default,{key:e.type+"-"+e.position,data:e}):"weather"===e.type?u.default.createElement(p.default,{key:e.type+"-"+e.position,data:e}):"tube"===e.type?u.default.createElement(_.default,{key:e.type+"-"+e.position,data:e}):u.default.createElement("div",null)}function o(){var e=a(JSON.parse(localStorage.getItem("rdy")).data);return u.default.createElement("div",{className:f.default.container},u.default.createElement("h1",{className:f.default.title},"Rdy.Today"),u.default.createElement(v.default,null),e.map(function(e){return i(e)}))}var l=n(33),u=r(l),s=n(142),c=n(58),f=r(c),d=n(292),p=r(d),h=n(295),_=r(h),m=n(298),g=r(m),y=n(301),v=r(y);(0,s.render)(u.default.createElement(o,null),document.getElementById("main"))},292:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(33),s=r(u),c=n(293),f=r(c),d=n(58),p=r(d),h=n(294),_=r(h),m=n(169),g=r(m),y=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"componentWillMount",value:function(){this.setState({weather:null,limit:12})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.data;console.log(t),t.tryLocation?g.default.getGeoPosition().then(function(t){e.getWeatherData(t.lat+","+t.lon)}).catch(function(){e.getWeatherData(t.location||"")}):this.getWeatherData(t.location||"")}},{key:"getWeatherData",value:function(e){var t=this;_.default.getWeatherData(e).then(function(e){t.setState({weather:e.data})})}},{key:"increaseLimit",value:function(e){e.preventDefault(),this.setState({limit:24})}},{key:"render",value:function(){var e=this,t=!!this.state.weather;return t?s.default.createElement("div",null,s.default.createElement("div",{className:p.default.card},s.default.createElement("div",{className:p.default.cardHeader},s.default.createElement("h2",null,"Weather"),s.default.createElement("a",{href:"",className:24===this.state.limit?p.default.hidden:f.default.viewMore,onClick:function(t){return e.increaseLimit(t)}},"Further ahead >")),s.default.createElement("div",{className:f.default.weather},this.state.weather.slice(0,this.state.limit).map(function(e){return s.default.createElement("p",{key:e.hour,className:[f.default.rain,f.default["rain-"+e.pop]].join(" ")},e.hour<10?"0"+e.hour:e.hour,":00 - ☀️ ",e.feelsLike,"° / 💦 ",e.pop,"% / 💨 ",e.windSpeed,"mph / ",e.condition)})))):s.default.createElement("div",null,s.default.createElement("div",{className:p.default.card},s.default.createElement("div",{className:p.default.cardHeader},s.default.createElement("h2",null,"Weather")),"Loading..."))}}]),t}(s.default.Component);t.default=y},293:function(e,t){e.exports={weather:"weather__33Aqt",viewMore:"viewMore__jpzBH",rain:"rain__2uEms","rain-0":"rain-0__3tj5H","rain-1":"rain-1__2Aa0v","rain-2":"rain-2__2KD0S","rain-3":"rain-3__2liyV","rain-4":"rain-4__3tStM","rain-5":"rain-5__1Tzg-","rain-6":"rain-6__2zo_D","rain-7":"rain-7__3qD2k","rain-8":"rain-8__2taDW","rain-9":"rain-9__aX6-i","rain-10":"rain-10__3N6CQ","rain-11":"rain-11__2zvfB","rain-12":"rain-12__gGkKq","rain-13":"rain-13__2DZQ5","rain-14":"rain-14__1STlI","rain-15":"rain-15__3sbKV","rain-16":"rain-16__MFDR8","rain-17":"rain-17__1Aw-G","rain-18":"rain-18__36exR","rain-19":"rain-19__1est4","rain-20":"rain-20__3ztR6","rain-21":"rain-21__3FKFu","rain-22":"rain-22__3KLU1","rain-23":"rain-23__2cisH","rain-24":"rain-24__1tOqu","rain-25":"rain-25__t1CLe","rain-26":"rain-26__2DyBE","rain-27":"rain-27__1DgKY","rain-28":"rain-28__3hWL4","rain-29":"rain-29__37ku6","rain-30":"rain-30__3_Yxg","rain-31":"rain-31__GzLd3","rain-32":"rain-32__sxwdb","rain-33":"rain-33__1ixRU","rain-34":"rain-34__1xOop","rain-35":"rain-35__w3en7","rain-36":"rain-36__3cnl0","rain-37":"rain-37__99z6h","rain-38":"rain-38__paw0e","rain-39":"rain-39__2vuSn","rain-40":"rain-40__1CyE8","rain-41":"rain-41__2298n","rain-42":"rain-42__1kmLb","rain-43":"rain-43__10aRn","rain-44":"rain-44__3b-rf","rain-45":"rain-45__1frLy","rain-46":"rain-46__11_ac","rain-47":"rain-47__LjgN8","rain-48":"rain-48__2vXuf","rain-49":"rain-49__1KfGU","rain-50":"rain-50__W932q","rain-51":"rain-51__2WjBx","rain-52":"rain-52__2yKHB","rain-53":"rain-53__2gvmT","rain-54":"rain-54__SVn4O","rain-55":"rain-55__1ctHC","rain-56":"rain-56__2xATa","rain-57":"rain-57__JYK2c","rain-58":"rain-58__17zff","rain-59":"rain-59__3yNUN","rain-60":"rain-60__3MTyr","rain-61":"rain-61__2MV5R","rain-62":"rain-62__1lBBt","rain-63":"rain-63__1toJj","rain-64":"rain-64__2hXdy","rain-65":"rain-65__1k0Ya","rain-66":"rain-66__X8dWz","rain-67":"rain-67__38jqN","rain-68":"rain-68____W3j","rain-69":"rain-69__33kLK","rain-70":"rain-70__1AQRM","rain-71":"rain-71__QpQ5u","rain-72":"rain-72__1gqLd","rain-73":"rain-73__1fRQ9","rain-74":"rain-74__3WgxM","rain-75":"rain-75__3bEMZ","rain-76":"rain-76__WaRBh","rain-77":"rain-77__1UH04","rain-78":"rain-78__1u0Kj","rain-79":"rain-79__2jHH_","rain-80":"rain-80__2XGvw","rain-81":"rain-81__29RGW","rain-82":"rain-82__1c1_y","rain-83":"rain-83__Ew_wq","rain-84":"rain-84__2k-Ur","rain-85":"rain-85__RWHm2","rain-86":"rain-86__2VtBh","rain-87":"rain-87__doxG_","rain-88":"rain-88__vcGqB","rain-89":"rain-89__29Bij","rain-90":"rain-90__2_acz","rain-91":"rain-91__7vMmn","rain-92":"rain-92__28m2i","rain-93":"rain-93__20Klj","rain-94":"rain-94__1XkZR","rain-95":"rain-95__3gPEu","rain-96":"rain-96__30K3C","rain-97":"rain-97__1vi8G","rain-98":"rain-98__G9cxa","rain-99":"rain-99__D-OlB","rain-100":"rain-100__2qDix"}},294:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return a(e,null,[{key:"getWeatherData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"51.5245104,-0.0863409";return new Promise(function(t,n){fetch("/api/weather"+(e?"/"+e:"")).then(function(e){t(e.json())}).catch(function(){n()})})}}]),e}();t.default=i},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(33),s=r(u),c=n(296),f=r(c),d=n(58),p=r(d),h=n(297),_=r(h),m=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"componentWillMount",value:function(){this.setState({tube:null})}},{key:"componentDidMount",value:function(){var e=this;_.default.getTubeData().then(function(t){e.setState({tube:t.data})})}},{key:"render",value:function(){var e=!!this.state.tube;return e?s.default.createElement("div",null,s.default.createElement("div",{className:p.default.card},s.default.createElement("div",{className:p.default.cardHeader},s.default.createElement("h2",null,"Tube")),s.default.createElement("div",{className:f.default.tube},this.state.tube.map(function(e){return s.default.createElement("p",{key:e.line,className:[f.default.line,f.default[e.line]].join(" ")},e.disruption)})))):s.default.createElement("div",null,s.default.createElement("div",{className:p.default.card},s.default.createElement("div",{className:p.default.cardHeader},s.default.createElement("h2",null,"Tube")),"Loading..."))}}]),t}(s.default.Component);t.default=m},296:function(e,t){e.exports={tube:"tube__1NGMf",line:"line__2LwT2",northern:"northern__3XCwI",bakerloo:"bakerloo__1g_jZ",central:"central__3jF53",circle:"circle__3q1s9",district:"district__1iqdB",hammersmith:"hammersmith__K-Bqg","hammersmith-city":"hammersmith-city__DS-SD",jubilee:"jubilee__1831i",metropolitan:"metropolitan__2hgSs",piccadilly:"piccadilly__2jOKY",victoria:"victoria__3fnpG",waterloo:"waterloo__3fXxi","waterloo-city":"waterloo-city__2zgab","london-overground":"london-overground__AeQDV",dlr:"dlr__3vsfW"}},297:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return a(e,null,[{key:"getTubeData",value:function(){return new Promise(function(e,t){fetch("/api/tube").then(function(t){e(t.json())}).catch(function(){t()})})}}]),e}();t.default=i},298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(33),s=r(u),c=n(170),f=r(c),d=n(58),p=r(d),h=n(107),_=r(h),m=n(169),g=r(m),y=n(299),v=r(y),b=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"componentWillMount",value:function(){this.setState({rail:null,limit:6})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.data;t.tryLocation?g.default.getGeoPosition().then(function(n){e.getRailData(t.from,t.to,n.lat+","+n.lon)}).catch(function(){e.getRailData(t.from,t.to)}):this.getRailData(t.from,t.to)}},{key:"getRailData",value:function(e,t,n){var r=this;_.default.getRailData(e,t,n).then(function(e){r.setState({rail:e.data,latestTrain:r.getNextAvailableTrain(e.data.times)})})}},{key:"getNextAvailableTrain",value:function(e){var t={time:"",issue:"",platform:""},n=e.filter(function(e){return!e.cancelReason});return"On time"!==n[0].etd?t.time=n[0].etd:t.time=n[0].std,(n[0].delayReason||"On time"!==n[0].etd)&&(t.issue=n[0].delayReason||"Running late"),n[0].platform?t.platform+=n[0].platform:t.platform+="?",t}},{key:"getStatus",value:function(e){return e.cancelReason?"Cancelled":e.etd}},{key:"getStatusText",value:function(e){var t="";return(e.cancelReason||e.delayReason)&&(t="<br><small>"+(e.cancelReason||e.delayReason)+"</small>"),t}},{key:"render",value:function(){var e=this,t=!!this.state.rail;return t?s.default.createElement("div",null,s.default.createElement("div",{className:p.default.card},s.default.createElement("div",{className:p.default.cardHeader},s.default.createElement("h2",null,this.state.rail.meta.fromName),s.default.createElement("h2",null,this.state.rail.meta.toName),s.default.createElement("h3",{className:f.default.nextTrain},this.state.latestTrain.time," (",this.state.latestTrain.platform,")")),s.default.createElement(v.default,{messages:this.state.rail.messages}),s.default.createElement("div",{className:f.default.rail},this.state.rail.times.slice(0,this.state.limit).map(function(t){return s.default.createElement("p",{key:""+t.std+t.etd+t.platform+t.from+t.to},t.std," (",e.getStatus(t),") / Platform ",t.platform||"unknown",s.default.createElement("span",{dangerouslySetInnerHTML:{__html:e.getStatusText(t)}}))})))):s.default.createElement("div",null,s.default.createElement("div",{className:p.default.card},s.default.createElement("div",{className:p.default.cardHeader},s.default.createElement("h2",null,"Rail")),"Loading..."))}}]),t}(s.default.Component);t.default=b},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(33),s=r(u),c=n(108),f=r(c),d=n(170),p=r(d),h=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=null;return this.props.messages.length&&(e=s.default.createElement("div",{className:p.default.rail},this.props.messages.map(function(e){return s.default.createElement("ul",null,s.default.createElement("li",{dangerouslySetInnerHTML:{__html:e}}))}))),e}}]),t}(s.default.Component);h.propTypes={messages:f.default.array},h.defaultProps={messages:f.default.array},t.default=h},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){p.default.getLastSearch().then(function(n){var r=n.data.filter(function(e){return e.title===t});g.default.setData("type","rail"),g.default.setData(e,r[0].key)})}function i(e){a("to",e)}function o(e){a("from",e)}function l(){return s.default.createElement("div",null,s.default.createElement("h2",null,"Add section"),s.default.createElement("div",null,s.default.createElement("input",{className:f.default.sectionSelect,id:"weather",hidden:!0,type:"radio",name:"sectionType",value:"weather"}),s.default.createElement("label",{htmlFor:"weather",className:f.default.sectionSelectLabel},"Weather"),s.default.createElement("input",{className:f.default.sectionSelect,id:"tube",hidden:!0,type:"radio",name:"sectionType",value:"tube"}),s.default.createElement("label",{htmlFor:"tube",className:f.default.sectionSelectLabel},"Tube"),s.default.createElement("input",{className:f.default.sectionSelect,id:"rail",hidden:!0,type:"radio",name:"sectionType",value:"rail"}),s.default.createElement("label",{htmlFor:"rail",className:f.default.sectionSelectLabel},"Rail"),s.default.createElement("div",null,s.default.createElement("input",{className:f.default.input,type:"text",placeholder:"Default weather location"}),s.default.createElement("label",{className:f.default.checkbox,htmlFor:"weatherLocation"},s.default.createElement("input",{id:"weatherLocation",type:"checkbox"}),s.default.createElement("span",{className:f.default.controlIndicator}),"Try my location if available")),s.default.createElement("div",null,s.default.createElement(_.default,{id:"from",placeholder:"Station going from",onChange:o}),s.default.createElement(_.default,{id:"to",placeholder:"Station going to",onChange:i}),s.default.createElement("label",{className:f.default.checkbox,htmlFor:"railLocation"},s.default.createElement("input",{id:"railLocation",type:"checkbox"}),s.default.createElement("span",{className:f.default.controlIndicator}),"Try my location if available")),s.default.createElement("a",{href:"#",className:f.default.button},"Add")))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(33),s=r(u),c=n(58),f=r(c),d=n(107),p=r(d),h=n(302),_=r(h),m=n(304),g=r(m);t.default=l},302:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(33),c=r(s),f=n(303),d=r(f),p=n(107),h=r(p),_=n(58),m=r(_),g=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={items:[]},n}return o(t,e),u(t,[{key:"render",value:function(){var e=this;return c.default.createElement(d.default,{onChange:this.props.onChange},function(t){var n=t.selectedItem,r=t.getInputProps,a=t.getItemProps,i=t.highlightedIndex,o=t.isOpen;return c.default.createElement("div",null,c.default.createElement("input",l({className:m.default.input,placeholder:e.props.placeholder},r({onChange:function(t){var n=t.target.value;n&&h.default.getRailStations(n).then(function(t){var n=t.data.map(function(e){return e.title});e.setState({items:n})}).catch(function(e){console.log(e)})}}))),o&&c.default.createElement("div",{className:m.default.results},e.state.items.map(function(e,t){return c.default.createElement("div",l({className:i===t?m.default.resultHover:n===e?m.default.resultSelected:m.default.result,key:e},a({item:e})),e)})))})}}]),t}(c.default.Component);t.default=g},303:function(e,t,n){"use strict";function r(e){var t=R[R.length-1]===e;R=t?[].concat(T(R),[e]):[e],i().innerHTML=""+R.filter(Boolean).map(a).join("")}function a(e,t){return'<div style="display:'+(t===R.length-1?"block":"none")+';">'+e+"</div>"}function i(){return M||(M=document.createElement("div"),M.setAttribute("id","a11y-status-message"),M.setAttribute("role","status"),M.setAttribute("aria-live","assertive"),M.setAttribute("aria-relevant","additions text"),Object.assign(M.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),document.body.appendChild(M),M)}function o(e){return"function"==typeof e?e:l}function l(){}function u(e,t,n){return null!==t&&t!==n.parentNode?e(t)?t:u(e,t.parentNode,n):null}function s(e,t){var n=N(e,t);if(null!==n){var r=getComputedStyle(n),a=n.getBoundingClientRect(),i=parseInt(r.borderTopWidth,10),o=parseInt(r.borderBottomWidth,10),l=a.top+i,u=e.getBoundingClientRect(),s=u.top+n.scrollTop,c=s-l;c<n.scrollTop?n.scrollTop=c:c+u.height+i+o>n.scrollTop+a.height&&(n.scrollTop=c+u.height-a.height+i+o)}}function c(e,t){var n=void 0;return function(){for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];n&&clearTimeout(n),n=setTimeout(function(){n=null,e.apply(void 0,a)},t)}}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t.some(function(t){return t&&t.apply(void 0,[e].concat(r)),e.defaultPrevented})}}function d(e){return e+"-"+H++}function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.find(function(e){return void 0!==e})}function h(e){var t=e.isOpen,n=e.highlightedItem,r=e.selectedItem,a=e.resultCount,i=e.previousResultCount,o=e.itemToString;return t?a?n&&a===i?o(n):a+" "+(1===a?"result is":"results are")+" available, use up and down arrow keys to navigate.":"No results.":r?o(r):""}function _(e,t){return e=Array.isArray(e)?e[0]:e,!e&&t?t:e}function m(e){return e.nodeName?"string"==typeof e.nodeName:"string"==typeof e.type}function g(e){return e.props||e.attributes}function y(e,t){throw new Error('The property "'+t+'" is required in "'+e+'"')}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return A.forEach(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function b(e,t){var n=t.refKey,r="ref"!==n,a=!m(e);if(a&&!r)throw new Error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps");if(!a&&r)throw new Error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "'+n+'"');if(!g(e).hasOwnProperty(n))throw new Error('downshift: You must apply the ref prop "'+n+'" from getRootProps onto your root element.')}Object.defineProperty(t,"__esModule",{value:!0});var w=n(33),I=n.n(w),E=n(108),S=n.n(E),k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),P=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},j=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},D=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},T=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},M="undefined"==typeof document?null:document.getElementById("a11y-status-message"),R=[],H=1,N=u.bind(null,function(e){return e.scrollHeight>e.clientHeight}),A=["highlightedIndex","inputValue","isOpen","selectedItem","type"],L=function(e){function t(){var e;k(this,t);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=D(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));K.call(i);var o=i.getState({highlightedIndex:i.props.defaultHighlightedIndex,isOpen:i.props.defaultIsOpen,inputValue:i.props.defaultInputValue,selectedItem:i.props.defaultSelectedItem});return o.selectedItem&&(o.inputValue=i.props.itemToString(o.selectedItem)),i.state=o,i}return C(t,e),O(t,[{key:"getState",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return Object.keys(t).reduce(function(n,r){return n[r]=e.isControlledProp(r)?e.props[r]:t[r],n},{})}},{key:"isControlledProp",value:function(e){return void 0!==this.props[e]}},{key:"getItemCount",value:function(){return void 0===this.props.itemCount?this.items.length:this.props.itemCount}},{key:"internalSetState",value:function(e,n){var r=this,a=void 0,i={};return this.setState(function(n){n=r.getState(n),e="function"==typeof e?e(n):e;var o={},l={};return e.hasOwnProperty("selectedItem")&&e.selectedItem!==n.selectedItem&&(a=e.selectedItem),e.type=e.type||t.stateChangeTypes.unknown,Object.keys(e).forEach(function(t){n[t]!==e[t]&&(i[t]=e[t]),"type"!==t&&(l[t]=e[t],r.isControlledProp(t)||(o[t]=e[t]))}),o},function(){o(n)(),Object.keys(i).length>1&&r.props.onStateChange(i,r.getStateAndHelpers()),void 0!==a&&r.props.onChange(a,r.getStateAndHelpers()),r.props.onUserAction(i,r.getStateAndHelpers())})}},{key:"getStateAndHelpers",value:function(){var e=this.getState(),t=e.highlightedIndex,n=e.inputValue,r=e.selectedItem,a=e.isOpen,i=this.props.itemToString,o=this.getRootProps,l=this.getButtonProps,u=this.getLabelProps,s=this.getInputProps,c=this.getItemProps,f=this.openMenu,d=this.closeMenu,p=this.toggleMenu,h=this.selectItem,_=this.selectItemAtIndex,m=this.selectHighlightedItem,g=this.setHighlightedIndex,y=this.clearSelection,v=this.clearItems;return{getRootProps:o,getButtonProps:l,getLabelProps:u,getInputProps:s,getItemProps:c,reset:this.reset,openMenu:f,closeMenu:d,toggleMenu:p,selectItem:h,selectItemAtIndex:_,selectHighlightedItem:m,setHighlightedIndex:g,clearSelection:y,clearItems:v,itemToString:i,highlightedIndex:t,inputValue:n,isOpen:a,selectedItem:r}}},{key:"getItemId",value:function(e){return this.props.id+"-item-"+e}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var n=function(){e.isMouseDown=!0},r=function(n){e.isMouseDown=!1,n.target!==e._rootNode&&e._rootNode.contains(n.target)||!e.getState().isOpen||e.reset({type:t.stateChangeTypes.mouseUp})};window.addEventListener("mousedown",n),window.addEventListener("mouseup",r),this.cleanup=function(){e._isMounted=!1,window.removeEventListener("mousedown",n),window.removeEventListener("mouseup",r)}}},{key:"componentDidUpdate",value:function(e){this.isControlledProp("selectedItem")&&this.props.selectedItem!==e.selectedItem&&this.internalSetState({type:t.stateChangeTypes.controlledPropUpdatedSelectedItem,inputValue:this.props.itemToString(this.props.selectedItem)}),this.updateStatus()}},{key:"componentWillUnmount",value:function(){this.cleanup()}},{key:"render",value:function(){var e=_(this.props.children,l);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var t=_(e(this.getStateAndHelpers()));if(!t)return null;if(this.getRootProps.called)return b(t,this.getRootProps),t;if(m(t))return I.a.cloneElement(t,this.getRootProps(g(t)));throw new Error("downshift: If you return a non-DOM element, you must use apply the getRootProps function")}}]),t}(w.Component);L.propTypes={children:S.a.func,defaultHighlightedIndex:S.a.number,defaultSelectedItem:S.a.any,defaultInputValue:S.a.string,defaultIsOpen:S.a.bool,getA11yStatusMessage:S.a.func,itemToString:S.a.func,onChange:S.a.func,onStateChange:S.a.func,onUserAction:S.a.func,onClick:S.a.func,itemCount:S.a.number,id:S.a.string,selectedItem:S.a.any,isOpen:S.a.bool,inputValue:S.a.string,highlightedIndex:S.a.number},L.defaultProps={defaultHighlightedIndex:null,defaultSelectedItem:null,defaultInputValue:"",defaultIsOpen:!1,getA11yStatusMessage:h,id:d("downshift"),itemToString:function(e){return null==e?"":String(e)},onStateChange:function(){},onUserAction:function(){},onChange:function(){}},L.stateChangeTypes={unknown:"__autocomplete_unknown__",mouseUp:"__autocomplete_mouseup__",itemMouseEnter:"__autocomplete_item_mouseenter__",keyDownArrowUp:"__autocomplete_keydown_arrow_up__",keyDownArrowDown:"__autocomplete_keydown_arrow_down__",keyDownEscape:"__autocomplete_keydown_escape__",keyDownEnter:"__autocomplete_keydown_enter__",blurInput:"__autocomplete_blur_input__",changeInput:"__autocomplete_change_input__",keyDownSpaceButton:"__autocomplete_keydown_space_button__",clickButton:"__autocomplete_click_button__",controlledPropUpdatedSelectedItem:"__autocomplete_controlled_prop_updated_selected_item__"};var K=function(){var e=this;this.root_handleClick=f(this.props.onClick,this.root_handleClick),this.input=null,this.items=[],this.previousResultCount=0,this.getItemNodeFromIndex=function(t){return document.getElementById(e.getItemId(t))},this.setHighlightedIndex=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.defaultHighlightedIndex,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=v(n),e.internalSetState(x({highlightedIndex:t},n),function(){s(e.getItemNodeFromIndex(e.getState().highlightedIndex),e._rootNode)})},this.openAndHighlightDefaultIndex=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setHighlightedIndex(void 0,x({isOpen:!0},t))},this.highlightDefaultIndex=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setHighlightedIndex(void 0,t)},this.moveHighlightedIndex=function(t,n){e.getState().isOpen?e.changeHighlightedIndex(t,n):e.openAndHighlightDefaultIndex(n)},this.changeHighlightedIndex=function(t,n){var r=e.getItemCount()-1;if(!(r<0)){var a=e.getState(),i=a.highlightedIndex,o=i;null===o&&(o=t>0?-1:r+1);var l=o+t;l<0?l=r:l>r&&(l=0),e.setHighlightedIndex(l,n)}},this.clearSelection=function(t){e.internalSetState({selectedItem:null,inputValue:"",isOpen:!1},function(){var n=e._rootNode.querySelector("#"+e.inputId);n&&n.focus&&n.focus(),o(t)()})},this.selectItem=function(t,n,r){n=v(n),e.internalSetState(x({isOpen:!1,highlightedIndex:e.props.defaultHighlightedIndex,selectedItem:t,inputValue:e.props.itemToString(t)},n),o(r))},this.selectItemAtIndex=function(t,n,r){var a=e.items[t];a&&e.selectItem(a,n,r)},this.selectHighlightedItem=function(t,n){return e.selectItemAtIndex(e.getState().highlightedIndex,t,n)},this.rootRef=function(t){return e._rootNode=t},this.getRootProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.refKey,r=void 0===n?"ref":n,a=j(t,["refKey"]);return e.getRootProps.called=!0,e.getRootProps.refKey=r,x(P({},r,e.rootRef),a)},this.keyDownHandlers={ArrowDown:function(e){e.preventDefault();var t=e.shiftKey?5:1;this.moveHighlightedIndex(t,{type:L.stateChangeTypes.keyDownArrowDown})},ArrowUp:function(e){e.preventDefault();var t=e.shiftKey?-5:-1;this.moveHighlightedIndex(t,{type:L.stateChangeTypes.keyDownArrowUp})},Enter:function(e){this.getState().isOpen&&(e.preventDefault(),this.selectHighlightedItem({type:L.stateChangeTypes.keyDownEnter}))},Escape:function(e){e.preventDefault(),this.reset({type:L.stateChangeTypes.keyDownEscape})}},this.buttonKeyDownHandlers=x({},this.keyDownHandlers,{" ":function(e){e.preventDefault(),this.toggleMenu({type:L.stateChangeTypes.keyDownSpaceButton})}}),this.getButtonProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.onClick,r=t.onKeyDown,a=j(t,["onClick","onKeyDown"]),i=e.getState(),o=i.isOpen;return x({role:"button","aria-label":o?"close menu":"open menu","aria-expanded":o,"aria-haspopup":!0,onClick:f(n,e.button_handleClick),onKeyDown:f(r,e.button_handleKeyDown)},a)},this.button_handleKeyDown=function(t){e.buttonKeyDownHandlers[t.key]&&e.buttonKeyDownHandlers[t.key].call(e,t)},this.button_handleClick=function(t){t.preventDefault(),e.toggleMenu({type:L.stateChangeTypes.clickButton})},this.getLabelProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.getLabelProps.called=!0,e.getInputProps.called&&t.htmlFor&&t.htmlFor!==e.inputId)throw new Error('downshift: You provided the htmlFor of "'+t.htmlFor+'" for your label, but the id of your input is "'+e.inputId+'". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');return e.inputId=p(e.inputId,t.htmlFor,d("downshift-input")),x({},t,{htmlFor:e.inputId})},this.getInputProps=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.onKeyDown,a=n.onBlur,i=n.onChange,o=n.onInput,l=j(n,["onKeyDown","onBlur","onChange","onInput"]);if(e.getInputProps.called=!0,e.getLabelProps.called&&l.id&&l.id!==e.inputId)throw new Error('downshift: You provided the id of "'+l.id+'" for your input, but the htmlFor of your label is "'+e.inputId+'". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');e.inputId=p(e.inputId,l.id,d("downshift-input"));var u=e.getState(),s=u.inputValue,c=u.isOpen,h=u.highlightedIndex;return x((t={role:"combobox","aria-autocomplete":"list","aria-expanded":c,"aria-activedescendant":"number"==typeof h&&h>=0?e.getItemId(h):null,autoComplete:"off",value:s},P(t,"onChange",f(i,o,e.input_handleChange)),P(t,"onKeyDown",f(r,e.input_handleKeyDown)),P(t,"onBlur",f(a,e.input_handleBlur)),t),l,{id:e.inputId})},this.input_handleKeyDown=function(t){t.key&&e.keyDownHandlers[t.key]&&e.keyDownHandlers[t.key].call(e,t)},this.input_handleChange=function(t){e.internalSetState({type:L.stateChangeTypes.changeInput,isOpen:!0,inputValue:t.target.value})},this.input_handleBlur=function(){e.isMouseDown||e.reset({type:L.stateChangeTypes.blurInput})},this.getItemProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.onMouseEnter,r=t.onClick,a=t.index,i=t.item,o=void 0===i?y("getItemProps","item"):i,l=j(t,["onMouseEnter","onClick","index","item"]);return void 0===a?(e.items.push(o),a=e.items.indexOf(o)):e.items[a]=o,x({id:e.getItemId(a),onMouseEnter:f(n,function(){e.setHighlightedIndex(a,{type:L.stateChangeTypes.itemMouseEnter})}),onClick:f(r,function(){e.selectItemAtIndex(a)})},l)},this.clearItems=function(){e.items=[]},this.reset=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];t=v(t),e.internalSetState(function(n){var r=n.selectedItem;return x({isOpen:!1,highlightedIndex:null,inputValue:e.props.itemToString(r)},t)},o(n))},this.toggleMenu=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];t=v(t),e.internalSetState(function(e){var n=e.isOpen;return x({isOpen:!n},t)},function(){e.getState().isOpen&&e.highlightDefaultIndex(),o(n)()})},this.openMenu=function(t){e.internalSetState({isOpen:!0},o(t))},this.closeMenu=function(t){e.internalSetState({isOpen:!1},o(t))},this.updateStatus=c(function(){if(e._isMounted){var t=e.getState(),n=e.items[t.highlightedIndex]||{},a=e.getItemCount(),i=e.props.getA11yStatusMessage(x({itemToString:e.props.itemToString,previousResultCount:e.previousResultCount,resultCount:a,highlightedItem:n},t));e.previousResultCount=a,r(i)}},200)};L.default=L,t.default=L},304:function(e,t,n){"use strict";function r(e,t){a[e]=t,console.log(a)}Object.defineProperty(t,"__esModule",{value:!0});var a={type:"",from:"",to:"",tryLocation:!1,location:""};t.default={setData:r}},58:function(e,t){e.exports={title:"title__2d5QT",container:"container__rmpTB",hidden:"hidden__1DJPE",a:"a__1dXym",card:"card__2x4YF",cardHeader:"cardHeader__3qz19",sectionSelectLabel:"sectionSelectLabel__2TEdl",sectionSelect:"sectionSelect__3GiDZ",button:"button__3eAhi",input:"input__2lCoj",checkbox:"checkbox__1lwAa",controlIndicator:"controlIndicator__gBl8U",results:"results__3GbAR",result:"result__ywSIF",resultHover:"resultHover__3swi6",resultSelected:"resultSelected__28EgL"}}},[200]);
//# sourceMappingURL=App.bundle.js.map