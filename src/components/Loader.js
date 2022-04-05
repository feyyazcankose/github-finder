import React from 'react'
import loading from '../img/github.gif'
export const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center " style={{height: '80vh'}}>
        <img src={loading} alt="loading.." style={{width:'150px'}}/>
    </div>
  )
}

export default Loader;