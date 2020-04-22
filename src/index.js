const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetchData()
});

function fetchData(){
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => {
      let person = json["results"][0]
      getFullName(person)
    })
}

function getFullName(person) {
  const full_name = `${person["name"]["title"]} ${person["name"]["first"]} ${person["name"]["last"]}`
  fullname.textContent = full_name
}
