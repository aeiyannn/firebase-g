var login=document.getElementById("login")
var email1=document.getElementById("email1")
var password1=document.getElementById("password1")
login.addEventListener("click",function(){
    console.log(email1.value)
    console.log(password1.value)
    firebase.auth().signInWithEmailAndPassword(email1.value,password1.value)
    .then((userdata)=>{
        console.log(userdata.user.uid)
        localStorage.setItem("UID",userdata.user.uid)
        window.location.replace("home.html")
    })
    .catch((err)=>{
        // console.log(err)
        alert(err)
    })
})