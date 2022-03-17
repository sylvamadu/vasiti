import React from 'react';
import {Data} from '../content/Data';


function ExperienceOne() {
  return (
    <div className='experience'>
      <section className="first_experience">
        {
          Data.map(element=>(
            <div className="card" key={element.id}>
              <figure>
                <img src={element.image} alt="icon" />
              </figure>
              <div className="content">
                <h3>{element.name}</h3>
                <div className="top">
                  <h4>In <span>{element.location}</span></h4>
                  <p className={element.type ==="customer"? "customer": ''}>{element.type}</p>
                </div>
                <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </p>
              </div>
          </div>
          ))
        }
        
      </section>
    </div>
  )
}

export default ExperienceOne