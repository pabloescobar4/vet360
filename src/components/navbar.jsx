import React from "react";
import imagineLogo from '../assets/imagineLogo.png'
export const Navbar = () => {
  const routes = [
    "Platforms",
    "Solutions",
    "industries",
    "Company",
    "Resources",
    "Pricing",
  ];
  return (
    <div className="">
      <div
        style={{ display: "flex", justifyContent: "space-evenly", gap: "10px",alignItems:"center", }}
      >
        <div
          style={{
            color: "white",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
            <img src ={imagineLogo} alt="imagineLogo" width="70%"/>
        </div>
        <div   style={{
            color: "white",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}>
          {routes.map((route) => {
            return (
              <>
                <div style={{ color: "white" }}>{route}</div>
              </>
            );
          })}
        </div>
        <div style={{
            color: "white",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center", 
            gap: "20px",
          }}>
            <div>
                Login
            </div>
            <div style={{background: "linear-gradient(0deg, #F46A34 0%, #CA4613 100%)",borderRadius:"30px",padding:"15px"
}}>
                Start for Free
             
            </div>
        </div>
      </div>
    </div>
  );
};
