import React from 'react'
import {AiFillCheckCircle , AiFillCloseSquare} from 'react-icons/ai'

function RedGreenIcons(props) {
    const { pass } = props;
  return (
    <>
        {pass > 0 ? <AiFillCheckCircle {...props}/> : <AiFillCloseSquare  {...props}/>}
    </>
  )
}

export default RedGreenIcons