import React from "react";
import green_trick from "@/public/green_tick.svg";
import Image from "next/image";
import laptop from "@/public/laptop.png";
import profile from "@/public/profile_pic.svg";
import message from "@/public/message-circle.svg";
import bar from "@/public/bar.svg";
import tickmark from "@/public/circle_tickmark.svg";
import gallery from "@/public/gallery.svg";
import green_rect from "@/public/green_rect.png";

const Benefits = () => {
  return (
    <div className="benefit_main">
      {/* left side */}
      <div className="benefit_left">
        <h3 
        className="benefit_header">
          What Benifit Will You Get
        </h3>
        <div 
        className="benefits">

          <div style={{display:'flex',gap:'20px'}}>
            <Image src={green_trick} alt="green_tick" />
          <p style={{ margin: "0", fontSize: "18px", fontWeight: "500" }}>
            Free Consulting With Experet Saving Money
          </p>
          </div>
          
          <div style={{display:'flex',gap:'20px',margin:'30px 0 0'}} >
          <Image src={green_trick} alt="green_tick" />
          <p style={{ margin: "0", fontSize: "18px", fontWeight: "500" }}>
            Online Banking
          </p>
          </div>

          <div style={{display:'flex',gap:'20px',margin:'30px 0 0'}}>
          <Image src={green_trick} alt="green_tick" />
          <p style={{ margin: "0", fontSize: "18px", fontWeight: "500" }}>
            Investment Report Every Month
          </p>
          </div>

        <div style={{display:'flex',gap:'20px',margin:'30px 0 0'}}>
        <Image src={green_trick} alt="green_tick" />
          <p style={{ margin: "0", fontSize: "18px", fontWeight: "500" }}>
            Saving Money For The Future
          </p>
        </div>

        <div style={{display:'flex',gap:'20px',margin:'30px 0 0'}}>
        <Image src={green_trick} alt="green_tick" />
          <p style={{ margin: "0", fontSize: "18px", fontWeight: "500" }}>
            Online Transection
          </p>
        </div>

        </div>
      </div>
      {/* right side */}
      <div className="benefit_right">
        <div className="laptop_image">
          <Image src={laptop} alt="laptop" className="laptop"/>
          {/* profile-photo section */}
          <div
          className="profile_photo"
            style={{
              position: "absolute",
              top: "30px",
              left: "-128px",
              width: "304px",
              height: "82px",
              background: "white",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <Image
              src={profile}
              alt="profile"
              style={{ margin: "12px 20px" }}
            />
            <div className="name">
              <p
                style={{
                  margin: "18px 0 0",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Amanda Young
              </p>
              <p
                style={{
                  margin: "10px 0",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#A6A6A6",
                }}
              >
                Expert Saving Money
              </p>
            </div>
            <Image
              src={message}
              alt="message"
              style={{
                background: "#74C9A9",
                padding: "10px",
                borderRadius: "50%",
                marginLeft: "34px",
              }}
            />
          </div>

          {/* total income side */}
          <div
            style={{
              width: "138px",
              height: "70px",
              backgroundColor: "#FFFFFF",
              position: "absolute",
              top: "120px",
              right: "-80px",
              padding: "2px",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                margin: "10px 4px",
                padding: "2px",
                color: "#A9A7B6",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Total Income
            </p>
            <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
              <p
                style={{
                  margin: "0 4px",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "2px",
                }}
              >
                $245.00
              </p>
              <Image src={bar} alt="bar" />
            </div>
          </div>

          {/*Money transfer box  */}
          <div
            style={{
              width: "302px",
              height: "68px",
              background: "white",
              position: "absolute",
              bottom: "-10px",
              left: "-100px",
              borderRadius: "10px",
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Image
              src={tickmark}
              alt="tickmark"
              style={{ marginLeft: "20px" }}
            />
            <p style={{ margin: "0", fontSize: "18px", fontWeight: "400" }}>
              Money Transfer Succesfull
            </p>
          </div>

          {/* Gallery icon */}
          <div style={{position:'absolute',left:'-60px',top:'272px',zIndex:'0'}}>
                <Image 
            src={green_rect}
            alt="green_rect"/>
                <Image 
                src={gallery}
                alt="gallery"
                style={{position:'absolute',left:'9px',bottom:'14px'}}/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
