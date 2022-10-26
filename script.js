let div=document.createElement("div");
div.setAttribute("class","main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

let input=document.createElement('input');
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","covid 19");
input.style.width ="500px";

let button=document.createElement("button0");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let death=document.createElement("div");
death.setAttribute("id","death");

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

formgroup.append(input,button,active,death,recovered);
div.append(formgroup);
document.body.append(div);

async function foo()
{
var countryname=document.getElementById("main").value;
console.log(countryname);
var res= await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
var res1=await res.json();
var index = res1.length-1;
console.log(res1[index].Active);
active.innerHTML=`Total number of active status:${res1[index].Active}`;
death.innerHTML=`Total number of Death status:${res1[index].Deaths}`;
recovered.innerHTML=`Total number of Recovered status:${res1[index].Recovered}`;
}