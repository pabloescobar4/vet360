import React from "react";

import "./home.css";
import videoIcon from '../assets/images/videoIcon.png';
import { animateWithGsap } from "../utils/animations.js";
import MaskHalf from '../assets/images/MaskHalfgroup.png'
import { useGSAP } from "@gsap/react";
import Dropdown from "./dropdown.jsx";
import Logo from '../assets/images/NavBarLogoLarge.png'
import fb from '../assets/images/facebook.png'
import insta from '../assets/images/Insta.png'
import twitter from '../assets/images/X.png'
import Linkedin from '../assets/images/Linkedinn.png'
import ScrollVideo from "./scrollVideo.jsx";
import Dog from '../assets/videos/dog.mp4'
import clientProfile from '../assets/videos/clientsProfileEng.mp4'
import aalda from '../assets/videos/Aalda.mp4'
import cloud from '../assets/videos/cloud.mp4'
import ladyDoctor from '../assets/videos/ladyDoctor.mp4'
import curlyDoctor from '../assets/videos/curlyDoctor.mp4'



  const questions = [
    {
      title: 'AccordianIs the security of the cloud-based system sufficient?',
      content: 'Yes, security is of utmost importance, and our cloud-based system utilizes AWS (Amazon Web Services) with advanced security measures. These include data encryption, access control, regular audits, physical security, and backup and recovery.'
    },
    {
      title: 'Question 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Question 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Question 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Question 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];
//   useGSAP(() => {
//     animateWithGsap("#features_title", { y: 0, opacity: 1, stagger: 0.3 });
//     animateWithGsap("#launch", { y: 0, opacity: 1, stagger: 0.3 });
//     animateWithGsap("#choose", { y: 0, opacity: 1, stagger: 0.5 });
//     animateWithGsap("#gridContainer1", { y: 0, opacity: 1, stagger: 0.2 });
//     animateWithGsap("#gridContainer2", { y: 0, opacity: 1, stagger: 0.2 });
//   }, []);

export const Footer = () => {
	return(
		<div>
			  <div className="flex flex-col gap-5 bg-[#FCFBFA]">
     <div className="bg-[#FCFBFA]">
        <div className="features flex bg-[#F1F5FF] rounded-2xl gap-10">
          <div className="flex justify-center items-baseline items-center w-2/5 flex-col gap-6">
          <p className="text-[#648FFF] text-4xl">Simplicity Revolution</p>
        <p className="text-[#1F1F1F] text-3xl">Intuitive Screen Design, No Manuals Needed UI/UX</p>
        <p className='w-4/5 text-[#000000] text-xl'>Even if you're not digitally inclined, it's no problem. With Vet360's intuitive operation,
we completely digitize your daily cumbersome manual tasks.</p>
<div
              style={{
                fontSize: "14px",
                justifyContent: "center",
                borderRadius: "30px",
              }}
              className="border border-white btn_primary1 hs-button1 primary   primary bg-[#648FFF]  cursor-pointer text-white w-40 rounded-2xl flex items-center text-center justify-items-center "
            >
              BOOK A DEMO
            </div>
          </div>
          <div className=" w-3/5">
          <video
                muted
                playsInline
                autoPlay
                loop
                // ref={videoRef}
				style={{marginTop:"5%",borderRadius:"10px"}}
                width="100%"
              >
                {/* <source src={homeKonnect1} type="video/webm" /> */}
                <source src={ladyDoctor} type="video/mp4" />
              </video>
          {/* <img src={ladyDoctor} width={"100%"} /> */}
        </div>
    
        </div>
      
      </div>



      <div className="bg-[#FCFBFA] mt-5">
        <div className="features flex bg-[#FEF3F7] rounded-2xl gap-10">
        <div className="w-3/5">
          {/* <img src={curlyDoctor} width={"100%"} /> */}
          <video
                muted
                playsInline
                autoPlay
                loop
                // ref={videoRef}
				style={{marginTop:"5%",borderRadius:"10px"}}
                width="100%"
              >
                {/* <source src={homeKonnect1} type="video/webm" /> */}
                <source src={curlyDoctor} type="video/mp4" />
              </video>
        </div>
          <div className="flex justify-center items-baseline items-center w-2/5 flex-col gap-6">
          <p className="text-[#FF619D] text-4xl">All-in-One Solution</p>
        <p className="text-[#1F1F1F] text-3xl">Streamlined Operations</p>
        <p className='w-4/5 text-[#000000] text-xl '>Say goodbye to cumbersome paper management and fragmented system use. With Vet360, you can seamlessly integrate all aspects of your operations, from customer management to appointments, records, billing, and every task within your clinic. Easily coordinate information across multiple clinics.</p>
<div
              style={{
                fontSize: "14px",
                justifyContent: "center",
                borderRadius: "30px",
              }}
              className="border border-white btn_primary1 hs-button1 primary   primary bg-[#FF619D]  cursor-pointer text-white w-40 rounded-2xl flex items-center text-center justify-items-center "
            >
              BOOK A DEMO
            </div>
          </div>
        
    
        </div>
      
      </div>






      <div className="bg-[#FCFBFA] mt-5">
        <div className="features flex bg-[#FFF6E8] rounded-2xl">
          <div className="flex justify-center items-baseline items-center w-2/5 flex-col gap-6">
          <p className="text-[#FB9C4B] text-4xl">The Benefits of the Cloud</p>
        <p className="text-[#1F1F1F] text-3xl">Data Security and Flexible Access</p>
        <p className='w-4/5 text-[#000000] text-xl'>Vet360 is a cloud-based electronic medical record system. Prioritizing data security, it also provides you with the ability to access your data from anywhere. Free yourself from paper records and offline data management; get the information you need when you need it.</p>
<div
              style={{
                fontSize: "14px",
                justifyContent: "center",
                borderRadius: "30px",
              }}
              className="border border-white btn_primary1 hs-button1 primary   primary bg-[#FF9E4B]  cursor-pointer text-white w-40 rounded-2xl flex items-center text-center justify-items-center "
            >
              BOOK A DEMO
            </div>
          </div>
          <div className="w-3/5">
          {/* <img src={laptop} width={"100%"} /> */}
          <video
                muted
                playsInline
                autoPlay
                loop
                // ref={videoRef}
				style={{marginTop:"5%",borderRadius:"10px"}}
                width="100%"
              >
                {/* <source src={homeKonnect1} type="video/webm" /> */}
                <source src={cloud} type="video/mp4" />
              </video>
        </div>
    
        </div>
      
      </div>



      <div className="bg-image mt-5" >
        <div className="features flex bg-transparent text-white rounded-2xl">
          <div className="flex justify-center items-baseline items-center w-2/5 flex-col gap-6">
          <p className="text-[#FCFBFA] text-5xl">You have to see it to believe it</p>
       
        <p className='w-4/5 text-[#FCFBFA]  text-xl'>Vet360 is a cloud-based electronic medical record system. Prioritizing data security, it also provides you with the ability to access your data from anywhere. Free yourself from paper records and offline data management; get the information you need when you need it.</p>
<div
              style={{
                fontSize: "14px",
                justifyContent: "center",
                borderRadius: "30px",
              }}
              className="border border-white btn_primary1 hs-button1 primary   primary bg-transparent  cursor-pointer text-white w-40 rounded-2xl flex items-center text-center justify-items-center "
            >
              BOOK A DEMO
            </div>
          </div>
          <div className="w-3/5">
          <img src={videoIcon} width={"100%"} />
        </div>
    
        </div>
      
      </div>


      <div className="text-center text-black gap-5 flex items-center flex-col m-5 my-16 w-full">
          {/* <p className="text-[#717171] p-5 text-2xl">Customer Reviews</p> */}
          <p className="text-5xl font-normal">
            Simple{" "}
            <span className="gradient-text-pricing bold-italic p-1">pricing</span>{" "}
            for all your needs
          </p>
          <p className="font-light text-lg w-2/5 text-[#3D3D3D]">
          Flexible Plans! Choose the plan that suits your practice best
          </p>
          <div
            style={{
              fontSize: "12px",
              justifyContent: "center",
              borderRadius: "30px",
            }}
            className=" btn_primary1 hs-button1 primary   primary bg-[#648FFF]  cursor-pointer text-white w-38 rounded-2xl flex items-center text-center justify-items-center "
          >
            KNOW MORE
          </div>
        </div>


        <div className="text-center text-black gap-5 flex items-center flex-col m-5 my-16 w-full">
          {/* <p className="text-[#717171] p-5 text-2xl">Customer Reviews</p> */}
          <p className="text-5xl font-normal">
            Frequently Asked{" "}
          </p>
          <span className="gradient-text-questions text-5xl gradient-text-pricing bold-italic p-1">Questions</span>{" "}
        </div>
        <div className="text-center text-black gap-5 flex items-center flex-col m-5 my-16 w-full">
      <div className="animate w-full max-w-screen-xl mx-auto p-6 bg-transparent rounded-lg ">
        {questions.map((question, index) => (
          <Dropdown key={index} title={question.title} content={question.content} />
        ))}
      </div>
    </div>


    <div className="flex text-center  gap-5 flex items-center  m-5 my-16 w-full">
      {/* <div>
      <img src={MaskHalf} height="70%"/>
      </div>

      */}
        <div className="relative mt-2 w-full rounded-md overflow-hidden">
          <img src={MaskHalf} alt="Background" className="w-3/5 h-full object-cover"/>
          <div className="absolute inset-0 bg-black bg-opacity-0 flex gap-5 items-baseline text-left m-16 justify-around w-full">
            <p className="text-black  font-bold text-6xl text-left flex flex-col gap-5">

            <div className="text-6xl font-normal text-black max-w-[492px] max-md:text-4xl">
      Your Partner in Veterinary Success
    </div>
    <div className="text-3xl font-light text-black max-w-[492px] max-md:text-4xl">
    Drop us an email, and our responsive customer support team will promptly address your questions and concerns.
    </div>
            </p>
            <div className="bg-black flex flex-col gap-8 m-10 p-8 px-16 w-[800px] max-md:w-[400px]" style={{width:"800px",borderRadius:"50px"}}>
       <p className="p-2 text-left text-3xl">Say Hello!</p>
      
    <div
      style={{
        width: '',
        height: '71px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '30px',
        paddingLeft: '30px',
        background: '#FFFFFF',
        borderRadius: '50px',
        outline:"none"
      }}>
      <input
        style={{
          color: '#938F8A',
          fontSize: '16px',
          fontFamily: 'Montserrat',
          textAlign: 'left',
          fontWeight: '500'
        }} className="focus:outline-none" placeholder="  Full name"/>
      
    
    </div>
    <div
      style={{
        width: '',
        height: '71px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '30px',
        paddingLeft: '30px',
        background: '#FFFFFF',
        borderRadius: '50px',
        outline:"none"
      }}>
      <input
        style={{
          color: '#938F8A',
          fontSize: '16px',
          fontFamily: 'Montserrat',
          textAlign: 'left',
          fontWeight: '500'
        }} className="focus:outline-none" placeholder="  Full name"/>
      
    
    </div>
    <div
      style={{
        width: '',
        height: '71px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '30px',
        paddingLeft: '30px',
        background: '#FFFFFF',
        borderRadius: '50px',
        outline:"none"
      }}>
      <input
        style={{
          color: '#938F8A',
          fontSize: '16px',
          fontFamily: 'Montserrat',
          textAlign: 'left',
          fontWeight: '500'
        }} className="focus:outline-none" placeholder="  Full name"/>
      
    
    </div>
    <div
      style={{
        width: '',
        height: '71px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '30px',
        paddingLeft: '30px',
        background: '#FFFFFF',
        borderRadius: '50px',
        outline:"none"
      }}>
      <input
        style={{
          color: '#938F8A',
          fontSize: '16px',
          fontFamily: 'Montserrat',
          textAlign: 'left',
          fontWeight: '500'
        }} className="focus:outline-none" placeholder="  Full name"/>
      
    
    </div>
    <div
      style={{
        width: '',
        height: '71px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '30px',
        paddingLeft: '30px',
        background: '#FFFFFF',
        borderRadius: '50px',
        outline:"none"
      }}>
      <input
        style={{
          color: '#938F8A',
          fontSize: '16px',
          fontFamily: 'Montserrat',
          textAlign: 'left',
          fontWeight: '500'
        }} className="focus:outline-none" placeholder="  Full name"/>
      
    
    </div>
    <div className="text-base font-medium text-center text-white  max-w-[506px]">
      We process your information in accordance with our{" "}
      <span className="text-white ">Privacy Policy</span>
    </div>
    <div className="justify-center px-8 py-4 text-base font-semibold text-center text-white uppercase whitespace-nowrap bg-blue-400 rounded-[30px]">
      Submit
    </div>

      </div>
          </div>
        </div>

      </div>

      <div className="flex text-center  gap-5 flex flex-col  items-center bg-black  mt-16 w-full">

        <div className="mx-auto m-20 gap-10 flex flex-col">
        <div className='logoSet' >
        <img src={Logo} width="300px" height="100%"/>
        </div>
      
        </div>
        <div className="flex gap-16 justify-center  text-xl font-medium text-center text-white uppercase max-w-[940px] max-md:flex-wrap">
      <div>Home</div>
      <div>Features</div>
      <div>Subscription Plan</div>
      <div>Blogs</div>
      <div>FAQs</div>
      <div>Contact Us</div>
    </div>
    <div className="flex gap-5 justify-between text-base font-medium text-center text-[#858585]">
      <div>A'alda weblink</div>
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
    </div>
    <div  style={{
        display: "flex",
        // backgroundColor: "#1B1B1E",
        width:"100%",
        justifyContent: "space-around",
        // width: "100%",
        borderTop:"1px solid gray",
        padding: "3% 0%",
        color:"white"
      }}>
     <div>
     2024 Imagine.io. All rights reverved
     </div>
 
     <div style={{  display: "flex",
        // backgroundColor: "#1B1B1E",
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
     </div>
		</div>
	)
}