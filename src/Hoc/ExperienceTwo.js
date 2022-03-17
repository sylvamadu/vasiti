import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import share from '../img/Group47.png';
import lady from '../img/woman-shoppingbag-card.png';
import {Datatwo} from '../content/Datatwo';



function ExperienceTwo() {


  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('userData'));
    if (items) {
    setItems([items]);
    }
  }, []);
  console.log(items)
 
  return (
    <div className='experience'>
      <section className="topexp">
        <figure>
          <img src={lady} alt="icon" />
        </figure>
        <article>
          <h3>Josiah’s Experience</h3>
          <h5>Vendor</h5>
          <p>
          I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
          </p>
          <Link to='/form'>
            <img src={share} alt="icon" />
          </Link>
        </article>
      </section>
      <section className="first_experience second-part">
        {
          Datatwo.map(element=>(
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
      <section className="first_experience second-part">
        {
          items.length > 0 ? (items.map(element => (
            <div className="card" key={element.firstName}>
              <figure>
                <img src={element.upload} alt="icon" />
              </figure>
              <div className="content">
                <h3>{`${element.firstName}  ${element.lastName} `}</h3>
                <div className="top">
                  <p className={element.type ==="customer"? "customer": ''}>{element.service}</p>
                </div>
                <p>
                {element.story}
                </p>
              </div>
          </div>
          ))
          ) : ''
        }
        
      </section>
    </div>
  )
}

export default ExperienceTwo