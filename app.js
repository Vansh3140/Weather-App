const api={
    key:"588f08c8572d43fbaa2183413230808",
    base:"http://api.weatherapi.com/v1"
};

var cityname = document.querySelector("#city");
var changeCity=document.querySelector("h1");
var changeTime=document.querySelector("#time");
var changeTemp=document.querySelector("h2");
var changeImg=document.querySelector("img");
var changeClimate=document.querySelector("#climate");
var changeHumid=document.querySelector("#humid");
var changeWind=document.querySelector("#wind");

if(changeCity.innerHTML=="")
{
    var baseUrl=`${api.base}/current.json?key=${api.key}&q=New Delhi`;
    fetch(baseUrl).
    then((res)=> res.json()).
    then((data)=>{
        changeCity.innerHTML=data.location.name+', '+data.location.country;
        changeTime.innerHTML=data.location.localtime;
        changeTemp.innerHTML=data.current.temp_c+'ºC';
        changeImg.src=data.current.condition.icon;
        changeClimate.innerHTML=data.current.condition.text;
        changeHumid.innerHTML=data.current.humidity;
        changeWind.innerHTML=data.current.gust_kph;
        console.log(data);
        })
}
cityname.addEventListener("keypress",(e)=>{
    var baseUrl=`${api.base}/current.json?key=${api.key}&q=${e.target.value}`;
    // var mapUrl=`https://api.teleport.org/api/urban_areas/slug:${(e.target.value).toLowerCase()}/images/`;
    fetch(baseUrl).
    then((res)=> res.json()).
    then((data)=>{
        changeCity.innerHTML=data.location.name+', '+data.location.country;
        changeTime.innerHTML=data.location.localtime;
        changeTemp.innerHTML=data.current.temp_c+'ºC';
        changeImg.src=data.current.condition.icon;
        changeClimate.innerHTML=data.current.condition.text;
        changeHumid.innerHTML=data.current.humidity;
        changeWind.innerHTML=data.current.gust_kph;
        })
})

// Google Maps Api