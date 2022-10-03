import Carousel from 'react-bootstrap/Carousel'

function Slide({ images }) {
  //   console.log('image', images)
  return (
    <Carousel>
      {/* {images.map((image, i) => {
        return (
          <Carousel.Item key={i}>
            <img className='d-block w-100' src={image} alt='First slide' />
          </Carousel.Item>
        )
      })} */}
      <Carousel.Item>
        <img className='d-block w-100' src={images} alt='First slide' />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide
