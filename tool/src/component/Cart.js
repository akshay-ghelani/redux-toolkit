import React from 'react'

import { increment } from '../redux/slice/slices'
import { useAppDispatch } from '../hooks/hooks'

export default function Cart(props) {
    const dispatch = useAppDispatch();
  return (
    <>
    <div className="card-deck">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.price}</p>
    </div>
    <div className="card-footer">
    <button type='btn' className='btn btn-success'onClick={() => dispatch(increment())}>cart</button>
   
    </div>
  </div>
  </div>
     </>
//  display cart details
    
  )
}
