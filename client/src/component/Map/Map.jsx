import GoogleMapReact from 'google-map-react'


const Map = () => {

    const coordinates = { lat: 0, lng: 0 }
    return (
    <div>
        <div style={{width: "500px", height:"500px", margin: "auto auto"}}>
        <GoogleMapReact 
            bootstrapURLKeys = {{ key: '' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            // options={''}
            // onChange={''}
            // onChildClick={''}
        >
            
        </GoogleMapReact>
        </div>
    </div>
    )
}

export default Map