
import Map from './Map/Map';
import { useEffect, useState } from 'react';
import getPlacesData from '../api';
import Card from './Restaurant/Card';
import Details from './Restaurant/Details';

const HomePage = () => {
    const places = [
        {
            name: "place1",
            rating: "5",
            address: "Something Street 123",
            price_level: "$",
            description: "Amazing place",
            phone: "1231231231",
            website: "www.restaurant.com",
            image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }, 
        {
            name: "place2",
            rating: "1",
            address: "trollololl Street 123",
            price_level: "$$$",
            description: "Not so good for the price",
            phone: "45634563456",
            website: "www.notarestaurant.com",
            image: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow="
        }, 
        {
            name: "place3",
            rating: "3",
            address: "third restaurant Street 123",
            price_level: "$$$$",
            description: "pretty ok place",
            phone: "789789789789",
            website: "www.thirdrestaurant.com",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },


    ]
    // const [places, setPlaces] = useState([])
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
    //  console.log("places", places[1])


    const handleRandomPlace = () => {
       setRandomNumber(Math.floor(Math.random() * places.length))
    }
    const handleCollapse = () => {
        setCollapse(!collapse)
    }
    
    return  (
        <div className="home-*page">
            Homepage
                
            <div>
                {
                collapse 
                ? 
                <Details setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} place={places[randomNumber]}/> 
                : 
                <Card place={places[randomNumber]} handleCollapse={handleCollapse}/>
                }
            </div>
            <button onClick={handleRandomPlace} >Randomizer</button>
        </div>
    )
}

export default HomePage