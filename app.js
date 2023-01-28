

var user12=document.getElementById("user12")
var email=document.getElementById("email")
var password=document.getElementById("password")
var signup=document.getElementById("signup")


signup.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((userdata)=>{
        console.log(userdata.user.uid)
        // localStorage("email",email.value)
        // localStorage("UID",userdata.user.uid)
        var obj = {
            user:user12.value,
            email:email.value,
            password:password.value,
            Uid:userdata.user.uid,
        }
        console.log(obj)
        firebase.database().ref(`users/${userdata.user.uid}`).set(obj)
        alert("sign in succesfully")
    })
    .catch((err)=>{
        // console.log(err)
        console.log(err)
    })
})

function chglog(){
    window.location.replace("login.html")
}