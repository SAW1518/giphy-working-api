import React, { Fragment } from 'react'

export default function Gif ({ title, id, url }) {
  return (
        <Fragment>
            <h4>{title}</h4>
            <small>{id}</small>
            <img src={url}/>
        </Fragment>
  )
}
