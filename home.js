var UID = localStorage.getItem("UID")
console.log(UID)
var user12= document.getElementById("user12")
var email= document.getElementById("email")
var btn = document.getElementsByTagName("button")
var table = document.getElementsByTagName("table")


//get current user data 
firebase.database().ref("users/").child(UID).once("value",(data2)=>{
    console.log(data2.toJSON().user)
    var maindata = data2.toJSON()
  user12.innerText="Welcome:"+ maindata.user
   email.innerText="user email:"+ maindata.email
})


//
firebase.database().ref("users/").child(UID).child("Contacts").once("value",(data)=>{
    // console.log( data.toJSON())
    var maindata =  data.toJSON()
    var data1 = Object.values(maindata)//get values
    console.log(data1)

    data1.map((v,i)=>{
        console.log(v.contact_key)
        table[0].innerHTML+=`
        <tbody>
        <tr>
        <td>${i+1}</td>
        <td>${v.Username}</td>
        <td>${v.Address}</td>
        <td>${v.contact}</td>
    <td>
    <button class="view1"onclick='edit(this)' id=${v.contact_key} >Edit</button>
    <button class="view1"onclick='del(this)' id=${v.contact_key}>Delete</button></td>
    </td>
    </tr>
    </tbody>
        `

    })
})

function edit(e){
    console.log(e.id)
    localStorage.setItem("Select_Key",e.id)//get 
    window.location.href="edit_contact.html"
}
function del(e){
var rem= firebase.database().ref("users/").child(UID+"/").child("Contacts/").child(e.id)
rem.remove()
window.location.reload()
}



btn[0].addEventListener("click",function(){
window.location.href="add_contact.html"
})
