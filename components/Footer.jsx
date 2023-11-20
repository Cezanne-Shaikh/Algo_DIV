import React from "react";
import quote from '@/public/quotes.svg';
import Image from "next/image";
import person1 from '@/public/person1.svg';
import person2 from '@/public/person2.svg';
import person3 from '@/public/person3.svg';
import person4 from '@/public/person4.svg';
import personplay from '@/public/personplay.svg';
import crypto from '@/public/crytpo.svg';
import arrow_right from '@/public/right_arrow.svg';


const Footer = () => {
  return (
    
    <div style={{backgroundColor:'#161C28'}}>
    <div className="footer_main">
      {/* left side */}
      <div className="left_side_footer">
     <p className="footer_header">People are Saying About DoWhith</p>
     <p className="footer_para" >Everything you need to accept to payment and grow <br />your money of manage anywhere on planet</p>
     <Image
     src={quote}
     alt="quote"
     style={{margin:'40px 0 0'}}
     className="quote" />
     <p className="footer_desc" >I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life,even I can pay a short time 😍</p>
     <p style={{fontSize:'18px',color:'#A6A6A6',fontWeight:'500'}}>_ Aria Zinanrio</p>

    {/* peoples images */}
    <div className="footer_people" >
        <Image 
        src={person1}
        alt="person1"/>
        <Image 
        src={person2}
        alt="person1"/>
        <Image 
        src={person3}
        alt="person1"/>
        <Image 
        src={person4}
        alt="person1"/>
        <Image 
        src={personplay}
        alt="person1"/>
    </div>
      </div>

      {/* right side */}
      <div className="right_side_footer" >
            <Image 
            src={crypto}
            alt="crytpo"
            style={{margin:'40px 0 0'}}/>
            <p style={{fontSize:'30px',fontWeight:'500',color:'white',margin:'10px 0 0'}}>Get Started</p>
            {/* form */}
           <div className="footer_form" style={{width:'100%'}}>
            <p className="Email_form" style={{fontSize:'18px',fontWeight:'500'}}>Email</p>
            <input 
            className="input_form"
            type="text" style={{width:'440px',height:'50px',borderRadius:'10px',border:'1px solid white',outline:'none'}} 
            placeholder="Enter your email"/>

            <p className="Message_form" style={{fontSize:'18px',fontWeight:'500'}}>Message</p>
            <input 
            className="input_form"
            type="text" style={{width:'440px',height:'80px',borderRadius:'10px',border:'1px solid white',outline:'none'}} 
            placeholder="What are you say ?"/>

            <button style={{margin:'20px 0',width:'449px',height:'60px',color:'white',fontSize:'18px',background:'#54BD95',fontWeight:'600',borderRadius:'10px'}}>Request Demo</button>

            <p style={{margin:'0',textAlign:'right',fontSize:'14px',fontWeight:'500',marginRight:'50px'}}><span style={{color:'#A6A6A6'}}>or</span> Start Free Trial</p>           
           </div>
      </div>

    </div>
      {/* bottom section */}
      <div className="bottom_section-footer"> 
      {/* left-side */}
            <div className="bottom_email">
               <h3 className="bottom_header">Biccas</h3>
               <p className="bottom_para">Get started noew try our product</p>
               <input 
               className="footer_placeholder"
               type="text" 
               placeholder="Enter your email here"/>
               <Image
               src={arrow_right} 
               alt="arrow_right"
               style={{margin:'0 -50px -10px',background:'#54BD95',borderRadius:'50%',padding:'5px'}}
               className="input_arrow"/>
              
            </div>
            {/* right-side */}

            <div className="footer_links">
                {/* suuport */}
                <div>
                    <p style={{fontSize:'18px',fontWeight:'500'}}>Support</p>
                    <div style={{color:'#A6A6A6',fontSize:'18px',fontWeight:'500'}}>
                        <p>Help centre</p>
                    <p>Account information</p>
                    <p>About</p>
                    <p>Contact us</p>
                    </div>
                    
                </div>
                {/* help and solutoin */}
                <div>
                    <p style={{fontSize:'18px',fontWeight:'500'}}>Help and Solution</p>
                    <div style={{color:'#A6A6A6',fontSize:'18px',fontWeight:'500'}}>
                        <p>Talk to support</p>
                    <p>Support docs</p>
                    <p>System status</p>
                    <p>Covid responde</p>
                    </div>
                    
                </div>
                {/* product */}
                <div>
                    <p style={{marginBottom:'10px'}}>Product</p>
                    <div style={{color:'#A6A6A6',fontSize:'18px',fontWeight:'500'}}>
                         <p>Security</p>
                    <p>Beta test</p>
                    <p>About</p>
                    <p>Pricing product</p>
                    </div>
                   
                </div>
            </div>
      </div>
            {/* terms and conditions */}
            <div className="terms_cond" >
                 <p className="copyright" >© 2022 Biccas Inc. Copyright and rights reserved</p>
                 <p className="terms">Terms and Condtions &bull; Privacy Policy</p>
            </div>
    </div>
  )
};

export default Footer;
