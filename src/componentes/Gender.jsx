import React from 'react'
import { Chip } from './Chip'
import "./Gender.css"
const Gender = ({ movie }) => {
  //const movie = props.movie
  
  const gender = movie.gender

  return (
    <div className='gender-container'>
      {
        gender.map((genero,index) => (
          <Chip genero={genero} key = {index} />
        ))
      }
    </div>
  )
}

export default Gender