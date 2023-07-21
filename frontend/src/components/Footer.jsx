import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faInstagram,faLinkedin,faYoutube, } from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";
import {Link} from "react-router-dom";
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
     <FOOTER>
       <div class="content">


       <div class="top">

       <div class="logo-details">
        <FontAwesomeIcon icon={faGamepad}/>
       <span className="logo-name">GameFly</span>
       </div>
  
<div class="media-icons">

<Link to="#"> <FontAwesomeIcon icon={faFacebookF}/></Link>
<Link to="#"> <FontAwesomeIcon icon={faTwitter}/></Link>
<Link to="#"> <FontAwesomeIcon icon={faInstagram}/></Link>
<Link to="#"> <FontAwesomeIcon icon={faLinkedin}/></Link>
<Link to="#"> <FontAwesomeIcon icon={faYoutube}/></Link>
</div>
</div>
<hr/>

<div class="link-boxes">

<ul class="box">
    <li class="link-name">COMPANY</li>
    <li><Link to="#">About us</Link></li>
    <li><Link to="#">GameFly's Vision</Link></li>
    <li><Link to="#">Video Gaming</Link></li>
    <li><Link to="#">Podcast Network</Link></li>
    <li><Link to="#">Press</Link></li>
    <li><Link to="#">Sitemap</Link></li>
</ul>

<ul class="box">
    <li class="link-name">SERVICES</li>
    <li><Link to="#">Events</Link></li>
    <li><Link to="#">Jobs</Link></li>
    <li><Link to="#">Affiliate Program</Link></li>
    <li><Link to="#">Advertising Inquiries</Link></li>
</ul>

<ul class="box">
    <li class="link-name">GET HELP</li>
    <li><Link to="#">Contact & FAQ</Link></li>
    <li><Link to="#">Orders & Returns</Link></li>
    <li><Link to="#">GameFly Trade</Link></li>
    <li><Link to="#">Gift Cards</Link></li>
    <li><Link to="#">Request a Catalog</Link></li>
</ul>

<ul class="box">
    <li class="link-name">EXPLORE</li>
    <li><Link to="#">The Shop</Link></li>
    <li><Link to="#">Game</Link></li>
    <li><Link to="#">Travel</Link></li>
    <li><Link to="#">Video</Link></li>
    <li><Link to="#">Hotline</Link></li>
</ul>

<ul class="box input-box">
<li class="link-name">SUBSCRIBE</li>
<li><input type="text" placeholder="Enter your email"/></li>
<li><input type="button" value="Subscribe"/></li>

</ul>
</div>

</div>
  
  <div class="bottom-details">
    <div class="bottom-text">
        <span class="copyright-text">Copyright & #915; June,2023 <Link to="#">.</Link>All rights are reserved</span>
        <span class="policy-terms">
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms & Conditions</Link>
        </span>
    </div>
  </div>
  
  
     </FOOTER>
    )
  }
  
  export default Footer;

  const FOOTER=styled.footer`
  
  /* position:fixed; */
  background: #9E9E9E;
  width:100%;
  bottom:0;
  left:0;
  
  .content{
    max-width:1250px;
    margin:auto;
    padding:30px 40px 40px 40px;
  }

  .content .top{
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom: 40px;
  }
  
  .content .top .logo-details{
    color: #fff;
    font-size: 30px;
  }

  .content .top .media-icons{
    display:flex;

  }

  .content .top .media-icons a{
    height:40px;
    width:40px;
    background:red;
    margin:0 8px;
    border-radius:50px;
    text-align: center;
    line-height: 40px;
    color:#fff;
    font-size:17px;
    text-decoration: none;
    transition: all 0.4s ease;


  }

  .top .media-icons a:nth-child(1){
    background: #4267B2;
  }
  .top .media-icons a:nth-child(1):hover{
    color:#4267B2;
    background:#fff;
  }

  .top .media-icons a:nth-child(2){
    background: #1DA1F2;
  }
  .top .media-icons a:nth-child(2):hover{
    color:#1DA1F2;
    background:#fff;
  }

  .top .media-icons a:nth-child(3){
    background: #E1306C;
  }
  .top .media-icons a:nth-child(3):hover{
    color:#E1306C;
    background:#fff;
  }

  .top .media-icons a:nth-child(4){
    background: #0077B5;
  }
  .top .media-icons a:nth-child(4):hover{
    color:#0077B5;
    background:#fff;
  }

  .top .media-icons a:nth-child(5){
    background: #FF0000;
  }
  .top .media-icons a:nth-child(5):hover{
    color:#FF0000;
    background:#fff;
  }

  .content .link-boxes{
    width:100%;
    display:flex;
    justify-content: space-between;

  }

  .content .link-boxes .box{
    width:calc(100% / 5 - 10px);

  }

  .content .link-boxes .box .link-name{
    color:#fff;
    font-size:18px;
    font-weight: 400;
    margin-bottom: 10px;
    position:relative;
  }

  .content .link-boxes .box .link-name::before{
    content:" ";
    position: absolute;
    height: 2px;
    width:35px;
    background: #fff;
    left:0;
    bottom:-2px;
  }

  .content .link-boxes .box li{
    list-style: none;
    margin:8px 0;
  }

  .content .link-boxes .box li a{
    text-decoration:none;
    font-size:16px;
    font-weight:400;
    color:#fff;
    opacity:0.8;
    transition:all 0.4 ease;
  }

  .content .link-boxes .box li a:hover{
    opacity:1;
    text-decoration: underline;
  }

  .content .link-boxes .input-box{
    margin-right:100px;
    
  }

  .link-boxes .input-box input{
    height:40px;
    width:calc(100% + 55px);
    outline:none;
    border:2px solid #AFAFB6;
    background:#9E9E9E;
    padding:0 15px;
    font-size:15px;
    color:#fff;
    margin-top: 10px;

    
  }

  .link-boxes .input-box input::placeholder{
    color:#AFAFB6;
    font-size:16px;
  }

  .link-boxes .input-box input[type="button"]{
    background:#fff;
    color:#140B5C;
    border:none;
    font-size:18px;
    font-weight:500;
    margin:4px 0;
    opacity:0.8;
    transition:all 0.4s ease;

  }

  .input-box input[type="button"]:hover{
    opacity:1;
    cursor:pointer;
    border-radius: 5px;


  }
  
// Bottom details

.bottom-details{
    width:100%;
    background: #757575;

}

.bottom-details .bottom-text{
    max-width:1250px;
    margin:auto;
    padding:20px 40px;
    display:flex;
    justify-content: space-between;
}

.bottom-details .bottom-text span,
.bottom-details .bottom-text a{
   font-size:14px;
   color:#fff;
   font-weight: 300;
   opacity:0.8;
   text-decoration: none;
}

.bottom-details .bottom-text a{
   margin-right:10px;
}

.bottom-details .bottom-text a:hover{
    opacity:1;
    text-decoration:underline;
}

.logo-name{
    margin-left:10px;
}


//Media Quaries
@media (max-width:900px){
    .content .link-boxes{
        flex-wrap:wrap;
    }
    .content .link-boxes .input-box{
        width:40%;
        margin-top:10px;
    }
}

@media (max-width:700px){
   position:relative;
    .content .top .logo-details{
        font-size:26px;
    }
    .content .top .media-icons a{
        height:35px;
        width:35px;
        font-size:14px;
        line-height:35px;
    }
    
    .content .link-boxes .box{
        width:calc(100% / 3 - 10px);
    }

    .content .link-boxes .input-box{
        width:60%;
    }
    .bottom-details .bottom-text span,
.bottom-details .bottom-text a{
   font-size:12px;
   
}

@media (max-width:500px){
    ::before{
        top:145px;
    }
  .content .top{
    flex-direction: column;

  }
  .content .top .media-icons{
    margin-top:16px;
  }

  .content .link-boxes .input-box{
    width:100%;
  }

  .content .link-boxes .box{
        width:calc(100% / 2 - 10px);
        margin-top: 60%;
    }


}

}

  `