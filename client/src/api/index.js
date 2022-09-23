import axios from "axios";


// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {

  }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getPlacesData