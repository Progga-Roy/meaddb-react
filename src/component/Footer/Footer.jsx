import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
        <div className='footer2'>
        <div className='first-detail'>
            <h1>Want to partner with us?</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos ea dolorum hic? Consequuntur hic exercitationem, necessitatibus non debitis fuga!</p>
             <button className='footer-btn'>Subscribe</button>
            </div>
            <div className='second-details'>
             <h1> <span className='span-color'>Let's</span> <br />  One </h1>
             <div>
             <h3>Partnership</h3>
             <p>Websites</p>
             <p>Social Media</p>
             <p>Ordering</p>
             </div>
             <div>
                <h3>About</h3>
                <p>Our Number</p>
                <p>Our Week</p>
                <p>Our Phone</p>
             </div>
              <div>
               <h3>Support</h3>
               <p>Supporting Request</p>
               <p>Contact</p>
              </div>
              <div>
              <h3>Follow Us</h3>
             <div className='social-media'>
             <p><i class="fa-brands fa-square-facebook"></i></p>
              <p><i class="fa-brands fa-square-instagram"></i></p>
              <p><i class="fa-brands fa-square-twitter"></i></p>
              <p><i class="fa-brands fa-square-youtube"></i></p>
             </div>
             
              </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;