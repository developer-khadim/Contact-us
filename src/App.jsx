"use client";
import React from 'react'
import Nav from '../components/nav';
import Form from '../components/form';

const App = () => {
  return (
    <main className='w-[100vw] h-[100vh] ' >
      <Nav />
      <div className=' mx-80 mt-28 mb-9 w-[80vw]  ' >
        <h1 className='font-extrabold text-6xl uppercase my-3 ' >Contact Us</h1>
        <p className='w-[55vw] text-[18px] text-black/60 ' >LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE 
          A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT
           FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR <br/> SOCIAL MEDIA.  </p>
      </div>
      <div>
        <Form/>
      </div>
    </main>
  )
}

export default App
