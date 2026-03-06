let repo = new EcRepository();
repo.selectedServer = localStorage.getItem("cassServer");

function loadFrameworks(){

EcFramework.search(repo,"*",function(frameworks){

let html="";

frameworks.forEach(f=>{

html += `
<div class="card">
<h3>${f.getName()}</h3>
<p>${f.getDescription()}</p>
</div>
`;

});

document.getElementById("data").innerHTML = html;

});

}

function loadCompetencies(){

EcCompetency.search(repo,"*",function(comps){

let html="";

comps.forEach(c=>{

html += `
<div class="card">
<h3>${c.getName()}</h3>
</div>
`;

});

document.getElementById("data").innerHTML = html;

});

}
