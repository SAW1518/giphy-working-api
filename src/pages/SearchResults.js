import React, { useEffect, useState } from 'react'
import getGifs from '../service/getGifs'
import Gif from '../componets/Gif/Gif'
import Spinner from '../componets/Spiner'

export default function SearchResults ({ params }) {
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

  if (loading) return <Spinner/>
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
