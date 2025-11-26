import React, { useEffect, useState } from "react";
import trafficLight from '../../assets/trafficLight.jpg';

const TrafficLights = () => {
    const [lightColor, setLightColor] = useState('#04ac26ff')
    const [duration, setDuration] = useState(3000);

    // setInterval(() => {
    //     // setLightColor('#e3de40ff');
    //     if (lightColor == '#e3de40ff') {
    //         setLightColor('#dd3030ff')
    //         setDuration(5000)
    //     } else if (lightColor == '#dd3030ff') {
    //         setLightColor('#04ac26ff')
    //         setDuration(8000)
    //     } else if (lightColor == '#04ac26ff') {
    //         setLightColor('#e3de40ff')
    //         setDuration(4000)
    //     }
    // }, duration);

    useEffect(() => {
        const timer = setTimeout(() => {
            // if (lightColor === '#04ac26ff') {
            //     // Green to Yellow
            //     setLightColor('#e3de40ff')
            //     setDuration(1000)
            // }
            // else if (lightColor == '#e3de40ff') {
            //     // Yellow to Red
            //     setLightColor('#dd3030ff')
            //     setDuration(4000)
            // }
            // else if (lightColor == '#dd3030ff') {
            //     // Red to Green
            //     setLightColor('#04ac26ff')
            //     setDuration(3000)
            // }
            if (lightColor === '#dd3030ff') {
                // Red to Yellow
                setLightColor('#e3de40ff');
                setDuration(1000)
            }
            else if (lightColor === '#e3de40ff') {
                // Yellow to Green
                setLightColor('#04ac26ff');
                setDuration(3000)
            }
            else if (lightColor === '#04ac26ff') {
                // Green to Red
                setLightColor('#dd3030ff');
                setDuration(4000)
            }

        }, duration);
        return () => clearTimeout(timer);
    }, [lightColor, duration])

    return <>
        <div>TrafficLights</div>
        <div style={{ display: 'flex', gap: '30px', }}>
            <div>
                <img src={trafficLight} alt="trafficLight" />
            </div>
            <div style={{ display: 'flex', gap: '30px', flexDirection: "column", border: '1px solid white', padding: '10px' }}>
                <div style={{ width: '80px', height: '80px', border: '1px solid #fff', backgroundColor: `${lightColor === '#dd3030ff' ? lightColor : '#fff'}`, borderRadius: '50%', }}></div>
                <div style={{ width: '80px', height: '80px', border: '1px solid #fff', backgroundColor: `${lightColor === '#e3de40ff' ? lightColor : '#fff'}`, borderRadius: '50%', }}></div>
                <div style={{ width: '80px', height: '80px', border: '1px solid #fff', backgroundColor: `${lightColor === '#04ac26ff' ? lightColor : '#fff'}`, borderRadius: '50%', }}></div>
            </div>
        </div>
    </>
}

export default TrafficLights;
