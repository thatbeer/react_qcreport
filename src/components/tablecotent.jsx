// import { StepBarUse} from '../components/StepBar'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TableContent(props) {

    const {id , date  } = props

    useEffect(() => {
        console.log(id)
        
    }, []);
    
  
  
  
    return (
    <>
        <div className=' mx-auto p-4 border border-gray-600 rounded-lg text-center overflow-x-auto'   > 

            <table class="table-auto w-full divide-y divide-gray-700 min-h-[240px]">
                <thead>
                    <tr className='grid-inline grid-cols-13 items-center justify-center my-2'>
                        <th colSpan={1}>PileId</th>
                        <th colSpan={11} className='overflow-x-auto flex items-center justify-center'>
                            <ul className='flex flex-row mx-3'>
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
                        <th colSpan={1}>Updated</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    
                    <tr className='my-4 h-[80px]' >
                        <td>
                            <Link to={`/project/report?pileid=${id}`}>id: 1</Link>
                        </td>
                        <td className='overflow-x-auto'>
                            {/* <StepBarUse/> */}
                        </td>
                        <td>date</td>
                    </tr>           
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TableContent