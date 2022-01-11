import './App.css'
import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

export default function App () {
  return (
      <div className="App">
        <section className="App-content">
            <h1>App</h1>
            <Route path='/' component={Home}/>
            <Route path='/search/:keyword' component={SearchResults}/>
            <Route path='/search/:id' component={Detail}/>
        </section>
      </div>
  )
}
