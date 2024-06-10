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
export const MidSection = () => {
  useGSAP(() => {
    animateWithGsap("#ease", { y: 0, opacity: 1, stagger: 0.3 });
    animateWithGsap("#supervise", { y: 0, opacity: 1, stagger: 0.3 });
    // animateWithGsap("#choose", { y: 0, opacity: 1, stagger: 0.5 });
    // animateWithGsap("#gridContainer1", { y: 0, opacity: 1, stagger: 0.2 });
    // animateWithGsap("#gridContainer2", { y: 0, opacity: 1, stagger: 0.2 });
  }, []);
	return(
		<>
		  <header className="App-header">
        <div className="containerGrid">
          <div className="box big text-left bg-[#648FFF] w-2/3 p-16  flex gap-6 flex-col rounded-3xl text-white w-full ">
            {" "}
            <div id="gridContainer1" className="opacity-0 text-6xl w-2/3 font-normal">
              Unlock Potential Benefits
            </div>
            <p id="gridContainer1" className="opacity-0 text-#[EBF0FF] text-xl font-light">
              Vet360 gives you all the tools you need to create and host
              webinars that look awesome and put your brand centerstage.
            </p>
            <div
              style={{
                fontSize: "16px",
                justifyContent: "center",
                borderRadius: "30px",
              }}
              id="gridContainer1" className="opacity-0 border border-white btn_primary1 hs-button1 primary   primary bg-[#648FFF]  cursor-pointer text-white w-48 rounded-2xl flex items-center text-center justify-items-center "
            >
              BOOK A DEMO
            </div>
          </div>
          <div className="box bg-black  p-7 flex gap-6 flex-col rounded-3xl text-white">  <div id="gridContainer1" className="opacity-0 items-center justify-center flex"><img src={hands} /></div>
          <div id="gridContainer1" className="opacity-0 text-left text-3xl w-3/ font-normal">
          Realize Paperless Operations
          </div>
          <p id="gridContainer1" className="opacity-0 text-#[EBF0FF] text-xl text-left font-light">
          No need for paper-based management, with strengthened data security.
          </p>

        
         </div>
         
          <div  className=" box bg-white text-black  p-10 flex gap-6 flex-col rounded-3xl text-white justify-between">
            <div id="gridContainer2" className="opacity-0 items-center justify-center flex">
              <img src={coins} />
            </div>
            <div id="gridContainer2" className="opacity-0 text-3xl text-black font-normal text-left">
            Improvement of Operational Efficiency
            </div>
            <p id="gridContainer2" className="opacity-0 text-[#6A6A6A] text-xl font-light text-left">
              By reducing manual tasks, minimizing errors, and improving
              productivity, it leads to cost reduction across the board.
            </p>
          </div>
          <div className=" box bg-white text-black  p-10 flex gap-6 flex-col rounded-3xl text-white justify-between"   style={{ background: "linear-gradient(45deg, #FFC76A, #FF9E4B)" }}>
            <div id="gridContainer2" className="opacity-0 items-center justify-center flex">
              <img src={pen} />
            </div>
            <div id="gridContainer2" className="opacity-0 text-3xl text-white font-normal text-left">
            Real-Time Information Management and Utilization
            </div>
            <p id="gridContainer2" className="opacity-0 text-[#6A6A6A] text-xl text-black font-light text-left">
            Easily access, search past data, and share information across multiple clinics.
            </p>
          </div>
          <div className="box bg-white text-black  p-10 flex gap-6 flex-col rounded-3xl text-white justify-between">
            <div id="gridContainer2" className="opacity-0 -center justify-center flex">
              <img src={coins} />
            </div>
            <div id="gridContainer2" className="opacity-0 text-3xl text-black font-normal text-left">
              Cost Savings and Effecient
            </div>
            <p id="gridContainer2" className="opacity-0 text-[#6A6A6A] text-xl font-light text-left">
              By reducing manual tasks, minimizing errors, and improving
              productivity, it leads to cost reduction across the board.
            </p>
          </div>
        </div>
      </header>
     <div className="bg-[#1F1F1F]">
     <div className="bg-[#1F1F1F]  ease flex">
        <div className="flex justify-center items-baseline items-center w-1/2 flex-col gap-6">
          <p id="ease" className="opacity-0 text-5xl w-4/5 font-light">
            Ease the pressure & Streamline Your Veterinary Process
          </p>
          <p id="ease" className="opacity-0 text-[#A5A5A5] text-xl w-3/4">
            Vet360 gives you all the tools you need to create and host webinars
            that
          </p>

          <div id="ease" className="opacity-0 flex justify-between items-center gap-10 ">
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
            <div className="underline text-[#A5A5A5] text-sm cursor-pointer">
              JOIN THE WAITLIST
            </div>
          </div>
        </div>
        <div>
          {/* <img src={dogCat} width={"100%"} /> */}
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
                <source src={Dog} type="video/mp4" />
              </video>
        </div>
      </div>
     </div>
     

      <div className="supervise ">
        <div className="bg-[#F1F5FF] px-8 py-8 rounded-3xl flex items-center gap-10  w-full ">
          <div className="w-2/5 ">
            {/* <img src={AaldaIcon} width="95%" /> */}
            <video
                muted
                playsInline
                autoPlay
                loop
                // ref={videoRef}
				style={{marginTop:"5%",borderRadius:"10px",background:"transparent"}}
                width="100%"
              >
                {/* <source src={homeKonnect1} type="video/webm" /> */}
                <source src={aalda} type="video/mp4" />
              </video>

          </div>
          <div className="flex flex-col gap-5 w-3/5 pt-5">
            <div id="supervise" className="opacity-0 text-xl text-white bg-[#6597FF]  rounded-xl w-1/5 flex items-center text-center justify-center">
              Supervised By
            </div>
            <p id="supervise" className="opacity-0 text-5xl font-bold text-black ">A’alda Japan</p>
            <div>
              <p id="supervise" className="opacity-0 font-light text-3xl">Zero compromises,</p>

              <p id="supervise" className="opacity-0 font-bold text-3xl italic gradient-text-Aalda">
                Just to make the best
              </p>
            </div>
            <div id="supervise" className="opacity-0 flex flex-col gap-5">
            <p id="supervie" className=" font-light w-9/10 text-lg">
              When A'alda first began operating veterinary hospitals, we
              considered to implement the EHR system, but we could not find
              anything on the market that satisfied us in terms of usability and
              functionality, so we decided to develop our own system.
            </p>
            <p id="supervie" className="font-light w-9/10 text-lg">
              We consulted with many veterinary hospitals, including our own
              group hospitals, during the development process, and incorporated
              a great deal of feedback from actual use in the field. However,
              our goal at Vet360 is not to improve operational efficiency, but
              to create an environment that provides value that can only be
              created by people.
            </p>
            <p id="superise" className="font-light w-9/10 text-lg">
              Let’s create the best customer experience through Vet360 together.
            </p>
            </div>
           
          </div>
        </div>
        <div className="text-center gap-5 flex items-center flex-col m-5 w-full">
          <p className="text-[#717171] p-5 text-2xl">Customer Reviews</p>
          <p className="text-5xl font-normal">
            What{" "}
            <span className="gradient-text-Aalda bold-italic">Our Client</span>{" "}
            say about us
          </p>
          <p className="font-light text-lg w-2/5 text-[#3D3D3D]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <div
            style={{
              fontSize: "12px",
              justifyContent: "center",
              borderRadius: "30px",
            }}
            className=" btn_primary1 hs-button1 primary   primary bg-[#648FFF]  cursor-pointer text-white w-38 rounded-2xl flex items-center text-center justify-items-center "
          >
            BOOK A DEMO
          </div>
        </div>

        <div className="flex items-center gap-5 mt-[8%]">
          <div className="p-6 bg-white rounded-3xl gap-4 flex flex-col shadowCard ">
            <div className="text-left font-light bg-[#F5F5F5] p-2 flex justify-between items-start relative">
              <div>
                <p>Clinic Type</p>
                <p className="text-2xl font-bold">Hospital Name</p>
                <p className="font-light">Doctor Name</p>
                <p className="text-light">Before Vet360</p>
              </div>
              <div className="absolute top-[20%] right-5 transform -translate-y-1/2">
                <img src={quotesGreen} className="w-full max-w-[100px]" />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <p className="text-xs text-[#3D3D3D] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
              <p className="text-xs text-[#3D3D3D] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl gap-4 flex flex-col shadowCard">
            <div className="text-left font-light bg-[#F5F5F5] p-2 flex justify-between items-start relative">
              <div>
                <p>Clinic Type</p>
                <p className="text-2xl font-bold">Hospital Name</p>
                <p className="font-light">Doctor Name</p>
                <p className="text-light">Before Vet360</p>
              </div>
              <div className="absolute top-[20%] right-5 transform -translate-y-1/2">
                <img src={quotesPink} className="w-full max-w-[100px]" />
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <p className="text-xs text-[#3D3D3D] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
              <p className="text-xs text-[#3D3D3D] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl gap-4 flex flex-col shadowCard">
            <div className="text-left font-light bg-[#F5F5F5] p-2 flex justify-between items-start relative">
              <div>
                <p>Clinic Type</p>
                <p className="text-2xl font-bold">Hospital Name</p>
                <p className="font-light">Doctor Name</p>
                <p className="text-light">Before Vet360</p>
              </div>
              <div className="absolute top-[20%] right-5 transform -translate-y-1/2">
                <img src={quotesOrange} className="w-full max-w-[100px]" />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <p className="text-xs text-[#3D3D3D] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
              <p className="text-xs text-[#3D3D3D] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------feature---------------------------------- */}
        <div className="text-center gap-5 flex items-center flex-col mt-[8%] w-full">
          <p className="text-5xl font-normal w-1/2">
            More{" "}
            <span className="gradient-text-feature bold-italic">feature</span>{" "}
            to power up your Experience
          </p>
          <p className="font-light text-lg w-2/5 text-[#3D3D3D]">
            Manage your experience from start to finish, from integrations to
            registration,
          </p>
        </div>
      </div>
		</>
	)
}