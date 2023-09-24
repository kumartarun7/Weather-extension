const query = 'London';

const apiUrl =`http://api.weatherapi.com/v1/current.json?key=eb65e52e9c194815a60133147231809&q=${query}&aqi=no`;
const searchBtn = document.getElementById("button")
const searchBox = document.getElementById("searchbox")

 function checkweather(query){

    // const city = document.getElementById("city")
    // const temp= document.getElementById('temperature')
    // const humidity=document.getElementById('humidity')
    // const wind=document.getElementById('wind')
    //       city.innerHTML=data.location.name;
    //       temp.innerHTML=data.current.temp_c;
    //       humidity.innerHTML=data.humidity;
    //       wind.innerHTML=data.wind_kph; + "Km/hr";


fetch(`http://api.weatherapi.com/v1/current.json?key=eb65e52e9c194815a60133147231809&q=${query}&aqi=no`)
.then(res=>res.json())
.then(data=>{
    console.log(data.current)
    document.getElementById("city").innerHTML=data.location.name;
    document.getElementById('temperature').innerHTML=data.current.temp_c+"°C";
    document.getElementById('humidity').innerHTML=`${data.current.humidity}%`;
    document.getElementById('wind').innerHTML=`${data.current.wind_kph} Km/hr`;
    
})






}



searchBtn.addEventListener('click',()=>{

    checkweather(searchBox.value)
})
