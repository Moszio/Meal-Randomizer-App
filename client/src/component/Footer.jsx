const Footer = ({ handleRandomizerCountUpdate, handleRandomPlace, user }) => {
  return (
    <div className='randomizer-container'>
      <div
        onClick={() => {
          handleRandomPlace()
          handleRandomizerCountUpdate()
        }}
        className='randomizer-spinner'
      ></div>
    </div>
  )
}

export default Footer
