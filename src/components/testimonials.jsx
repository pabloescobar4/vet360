import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react'
import ModelBoy1 from "../assets/modelBoy1.png";
import ModelBoy2 from "../assets/modelBoy2.png";
import leftArrow from "../assets/ArrowLeft.png";
import rightArrow from "../assets/ArrowRight.png";
import Chairs from "../assets/chairs.png";
import { animateWithGsap } from "./animations.js";
const Testimonials = () => {
  useGSAP(() => {
    animateWithGsap('#test',{ y:0, opacity:1})
  },[])
  const containerStyle = {
    position: "relative",
    width: "300px", // Set the desired width
    height: "400px", // Set the desired height
  };
  const useTypewriter = (text, speed) => {
    const [displayText, setDisplayText] = useState("");
    const idx = useRef(0);
    const displayTextRef = useRef("");
    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (idx.current < text.length) {
          displayTextRef.current += text.charAt(idx.current);
          setDisplayText(() => displayTextRef.current);
          idx.current += 1;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
      return () => {
        setDisplayText("");
        clearInterval(typingInterval);
      };
    }, [text, speed]);
    return displayText;
  };
  let text = `“Our product configurators by imagine.io enhance our merchandising
  and customer buying experience. Customers can configure exactly what
  they want, which greatly shortens our sales cycle. We’ve seen a big
  increase in sales and their team is a pleasure to work with.”`
  const xy = useTypewriter(text,30)

  const imageStyle1 = {
    position: "absolute",
    top: "0",
    left: "0",
    objectFit: "cover",
    zIndex: 0,
    overflow: "initial",
  };

  const imageStyle2 = {
    position: "absolute",
    top: "0",
    left: "0",
    // width: '100%',
    // height: '100%',
    objectFit: "cover",
    zIndex: 2,
    // opacity: 0.5, // Optional: To make the second photo semi-transparent
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#1B1B1E",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px",
        width: "100%",
        padding: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
        id="#test"
        className="section-heading"
      >
        <div  style={{ color: "#828282", fontSize: "24px", margin: "20px" }}>
          Testimonials
        </div>
        <div style={{ color: "white", fontSize: "60px" }}>
          Hear what our customers have to say
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20%",
          padding: "4% 10%",
          margin: "3% 3%",
        }}
      >
        <div style={{ width: "1200px" }}>
          <div
            style={{height:"300px", color: "white", fontSize: "30px", marginBottom: "20px",animation:"caret 1s steps(1) infinite;" }}
          >
            {/* {useTypewriter("hello",1)} */}
            {xy}
            
          </div>
          <div style={{ width: "50%" }}>
            <div style={{ fontSize: "30px", color: "#EC4E0B" }}>Kim McRee</div>
            <div style={{ color: "#E9E6E6" }}>
              Visual Vice President of eCommerce, Mantle Furniture
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              width: "30%",
              margin: "20px",
            }}
          >
            <div
              style={{
                padding: "14px 24px",
                backgroundColor: "rgba(112, 112, 112, 0.4)",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={leftArrow} />
            </div>
            <div
              style={{
                padding: "14px 24px",
                backgroundColor: "rgba(112, 112, 112, 0.4)",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={rightArrow} />
            </div>
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <div style={containerStyle}>
            <img src={ModelBoy1} alt="Model Boy 1" style={imageStyle1} />
            <img src={ModelBoy2} alt="Model Boy 2" style={imageStyle2} />
          </div>
        </div>
      </div>

      {/* --------------------------easy implimentation---------------------- */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          padding: "7%",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexDirection: "column",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "130px",
              width: "70%",
              textAlign: "left",
              backgroundColor: "#FB6E30",
              padding: "30px",
              fontSize: "35px",
              borderRadius: "15px",
            }}
          >
            Easy implimentation
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "130px",
              textAlign: "left",
              width: "70%",
              backgroundColor: "rgba(112, 112, 112, 0.4)",
              padding: "30px",
              fontSize: "35px",
              borderRadius: "15px",
            }}
          >
            Save on resources. Increase sales.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "130px",
              textAlign: "left",
              width: "70%",
              backgroundColor: "rgba(112, 112, 112, 0.4)",
              padding: "30px",
              fontSize: "35px",
              borderRadius: "15px",
            }}
          >
            A solution that works seamlessly anywhere.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "130px",
              textAlign: "left",
              width: "70%",
              backgroundColor: "rgba(112, 112, 112, 0.4)",
              padding: "30px",
              fontSize: "35px",
              borderRadius: "15px",
            }}
          >
            Compatible with all major eCommerce platforms.
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              color:"black",
              borderRadius:"35px"
              
            }}
          >
            <img src={Chairs} style={{ width: "100%" }} />
            <div
              style={{
                padding: "20px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Our configurators are super easy to add to your eCommerce
              storefront or website. Once we build your configurator, you can
              have it up in a matter of minutes.
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------  11x   ---------------------- */}
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          gap: "30px",
          padding: "7% 3%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #000000 50%, #F46A34 100%)",
            width: "30%",
            height: "100%",
            border: "1px solid white",
            textAlign:"center",
            padding: "5%",
            borderRadius:"30px"
          }}
        >
          <div style={{ fontSize: "150px", color: "#F46A34",padding: "5% 10%", }}>11x</div>
          <div style={{ fontSize: "40px", color: "#BFBFBF",padding: "5% 10%", }}>
            Increased likelihood to purchase
          </div>
        </div>
        <div style={{ width: "70%", height: "100%", display:"flex",flexDirection:"column",gap:"30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between",gap:"30px" }}>
            <div
              style={{
                fontSize: "60px",
                color: "#F46A34",
                border: "1px solid white",
                borderRadius:"30px",
                padding: "5%",
                background: "linear-gradient(180deg, #181818 40%, #313131 100%)",
              }}
            >
              35%
              <div style={{ fontSize: "25px", color: "#BFBFBF" }}>
                Reduction in product returns
              </div>
            </div>
            <div
              style={{
                fontSize: "60px",
                color: "#F46A34",
                border: "1px solid white",
                alignItems:"center",
                borderRadius:"30px",
                padding: "5% 10%",
                background: "linear-gradient(180deg, #181818 40%, #313131 100%)",
              }}
            >
              66%
              <div style={{ fontSize: "25px", color: "#BFBFBF" }}>
                Higher conversions than 2D options
              </div>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", 
                alignItems:"center",
                color: "#F46A34",
                border: "1px solid white",
                borderRadius:"30px",
                padding: "12% 5%",
                background: "linear-gradient(180deg, #181818 40%, #313131 100%)",              }}>
            <div style={{    fontSize: "60px",    color: "#F46A34",}}>
                No.1
            </div>
            <div style={{ fontSize: "25px", color: "#BFBFBF" }}>
            Requested feature for eCommerce websites
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
