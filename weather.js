
function getWeather() {
    let key = '47c207b2a2e946c861a74547dcd5c653'
    let city = document.querySelector("#city").value;
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`)
    .then(response => response.json())
    .then(randmdata => {
        console.log(randmdata)
        let name = randmdata['name'];
        document.querySelector("#name").innerHTML=name;
        let temp = randmdata["main"]["temp"];
        document.querySelector("#temp").innerHTML=temp;
        let clouds = randmdata["weather"][0]["main"];
        document.querySelector("#clouds").innerHTML=clouds;
        let high = randmdata["main"]["temp_max"];
        document.querySelector("#high").innerHTML=high;
        let low = randmdata["main"]["temp_min"];
        document.querySelector("#low").innerHTML=low;
        let image = randmdata["weather"][0]["icon"];
        document.querySelector("#image").innerHTML = `<img src="http://openweathermap.org/img/wn/${image}@4x.png">`;
    })
}