import React from 'react'
import {useDispatch} from 'react-redux'
import {display} from "../src/components/features/locations"

export default function searchLocation() {
    const dispatch = useDispatch()
    return (

        <button onClick={()=>{
                    dispatch(display({city:"Brussels",lat:50,long:45}))
                }}>Search
                </button>
            

    )
}
