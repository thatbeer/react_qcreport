
import { RadioGroup } from "@headlessui/react";
import React , { useState } from "react";
// import Datepicker from "react-tailwindcss-datepicker"; not working
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyRadioGroup from "../components/RadioGroup";

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
        <div className='container mx-auto my-4 pt-[60px]'>
            <div className='flex flex-col mx-4 w-4/5 justify-center'>
                <div className='flex flex-row my-2  mx-2 justify-center'>
                    <input 
                        className='w-5/6 px-4 mx-auto border-2 rounded border-gray-900'
                        placeholder="find your desire"
                    />
                    <button className='btn border-2 btn-primary'>enter</button>
                </div>
                <div className="bg-white flex flex-row mx-2">
                    <div className="flex flex-col lg:flex-row my-2  mx-2 justify-end w-screen">
                        <div className="flex flex-row">
                            <p1 className="px-4 py-2 mx-2 lg:w-[300px] w-[180px] h-[50px]"><p1>วันที่เริ่ม</p1></p1>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="mx-2 w-auto"/>
                        </div>
                        <div className="flex flex-row">
                            <p1 className="px-4 py-2 mx-2 lg:w-[300px] w-[180px] h-[50px]">วันที่เสร็จ</p1>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="mx-2 w-auto"/>
                        </div>
                    

                   <button className='btn border-2 btn-primary'>ทั้งหมด</button>
                    </div>


                </div>
            </div>  
                    <hr/>



        </div>
    </>
  )
}

export default SidePage