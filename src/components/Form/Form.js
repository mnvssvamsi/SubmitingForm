import React, { Component, useState } from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'
import './Form.css'
import Navbar from '../Navbar/Navbar'
const Form= ()=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [gender, setGender] = useState('')
    const [date, setDate] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')

       
    const submitHandler=(e)=> {
        e.preventDefault();
        // var nameText = name;
        // var nameregx= /^[A-Za-z]+$/;
        // if(nameregx.test(nameText)){
        //    alert('valid')
        // }else{
        //  alert('invalid')
        // }
        console.log(name)
        var nameText = name;
        var nameRegx= /^[A-Za-z]+$/;
        if(nameRegx.test(nameText)){
            setNameError('')
        }else{
            setNameError('please enter a valid name')
            return
        }
        var emailText = email;
        var emailRegx= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        if(emailRegx.test(emailText)){
            setEmailError('')
        }else{
            setEmailError('please enter a valid email')
            return
        }
        var phoneNoText = phoneNo;
        var phoneRegx= /^\d{10}$/;
        if(phoneRegx.test(phoneNoText)){
            setPhoneError('')
        }else{
            setPhoneError('please enter a valid phone Number')
            return
        }
        let formData= {
            name,
            email,
            phoneNo,
            gender,
            date
        }
            fetch('https://contact-form-69cba.firebaseio.com/details.json', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
              })
                .then(response => {
                  return response.json();
                })
                .then(responseData => {
                    console.log(responseData)
                });
                alert("Data submitted")
    }
        return (
            <div>
                <Navbar />
            <div className='ContactData'>
                <h4>Enter your Contact Data</h4>
                <form onSubmit={(e)=>submitHandler(e)} >
                    <div className="Input">
                        <input className="InputElement"
                         type="text" placeholder="Name" name='name'
                        //  pattern='/^[A-Za-z]+$/'
                         onChange= {(e)=>{
                             setNameError('')
                             setName(e.target.value)
                            }}
                          value= {name}
                        //    required
                            />
                            {nameError && <p style={{color:'red'}}>{nameError}</p>}
                    </div>
                    <div className="Input">
                        <input className="InputElement" 
                        type="email" placeholder=" E-Mail" name='email'
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        onChange= {(e)=>{
                            setEmailError('')
                            setEmail(e.target.value)
                        }}
                         value={email} 
                        //  required
                          />
                        {emailError && <p style={{color:'red'}}>{emailError}</p>}
                    </div>
                    <div className="Input">
                        <input className="InputElement" 
                        type="text" placeholder="Phone number" name='phoneNo'
                        onChange= {(e)=> {
                            setPhoneError('')
                            setPhoneNo(e.target.value)
                        }}
                         value={phoneNo}
                        //   required 
                          />
                        {phoneError && <p style={{color:'red'}}>{phoneError}</p>}
                    </div>
                    <div className="Input">
                        <p>Please select your gender:</p>
                        <input type="radio" name="gender"
                        onClick={(e)=>setGender(e.target.value)} value="Male" />
                        <label >Male</label>
                        <input type="radio" name="gender" 
                        onClick={(e)=>setGender(e.target.value)} value="Female" />
                        <label >Female</label>
                        <input type="radio" name="gender"
                        onClick={(e)=>setGender(e.target.value)} value="Other" />
                        <label >Other</label>
                    </div>
                    <div className="Input">
                        <label>Date of Birth</label>
                        <input  type="date" name= 'date'
                         onChange= {(e)=>setDate(e.target.value)}
                         value={date}
                        //  required
                          />
                    </div>
                    <div>
                            {/* <Link to='/' ><button className="Button">SUBMIT</button></Link> */}
                            <button className="Button" disabled="">SUBMIT</button>
                    </div>
                </form>
            </div>
            </div>
        )
}

export default Form