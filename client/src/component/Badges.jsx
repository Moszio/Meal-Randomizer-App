const Badges = ({ total }) => {
  return (
    <>
      <div
        className={
          total >= 5 ? 'grayscale-true bg-image' : 'grayscale-false bg-image'
        }
      >
        "5 random"
      </div>
      <div
        className={
          total >= 50 ? 'grayscale-true bg-image' : 'grayscale-false bg-image'
        }
      >
        "50 random"
      </div>
      <div
        className={
          total >= 110 ? 'grayscale-true bg-image' : 'grayscale-false bg-image'
        }
      >
        "110 random"
      </div>
    </>
  )
}

export default Badges
