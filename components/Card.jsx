import React from 'react'
import styles from "./card.modules.css"

const card = (props) => {
  return (
      <div className='div'>
          <div className='main'>
              <div><p>{ props.date}</p>
                  <button>{ props.case}</button>

                  <h1>{ props.h1}</h1>
                  <h1>{ props.h2}</h1>
                  <h3>{ props.h3}</h3>
              </div>
              <div><img src={props.url} />
            </div>
          </div>
    </div>
  )
};
export default card

