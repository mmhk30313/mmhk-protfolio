import React, { useState } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        // console.log("Email Validation");
        emailjs.sendForm('protfolio30313', 'template_1uu7gml', evt.target, 'user_FBbxAs5F2iR78ILK22cF3')
        .then((result) => {
            console.log(result.text);
            setMessage(true);
        }, (error) => {
            console.log(error.text);
            setMessage(false);
        });
        evt.target.reset();
    }
    return (
        <><div style={{height: '60.3vh'}} className="p-4 container mx-auto row justify-content-center">
            <div className="col-md-12">
                <h2 className="text-warning text-center ">Contact Me</h2>
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label><small>Name</small></label>
                            <input className="form-control" type="text" name="name" placeholder="Your Name" required/>
                        </div>
                        <div className='form-group'>
                            <label><small>Email</small></label>
                            <input className="form-control" type="text" name="email" placeholder="Your email" required/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" name="message" rows={3} placeholder="Text Here" required/>
                        </div>
                        <button className="btn btn-outline-danger w-100 text-warning" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        {
            message && <p className='message text-success text-center'>Your message is sent successfully!!!</p>
        }
        </>
    );
};

export default Contact;