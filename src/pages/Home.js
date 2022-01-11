import React from 'react'
import { Link } from 'wouter'

const POPULAR_GIFS = ['Matrix', 'Cats', 'Dogs', 'Linux']
export default function Home () {
  return (
        <>
            <ul>
                {POPULAR_GIFS.map((PG) => (
                    <>
                        <li key={PG}>
                            <Link to={`/search/${PG}`}>Gif of {PG}</Link>
                        </li>
                    </>
                ))}
            </ul>
        </>
  )
}
