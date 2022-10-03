import GoogleMapReact from 'google-map-react'
import config from '../../config'

const Map = ({ coordinates, handleGetPlacesChange, place }) => {
  const key = config.MY_API_TOKEN
  // const coordinates1 = { lat: 40.73390079999999, lng: -74.0425728 }
  // console.log('image', place.photo.images.large.url)
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
        >
          <div
            lat={place.latitude}
            lng={place.longitude}
            text='My Marker'
            style={{ width: '100px', height: '100px' }}
          >
            <img
              src={
                place.photo
                  ? place.photo.images.large.url
                  : 'https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow='
              }
              alt='restaurant'
              style={{ width: '50px', height: '50px' }}
            />
          </div>
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
