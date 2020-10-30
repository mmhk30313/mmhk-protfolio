import React from 'react';
import './Contact.css'
// import emailjs from 'emailjs-com';
const Contact = () => {
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log("Email Validation");
        // emailjs.sendForm('protfolio30313', 'template_1uu7gml', e.target, 'YOUR_USER_ID')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }
    return (
        <div style={{height: '60.3vh'}} className="p-4 container mx-auto row justify-content-center">
            <div className="col-md-12">
                <h2 className="text-warning text-center ">Contact Me</h2>
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label><small>Name</small></label>
                            <input className="form-control" type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div className='form-group'>
                            <label><small>Email</small></label>
                            <input className="form-control" type="text" name="email" placeholder="Your email" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" name="description" rows={3} placeholder="Your Text Here..." />
                        </div>
                        <button className="btn btn-outline-danger" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;