import React, { useState, useEffect } from "react";
import { Icon, Placeholder, Segment, Grid, List } from 'semantic-ui-react'

function WeatherFetch() {
    const key = 'APP__KEY';
    const [name, setName] = useState('');
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [iconID, setIconID] = useState('');
    let imag = <img src={"http://openweathermap.org/img/wn/" + iconID + ".png"} width="10%" />;
    let celsiusTemp = mainTemp + '℃';
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=687700&APPID=APP__KEY&units=metric')
            .then(res => res.json())
            .then(data => {
                console.dir(data);
                setName(data.name);
                setFeelsLike(Math.round(data.main.feels_like));
                setMainTemp(Math.round(data.main.temp));
                setDescription(data.weather[0].description);
                setMain(data.weather[0].main);
                setIconID(data.weather[0].icon);
            })
    }, [])
    return (
        <>
            <List>
                <List.Item icon='map marker alternate' content={name} />
                <List.Item
                    icon='thermometer'
                    content={celsiusTemp}
                />
                <List.Item

                    content={description}
                />
                <List.Item
                    content={imag}
                />
            </List>
        </>
    )
}
export default WeatherFetch;