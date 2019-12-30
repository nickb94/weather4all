//Clicking button for data
// var btn = document.getElementById('button');

// btn.addEventListener("click", getData);


//Night Mode Toggle
function tog(){
    console.log(document.getElementById("toggle").textContent);

    if((document.getElementById("toggle").textContent)==="Night"){
        document.getElementById("toggle").textContent ="Day";
        night();


    }else if((document.getElementById("toggle").textContent)==="Day"){
        document.getElementById("toggle").textContent ="Night";

            day();
    }

}

                
 function night(){
 
     const f =document.querySelectorAll("body");
     console.log(f[0]);
     f[0].setAttribute('style', 'background-color:black;');
     document.getElementById("toggle").setAttribute("style","background-color:white; color:black;");
     document.getElementsByClassName("currently")[0].classList.add('currently_night');
     document.getElementsByClassName("text_area")[0].classList.add('text_area_night');
     document.getElementsByClassName("place_area")[0].classList.add('place_area_night');
     document.getElementsByClassName("temp_area")[0].classList.add('temp_area_night');
     document.getElementsByClassName("metric_area")[0].classList.add('metric_area_night');
 }

 function day(){
 
    const f =document.querySelectorAll("body");
    console.log(f[0]);
    f[0].setAttribute('style', 'background-color:white;');
    document.getElementById("toggle").setAttribute("style","background-color:black; color:white;");
    document.getElementsByClassName("currently_night")[0].classList.remove('currently_night');
    document.getElementsByClassName("text_area")[0].classList.remove('text_area_night');
    document.getElementsByClassName("place_area")[0].classList.remove('place_area_night');
    document.getElementsByClassName("temp_area")[0].classList.remove('temp_area_night');
    document.getElementsByClassName("metric_area")[0].classList.remove('metric_area_night');
}


//Ask for geolocation

getData();
async function getData(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(usePosition); 
    }else{
        
        console.log("Geo location not permitted");
    }


    async function usePosition(position){
    
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    
    
    


    //with async await
    try{
        const response = await fetch("https://fcc-weather-api.glitch.me/api/current?lat="+ lat +"&lon="+long);

        const data = await response.json();

        document.getElementById("metric").textContent =`C`;//by default metric should be 'C' to compare 


        // //showing metrics button
        //  const r = document.createElement("div");
        //  r.id = `btn`;
        //  r.textContent = `button`;
        //  const e = document.getElementsByClassName("metric_area")[0];
        //  e.appendChild(r);
         

        const t = document.getElementById("temp");
        t.textContent = (data.main.temp).toFixed(0) +`°`;


        //Changing weather description
        const w = document.getElementsByClassName("text_area")[0];
        w.textContent =`feels like ` + data.weather[0].main + ` in`;
        

        //Changing state,country
        const s = document.getElementsByClassName("area")[0];
        s.textContent = data.name;

        const c = document.getElementsByClassName("country")[0];
        c.textContent =`, `+ data.sys.country;
       
        //Changing Icon


        const l = document.getElementsByClassName("left")[0];

        const img = document.createElement('img');
        img.classList.add("iconImg");
        l.appendChild(img);


        if(data.weather[0].main === "Fog"){
        img.setAttribute('src', 'https://media.giphy.com/media/IuKnqFMhtcA2A/giphy.gif');
        }else if(data.weather[0].main === "Clouds"){

        img.setAttribute('src', 'https://media.giphy.com/media/12eCo8gpSMMgrS/giphy.gif');
        }else if(data.weather[0].main === "Rain"){

            img.setAttribute('src', 'https://media.giphy.com/media/xUPGcILSlV4VjCZ9PG/giphy.gif');
            }else if(data.weather[0].main === "Thunderstorm"){

                img.setAttribute('src', 'https://media.giphy.com/media/rsdDNSViCq8OQ/giphy.gif');
                }else if(data.weather[0].main === "Clear"){

                    img.setAttribute('src', 'https://media.giphy.com/media/ivcVZnZAEqhs4/giphy.gif');
                    }else if(data.weather[0].main === "Snow"){

                        img.setAttribute('src', 'https://media.giphy.com/media/YxA2PPkXbwRTa/giphy.gif');
                        }else if(data.weather[0].main === "Drizzle"){

                            img.setAttribute('src', 'https://media.giphy.com/media/TQOPlno21tSnK/giphy.gif');
                            }else if(data.weather[0].main === "Mist"){

                                img.setAttribute('src', 'https://media.giphy.com/media/IJfCy4fgb8gDu/giphy.gif');
                                }else if(data.weather[0].main === "Smoke"){

                                    img.setAttribute('src', 'https://media.giphy.com/media/2seaKlqqoGglLcPH2Q/giphy.gif');
                                    }else if(data.weather[0].main === "Haze"){

                                        img.setAttribute('src', 'https://media.giphy.com/media/53JgjWEDQPIDm/giphy.gif');
                                        }





        //response data in console;
        console.log(data);



        //Animating Temp
        const text = document.querySelectorAll('.tempclass');
        //here 'text' is NodeList with an array of length 1 i.e. why text[0] is used to get data
        const strText = text[0].textContent;
       
        const splitText = strText.split("");

        text[0].textContent = "";//removeing the original content
        for(let i=0;i<splitText.length;i++){

            text[0].innerHTML += `<span>`+ splitText[i] +`</span>`; //making spans for each character
        }

        let char = 0;
        let timer =setInterval(onTick, 50);
        //to apply class for all characters(spans)
        function onTick(){

            const span = text[0].querySelectorAll('span')[char];
            span.classList.add('fade');
            char++;
            if(char === splitText.length){
                complete();
                return;
            }
        }
        //complete func to clear interval and timer
        function complete(){
            clearInterval(timer);
            timer = null;

        }
            

    }catch(err){
        console.log(err);
        }
    
    }   //this encloses usePosition()

    
    ///Without async await
    // fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139")
    //     .then((data)=>{
            
    //        data.json().then(r=>{

    //             console.log(r);
    //         });

    //     }).catch((error)=>{

    //         console.log(error);
    //     });


    

   
}


//Changing metrics



    const s = document.getElementById('btn');
  

    s.addEventListener("click", changeMetric);
    
    function changeMetric(){
    
    
        const b = document.getElementById("metric");
    
        if(b.innerText === "C"){
            //First change the temp
            const e = parseInt(document.getElementById
            ("temp").innerText);
            const f = ((e*9/5)+32).toFixed(1);
            document.getElementById("temp").textContent = f;
                //then change the metric
            document.getElementById("metric").textContent=`F`;
            }else if(b.innerText === "F"){
                //change temp
                const e = parseInt(document.getElementById
                    ("temp").innerText);
                    const f = ((e-32)*5/9).toFixed(0);
                    document.getElementById("temp").textContent = f + `°`;
                    //change metric
                document.getElementById("metric").textContent=`C`;
            }else
                console.log("?");    
        
    
    }

    
