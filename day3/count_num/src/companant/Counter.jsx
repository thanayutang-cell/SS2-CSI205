import { useEffect } from "react"
import { useState } from "react"

const Counter = ({name, step , limit }) => {


    //controller
    const _step = step || 1 // default
    const _limit = limit || 10 // default
    const  [count, setCount] = useState(0) // state

    useEffect(() => {
        if (count >= _limit) alert('Over LIMIT')
    }, [count])
    // fun..
    // ...

    // const count = 1000
    // state [getter,setter]
    // getter => variable
    //setter ==> callback
    // const addClick = ({ name, step }) => {

    //     // setCount(count + 1) // ok, (only onch) เขียนซ้ำเรียกได้ทีเดียว
    //     setCount((previus) => {return previus + 1}) //set by callback เขียนซ้ำเรียกได้หลายตัว
    // }
    return (
        // view
        <div className='text-center pb-5'>
            <strong>{name || 'COUNTER'}&nbsp;( <span className="bi bi-plus-slash-minus"></span>{_step})</strong>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger' onClick={() => setCount((p) =>  p - _step)}>
                    <b className="bi bi-patch-minus">&nbsp DEC</b>
                </button>
                <span className={'fs-3 fw-bold px-2 ' + (count >= _limit &&'text-danger' )}>{count}</span>
                <button className='btn btn-success' onClick ={() => setCount((p) => p + _step)} >
                    <b className='bi bi-plus-circle-dotted'>&nbsp;INC</b>
                </button>
            </div>
        </div>
    )
}

export default Counter