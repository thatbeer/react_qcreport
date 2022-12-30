import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export const StepBarTitle = () => {
 return (
    <>
        <ul className="steps">
            <li data-content="?" className="step step-neutral">Step 1</li>
            <li data-content="!" className="step step-neutral">Step 2</li>
            <li data-content="✓" className="step step-neutral">Step 3</li>
            <li data-content="✕" className="step step-neutral">Step 4</li>
            <li data-content="★" className="step step-neutral">Step 5</li>
            <li data-content="" className="step step-neutral">Step  6</li>
            <li data-content="●" className="step step-neutral">Step  7</li>
            <li data-content="●" className="step step-neutral">Step  8</li>
            <li data-content="●" className="step step-neutral">Step  9</li>
            <li data-content="●" className="step step-neutral">Step 10</li>
            <li      className="step step-neutral">Step 11</li>
        </ul>
    </>
  )
};

export const StepBarUse = (props) => {
    return (
        <>
            <ul className="steps">
                <li className="step step-success"><p>1</p></li>
                <li  className="step step-success"><p>2</p></li>
                <li  className="step "><p>3</p></li>
                <li  className="step "><p>4</p></li>
                <li  className="step "><p>5</p></li>
                <li data-content="★" className="step "><p>6</p></li>
                <li data-content="!" className="step">
                    <p>
                        7
                    </p>
                </li>
                <li data-content="" className="step step-success text-red ">
                    <p>
                        8
                    </p><ExclamationCircleIcon className="text-red-700 h-5 w-5 z-10 -mt-[90px]"/></li>
                <li  className="step "><p>9</p></li>
                <li  className="step "><p>10</p></li>
                <li data-content="✕" className="step step-error"><p>11</p></li>
            </ul>
        </>
    )
}

