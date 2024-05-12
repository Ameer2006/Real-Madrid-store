import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
  return (
    <footer className="bg-body-tertiary border text-dark py-5 mt-3  ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className='mb-3'>Contact Us</h3>
            <ul className="list-unstyled mb-5 ">
              <Link to="mailto:ameeralaa2006101@gmail.com" className='text-dark link-underline-light  '><li className='mb-3 list-group-item'> <span className='text-primary'>Email </span>:ameeralaa2006101@gmail.com </li></Link>
              <Link to="tel:+201001288279" className='text-dark link-underline-light  '><li className='mb-3 list-group-item' ><span className='text-primary'>WhatsApp </span>:+201001288279 </li></Link>
              <Link to="tel:+201001288279" className='text-dark link-underline-light  '><li className='mb-3 list-group-item' ><span className='text-primary'>phone </span>:+201001288279 </li></Link>
            </ul>
            <div className="d-flex ps-5 gap-4 ">
              <a href="https://www.facebook.com/AmeerAlaa2006" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-facebook" style={{ fontSize: '24px', color: '#3b5998' }}></i>
              </a>
              <a href="https://www.instagram.com/ameerr_alaa" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#e4405f' }}></i>
              </a>
              <a href="https://github.com/Ameer2006" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" style={{ fontSize: '24px', color: 'black' }}></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className='mb-3'>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/pay">Payment  methods</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className='mb-3'>Subscribe</h3>
            <p>Stay updated with our latest news and <br />products.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control  " placeholder="Enter your email" required />
                <div className="input-group-append">
                  <a className="btn btn-outline-primary ms-2" href="/pay">Subscribe </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>

  )
}
