let repo;

function connectServer(){

let ip = document.getElementById("serverIP").value;

localStorage.setItem("cassServer",ip);

window.location = "dashboard.html";

}

function getRepo(){

repo = new EcRepository();

repo.selectedServer = localStorage.getItem("cassServer");

return repo;

}
