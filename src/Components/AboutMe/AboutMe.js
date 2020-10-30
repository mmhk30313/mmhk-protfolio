import React from 'react';
import Typewriter from 'typewriter-effect';
import me from '../../images/MMHK.jpg';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="my-5 container mx-auto row justify-content-center">
            <div className="col-md-7 mb-3 aboutMe text-light">
                {/* <div className=""> */}
                    <h1>Hello,</h1>
                    <h3>I'm <span className="colorText">Md. Mehedi Hasan Khan</span></h3>
                    <div className="about justify-content-sm-evenly d-flex w-100">
                        <h3 className='pr-1'>I'm a </h3>
                        <Typewriter className="w-50 ml-3"
                            options={{
                                strings: ["Muslim","Servant Of Allah","Web Developer","Learner","Web Designer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div className="col-md-5 text-center portfolio">
                    <img className="img-fluid w-75 rounded-circle" src={me} alt="..." />
                </div>
            {/* </div> */}
        </div>
    );
};

export default AboutMe;