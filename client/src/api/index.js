import axios from "axios";
import config from "../config";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const token = config.SECRET_API_KEY
const tokenKey = config.SECRET_API_KEY_KEY
const host = config.SECRET_HOST_KEY
const hostKey = config.SECRET_HOST_KEY_KEY

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
    'X-RapidAPI-Key': `${tokenKey}`,
    'X-RapidAPI-Host': `${hostKey}`
  }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getPlacesData