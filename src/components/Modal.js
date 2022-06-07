import React from 'react'

const Modal = ({onClose, results, data}) => {
  return (
    <div className='modal is-active'>
        <div className='modal-background' onClick={onClose}>
            <div className='modal-card'>
                <header className='modal-card-title'>
                    <p className='modal-card-title'> Tes reponses</p>
                    <button className='delete' onClick={onClose}></button>
                </header>
                <section className='modal-card-body content'>
                    <ul>
                        {results.map((result,i) => (
                            <li key={i} className="mb-6">
                                <p><stron>{result.q}</stron></p>
                                <p className={result.a === data[i].answer ? 'has-background-succeess has-text-white p-2' : 'has:background-danger has-text-white p-2'}>Tes reponses :{result.a} </p>
                                {result.a !== data[i].answer && <p className='has-background-link has-text-white p-2'>Reponses correctes: {data[i].answer}</p>}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Modal