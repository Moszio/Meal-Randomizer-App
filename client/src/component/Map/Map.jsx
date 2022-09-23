import GoogleMapReact from 'google-map-react'


const Map = ({ setCoordinates, setBounds }) => {

    const coordinates = { lat: 40.73390079999999, lng: -74.0425728 }
    return (
    <div>
        <div style={{width: "300px", height:"300px"}}>
        <GoogleMapReact 
            // bootstrapURLKeys = {{ key: 'AIzaSyDsSRgdgri-u7bmT43bJL21NY9kzySF7iY' }}
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