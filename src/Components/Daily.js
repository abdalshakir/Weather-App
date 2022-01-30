import React from 'react';
import {WiDayLightWind} from 'react-icons/wi';

function Daily(props) {
    const {data} = props;
    const d = new Date(data.dt*1000);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[d.getDay()];
    console.log(day)
  return (
    <div className='d-flex justify-content-around my-2 shadow-sm rounded' style={{backgroundColor: "#E7C8DD"}}>
        <div><WiDayLightWind style={{fontSize: "3rem", marginTop: "5px"}}/></div>
        <div className='fs-2'>{Math.round(data.temp.day)}°C</div>
        <div className='fs-4'>{day}</div>
    </div>
  );
}

export default Daily;
