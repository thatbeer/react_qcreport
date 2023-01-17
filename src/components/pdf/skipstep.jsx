import React from 'react'

const ShipStep = () => {
    const listx = [1,2,3,4,5,6,7,8,9,10];


  return (
    <>
        <div>
            <div className='flex flex-row'>
                {listx?.map((item , idx) => (
                    <li id={idx} ref={idx}>{item}</li>
                ))}
            </div>
        </div>
    </>
  )
}

export default ShipStep