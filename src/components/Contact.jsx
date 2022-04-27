import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>BOOK YOUR TABLE</h1>
        <form>
            <input type='text' placeholder='Full Name'></input>
            <input type='email' placeholder='Type Your E-mail'></input>
            <textarea placeholder='write here....' ></textarea>
            <input type='submit' value='Book'></input>
        </form>
       
    </div>
  )
}

export default Contact