const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname);
const button = document.getElementsByClassName("btn btn-primary")[0]




document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  button.addEventListener("click", function(e){
     fetch('https://randomuser.me/api/')
     .then( res => res.json() )
     .then( json => console.log(json) )
  })
  

});

function addUser(json){
  const data = json.data
}
