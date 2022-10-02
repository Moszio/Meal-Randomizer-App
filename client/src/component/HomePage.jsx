import { useEffect, useState } from 'react'
import getPlacesData from '../api/index.js'
import Card from './Restaurant/Card'
import Details from './Restaurant/Details'
import './App.css'
import { useDispatch } from 'react-redux'
// import { increment } from '../actions'
const HomePage = ({ user, addNewRestaurantToHistory, updateCount }) => {
  // const { total_randomized } = user
  // const dispatch = useDispatch()
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [randomNumber, setRandomNumber] = useState(0)
  const [collapse, setCollapse] = useState(false)
  // const [bounds, setBounds] = useState({})

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

  const handleRandomizerCountUpdate = async () => {
    const counterObj = {
      total_randomized: user.total_randomized + 1,
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

  // console.log(bounds.ne, bounds.sw)

  const handleRandomPlace = () => {
    const randomNumber = Math.floor(Math.random() * places?.length)
    setRandomNumber(randomNumber)
    setCollapse(true)
  }
  const handleCollapseForCardAndDetails = () => {
    setCollapse(!collapse)
  }

  //   console.log(collapse)
  //   console.log(randomNumber)
  return (
    <div className='home-page'>
      {/* <h1>{places?.[randomNumber]?.name}</h1> */}
      {/* {places.map((place) => {
                return <h5>{place.name}</h5>
            })} */}
      {collapse ? (
        <Details
          setCoordinates={setCoordinates}
          //   setBounds={setBounds}
          coordinates={coordinates}
          handleCollapse={handleCollapseForCardAndDetails}
          handleGetPlacesChange={handleGetPlacesChange}
          places={places}
          randomNumber={randomNumber}
          user={user}
          addNewRestaurantToHistory={addNewRestaurantToHistory}
        />
      ) : (
        <div>
          <div className='cards'>
            <Card handleCollapse={handleCollapseForCardAndDetails} />
          </div>
          <div>
            <h1
              onClick={() => (
                handleRandomPlace(), handleRandomizerCountUpdate()
              )}
            >
              Randomizer
            </h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
