import React from 'react'
import "./ItemListContainer.css"

export default function ItemListContainer({greeting}) {
  return (
    <div className='p-5 fs-1'>{greeting}</div>
  )
}
