import React, { useEffect, useState } from 'react'
import Gif from '../Gif/Gif'
import getGifs from '../../service/getGifs'

export default function ListOfGifs ({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then(r => {
      setGifs(r)
      setLoading(false)
    })
  }, [keyword])

  if (loading) return <i>Loading</i>
  return <div>
    {gifs.map(({ id, title, url }) =>
        <Gif
            key={id}
            id={id}
            title={title}
            url={url}/>
    )}
  </div>
}
