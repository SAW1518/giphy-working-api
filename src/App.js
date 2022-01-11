import './App.css'
import React, { useEffect, useState } from 'react'
import getGifs from './service/getGifs'
import Gif from './componets/Gif'

export default function App () {
  const [topic, setTopic] = useState('cats')
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ topic }).then(r => setGifs(r))
  }, [])

  return (
      <div className="App">
        <section className="App-content">
          {gifs.map((g) => <Gif key={g.id} id={g.id} title={g.title} url={g.url}/>)}
        </section>
      </div>
  )
}
