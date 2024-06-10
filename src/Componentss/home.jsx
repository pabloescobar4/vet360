import React from "react";
import "./home.css";
import Person from "../assets/images/person.png";
import medicalRecord from "../assets/images/medicalRecord.png";
import dog from "../assets/images/unlock1.png";
import pen from "../assets/images/unlock2.png";
import coins from "../assets/images/unlock3.png";
import hands from "../assets/images/unlock4.png";
import dogCat from "../assets/images/dogCat.png";
import AaldaIcon from "../assets/images/AaldaIcon.png";
import quotesGreen from "../assets/images/quotesGreen.png";
import quotesOrange from "../assets/images/quotesOrange.png";
import quotesPink from "../assets/images/quotesPink.png";
import laptop from '../assets/images/laptop.png';
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
import { Footer } from "./footer.jsx";
import { MidSection } from "./midSection.jsx";
const HomePage = () => {


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
  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1, stagger: 0.3 });
    animateWithGsap("#launch", { y: 0, opacity: 1, stagger: 0.3 });
    animateWithGsap("#choose", { y: 0, opacity: 1, stagger: 0.5 });
    animateWithGsap("#gridContainer1", { y: 0, opacity: 1, stagger: 0.2 });
    animateWithGsap("#gridContainer2", { y: 0, opacity: 1, stagger: 0.2 });
  }, []);
  return (
    <>
    <div className="containerHome">
      <div className="main_banner text-5xl w-full flex bg-white text-center h-1/4  gap-20 items-center">
        <div className="w-1/2 my-10  items-center">
          <div
            id="features_title"
            className="section-heading leading-normal text-left "
          >
            <p
              className=""
              style={{ fontSize: "45px", fontFamily: "Montserrat" }}
            >
              Simplify and Seamlessly{" "}
            </p>
            <p
              className="bold-italic gradient-text"
              style={{ fontSize: "45px", fontFamily: "Montserrat" }}
            >
              {" "}
              Manage All Tasks with{" "}
            </p>
            <p
              className=""
              style={{ fontSize: "45px", fontFamily: "Montserrat" }}
            >
              {" "}
              Intuitive Simplicity{" "}
            </p>
          </div>

          <p
            id="features_title"
            className="opacity-0 translate-y-20 text-2xl text-gray-200 mt-5 text-left font-light"
          >
            From appointments to customer management, medical records, billing,
            and analytics—all unified in one cloud-based electronic medical
            record solution
          </p>

          <div
            style={{
              fontSize: "16px",
              justifyContent: "center",
              borderRadius: "30px",
            }}
            id="features_title"
            className="opacity-0 translate-y-20 btn_primary1 hs-button1 primary mt-10  primary bg-[#648FFF]  cursor-pointer text-white w-48 rounded-2xl flex items-center text-center justify-items-center "
          >
            GET THE DETAIL
          </div>
        </div>
        <div
          className="w-1/2 "
          style={{ margin: "0px auto", overflow: "hidden" }}
        >
        {/* <ScrollVideo src={Dog} /> */}
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
                <source src={clientProfile} type="video/mp4" />
              </video>
        </div>
      </div>

      <div className="h-1/4  launch ">
        <div
          className="gradient-bg text-center items-center justify-center flex flex-col gap-4"
          style={{ background: "linear-gradient(45deg, #FFC76A, #FF9E4B)" }}
        >
          <p
            id="launch"
            className="section-heading bold-italic text-6xl text-white flex  items-center justify-center p-6 "
          >
            Vet360 will launch in December
          </p>
          <p
            id="launch"
            className="section-heading text-black text-2xl w-3/5 text-center"
          >
            Register by October 31st through "Receive Selection Information" and
            get a limited-time special offer:
          </p>
          <div
            id="launch"
            className="section-heading text-[#FFAA54] bg-black p-3 text-2xl px-10 p-5 rounded-xl mt-5 w-3/4"
          >
            <span className="mr-5 "> 3 Months of Monthly Fees Free! </span> |{" "}
            <span className="ml-5"> Free Implementation Cost!</span>
          </div>
          <p id="launch" className="section-heading text-3xl w-3/5">
            Don't miss this chance to register!
          </p>
          <p
            id="launch"
            className="section-heading text-2xl w-4/5 font-extralight"
          >
            Vet360 will officially launch in December, and for those who "Sign
            Up for Early Access" before the launch, you'll receive exclusive
            benefits! Join this special campaign to stay updated with the latest
            information about Vet360 and be among the first to experience this
            revolutionary electronic medical record system!
          </p>
          <div
            id="launch"
            className="section-heading btn_primary hs-button primary"
          >
            JOIN THE WAITLIST
          </div>
        </div>
      </div>
      <div className="items-center flex medical flex-col gap-24">
         {/* <ScrollVideo className="mb-96" src={clientProfile} /> */}

        {/* <img src={medicalRecord} width="100%" /> */}
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
                <source src={clientProfile} type="video/mp4" />
              </video>
        <div
          id="choose"
          className="opacity-0 flex items-center flex-col text-center gap-5 "
        >
          <p id="choose" className="opacity-0 text-6xl font-light">
            Why Choose Vet360?
          </p>

          <p
            id="choose"
            className="opacity-0 w-1/2 text-xl text-[#171717] font-extralight"
          >
            Are you tired of using paper charts and multiple systems? It is easy
            to use, with no manual required, and all operations can be easily
            performed within Vet360. You no longer need to worry about managing
            complex operations or paperwork
          </p>
          <div>
            <div
              style={{
                fontSize: "16px",
                justifyContent: "center",
                borderRadius: "30px",
              }}
              id="choose"
              className="opacity-0  btn_primary1 hs-button1 primary   primary bg-[#648FFF]  cursor-pointer text-white w-48 rounded-2xl flex items-center text-center justify-items-center "
            >
              BOOK A DEMO
            </div>
          </div>
        </div>
      </div>

      <MidSection />
    
   
     <Footer />
     <div>
  
     </div>



     
    
      </div>
    </>
  );
};

export default HomePage;
