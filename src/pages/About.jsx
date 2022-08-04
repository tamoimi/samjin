import React from 'react'
import {Outlet} from 'react-router-dom'

export default function About() {
  return (
    <>
    <aside>
        <h4>history</h4>
        <h4>inform</h4>
    </aside>
    <Outlet></Outlet>
    </>
  )
}

