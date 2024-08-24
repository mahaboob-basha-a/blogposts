import React from 'react'

const notfoundStyles = {
    width:'100vw',
    height:'calc(100vh - 100px)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
}
const NotFound = () => {
  return (
    <div style={notfoundStyles}>
        <h2>Invalid page</h2>
    </div>
  )
}

export default NotFound