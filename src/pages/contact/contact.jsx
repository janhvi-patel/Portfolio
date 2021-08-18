import React from 'react';
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
        "service_l9itgrr", 
        "template_w65tl67",
        e.target,
        "user_Rj419pRmD7aiJnEee062I"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="cont mt-3" id="concon">
            <h1 className="tc">Contact Me</h1>
            <form className="contact-row rounded" 
            onSubmit={sendEmail}>
                <lable className="font-weight-bold text-dark">Name</lable>
                <input  type="text" name="name" className="rounded"/>

                <lable>Email</lable>
                <input type="email" name="user_email" className="rounded" />

                <lable>Message</lable>
                <textarea name="message" rows="5" className="rounded" />
                <input
                 type="submit" 
                 value="Send"
                 
                 className="form-control btn btn-primary"
                 style={{marginTop: "30px"}} />
            </form>
        </div>
    )
}

export default Contact;
