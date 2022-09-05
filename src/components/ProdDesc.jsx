import React, {useEffect, useState} from 'react';
import Button from './Button';
import './prodDesc.scss'
import image from '../assets/image.jpg'

export default function ProdDesc() {

  return (
    <>
    <div id="/" className='containe'>
      <div className='row'>
      <div className='right'>
        <h1 className='header'>What We Do</h1>
        <p>We help you save time with automation. We are a team of developers a
nd designers who care about your business and want to help it grow. 
We provide services and solutions that will take care of your tasks,
 freeing up your time to do what you do best.We offer automation ser
vices for any type of business: from digital marketing, website deve
lopment, content writing, social media marketing to customer service
. Our team is always ready to help you with any task you give us! </p>
      </div>
      <div className='left'>
        <span className='icon'>
      <ion-icon className='icon' name="rocket-outline"></ion-icon>
      </span>
      </div>
      </div>
      <div className='below'>
       <h1 className="header">What You Get</h1>
       <p>
       You get custom software that saves time with anything.
       The application is perfect for the person who has a lot of things to do and wants 
        to save time. It can be used for anything, from personal tasks to professional ones.
        All you do is upload a video <a href='/contact' className='here'>here</a> of your workflow or write up a short description and we will find ways to save you time and money with our custom software.
     </p>
      </div>
    <div className="curve"></div>
    </div>
 {/* <section className='px-0'>
    <div className='bg-indigo-600 w-full h-screen flex justify-center items-center flex-col'>
      <div >
     <h1 class="pb-4 font-medium leading-tight text-5xl mt-0 mb-2 text-gray-800 hover:text-gray-400 duration-500">What We Do</h1>
      <p className='p-7'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro, 
        vitae exercitationem iste voluptatem saepe natus mollitia similique nisi 
        consequatur dolorem ex, repudiandae, adipisci vero obcaecati iusto dolores facere beatae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate provident cupiditate 
        explicabo nam rerum excepturi quo possimus nulla. Nesciunt obcaecati maiores aliquam nihil dolore, incidunt praesentium quidem quibusdam aliquid similique?
      </p>
      <a className='p-4 bg-gradient-to-r from-indigo-300 to-indigo-400 cursor-pointer p-5 inline-block rounded-3xl filter hover:drop-shadow'>Get Started</a>
      </div>
    <div>

    </div>
  </div>  

  </section>  */}

  </>
  )
}
