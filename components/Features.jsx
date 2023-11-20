import React from "react";
import collaboration_teams from '@/public/collaboration_teams.png';
import cloud_storage from '@/public/cloud_storage.png';
import daily_analytics from '@/public/daily_analytics.png';
import Image from "next/image";

const Features = () => {
  return (
    <div className="feature_main">

    {/* 1st section horizontal */}
    <div className="section_one">
        <h3 className="feature_header" >Our Features you can get</h3>
        <p className="feature_para" >We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
        <button className="feature_btn" >Get Started</button>
    </div>

    {/* 2nd section horizontal  */}
    <div className="section_two">
        <div  className="section_two_collab">

            <Image 
            className="collaboration"
            src={collaboration_teams}
            alt="collaboration_teams"/>
            <p className="collab_para">Collboration Teams </p>
            <p className="collab_desc">Here you can handle projects together with team virtually</p>
        </div>

        <div className="section_two_cloud">
             <Image 
            className="cloud"
            src={cloud_storage}
            alt="cloud_storage"/>
            <p className="cloud_para" >Cloud Storage </p>
            <p className="cloud_desc">No nedd to worry about storage because we provide storage up to 2 TB</p>
        </div>
           <div className="section_two_daily">
             <Image 
            className="daily"
            src={daily_analytics}
            alt="daily_analytics"/>
            <p className="daily_para" >Daily Analytics</p>
            <p className="daily_desc">We always provide useful informatin to make it easier for you every day</p>
           </div>
           
    </div>

    
    </div>
  )
};

export default Features;
