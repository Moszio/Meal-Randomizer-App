import { useEffect, useState } from 'react'
import getPlacesData from '../api/index.js'
import Card from './Restaurant/Card'
import Details from './Restaurant/Details'
import './Style/App.css'

function LoadingComponent() {
  return <div className='loader'></div>
}

const HomePage = ({ user, addNewRestaurantToHistory, updateCount }) => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [randomNumber, setRandomNumber] = useState()
  const [collapse, setCollapse] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  // console.log('coordinate', coordinates)
  // console.log('places', places)
  useEffect(() => {
    setLoading(true)
    getPlacesData(coordinates.lat, coordinates.lng)
      .then((data) => {
        // console.log(data)
        if (!data) {
          setPlaces([])
        } else setPlaces(data)
        setLoading(false)
      })
      .catch(() => {
        setPlaces([])
        setLoading(false)
      })
  }, [coordinates])
  // console.log('places', places)

  // const handleGetPlacesChange = (coordinates) => {
  //   getPlacesData(coordinates.lat, coordinates.lng)
  //     .then((data) => {
  //       if (!data) {
  //         setPlaces([])
  //       } else setPlaces(data)
  //     })
  //     .catch(() => {
  //       setPlaces([])
  //     })
  // }

  const handleRandomizerCountUpdate = async () => {
    const counterObj = {
      total_randomized: user?.total_randomized + 1,
    }
    const request = await fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(counterObj),
    })
    let response = await request.json()
    updateCount(response)
  }

  const handleRandomPlace = () => {
    const randomNumber = Math.floor(Math.random() * places?.length)
    setRandomNumber(randomNumber)
    // setCollapse(true)
  }

  const handleCollapseForCardAndDetails = () => {
    setCollapse(!collapse)
  }

  function VisibleComponent() {
    switch (collapse) {
      case true:
        return (
          <Details
            setCoordinates={setCoordinates}
            //   setBounds={setBounds}
            coordinates={coordinates}
            handleCollapse={handleCollapseForCardAndDetails}
            // handleGetPlacesChange={handleGetPlacesChange}
            places={places}
            randomNumber={randomNumber}
            user={user}
            addNewRestaurantToHistory={addNewRestaurantToHistory}
          />
        )

      default:
        return (
          <div className='cards'>
            <div>
              <Card
                handleCollapse={handleCollapseForCardAndDetails}
                places={places}
                randomNumber={randomNumber}
              />
            </div>
            <div className='randomizer-container'>
              <h1
                onClick={() => {
                  handleRandomPlace()
                  handleRandomizerCountUpdate()
                }}
              >
                Randomizer
              </h1>
            </div>
          </div>
        )
    }
  }

  return (
    <div className='home-page'>
      {loading ? <LoadingComponent /> : <VisibleComponent />}
    </div>
  )
}

export default HomePage
