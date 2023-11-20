import Image from "next/image";
import React from "react";
import five from '@/public/five_stars.svg';
import four from '@/public/four_stars.svg';
import pulse from '@/public/pulse.svg';
import piechart from '@/public/pie-chart.svg';
import command from '@/public/command.svg';

const Support = () => {
  return (
    
    <div className="support_main">
        {/* left side */}
        
        <div className="left_side_support">
    <p className="support_header">
    How we support our pratner all over the world
    </p>
    <p className="support_desc">
    SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
    </p>
    <div className="rating_support">
       {/* 4.9 */}
       <div>
         <Image 
        src={five}
        alt="five"
        />
        <p style={{fontWeight:'400' ,fontSize:'18px'}}><span style={{fontWeight:'700' ,fontSize:'18px'}}>4.9</span> / 5 rating</p>
        <p style={{color:'#A6A6A6',fontWeight:'700',fontSize:'18px'}}>databricks</p>
       </div>

       {/* 4.8 */}
       <div >
         <Image 
        src={four}
        alt="four"
        />
        <p style={{fontWeight:'400' ,fontSize:'18px'}}><span style={{fontWeight:'700' ,fontSize:'18px'}}>4.8</span> / 5 rating</p>
        <p style={{color:'#A6A6A6',fontWeight:'700',fontSize:'18px'}}>Chainalysis</p>
       </div>
    </div>
        </div>
        {/* right side */}
        <div className="right_side_support">
            {/* Publishing */}
            <div 
            style={{display:'flex',alignItems:'start',gap:'20px'}}>
                <Image 
                src={pulse}
                alt="pulse"
                className="publishing_img"
                style={{background:'#FFFFFF',padding:'6px'}}/>
                <div style={{textAlign:'start'}}>
                    <p className="publishing_text" >Publishing</p>
                    <p className="publishing_desc" >Plan, collaborate, and publishing your content that drivees meaningful engagement and growth for your barnd</p>
                </div>
            </div>

            {/* Analytics */}
            <div style={{display:'flex',alignItems:'start',gap:'20px',margin:' 0'}}>
                <Image 
                src={piechart}
                alt="piechart"
                className="analytics_img"
                style={{background:'#FFFFFF',padding:'6px'}}/>
                <div style={{textAlign:'start'}}>
                    <p className="analytics_text">Analytics</p>
                    <p className="analytics_desc">Analyze your performance and create goegeous report</p>
                </div>
            </div>

            {/* Engagement */}
            <div style={{display:'flex',alignItems:'start',gap:'20px',margin:'33px 0'}}>
                <Image 
                src={command}
                alt="command"
                className="engagement_img"
                style={{background:'#FFFFFF',padding:'6px'}}/>
                <div style={{textAlign:'start'}}>
                    <p className="engagement_text" >Engagement</p>
                    <p className="engagement_desc" >Quiuckly navigate you anda engage with your adience</p>
                </div>
            </div>
        </div>
        </div>
  )
};

export default Support;
