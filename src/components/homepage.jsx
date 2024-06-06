import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import woodenChair from "../assets/woodenChair.png";
import { GetStarted } from "./getStarted";
import woodenChair2 from "../assets/woodenChair2.png";
import sofaYellow from "../assets/sofayellow.png";
import sofaLshape from "../assets/sofaLshape.png";
import sofaColorSection from "../assets/sofaColorSection.png";
import Testimonials from "./testimonials";
import Faq from "./faq.jsx";
import { animateWithGsap } from "./animations.js";
import Slideshow from './slideshow.jsx';
import './homepage.css'
const milestones = [
  { label: 'A', percentage: 5 },
  { label: 'B', percentage: 20 },
  { label: 'C', percentage: 40 },
  { label: 'D', percentage: 80 },
  { label: 'E', percentage: 100 },
];

export const HomePage = () => {
  const products = ["Chair", "Bedset", "Lightning", "Sofa", "Accessories"];
  const [index,setIndex] = useState(0)
  useGSAP(() => {
    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap('#oneModel', { y:0, opacity:1})
  },[])
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 0));
    }, 100);

    return () => clearInterval(interval);
  }, []);
console.log(index,"index")
  return (
    <>
      <div className="">
        <div
        id="features_title" className="section-heading"
          style={{
            display: "flex",
            margin: "5%",
            padding: "2%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "60px", color: "white" }}>
            Product Configurators Made <div>Simple For eCommerce</div>
          </div>

          <div style={{ fontSize: "25px", color: "#B4B0B0" }}>
            Get product configurators in 30 days or less --guaranteed
          </div>

          <div
            style={{
              margin: "2% 2%",
              background: "linear-gradient(0deg, #F46A34 0%, #CA4613 100%)",
              borderRadius: "30px",
              padding: "15px",
              color: "white",
            }}
          >
            Book a Demo
          </div>
          <div
            style={{
              background: "#242222",
              width: "80%",
              padding: "5%",
              borderRadius: "30px",
            }}
          >
            <img
              src={woodenChair}
              width="100%"
              style={{ backgroundImage: "white" }}
            />
          </div>
          <div></div>
        </div>
      </div>
      <GetStarted />
      <div className="" style={{}}>
        <div
          style={{
            display: "flex",
            padding: "2% 0%",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              color: "white",
              flexDirection: "column",
              borderLeft: "1px solid gray",
               position:"absolute",
              left:"16.75%",
              height:"700px"
            }}
          >
         
            {products.map((product,i) => {
              return (
                <>
 
                  <div style={{ position:"relative",left:-5,color: index === i ?"#F46A34":"white",display:"flex",justifyContent:"start",alignItems:"center",gap:"30px",paddingLeft:"-15px" }}>
                  
                    <div style={{height:"10px",width:"10px",borderRadius:"10px",backgroundColor:index === i ?"#F46A34":"white"}}></div>
                    <div>{product}</div>
                    </div>
                </>
              );
            })}
          </div>
           {/* <div className="line-container">
      <div className="line">
        <div
          className="progress"
          style={{
            height: `${progress}%`,
            color:"white",
            background: `linear-gradient(to bottom, transparent ${progress}%, orange ${progress}%)`,
          }}
        ></div>
        {milestones.map((milestone, index) => (
          <>
             <div
            key={index}
            className="milestone"
            style={{ left: `${milestone.percentage}%` ,border:"1px solid red",height:milestone.percentage}}
          >
            {milestone.label}
          </div>
           <div className="percentage" style={{ top: `${progress}%` }}>
        {progress}%
      </div>
          </>
       
          
        ))}
      </div>
    </div> */}
          <div>

          </div>
          <div>
            
            <Slideshow setIndex={setIndex} />
          </div>
        </div>
      </div>

      {/* --------------------------text-section------------------------ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "2%",
        }}
      >
        <div id="oneModel" className="section-heading"  style={{ fontSize: "60px", margin: "7% 7%", width: "30%" ,}}>
          <div  style={{padding:"10px 0px"}} >One model.</div>
          <div  style={{padding:"10px 0px"}} >Unlimited variations</div>
        </div>
        <div
        id="oneModel" className="section-heading" 
          style={{
            fontSize: "25px",
            margin: "7% 7%",
            textAlign: "left",
            display: "flex",
            width: "30%",
            lineHeight:"1.2"
          }}
        >
          Modify components, materials, and more. Flexible pricing based on
          quantity, setup costs, colors, etc. Combination possibilities are
          endless.
        </div>
      </div>

      {/* --------------------------sofa-color-section------------------------ */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          width: "100%",
          padding: "2%",
        }}
      >
        <div>
          <img src={sofaYellow} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "4%",
          }}
        >
          <div>
            <img src={sofaLshape} />
          </div>
          <div>
            <img src={sofaColorSection} />
          </div>
        </div>
      </div>

      {/* --------------------------hear what our customers------------------------ */}
     <Testimonials />
     <Faq />

    </>
  );
};
