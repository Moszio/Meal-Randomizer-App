import Map from './Map/Map'
import { useEffect, useState } from 'react'
import getPlacesData from '../api/index.js'
import Card from './Restaurant/Card'
import Details from './Restaurant/Details'
import './App.css'

const HomePage = () => {
  // const [places, setPlaces] = useState([{name :"place1"}, {name: "place2"}])
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [randomNumber, setRandomNumber] = useState(0)
  const [collapse, setCollapse] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  //   useEffect(() => {
  //     getPlacesData(bounds.sw, bounds.ne)
  //       .then((data) => {
  //         // console.log(data)
  //         if (!data) {
  //           setPlaces([])
  //         } else setPlaces(data)
  //       })
  //       .catch(() => {
  //         setPlaces([])
  //       })
  //   }, [bounds, coordinates])
  //   console.log('places', places)

  const handleGetPlacesChange = (bounds) => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        // console.log(data)
        if (!data) {
          setPlaces([])
        } else setPlaces(data)
      })
      .catch(() => {
        setPlaces([])
      })
  }
  // console.log(bounds.ne, bounds.sw)

  const handleRandomPlace = () => {
    const randomNumber = Math.floor(Math.random() * places?.length)
    setRandomNumber(randomNumber)
    setCollapse(true)
  }
  const handleCollapseForCardAndDetails = () => {
    setCollapse(!collapse)
  }

  console.log(collapse)
  console.log(randomNumber)
  return (
    <div className='home-page'>
      <h1>{places?.[randomNumber]?.name}</h1>
      {/* {places.map((place) => {
                return <h5>{place.name}</h5>
            })} */}
      {collapse ? (
        <Details
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          handleCollapse={handleCollapseForCardAndDetails}
          handleGetPlacesChange={handleGetPlacesChange}
          places={places}
          randomNumber={randomNumber}
        />
      ) : (
        <div>
          <div className='cards'>
            <Card handleCollapse={handleCollapseForCardAndDetails} />
          </div>
          <div>
            <h1 onClick={handleRandomPlace}>Randomizer</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
