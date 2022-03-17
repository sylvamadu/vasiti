import React from 'react';
import happyPeople from '../img/Testimonial image 1.png';
import circleBg from '../img/Ellipse 3.png';

function TopPage() {
  return (
    <div className='Top_page_section'>
        <section className="first-part">
          <article>
            <h2>Amazing<br /> Experiences from our wonderful customers</h2>
            <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
          </article>
        </section>
        <figure>
          <img src={happyPeople} alt="friends" />
        </figure>
        
        <img src={circleBg} alt="circle" className='circlebg'/>
       
    </div>
  )
}

export default TopPage