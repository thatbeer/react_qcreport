
// import React , { useState } from "react";
// import Datepicker from "react-tailwindcss-datepicker";


// function SidePage() {
//     const [value , setValue ] = useState({
//         startDate: new Date(),
//         endDate: new Date().setMonth(11)
//     });

//     const handleValueChange = (newValue) => {
//         console.log("newValue: ", newValue);
//         setValue(newValue);
//     }


//   return (
//     <>
//         <div className='container mx-auto my-4'>
//             <div className='flex flex-col mx-4'>
//                 <div className='flex flex-row my-2'>
//                     <input 
//                         className='w-full border rounded border-gray-900'
//                     />
//                     <button className='btn btn-primary'>enter</button>
//                 </div>
//                 <div className="bg-white">
//                     <Datepicker
//                         primaryColor="blue"
//                         placeholder={"StartDate - EndDate"} 

//                         value={value}
//                         onChange={handleValueChange}
//                         className="bg-white text-white"
//                     />

//                 </div>
//             </div>  
//         </div>
//     </>
//   )
// }

// export default SidePage