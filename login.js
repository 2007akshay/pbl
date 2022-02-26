
function validate (){
if (document.getElementById("username").value==="vps" && document.getElementById("password").value==="vps"  )
  {
    alert("Hello teachers :)")
    location.href="login.html"
  }
  else if (document.getElementById("username").value==="g1" && document.getElementById("password").value==="g1"  )
  {
    alert("login as  g1 😊")
    location.href="login.html"
  }
  else if (document.getElementById("username").value==="lavanya" && document.getElementById("password").value==="06"  )
  {
    alert("login as Lavanya 😊")
    location.href="login.html"
  }
 else {
    alert("login failed :(")
  }
}
