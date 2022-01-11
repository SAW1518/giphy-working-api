import './App.css'
import React, { useState } from 'react'
import ListOfGifs from './componets/ListOfGifs/ListOfGifs'
import { Route, Link } from 'wouter'

export default function App () {
  const [topic, setTopic] = useState('')

  return (
      <div className="App">
        <section className="App-content">
            <h1>App</h1>
            <Link to='/search/pet'>pet</Link>
            <Link to='/search/CATS'>CATS</Link>
            <Route path='/search/:keyword' component={ListOfGifs}/>

        </section>
      </div>
  )
}
