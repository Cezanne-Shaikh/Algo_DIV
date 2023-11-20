import React from "react";

const Navbar = () => {
  return (
    <div className="container">
    <div className="navbar-main">
     
        <p className="navbar_header" >Biccas</p>
      

     <div className="separator">
         <div className="navbar-links" style={{cursor:'pointer'}}>
          <p style={{margin:'0',fontSize:'18px',fontWeight:'500'}}>Home</p>
          <p style={{margin:'0',color:'#A6A6A6',fontSize:'16px',fontWeight:'500'}}>Product</p>
          <p style={{margin:'0',color:'#A6A6A6',fontSize:'16px',fontWeight:'500'}}>FAQ</p>
          <p style={{margin:'0',color:'#A6A6A6',fontSize:'16px',fontWeight:'500'}}>Blog</p>
          <p style={{margin:'0',color:'#A6A6A6',fontSize:'16px',fontWeight:'500'}}>About Us</p>
        </div>
</div>
     <div className="nav-btn">
        <p className="nav-btn_para" 
        style={{margin:'0',color:'#A6A6A6',fontSize:'16px',fontWeight:'500',cursor:'pointer'}}>Login</p>
        <button className="nav-btn-btn" 
        style={{margin:'0',backgroundColor:'#54BD95',padding:'9px',border:'1px solid #54BD95' ,borderRadius:'10px',color:'#F8F8FA',cursor:'pointer'}}>Sign Up</button>
      </div> 
      

    </div>
    </div>
  );
};

export default Navbar;
