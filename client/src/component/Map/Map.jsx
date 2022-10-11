import GoogleMapReact from 'google-map-react'
import config from '../../config'

const Map = ({ coordinates, handleGetPlacesChange, place }) => {
  const key = config.MY_API_TOKEN

  return (
    <div className='map-container'>
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${key}` }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
        >
          <div lat={place.latitude} lng={place.longitude} text='My Marker'>
            <img
              src={
                place.photo
                  ? place.photo.images.large.url
                  : 'https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow='
              }
              alt='restaurant'
              className='marker'
            />
          </div>
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
