const fullname = document.getElementById("fullname");
const button = document.getElementsByClassName("btn btn-primary")[0]

button.addEventListener("click", function(e){
  let data = fetch("https://randomuser.me/api/")
  console.log(data)
})



console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
