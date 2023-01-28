var Username = document.getElementById("Username")
var contact = document.getElementById("contact")
var Address = document.getElementById("Address")
var UID = localStorage.getItem("UID")
console.log(UID)

var btn = document.getElementsByTagName("button")
btn[0].addEventListener("click", async function(){

    var key = firebase.database().ref(`users/${UID}/Contacts`).push().getKey()//DB KEY GENERATE 
    var obj = {
        Username:Username.value,
        contact:contact.value,
        Address:Address.value,
        contact_key : key
    }
    console.log(obj)
    //add data
   await     firebase.database().ref(`users/${UID}/Contacts/${key}`).set(obj)
    window.location.replace("home.html")


})