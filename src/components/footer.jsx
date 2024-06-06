import React from "react";
import imagineLogo from "../assets/imagineLogo.png";
import fb from '../assets/facebook.png'
import insta from '../assets/Insta.png'
import twitter from '../assets/X.png'
import Linkedin from '../assets/Linkedinn.png'
const platforms = [
  "Platform",
  "Configurators",
  "Silhouettes",
  "Lifestyle Imagery",
  "Vignettes",
  "Augmented Reality",
  "Video",
];
const solutions = [
  "Solutions",
  "Marketing",
  "NPD",
  "Photography",
  "Sales",
  "CGI Management",
  "IT",
  "Design",
  "Ecommerce",
];
const industries = [
  "Industries",
  "Accessories",
  "Appliances",
  "Case Goods",
  "Commercial",
  "Furniture",
  "Lighting",
  "Mattresses",
  "Outdoor",
  "Retail",
  "Rugs",
  "Textiles",
  "Company",
  "About",
  "Careers",
  "Resources",
  "Blog",
  "Success Stories",
  "Webinars",
  "Pricing",
];
const company = ["Company", "About", "careers"];
const resources = [
  "Resources",
  "Blog",
  "Success Stories",
  "Webinars",
  "Pricing",
];
const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#1B1B1E",
        justifyContent: "space-between",
        flexDirection:"column",
        width: "100%",
        padding: "5% 10%",
      }}
    > 
     <div style={{  display: "flex",
        backgroundColor: "#1B1B1E",
        justifyContent: "space-between",borderBottom:"1px solid #737373",paddingBottom:"30px"}}>
     <div
        style={{
          width: "100%",
          color: "white",
          display: "flex",
          backgroundColor: "#1B1B1E",
          flexDirection: "column",
          gap: "30px",
        }}
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
          <img src={imagineLogo} width="30%" alt="imagineLogo" />
        </div>
        <div>
          <div style={{ fontSize: "36px" }}>Choose a</div>
          <div style={{ fontSize: "45px" }}>Better Way to Create</div>
        </div>
        <div
          style={{
            background: "linear-gradient(0deg, #F46A34 0%, #CA4613 100%)",
            borderRadius: "30px",
            padding: "15px",
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
          }}
        >
          Try it for Free
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <div
          style={{
            color: "white",
            fontSize: "15px",
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div>
            {platforms.map((item, i) => (
              <div style={{ color: i === 0 ? "white" : "#808080" }}>{item}</div>
            ))}
          </div>
          <div>
            {solutions.map((item, i) => (
              <div style={{ color: i === 0 ? "white" : "#808080" }}>{item}</div>
            ))}
          </div>
          <div>
            {industries.map((item, i) => (
              <div style={{ color: i === 0 ? "white" : "#808080" }}>{item}</div>
            ))}
          </div>
          <div>
            {company.map((item, i) => (
              <div style={{ color: i === 0 ? "white" : "#808080" }}>{item}</div>
            ))}
          </div>
          <div>
            {resources.map((item, i) => (
              <div style={{ color: i === 0 ? "white" : "#808080" }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
     </div>
    <div  style={{
        display: "flex",
        backgroundColor: "#1B1B1E",
        justifyContent: "space-between",
        // width: "100%",
        margin: "3% 0%",
        color:"white"
      }}>
     <div>
     2024 Imagine.io. All rights reverved
     </div>
     <div style={{  display: "flex",
        backgroundColor: "#1B1B1E",
        justifyContent: "space-between",gap:"50px"}}>
     <div>
        Contact
     </div>
     <div>
        Privacy
     </div>
     <div>
        Terms
     </div>
     </div>
     <div style={{  display: "flex",
        backgroundColor: "#1B1B1E",
        justifyContent: "space-between",gap:"30px"}}>
     <div>
     <img src={fb} />     </div>
     <div>
     <img src={twitter} />
     </div>
     <div>
     <img src={insta} />
     </div>
     <div>
     <img src={Linkedin} />
     </div>
     </div>
    </div>
    </div>
  );
};

export default Footer;
