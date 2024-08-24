import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const loaderStyles = {
    width:'100vw',
    height:'calc(100vh - 100px)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    posistion:'absolute',
    top:0,
}
const Loader = () => {
  return (
    <div style={loaderStyles}>
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}

export default Loader