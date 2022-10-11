import Carousel from 'react-bootstrap/Carousel'

function Slide({ images }) {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={images} alt='First slide' />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide
