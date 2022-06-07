import React, {useEffect, useState} from 'react'
import { formatTime } from '../outils/time';


const End = ({results, data, onReset, onAnswersCheck, time}) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === data[index].answer){
                correct++;
            }
        });
        setCorrectAnswers(correct)
    }, [] );

  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h3> Vos résultats</h3>
                <p>{correctAnswers} of {data.length}</p>
                <p><strong>{Math.floor((correctAnswers/ data.length) * 100)}%</strong></p>
                <p><strong>Ton temps :</strong> {formatTime(time)}  </p>
                <button className='button is-info mr-2' onClick={onAnswersCheck}> Vérifiez vos réponsess</button>
                <button className='button is-success'onClick={onReset}> Réessayer </button>
            </div>
        </div>
    </div>
  )
}

export default End