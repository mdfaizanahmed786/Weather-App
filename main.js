let SearchBar=document.getElementById("SearchBar");
let city=document.getElementById("city");
let descript=document.getElementById("descript");
let temp=document.getElementById("temp");
let pascal=document.getElementById("pascal");
let spinner=document.getElementById("spinner");
let humid=document.getElementById("humid");
let i=document.createElement("i");
i.setAttribute("class","fa fa-spinner fa-spin");
i.setAttribute("style","position:relative; top:300px; left:185px; font-size:55px;")
spinner.setAttribute("style"," opacity:0.7;")
const SearchCity=()=>{

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${SearchBar.value}&appid=Your_APIKEY`).then(response=> response.json(),spinner.appendChild(i)
)
.then(function (data) {

if (data.message === "Nothing to geocode") {
  
  alert("Enter City Name");
  city.innerHTML = "City Name";
  SearchBar.value = "";
  spinner.removeChild(i);
  
  descript.innerHTML = "None";
  temp.innerHTML = "None";
  pascal.innerHTML = "None";
  humid.innerHTML = "None";
  

  
}
else if (data.cod === "404") {
  
 spinner.removeChild(i);
  alert("Enter Valid City Name");
  city.innerHTML = "City Name";
  SearchBar.value = "";
  //city.innnerHTML = "City Name";
  descript.innerHTML = "None";
  temp.innerHTML = "None";
  pascal.innerHTML = "None";
  humid.innerHTML = "None";
  
 
  
}

else{
spinner.removeChild(i);
let main=data.weather[0].description;





descript.innerHTML=main.toUpperCase();
city.innerHTML=SearchBar.value;
SearchBar.value="";
temp.innerHTML=data.main.temp+"°F " ;
pascal.innerHTML=data.main.pressure+" psi ";
humid.innerHTML=data.main.humidity;
}






//console.log(data)
//console.log(data.weather[0].description);

}).catch(function() {console.log("Some error has been occured while fetching data")});



}












































