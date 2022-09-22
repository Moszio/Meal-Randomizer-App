import GoogleMapReact from 'google-map-react'


const Map = ({ setCoordinates, setBounds, coordinates }) => {

    // const coordinates = { lat: 0, lng: 0 }
    return (
    <div>
        <div style={{width: "500px", height:"500px", margin: "auto auto"}}>
        <GoogleMapReact 
            // bootstrapURLKeys = {{ key: '' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            onChange={(e) => {
                // console.log(e)
                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            // onChildClick={''}
        >
            
        </GoogleMapReact>
        </div>
    </div>
    )
}

export default Map