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
    // 'X-RapidAPI-Key': '32623841c9msh7a9e6ccbe546f31p19f0d9jsn4040be40382e',
    // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getPlacesData