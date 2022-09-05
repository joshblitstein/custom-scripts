import React, { useRef, useState } from 'react'
import './form.scss'
import emailjs from '@emailjs/browser';



export default function Form() {
    const form = useRef();
    const [toggle,setToggle] = useState(false)

    function sendEmail(e){
        setToggle(true)
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm("service_17ypoyv","template_vef65zc", form.current, 'user_lQR9QRWC4KAKeGdj20DSE')
          .then((result) => {
              console.log(result.text);
          }, (error) => { 
              console.log(error.text);
          });
    }

   

    return (
        <>
        <div className="wrapper">
            <form className='form'>
              
                <div className="formCont">
                <h2 className='head'>Get In Touch</h2>
                <div className="field">
                <label>Email</label>
                <input type={'text'} />
                </div>
                <div className="field">
                <label>Phone Number</label>
                <input type={'text'}/>
                </div>
                <div className="field">
                <label>Write a Description of your workflow.</label>
                <textarea></textarea>
                </div>
                <div className="field">
                <label>Upload a short Video</label>
                <input type={'file'} />
                </div>
                </div>
                <button  type='submit'>Submit</button>
            </form>
        </div>
        </>
    )
}
