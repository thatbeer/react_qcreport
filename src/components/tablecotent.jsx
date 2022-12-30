// import { StepBarUse} from '../components/StepBar'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StepBarUse } from '../components/StepBar';


function TableContent(props) {

    const {id , date  } = props

    useEffect(() => {
        console.log(id)
        
    }, []);
    
  
  
  
    return (
    <>
        <div className=' overflow-x-auto'> 

            <table class="table border  divide-gray-700 p-4">
                <thead>
                <tr className='text-center' >
                        <th></th>
                        <th colSpan={1}>
                            <Link to={`/project/report?pileid=${id}`}>PileId</Link>
                        </th>
                        <th colSpan={11} rowSpan={2} className='flex flex-grow'>
                            {/* <StepBarUse/> */}
                            <ul className='flex'>
                                <li className='mx-2.5'>Step1</li>
                                <li className='mx-2.5'>Step2</li>
                                <li className='mx-2.5'>Step3</li>
                                <li className='mx-2.5'>Step4</li>
                                <li className='mx-2.5'>Step5</li>
                                <li className='mx-2.5'>Step6</li>
                                <li className='mx-2.5'>Step7</li>
                                <li className='mx-2.5'>Step8</li>
                                <li className='mx-2.5'>Step9</li>
                                <li className='mx-2.5'>Step10</li>
                                <li className='mx-2.5'>Step11</li>
                            </ul>
                        </th>
                        <th colSpan={1}>Update</th>
                    </tr>    
                </thead>
                <tbody className=''>
                    <tr className='text-center' >
                        <td colSpan={1}>
                            <Link to={`/project/report?pileid=${id}`}>id: 1</Link>
                        </td>
                        <td colSpan={11} rowSpan={2} className=''>
                            {/* <StepBarUse/> */}
                            <ul className='flex'>
                                <li className='mx-2.5'>Step1</li>
                                <li className='mx-2.5'>Step2</li>
                                <li className='mx-2.5'>Step3</li>
                                <li className='mx-2.5'>Step4</li>
                                <li className='mx-2.5'>Step5</li>
                                <li className='mx-2.5'>Step6</li>
                                <li className='mx-2.5'>Step7</li>
                                <li className='mx-2.5'>Step8</li>
                                <li className='mx-2.5'>Step9</li>
                                <li className='mx-2.5'>Step10</li>
                                <li className='mx-2.5'>Step11</li>
                            </ul>
                        </td>
                        <td colSpan={1}>date</td>
                    </tr>           
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TableContent