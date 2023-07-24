
import {styled} from "styled-components"
import tickLogo from "./images/tick.png";
import { useNavigate } from "react-router-dom";
const Confirmation = () => {
    const navigate=useNavigate();
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

            <li class="active form-3-progressbar">
                <div>
                <p>3</p>
                </div>
            </li>
        </ul>
       </div>
            

          <div class="thanks">
           <img src={tickLogo} alt="tickLogo"/>
           <h4>Thank You!</h4>
           <p>Your order has been successfully placed</p>
           

           <button onClick={()=>navigate("/")} type="button">Go To Homepage</button>
          </div>

        </div>
    </DIV>
  )
}

export default Confirmation;


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
    width:100%;
    padding: 40px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15); 
    border-radius: 5px;
   

}

.thanks{
   
    position:absolute;
    top:60%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
    padding:0 30px 30px;
    color:#333;


}

.thanks img{
    width:50px;
    margin-top: -10px;
    margin-left:41%;
    border-radius:50px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);

}

.thanks h4{
    font-size:25px;
    font-weight: 500;
    margin:30px 0 10px;
}

.thanks button{
    width:100%;
    margin-top:50px;
    padding:10px 0;
    background-color: rgb(92, 107, 192);
    color:white;
    border:0;
    outline:none;
    cursor:pointer;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.2);
}

.thanks button:hover{
    background-color: dodgerblue;

}
.thanks p{
    font-weight: bold;
    color:dodgerblue;
}
`