
import { RadioGroup } from "@headlessui/react";
import React , { useState } from "react";
// import Datepicker from "react-tailwindcss-datepicker"; not working
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyRadioGroup from "../components/RadioGroup";
import ViewImage from "../components/ViewImage/ViewImage";

function SidePage() {
    const [value , setValue ] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue: ", newValue);
        setValue(newValue);
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


  return (
    <>
        <div className='my-4 pt-[60px] mx-auto'>
            <div className='flex flex-col w-full justify-center'>
                <div className='flex flex-row my-2'>
                    <input 
                        className='w-5/6 px-4 mx-auto border-2 rounded border-gray-900'
                        placeholder="find your desire"
                    />
                    <button className='btn border-2 btn-primary mx-2'>enter</button>
                    <button className='btn border-2 btn-primary mx-2'>ทั้งหมด</button>
                </div>
                <div className="bg-white flex flex-row">
                    <div className="flex flex-col lg:flex-row my-2  mx-2 justify-end w-screen">
                        <div className="flex flex-row">
                            <p1 className="px-4 py-2 mx-2 lg:w-[300px] w-[180px] h-[50px]"><p1>วันที่เริ่ม</p1></p1>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="mx-2 w-auto"/>
                        </div>
                        <div className="flex flex-row">
                            <p1 className="px-4 py-2 mx-2 lg:w-[300px] w-[180px] h-[50px]">วันที่เสร็จ</p1>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="mx-2 w-auto"/>
                        </div>
                        {/* <div className="">
                            <button className='btn border-2 btn-primary'>ทั้งหมด</button>

                        </div> */}

                    </div>


                </div>
            </div>  
                    <hr/>
                    <ViewImage />


        </div>
    </>
  )
}

export default SidePage