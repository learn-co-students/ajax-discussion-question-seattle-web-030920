const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

fetchData()
putToDOM()
});

function fetchData(){
 data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( putToDOM )
}

function putToDOM(data) {
console.log(data.results["0"].email)
let email= data.results["0"].email
let h4=document.getElementById('email')
h4.innerHTML=email

}