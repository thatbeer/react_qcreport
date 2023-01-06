
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
                    <div className="flex flex-row my-2  mx-2 justify-end w-5/6">
                        <p1 className="px-6 py-1 mx-2 -2 w-[300px] h-[50px]">วันที่เริ่ม</p1>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="mx-2 w-auto"/>
                        <p1 className="px-6 py-1 mx-2 -2 w-[300px] h-[50px]">วันที่เสร็จ</p1>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                        {/* <Datepicker
                            primaryColor="blue"
                            placeholder={"StartDate - EndDate"} 

                            value={value}
                            onChange={handleValueChange}
                            className="bg-white text-white"
                        /> */}

                    </div>


                </div>
            </div>  
                    <hr/>


                   <MyRadioGroup />
        </div>
    </>
  )
}

export default SidePage