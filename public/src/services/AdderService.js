const data = {
  type: '',
  from: '',
  to: '',
  tryLocation: false,
  location: '',
};

function setData(type, value) {
  data[type] = value;
  console.log(data);
}

export default { setData };
