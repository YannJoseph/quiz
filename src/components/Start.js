import React from 'react'

const Start = ({onQuizStart}) => {
  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h1>Commencer</h1>
                <p> BON JEU</p>
                <button className='button is-info is medium' onClick={onQuizStart}>Commencer</button>
            </div>
        </div>
    </div>
  )
}

export default Start