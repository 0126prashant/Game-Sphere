
import {styled} from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import mcLogo from "./images/mc.png";
import vcLogo from "./images/vi.png";
import pcLogo from "./images/pp.png";
import { useState } from "react";


const Payment = () => {
const navigate=useNavigate();
const [name,setName]=useState("");
const [cvv,setCvv]=useState("");
const [card,setCard]=useState("");
const [month,setMonth]=useState("");
const [year,setYear]=useState("");



  return (
    <DIV>
       <div class="container">
       <div class="header">
        <ul>
            <li class="active form-1-progressbar">
                <div>
                  <p>1</p>
                </div>
            </li>
            <li class="active form-2-progressbar">
                <div>
                <p>2</p>
                </div>
            </li>
            <li class="form-3-progressbar">
                <div>
                <p>3</p>
                </div>
            </li>
        </ul>
       </div>
       <div class="title">Confirm your Payment</div>
        <div class="first-row">
            <div class="owner">
            <span class="details">Name of the card holder <span class="star">*</span></span>
                <div class="input-field">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
            </div>
            <div class="cvv">
            <span class="details">CVV<span class="star">*</span></span>
                <div class="input-field">
                    <input type="password" value={cvv} onChange={(e)=>setCvv(e.target.value)}/>
                </div>
            </div>
        </div>
        <div class="second-row">
            <div class="card-number">
            <span class="details">Card Number <span class="star">*</span></span>
                <div class="input-field">
                    <input type="text" value={card} onChange={(e)=>setCard(e.target.value)}/>
                </div>
            </div>
        </div>
        <div class="third-row">
        <span class="details">Expiry Date <span class="star">*</span></span>
            <div class="selection">
                <div class="date">
                    <select name="months" id="months" value={month} onChange={(e)=>setMonth(e.target.value)}>
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                      <select name="years" id="years" value={year} onChange={(e)=>setMonth(e.target.value)}>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </select>
                </div>
                <div class="cards">
                    <img src={vcLogo} alt="" />
                    <img src={mcLogo} alt="" />
                    <img src={pcLogo} alt="" />
                </div>
            </div>    
        </div>
        <Link to="/product/confirmation/" >Confirm</Link>
    </div> 
    </DIV>
  )
}

export default Payment;

const DIV=styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #FF5722 , #F4511E);

    .header{
    margin-bottom:25px;
    display:flex;
    justify-content: center;  
}

.header ul{
    display:flex;
}

.header ul li{
    position:relative;
    margin-right:50px;

}

.header ul li:last-child{
    margin-right:0;
}

.header ul li::before{
    content:"";
    position:absolute;
    top:40%;
    transform: translateY((-50%));
    left:55px;
    width:100%;
    height:2px;
    background:navy;


}

.header ul li:last-child::before{
    display:none;
}

.header ul li div{
    padding:5px;
    border-radius: 50%;

}

.header ul li p{
   width:50px;
   height:50px;
   background: rgb(207, 216, 220);
   color:white;
   text-align: center;
   line-height: 50px;
   border-radius: 50%;


}


.header ul li.active::before,
.header ul li.active p{
    background: rgb(92, 107, 192);
}


    .container{
    max-width: 750px;
    height:600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content:space-around;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
  margin-bottom: 20px;
}

/* .container .title::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
} */

.first-row{
     display: flex;
}

.owner{
    width: 100%;
    margin-right: 40px;
}

.input-field{
    border: 1px solid #999;
}

.input-field input{
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-bottom-width: 2px;
    padding: 10px;
    transition: all 0.3s ease;

}

.owner, .cvv, .card-number{
    margin-bottom: 15px;
  
}

.selection{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.selection select{
    margin-right: 10px;
    font-weight: bold;
    width:70px;
}

a{
    background-color: rgb(92, 107, 192);
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px;
    font-size: 18px;
    transition: 0.5s;
    margin-top:20px;
}

a:hover{
    background-color: dodgerblue;
}
.cards{
    display: flex;

}
.cards img{
    width: 60px;
    margin-right:7px;
}


.details{
   display: block;
  font-weight: 500;
  margin-bottom: 5px;
  font-size:16px;
  display: flex;
  justify-content: start;
  margin-left:5px;
}

.star{
    color:rgb(244, 81, 30);
    font-size:16px;
    margin-left:3px;
  }



`