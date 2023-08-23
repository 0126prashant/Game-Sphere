import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faLock,faMobile,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGoogle,faFacebookF,faTwitter} from "@fortawesome/free-brands-svg-icons";
import logo_register from "../utilites/img/logo_register.svg";
import {Link,useNavigate} from "react-router-dom"
import styled from "styled-components";
import { useEffect, useReducer} from 'react';
import { registerUser } from '../redux/RegisterUser/action';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";



const initialState={
    name:"",
    email:"",
    mobile_No:"",
    password:"",
}

const reducer=(state,{type,payload})=>{

    switch(type){
        case "NAME":{
            return {...state,name:payload}
        }
        case "EMAIL":{
            return {...state,email:payload}
        }
        case "MOBILE":{
            return {...state,mobile_No:payload}
        }
        case "PASSWORD":{
            return {...state,password:payload}
        }
        case "RESET":{
            return initialState;
        }
        default:{
            return state;
        }
    }
}



const SignUp = () => {
    const myDispatch=useDispatch();
    const navigate=useNavigate();

    const {loading,msg,error}=useSelector((store)=>{
        return {
            loading:store.registerUReducer.isLoading,
            msg:store.registerUReducer.msg,
            error:store.registerUReducer.isError
        }
   },shallowEqual);

    const [state,dispatch]=useReducer(reducer,initialState);
    const {name,email,mobile_No,password}=state;


    const handleNavigate=()=>{
        navigate("/user/login")
    }


    //   const RegisterAlert=(msg)=>{

       
    // }

   

const handleRegister=(e)=>{
    console.log("okc")
  e.preventDefault();
  const obj={name,email,mobile_No,password}
  myDispatch(registerUser(obj)).then((data)=>{

    if(data.msg==="Please fill all the required fields"){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            confirmButtonColor: 'dodgerblue',
          })
          Toast.fire({
            icon: 'warning',
            title: 'Oops...',
            text: `${data.msg} !`
          })
    }   
   else if(data.msg==="Please check Mobile Number"){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            confirmButtonColor: 'dodgerblue',
          })
          Toast.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please check Mobile Number!'
          })

        
    }else if(data.msg==="Password should contain One Uppercase, One Special Character, One Number and length must be greater than Eight"){

        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            confirmButtonColor: 'dodgerblue',
          })
          Toast.fire({
            icon: 'warning',
            title: 'Oops...',
            text: `${data.msg} !`
          })
       

    }else if(data.msg==="User is already registered with us, Please Login...!"){
      
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            confirmButtonColor: 'dodgerblue',
          })
          Toast.fire({
            icon: 'info',
            title: 'Oops...',
            text: `User's Mobile Number or email already registered with us, Please Login...`
          })

    }

    else if(data.msg==="Registration Successfull !, Please Login..."){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Registration Successfull !, Please Login...'
          })

          navigate("/user/login")
         
    }



  })
}

// useEffect(()=>{
//   RegisterAlert(msg)
// },[msg])

  return (
    <DIV>
       <div className="container">
       <div className="forms-container">
        <div className="signIn-signUp">
         

        <form action="" className="sign-up-form" >
           
           <h2 className="title">Sign Up</h2>

           <div className="input-field">
            <FontAwesomeIcon className="faUser" icon={faUser}/>
            <input type="text" 
                   placeholder='Name' 
                   value={name}
                   onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})}
            />
           </div>

           <div className="input-field">
            <FontAwesomeIcon className="faUser" icon={faEnvelope}/>
            <input type="email" 
                   placeholder='Email'
                   value={email}
                   onChange={(e)=>dispatch({type:"EMAIL",payload:e.target.value})}
            />
           </div>

           <div className="input-field">
            <FontAwesomeIcon className="faUser" icon={faMobile}/>
            <input type="text" 
                   placeholder='Mobile Number' 
                   value={mobile_No}
                   onChange={(e)=>dispatch({type:"MOBILE",payload:e.target.value})}
            />
           </div>

           <div className="input-field">
            <FontAwesomeIcon className="faUser" icon={faLock}/>
            <input type="password" 
                   placeholder='Password' 
                   value={password}
                   onChange={(e)=>dispatch({type:"PASSWORD",payload:e.target.value})}
                   />
           </div>

          <input type="submit" value="Sign UP" className='btn' onClick={handleRegister}/>

          <p className='social-text'>Or Sign Up with Social Media</p>

          <div className='media-icons'>
            <Link to="#">
              <FontAwesomeIcon icon={faGoogle}/>
            </Link>
            <Link to="#">
            <FontAwesomeIcon icon={faFacebookF}/>
            </Link>
            <Link to="#">
            <FontAwesomeIcon icon={faTwitter}/>
            </Link>
          </div>
         </form> 

        </div>
       </div>

       
       <div className='panel-container'>
       
       <div className='panel left-panel'>
       <div className='content'>
       <h3> One of us ?</h3>
       <p>Log in to save your game progress and pick up where you left off, whether you're on your PC, tablet, or mobile phone!</p>
        <button onClick={handleNavigate} className='btn transparent' id="signUpBtn">Login</button>
       </div>
       <img className="image" src={logo_register} alt="logo_login"/>
       </div> 

       </div>


       </div>
       
    </DIV>
  )
}

export default SignUp;


const DIV=styled.div`

input{
  font-family: "Poppins", sans-serif;
}

.container{
    position:relative;
    width:100%;
    min-height:100vh;
    overflow:hidden; 
}

.container::before{
    content:'';
    position:absolute;
    width:2000px;
    height:2000px;
    border-radius: 50%;
    background:linear-gradient(-45deg,#FF5722 , #F4511E);
    top:-5%;
    right:52%;
    transform:translate(100%,-50%);
    z-index:6;

}

.forms-container{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
}

.signIn-signUp{
    position:absolute;
    top:50%;
    left:25%;
    transform:translate(-50%, -50%);
    width:50%;
    display:grid;
    grid-template-columns: 1fr;
    z-index:5;
}


form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:0 81px;
    overflow: hidden;
    grid-column:1/2;
    grid-row:1/2;
}

form.sign-up-form{
    z-index:2;
}

.title{
    font-size: 32px;
    color:#444;
    margin-bottom: 10px;

}

.input-field{
    max-width: 380px;
    width:100%;
    height:55px;
    background-color: #f0f0f0;
    margin:10px 0;
    border-radius: 55px;
    display:grid;
    grid-template-columns: 15% 85%;
    padding:0 .4rem;
}

.faUser {
    margin-top:15px;
    margin-left:10px;
    color:#acacac;
    font-size: 22px;
}

.input-field input{
    background:none;
    outline:none;
    border:none;
    line-height: 1;
    font-weight: 550;
    font-size:18px;
    color:#333;
}

.input-field input::placeholder{
    color: #aaa;
    font-weight:500;
}

.btn{
    width:150px;
    height:49px;
    border:none;
    outline:none;
    border-radius: 48px;
    cursor:pointer;
    background-color: #F4511E;
    color:#fff;
    text-transform:uppercase;
    font-weight:600;
    margin:10px 0;
    transition:0.5s;

}

.btn:hover{
    background-color: #FF7043;
}

.media-icons {
		display: flex;
	}

.media-icons a {
		height: 40px;
		width: 40px;
		margin: 0 8px;
        background:blue;
		border-radius: 50px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 17px;
		text-decoration: none;
		transition: all 0.4s ease;
	}

.media-icons a:nth-child(1) {
    background: #db4437;
}
.media-icons a:nth-child(1):hover {
    color: #ff0000;
	background: #fff;
	}

    a:nth-child(2) {
		background: #4267b2;  
	}

    a:nth-child(2):hover {
    color: #4267b2;
	background: #fff;
	}

    a:nth-child(3) {
		background: #1da1f2;
	}

    a:nth-child(3):hover {
		color: #1da1f2;
		background: #fff;
	}

.social-text{
    font-size: 16px;
    padding:12px 0;
}

.panel-container{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:55%;
    display:grid;
    grid-template-columns: repeat(2,1fr);
}

.panel{
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    text-align: center;
    z-index:7;
}

.left-panel{
    pointer-events: all;
    padding:48px 17% 32px 12%;

}


.panel .content{
    color:#fff;
    transition:0.9s 0.6s ease-in-out;
}

.panel h3{
    font-weight: 600;
    line-height:1;
    font-size:24px;
}

.panel p{
    font-size:14px;
    padding:12px 0;
}

.transparent{
    margin:0;
    background:none;
    border:2px solid #fff;
    width:130px;
    height:41px;
    font-weight:600;
    font-size:16px;
}

.image{
width:90%;
margin-bottom: 50px;
transition:0.9s 0.6s ease-in-out;
}



//Responsive

/* Responsiveness */

@media (max-width:870px){

.container{
    min-height: 800px;
    height:100vh;
}
.container::before{
   width:1500px;
   height:1300px;
   left:30%;
   bottom:68%;
   transform: translateX(-50%);
   right:initial;
   top:initial;
}

.signIn-signUp{
    width:100%;
    left:50%;
    top:98%;
    transform: translate(-50%,-100%);
}

.panel-container{
    left:0;
    grid-template-columns: 1 fr;
    grid-template-rows: 1fr 2fr;
}

.panel{
    margin-left:25%;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    padding:40px 8%;
    
}

.panel .content{
    padding-right:15%;

}

.panel h3{
    font-size: 19px;
}
.panel p{
    font-size:0.7rem;
    padding:0.5rem 0 ;
    
}

 .transparent{
    width: 110px;
    height:35px;
    font-size: 0.7rem;
    margin-top:10px;
}

.image{
    width:200px;
}

.input-field input{
    margin-left:16px;
    line-height: 1;
    font-weight: 550;
    font-size:18px;
    color:#757575
    
}

.faUser {
    margin-top:15px;
    margin-left:10px;
    color:#acacac;
    font-size: 20px;
}

.input-field{
    width:290px;
}

}

`

