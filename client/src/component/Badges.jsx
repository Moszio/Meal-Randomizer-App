const Badges = ({ total }) => {
  if (total >= 10 && total < 45) {
    return (
      <img
        src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
        alt=''
      />
    )
  } else if (total >= 45 && total < 95) {
    return (
      <>
        <img
          src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
          alt=''
        />
        <img
          src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
          alt=''
        />
      </>
    )
  } else if (total >= 95) {
    return (
      <>
        <img
          src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
          alt=''
        />{' '}
        <br />
        <img
          src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
          alt=''
        />
        <img
          src='https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/special-police-badge~bb52'
          alt=''
        />
      </>
    )
  }
}

export default Badges
