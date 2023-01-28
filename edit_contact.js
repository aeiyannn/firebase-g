var contact_key = localStorage.getItem("Select_Key")
console.log(contact_key)

var edit_btn = document.getElementById("edit_btn")

//user login 
var user_id = localStorage.getItem("UID")
console.log(user_id)


var Username1= document.getElementById("Username")
var contact1= document.getElementById("contact")
var Address1= document.getElementById("Address")


//getdata 
firebase.database().ref("users/").child(user_id+"/").child("Contacts/").child(contact_key)
.once("value",(snapdata)=>{
console.log(snapdata.toJSON())
Username1.value=snapdata.toJSON()["Username"]
contact1.value=snapdata.toJSON()["contact"]

Address1.value=snapdata.toJSON()["Address"]

})

edit_btn.addEventListener("click",async function(){
    var obj ={
        Username:Username1.value,
        contact:contact1.value,
        Address:Address1.value,
        contact_key:contact_key
    }
    console.log(obj)
    await  firebase.database().ref("users/").child(user_id+"/")
    .child("Contacts/").child(contact_key).update(obj)
    window.location.href="home.html"
})
