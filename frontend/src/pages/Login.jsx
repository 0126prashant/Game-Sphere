import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faLock} from "@fortawesome/free-solid-svg-icons";
import {faGoogle,faFacebookF,faTwitter} from "@fortawesome/free-brands-svg-icons";
import logo_login from "../utilites/img/logo_login.svg";
import {Link,useNavigate} from "react-router-dom"
import styled from "styled-components";
import Swal from "sweetalert2";
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginality } from '../redux/Authentication/action';



const Login = () => {

    const {loading,msg,error}=useSelector((store)=>{
        return {
            loading:store.authReducer.loading,
            msg:store.authReducer.msg,
            error:store.authReducer.isError,
            token:store.authReducer.token
        }
      },shallowEqual);


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [count,setCount]=useState(0);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    // const LoginAlert=(msg)=>{
       

       
    // }



    // Panel button
    const handleNavigate=()=>{
        navigate("/user/signUp")
    }

    


    const handleLogin=(e)=>{
      e.preventDefault();
      const obj={email,password};
      dispatch(loginality(obj)).then((data)=>{

        if(data.msg==="Please fill the all the required fields"){
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

       else if(data.msg==="User not found, Please register first"){
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

        else if(data.msg==="password is incorrect"){
           
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
    
        else if(data.msg==="User login in successfull"){
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
                title: `${data.msg}`
              })

              navigate("/products")
        }

        
      })
    }

    // useEffect(()=>{
    //     LoginAlert(data.msg)
    // },[msg])







  return (
    <DIV>
       <div className="container">
       <div className="forms-container">
        <div className="signIn-signUp">
         
         <form action="" className="sign-in-form" >
           
           <h2 className="title">Sign In</h2>

           <div className="input-field">
            <FontAwesomeIcon className="faUser" icon={faUser}/>
            <input type="email" 
                   placeholder='Email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />
           </div>

           <div className="input-field">
            <FontAwesomeIcon className="faUser" icon={faLock}/>
            <input type="password" 
                   placeholder='Password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   />
           </div>

          <input onClick={handleLogin} 
                  type="submit" 
                  value="Login" 
                 className='btn'/>

          <p className='social-text'>Or Sign in with Social Media</p>

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

       

<div className='panel right-panel'>
<div className='content'>
<h3> New User ?</h3>
<p>Sign up now to personalize your gaming profile, unlock custom skins and avatars, and make your mark in the gaming world.</p>

 <button  onClick={handleNavigate} className='btn transparent' id="signIpBtn">Sign Up</button>

</div>
<img className="image" src={logo_login} alt="logo_login"/>
</div>

</div>
 </div>
    </DIV>
  )
}

export default Login;



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
    background:linear-gradient(-45deg, #FF5722 , #F4511E);
    top:-10%;
    right:40%;
    transform: translateY(-50%);
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
    left:75%;
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

form.sign-in-form{
    z-index:2;
}

form.sign-up-form{
    z-index:1;
    opacity:0;
}

.title{
    font-size: 32px;
    color:#444;
    margin-bottom: 10px;

}

.input-field{
    max-width: 500px;
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
    left:0;
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

.right-panel{
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
        top:80%;
        transform: translate(-50%,-100%);
    }

    .panel-container{
        grid-template-columns: 1 fr;
        grid-template-rows: 1fr 2fr;
    }

    .panel{
        display: flex;
        margin-left:25%;
        flex-direction: row;
        justify-content: space-around;
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

    .btn.transparent{
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



