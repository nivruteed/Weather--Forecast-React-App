import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"


export default function WeatherApp (){
    const [weatherInfo, setWedInfo] = useState({
        city:"Pune",
        feelLikes: 32.76,
        humidity: 17,
        temp: 35.02,
        tempMax: 35.02,
        tempMin: 35.02,
        weather: "scattered clouds",
    });

    let updateInfo = (newInfo) => {
       setWedInfo(newInfo);
    }
    return(
        <div style={{textAlign : "center" ,}}>
            <h2 style={{color:"black"}}>Weather Forecast</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}