import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../img/black-beautiful-ladies-smiling 1.png';
import shareStory from '../img/share.png';
import line from '../img/Vector3.png';


function SecondTopPage() {
  return (
    <div className='SecondTopPage'>
        <section className="second-part">
            <figure>
                <img src={pic1} alt="pic1" className='img' />
            </figure>
            <article>
                <div className="profile">
                    <h3>Tolu & Joy’s Experience</h3>
                    <h5>customer</h5>

                    <p>
                        I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
                    </p>
                    <Link to='/form'>
                    <img src={shareStory} alt="share icon" />
                    <img src={line} alt="line" />
                    </Link>
                </div>
                
            </article>
        </section>
    </div>
  )
}

export default SecondTopPage