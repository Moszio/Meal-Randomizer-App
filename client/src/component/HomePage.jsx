
import Map from './Map/Map';
import { useEffect, useState } from 'react';
import getPlacesData from '../api';

const HomePage = () => {
    const places = [{name: "place1"}, {name: "place2"}, {name: "place3"}]
    // const [places, setPlaces] = useState(["place1", "place2", "place3"])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [randomNumber, setRandomNumber] = useState(null)

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
    // console.log(places)


    const handleRandomPlace = () => {
       setRandomNumber(Math.floor(Math.random() * places.length))

        // console.log(randomNumber)
    }
    console.log(randomNumber)
    console.log(places[1])
    return  (
        <div className="home-*page">
            Homepage
            <div>
              <ul>
                {randomNumber === places[1] ? <li>{places.name}</li> : ""}
              </ul>
            </div>

            <div>
                <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
            </div>
            <button onClick={handleRandomPlace}>Randomizer</button>
        </div>
    )
}

export default HomePage