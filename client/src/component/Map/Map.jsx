import GoogleMapReact from 'google-map-react'
import config from '../../config'

const Map = ({ coordinates, handleGetPlacesChange }) => {
  const key = config.MY_API_TOKEN
  // const coordinates1 = { lat: 40.73390079999999, lng: -74.0425728 }

  return (
    <div>
      <div style={{ width: '600px', height: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${key}` }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          // onChange={(e) => {
          //   console.log('ON CHANGE', e)
          //   // setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          //   handleGetPlacesChange({
          //     ne: e.marginBounds.ne,
          //     sw: e.marginBounds.sw,
          //   })
          // }}
        ></GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
