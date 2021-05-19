$('#formreq').submit(function(event){
        event.preventDefault();
        var getUsername = document.getElementById("username").value;
        localStorage.setItem("username",getUsername);
        window.location.replace("welcome.html");
});