
import Map from './Map/Map';
import { useEffect, useState } from 'react';
import getPlacesData from '../api';
import Card from './Restaurant/Card';
import Details from './Restaurant/Details';

const HomePage = () => {

    // const [places, setPlaces] = useState([])
    const [places, setPlaces] = useState([{name: "lol"}, {name: "troll"}, {name: "bob"}])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [randomNumber, setRandomNumber] = useState(1)
    const [collapse, setCollapse] = useState(false)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude}}) => {
        setCoordinates({ lat: latitude, lng: longitude })
        })
    }, [])


    useEffect(() => {
        getPlacesData(bounds.sw , bounds.ne)
            .then((data) => {
            // console.log(data)
            // setPlaces(data)
        })  
    }, [coordinates, bounds])
    console.log("places", places)


    const handleRandomPlace = () => {
       setRandomNumber(Math.floor(Math.random() * places.length))
    }
    const handleCollapse = () => {
        setCollapse(!collapse)
    }
    console.log(coordinates)
    // console.log(places[randomNumber].name)
    
    return  (
        <div className="home-page">
            <div>{places[randomNumber].name}</div>
            <div>
            <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
            </div>
            <button onClick={handleRandomPlace} >Randomizer</button>
        </div>
    )
}

export default HomePage