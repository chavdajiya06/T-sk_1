// import {useState} from "react";
import { useDispatch } from 'react-redux';
import {setText} from '../features/textSlice';
export default function ComponentB(){
    const dispatch = useDispatch();
    return (
        <div className='component'>
            <h3>Component B</h3>       
            <input type="text" placeholder="Enter Text" onChange={(e)=>{dispatch(setText(e.target.value))}}/>
        </div>
    )
}