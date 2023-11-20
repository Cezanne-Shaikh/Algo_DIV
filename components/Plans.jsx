import React from "react";
import green_trick from "@/public/green_tick.svg";
import Image from "next/image";
import pro_plan from '@/public/pro_plan.png';
const Plans = () => {
  return (
    <div className="plans_main">
      {/* center text */}
      <div className="plans_center" >
        <h3 className="plans_header" >Choose Plan <br /> That's Right For You</h3>
        <p className="plans_para">Choose plan that works best for you, feel free to contact us</p>

        <div className="plans_type_box">
            <p className="plans_type_para" >Bill Monthly</p>
            <button className="plans_type_btn" >Bill Yearly</button>
        </div>
      </div>
      {/* three plans boxes */}
      <div className="plans" >
        {/* Free plan */}
            <div className="free_plan" >
                <p style={{margin:'40px 0 0',fontSize:'30px',fontWeight:'600',textAlign:'center'}}>Free</p>
                <p style={{margin:'10px 0',fontSize:'18px',fontWeight:'500',color:'#A6A6A6',lineHeight:'27px',textAlign:'center'}}>Have a go  and test your <br /> superpowers</p>
                <p style={{margin:'13px 0 0 150px',fontSize:'18px',color:'#A6A6A6'}}>$</p>
                <p style={{margin:'-15px 0 0 165px',fontWeight:'600',fontSize:'50px'}}>0</p>
                {/* inner box */}
                <div className="free_inner" >
                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'28px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>2 Users</p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>2 Files</p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>Public Share & Comments</p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>Chat Support </p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>New income apps</p>
                    </div>

                    {/* button */}
                    <button style={{background:'#FFFFFF',width:'260px',height:'64px',border:'1px solid white',borderRadius:'20px',boxShadow:' 0px 4px 9px rgba(0, 0, 0, 0.05)',margin:'18px 0 0 37px',color:'#54BD95',fontSize:'18px',fontWeight:'600',cursor:'pointer'}}>Signup for free</button>
                </div>
            </div>

            {/* Pro Plan */}
            <div className="pro_plan">
                <Image 
                src={pro_plan}
                alt="pro_plan"
                width={374}
                height={684}
                className="pro_img"
                />
            </div>


            {/* Business Plan */}
            <div className="business_plan" >
                <p style={{margin:'40px 0 0',fontSize:'30px',fontWeight:'600',textAlign:'center'}}>Business</p>
                <p style={{margin:'10px 0',fontSize:'18px',fontWeight:'500',color:'#A6A6A6',lineHeight:'27px',textAlign:'center'}}>Unveil new superpowers and <br /> join the Design Leaque</p>
                <p style={{margin:'13px 0 0 150px',fontSize:'18px',color:'#A6A6A6'}}>$</p>
                <p style={{margin:'-15px 0 0 165px',fontWeight:'600',fontSize:'50px'}}>16</p>
                {/* inner box */}
                <div className="business_inner" >
                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'28px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>All the features of pro plan</p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>Account success Manager</p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>Single Sign-On (SSO)</p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>Co-conception pogram </p>
                    </div>

                    <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <Image 
                        src={green_trick}
                        alt="greentick"
                        style={{margin:'26px 0 0 37px'}}/>
                        <p style={{margin:'26px 0 0 0',fontSize:'18px',fontWeight:'500'}}>Collaboration-Soon</p>
                    </div>

                    {/* button */}
                    <button style={{background:'#FFFFFF',width:'260px',height:'64px',border:'1px solid white',borderRadius:'20px',boxShadow:' 0px 4px 9px rgba(0, 0, 0, 0.05)',margin:'18px 0 0 37px',color:'#54BD95',fontSize:'18px',fontWeight:'600',cursor:'pointer'}}>Goto Business</button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Plans;
