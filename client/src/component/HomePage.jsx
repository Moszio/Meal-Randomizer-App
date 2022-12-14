import { useEffect, useState } from 'react'
import getPlacesData from '../api/index.js'
import Card from './Restaurant/Card'
import Details from './Restaurant/Details'
import './Style/App.css'
import Footer from './Footer.jsx'
import { FaHandPointDown } from 'react-icons/fa'

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

  useEffect(() => {
    setLoading(true)
    getPlacesData(coordinates.lat, coordinates.lng)
      .then((data) => {
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
            coordinates={coordinates}
            handleCollapse={handleCollapseForCardAndDetails}
            places={places}
            randomNumber={randomNumber}
            user={user}
            addNewRestaurantToHistory={addNewRestaurantToHistory}
          />
        )

      default:
        return (
          <div>
            <div className='cards'>
              <div>
                {randomNumber ? (
                  <Card
                    handleCollapse={handleCollapseForCardAndDetails}
                    places={places}
                    randomNumber={randomNumber}
                  />
                ) : (
                  <div className='welome-message'>
                    <FaHandPointDown />
                  </div>
                )}
              </div>
              <Footer
                handleRandomPlace={handleRandomPlace}
                handleRandomizerCountUpdate={handleRandomizerCountUpdate}
                user={user}
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div className='home-page bg-image2'>
      {loading ? <LoadingComponent /> : <VisibleComponent />}
    </div>
  )
}

export default HomePage
