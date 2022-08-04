import React from 'react'
import data from '../components/data'
import { addItem } from './store'
import { useDispatch } from 'react-redux'

export default function Main() {

  let dispatch = useDispatch()

  return (
    <div>
       <div className='visual-main'>
        <img src='/images/visual_main_01.jpg' alt='main_visual' width='100%'/>
    </div>

    <div className='container'>
        {
          data.map((value, i)=> {
            return (
              <div className='clo-md-3' key={value.id}>
              <img src={`/images/best_0${i+1}.png`} alt='best_product' width='280px'/>
              <h3>{value.title}</h3>
              <p>{value.price}</p>

              <button onClick={()=> {
                dispatch(addItem({id:value.id, title: value.title, price: value.price, count:1}))
              }}>장바구니</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

