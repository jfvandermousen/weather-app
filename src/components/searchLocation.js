import { Button } from 'antd'
import React from 'react'
import {useDispatch} from 'react-redux'
import {display,refresh} from "./features/locations"
import '../../src/App.less';

export default function SearchLocation() {
    const dispatch = useDispatch()
    return (
        <div className="search-box">
            <label>Add Location </label>
            <input type="text"/>
        <Button onClick={()=>{
                    dispatch(display({city:"Brussels",temperature:18,humidity:80,wind:19}))
                }}>Search
                </Button>
                
            <Button onClick={()=>{
                dispatch(refresh())
            }}>Refresh
            </Button>
</div>

    )
}
