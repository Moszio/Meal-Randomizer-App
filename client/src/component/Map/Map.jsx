import GoogleMapReact from 'google-map-react'
import config from '../../config'

const Map = ({ setCoordinates, setBounds, coordinates }) => {


    const key = config.MY_API_TOKEN
    // const coordinates = { lat: 40.73390079999999, lng: -74.0425728 }

    return (
    <div>
        <div style={{width: "300px", height:"300px"}}>
        <GoogleMapReact 
            bootstrapURLKeys = {{ key: `${key}` }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            onChange={(e) => {
                console.log(e)
                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
        >
            
        </GoogleMapReact>
        </div>
    </div>
    )
}

export default Map