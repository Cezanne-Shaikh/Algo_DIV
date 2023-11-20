import Image from "next/image";
import React from "react";
import vector from "@/public/Vector 32.png";
import play from "@/public/Play.svg";
import charlie from "@/public/charlie.png";
import credit from "@/public/credit-card.svg";
import database from "@/public/database.svg";
import message from "@/public/message.svg";
import tickmark from "@/public/tick-mark.svg";
import yellow from "@/public/yellow.svg";
import pink from "@/public/pink.svg";
import blue from "@/public/blue.svg";
import line from "@/public/hr_line.svg";
import bar from "@/public/bar.svg";
import unsplash from '@/public/unsplash.svg';
import notion from '@/public/logo_notion.png';
// import notion from '@/public/notion.svg';
import intercom from '@/public/intercom.svg';
import descript from'@/public/descript.svg';
import grammarly from '@/public/grammly.svg';


const Hero = () => {
  return (
    <div >
      <div className="hero-main">
        {/* left side */}
        <div className="left_section_hero">
          
          <p className="hero_header" >
            We're here to Increase your Productivity
          </p>

          <Image className="vector_img" 
          src={vector} alt="vector" style={{ margin: "30px 0 0" }} />

          <p
          className="hero_para  "
          >
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>

          <div className="trail-btn">
            <button
            className="free_trail">
              Try free trial
            </button>

            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <Image src={play} alt="play" width={31} height={31} />

              <p className="demo" >
                {" "}
                View Demo
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="right_section">
          <div className="hero_image">
            <Image className="charlie" 
            src={charlie} alt="charlie" width={410} height={526} />
            <Image
            className="credit_card"
              style={{ position: "absolute", right: "-100px", bottom: "16px" }}
              src={credit}
              alt="credit-card"
            />
            <Image
              // className="database_image"
              style={{
                position: "absolute",
                top: "40px",
                right: "-18px",
                zIndex: "1",
              }} 
              src={database}
              alt="database"
              width={29}
            />
            <Image
              src={yellow}
              alt="yellow"
              style={{
                position: "absolute",
                top: "26px",
                right: "-35px",
                zIndex: "0",
              }}
            />

            <Image
              src={pink}
              alt="pink"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "56px",
                zIndex: "0",
              }}
            />
            <Image
              src={message}
              alt="message"
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "65px",
                zIndex: "1",
              }}
            />

            <Image
              src={blue}
              alt="blue"
              style={{ position: "absolute", left: "-60px", top: "175px" }}
            />

            <Image
              src={tickmark}
              alt="tickmark"
              style={{ position: "absolute", left: "-46px", top: "192px" }}
            />

            {/* top rectangle */}
            <div
            className="top_rectangle"
              style={{
                width: "262px",
                height: "78px",
                backgroundColor: "#FFFFFF",
                position: "absolute",
                top: "30px",
                left: "-170px",
                display: "flex",
                gap: "80px",
                padding: "5px",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <div style={{ padding: "5px" }}>
                <p
                  style={{
                    margin: "8px 0",
                    color: "#A9A7B6",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Enter amount
                </p>
                <p
                  style={{
                    margin: "8px 0",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  $450..00
                </p>
              </div>
              <button
                style={{
                  color: "white",
                  margin: "0 ",
                  background: "#52BD94",
                  border: "1px solid #52BD94",
                  borderRadius: "40px",
                  width: "64px",
                  height: "28px",
                }}
              >
                Send
              </button>

              <Image
                src={line}
                alt="line"
                style={{ position: "absolute", top: "68px" }}
              />
            </div>

            {/* bottom rectangle */}
            <div
              style={{
                width: "138px",
                height: "70px",
                backgroundColor: "#FFFFFF",
                position: "absolute",
                bottom: "35px",
                left: "-65px",
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
              <div
                style={{ display: "flex", gap: "28px", alignItems: "center" }}
              >
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
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="bottom-main">
      <div className="bottom_section-hero">
      <p className="bottom_section-hero_header" >More than 25,000 teams use Collabs</p>
      {/* Collaborators logos */}
      <div className="bottom_collabs">
        {/* unsplash */}
                  <div style={{display:'flex',gap:'6px'}}>
                    <Image 
                    src={unsplash}
                    alt="unsplash"
                    className="unsplash"/>
                    <p className="unsplash_para" >Unsplash</p>
                  </div>
                  {/* Notion */}
                  <div style={{display:'flex',gap:'6px'}} >
                    <Image 
                    src={notion}
                    alt="unsplash"
                    width={30}
                    className="notion"
                    style={{opacity:'40%'}}
                //    check for graysacling of the image
                   />
                    <p className="notion_para">Notion</p>
                  </div>
                  {/* Intercom */}
                  <div style={{display:'flex',gap:'6px'}}>
                    <Image 
                    src={intercom}
                    alt="unsplash"
                    className="intercom"/>
                    <p className="intercom_para" >INTERCOM</p>
                  </div>
                  {/* descript */}
                  <div style={{display:'flex',gap:'6px'}}>
                    <Image 
                    src={descript}
                    alt="unsplash"
                    className="descript"/>
                    <p className="descript_para" >descript</p>
                  </div>
                  {/* grammarly */}
                  <div style={{display:'flex',gap:'6px',alignItems:"center"}}>
                    <Image 
                    src={grammarly}
                    alt="unsplash"
                    className="grammarly"
                    style={{background:'#A6A6A6',padding:'4px',borderRadius:'50%'}}/>
                    <p className="grammarly_para">grammarly</p>
                  </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
