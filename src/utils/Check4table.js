import React from 'react'
import {AiFillCheckCircle , AiFillCloseSquare} from 'react-icons/ai'
import {MinusIcon} from '@heroicons/react/24/outline'
import classNames from 'classnames';

function CheckForTable(props) {
    const { pass, className } = props;
    const combineClass = classNames(className,"text-green-500 w-5 h-5")
  return (
    <>
        {pass > 0 ? <AiFillCheckCircle className={'text-green-500 w-5 h-5'} {...props} /> : <MinusIcon className={'text-red-700 w-5 h-5'} {...props} />}
    </>
  )
}

export default CheckForTable