import React from 'react'
import { useState } from 'react'
import './Table.css'

export default function Table() {
    const [OneOne, setOneOne] = useState('')
    const [OneTwo, setOneTwo] = useState('')
    const [OneThree, setOneThree] = useState('')
    const [TwoOne, setTwoOne] = useState('')
    const [TwoTwo , setTwoTwo] = useState('')
    const [TwoThree , setTwoThree] = useState('')
    const [ThreeOne, setThreeOne] = useState('')
    const [ThreeTwo , setThreeTwo] = useState('')
    const [ThreeThree , setThreeThree] = useState('')

    const [RowTotal, setTotal] = useState(OneOne + OneTwo + OneThree
        +TwoOne+TwoTwo+TwoThree+ThreeOne+ThreeTwo+ThreeThree)


    const TotalSum = ()=>{
        setTotal( (+OneOne+ + OneTwo + + OneThree + + TwoOne+ +TwoTwo+ +TwoThree + +ThreeOne + +ThreeTwo + +ThreeThree))

    }
    //(+OneOne + +OneTwo + +OneThree)-
    const RemoveRowOneSum =()=>{
        let total = 0;
        total = total + ((+TwoOne+ +TwoTwo+ +TwoThree+ +ThreeOne+ +ThreeTwo+ +ThreeThree));
        setOneOne('')
        setOneTwo('')
        setOneThree('')
        setTotal('')
        setTotal(total)
    } 
    // (+TwoOne+ +TwoTwo+ +TwoThree)
     const RemoveRowTwoSum = ()=>{
        let total = 0;
        total = total + ((+OneOne + +OneTwo + +OneThree+ +ThreeOne+ +ThreeTwo+ +ThreeThree));
        setTwoOne('')
        setTwoTwo('')
        setTwoThree('')
        setTotal('')
        setTotal(total)
     }
     //-( +ThreeOne+ +ThreeTwo + +ThreeThree)
     const RemoveRowThreeSum = ()=>{
        let total = 0;
        total = total + ((+TwoOne+ +TwoTwo+ +TwoThree+ +OneOne + +OneTwo + +OneThree));
        setThreeOne('')
        setThreeTwo('')
        setThreeThree('')
        setTotal('')
        setTotal(total)
     }

    return (
        <div className="container">
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>Value 1</th>
                        <th>Value 2</th>
                        <th>Value 3</th>

                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td><input onChange={(e) => setOneOne(+e.target.value)} value={OneOne} type="number" placeholder='0' /></td>
                        <td><input onChange={(e) => setOneTwo(+e.target.value)} value={OneTwo} type="number" placeholder='0' /></td>
                        <td><input onChange={(e) => setOneThree(+e.target.value)} value={OneThree} type="number" placeholder='0' /></td>
                        <td><button onClick={RemoveRowOneSum} >Delete</button> <br /> </td>

                    </tr>
                     <tr>
                        <td><input onChange={(e) => setTwoOne(+e.target.value)} value={TwoOne} type="number" placeholder='0' /></td>
                        <td><input onChange={(e) => setTwoTwo(+e.target.value)} value={TwoTwo} type="number" placeholder='0' /></td>
                        <td><input onChange={(e) => setTwoThree(+e.target.value)} value={TwoThree} type="number" placeholder='0' /></td>
                        <td><button onClick={RemoveRowTwoSum} >Delete</button> <br /> </td>
                    </tr>
                   <tr>
                        <td><input onChange={(e) => setThreeOne(+e.target.value)} value={ThreeOne} type="number" placeholder='0' /></td>
                        <td><input onChange={(e) => setThreeTwo(+e.target.value)} value={ThreeTwo} type="number" placeholder='0' /></td>
                        <td><input onChange={(e) => setThreeThree(+e.target.value)} value={ThreeThree} type="number" placeholder='0' /></td>
                        <td><button onClick={RemoveRowThreeSum} >Delete</button> <br /> </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr><button onClick={TotalSum} >Total Sum</button> --->{RowTotal}  </tr>
                </tfoot>
            </table>
        </div>
    )
}
