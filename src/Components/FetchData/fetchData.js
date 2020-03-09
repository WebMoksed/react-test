export default Fetchdata = () => {
  fetch("../../assets/json/data.js")
    .then(response => response)
    .then(data => {
      console.log(data);
    });
};
