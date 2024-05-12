import React, { useState } from 'react';
import { Link } from 'react-router-dom'


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        setSubmitted(true);
    };

    return (
        <div className="container" style={{ marginTop: "5rem" }}>
            <h1 className="mb-4 d-flex justify-content-center">Contact Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Information</h5>
                            <ul className="list-group list-group-flush">
                                <Link to="mailto:ameeralaa2006101@gmail.com" className='text-dark link-underline-light  '><li className='mb-3 list-group-item'> <span className='text-primary'>Email </span>:ameeralaa2006101@gmail.com </li></Link>
                                <Link to="tel:+201001288279" className='text-dark link-underline-light  '><li className='mb-3 list-group-item' ><span className='text-primary'>WhatsApp </span>:+201001288279 </li></Link>
                                <Link to="tel:+201001288279" className='text-dark link-underline-light  '><li className='mb-3 list-group-item' ><span className='text-primary'>phone </span>:+201001288279 </li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Send us a message</h5>
                            {submitted ? (
                                <p className="text-success">Message sent successfully!</p>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Your Email</label>
                                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;