import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';


function Header() {
    const  [Button,setButton]=useState('class="nav-link active ')

const handelerclick =()=>{

    document.getElementById('line').setAttribute('className',Button)






}



  return (


    <header className='container '>

        <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" id='line' class="nav-link active" onClick={handelerclick}>Home</a></li>
            <li class="nav-item"><a href="#" id='line' class="nav-link" onClick={handelerclick}>blog</a></li>
            <li class="nav-item"><a href="#" id='line' class="nav-link" onClick={handelerclick}>service</a></li>
            <li class="nav-item"><a href="#" id='line' class="nav-link" onClick={handelerclick}>contact</a></li>
            <li class="nav-item"><a href="#" id='line' class="nav-link" onClick={handelerclick}>About</a></li>
        </ul>

    </header>
  )
}

export default Header