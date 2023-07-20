import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div>
      <h1>Student :</h1>
      <p>{props.name}</p>
      <p>{props.bio}</p>
      <Score />
      {/* <p>{props.scores}</p> */}
        {/* <ul>
            {props.scores.map((data)=>{
                return (
                    <li>{[data]}</li>
                )
            })}
        </ul> */}
    </div>
  )
}

export default Student
