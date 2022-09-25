import axios from 'axios'
import config from '../config'

const urlKey = config.SECRET_URL
const tokenKey = config.SECRET_API_KEY_KEY
const hostKey = config.SECRET_HOST_KEY_KEY

// const URL = `${urlKey}`

const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        // bl_latitude: 40.72414437513456,
        // tr_latitude: 40.74989637911287,
        // bl_longitude: -74.05544740327149,
        // tr_longitude: -74.03034159672852,
      },
      headers: {
        // 'X-RapidAPI-Key': `${tokenKey}`,
        // 'X-RapidAPI-Host': `${hostKey}`,
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getPlacesData
