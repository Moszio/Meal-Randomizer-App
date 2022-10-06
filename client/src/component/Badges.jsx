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

  // if (total >= 10 && total < 45) {
  //   return (
  //     <img
  //       src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
  //       alt=''
  //     />
  //   )
  // } else if (total >= 45 && total < 95) {
  //   return (
  //     <>
  //       <img
  //         src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
  //         alt=''
  //       />
  //       <img
  //         src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
  //         alt=''
  //       />
  //     </>
  //   )
  // } else if (total >= 95) {
  //   return (
  //     <>
  //       <img
  //         src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
  //         alt=''
  //       />{' '}
  //       <br />
  //       <img
  //         src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
  //         alt=''
  //       />
  //       <img
  //         src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
  //         alt=''
  //       />
  //     </>
  //   )
  // }
}

export default Badges
