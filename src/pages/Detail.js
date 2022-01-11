import React from 'react'

export default function Detail ({ params }) {
  const { id } = params
  return <div>{id}</div>
}
