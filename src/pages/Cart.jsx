import React from 'react'
import { Table } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { addCount, minusCount } from './store'

export default function Cart() {

    const state = useSelector((state)=> {return state})
    const dispatch = useDispatch()

    let sum = 0

  return (
    <div>
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>상품금액</th>
          <th>상품갯수</th>
          <th>상품추가</th>
          <th>상품총금액</th>
        </tr>
      </thead>
      <tbody>
        {
        state.cart.map((value,i)=>{
            return(
            <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].price}원</td>
                <td>{state.cart[i].count}</td>
                <td>
                    <button onClick={()=> {
                        dispatch(addCount(state.cart[i].id))
                    }}>+</button>

                    <button onClick={()=> {
                        dispatch(minusCount(state.cart[i].id))
                    }}>-</button>
                </td>
                <td>{state.cart[i].price*state.cart[i].count}원</td>
            </tr>
            )
           })
        }
        
      </tbody>
      {
        // eslint-disable-next-line array-callback-return
        state.cart.map((value,i)=>{
          sum += (state.cart[i].price*state.cart[i].count)
        })
      }
    </Table>
    합계 : {sum} 원
    </div>
  )
}
