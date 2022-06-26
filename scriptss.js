var user_name=document.getElementById("m1").value;
var user_pswd=document.getElementById("p1").value;                  
localStorage.setItem("user", user_name);
localStorage.setItem("pass", user_pswd);                    
// Retrieve                    

if (localStorage.getItem("user") == document.getElementById('userName').value)
{
    if (localStorage.getItem("pass") == document.getElementById('password').value)
    {
        // login is successful
    } 
    else{
        alert("Please register");
    }         
}