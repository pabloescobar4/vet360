import React from "react";
import "./home.css";
import Person from "../assets/person.png";
import medicalRecord from "../assets/medicalRecord.png";
import dog from "../assets/unlock1.png";
import pen from "../assets/unlock2.png";
import coins from "../assets/unlock3.png";
import hands from "../assets/unlock4.png";
import dogCat from "../assets/dogCat.png";
import AaldaIcon from "../assets/AaldaIcon.png";
import quotesGreen from "../assets/quotesGreen.png";
import quotesOrange from "../assets/quotesOrange.png";
import quotesPink from "../assets/quotesPink.png";
import { animateWithGsap } from "../utils/animations.js";

import { useGSAP } from "@gsap/react";
const HomePage = () => {
  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1, stagger: 0.3 });
    animateWithGsap("#launch", { y: 0, opacity: 1, stagger: 0.3 });
    animateWithGsap("#choose", { y: 0, opacity: 1, stagger: 0.5 });
    animateWithGsap("#gridContainer", { y: 0, opacity: 1, stagger: 0.2 });
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
          <img src={Person} />
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
        <img src={medicalRecord} width="100%" />
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

      
      <header className="App-header">
        <div className="containerGrid">
          <div className="box big text-left bg-[#648FFF] w-2/3 p-16  flex gap-6 flex-col rounded-3xl text-white w-full ">
            {" "}
            <div id="gridContainer" className="opacity-0 text-6xl w-2/3 font-normal">
              Unlock Potential Benefits
            </div>
            <p id="gridContainer" className="opacity-0 text-#[EBF0FF] text-xl font-light">
              Vet360 gives you all the tools you need to create and host
              webinars that look awesome and put your brand centerstage.
            </p>
            <div
              style={{
                fontSize: "16px",
                justifyContent: "center",
                borderRadius: "30px",
              }}
              id="gridContainer" className="opacity-0 border border-white btn_primary1 hs-button1 primary   primary bg-[#648FFF]  cursor-pointer text-white w-48 rounded-2xl flex items-center text-center justify-items-center "
            >
              BOOK A DEMO
            </div>
          </div>
          <div className="box bg-black  p-7 flex gap-6 flex-col rounded-3xl text-white">  <div id="gridContainer" className="opacity-0 items-center justify-center flex"><img src={hands} /></div>
          <div id="gridContainer" className="opacity-0 text-3xl w-3/ font-normal">
          Realize Paperless Operations
          </div>
          <p id="gridContainer" className="opacity-0 text-#[EBF0FF] text-xl text-left font-light">
          No need for paper-based management, with strengthened data security.
          </p>

        
         </div>
         
          <div  className=" box bg-white text-black  p-10 flex gap-6 flex-col rounded-3xl text-white justify-between">
            <div id="gridContainer" className="opacity-0 items-center justify-center flex">
              <img src={coins} />
            </div>
            <div id="gridContainer" className="opacity-0 text-3xl text-black font-normal text-left">
            Improvement of Operational Efficiency
            </div>
            <p id="gridContainer" className="opacity-0 text-[#6A6A6A] text-xl font-light text-left">
              By reducing manual tasks, minimizing errors, and improving
              productivity, it leads to cost reduction across the board.
            </p>
          </div>
          <div className=" box bg-white text-black  p-10 flex gap-6 flex-col rounded-3xl text-white justify-between"   style={{ background: "linear-gradient(45deg, #FFC76A, #FF9E4B)" }}>
            <div id="gridContainer" className="opacity-0 items-center justify-center flex">
              <img src={pen} />
            </div>
            <div id="gridContainer" className="opacity-0 text-3xl text-white font-normal text-left">
            Real-Time Information Management and Utilization
            </div>
            <p id="gridContainer" className="opacity-0 text-[#6A6A6A] text-xl text-black font-light text-left">
            Easily access, search past data, and share information across multiple clinics.
            </p>
          </div>
          <div className="box bg-white text-black  p-10 flex gap-6 flex-col rounded-3xl text-white justify-between">
            <div id="gridContainer" className="opacity-0 -center justify-center flex">
              <img src={coins} />
            </div>
            <div id="gridContainer" className="opacity-0 text-3xl text-black font-normal text-left">
              Cost Savings and Effecient
            </div>
            <p id="gridContainer" className="opacity-0 text-[#6A6A6A] text-xl font-light text-left">
              By reducing manual tasks, minimizing errors, and improving
              productivity, it leads to cost reduction across the board.
            </p>
          </div>
        </div>
      </header>
     <div className="bg-black">
     <div className="ease flex">
        <div className="flex justify-center items-baseline items-center w-1/2 flex-col gap-6">
          <p className="text-5xl w-3/4 font-light">
            Ease the pressure & Streamline Your Veterinary Process
          </p>
          <p className="text-[#A5A5A5] text-xl w-3/4">
            Vet360 gives you all the tools you need to create and host webinars
            that
          </p>

          <div className="flex justify-between items-center gap-10 ">
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
          <img src={dogCat} width={"100%"} />
        </div>
      </div>
     </div>
     

      <div className="supervise ">
        <div className="bg-[#F1F5FF] px-8 py-8 rounded-3xl flex items-center  w-full ">
          <div className="w-2/5 ">
            <img src={AaldaIcon} width="95%" />
          </div>
          <div className="flex flex-col gap-5 w-3/5 pt-5">
            <div className="text-white bg-[#6597FF]  rounded-xl w-1/4 flex items-center text-center justify-center">
              Supervised By
            </div>
            <p className="text-5xl font-bold text-black ">A’alda Japan</p>
            <div>
              <p className="font-light text-3xl">Zero compromises,</p>

              <p className="font-bold text-3xl italic gradient-text-Aalda">
                Just to make the best
              </p>
            </div>
            <p className="font-light w-9/10 text-lg">
              When A'alda first began operating veterinary hospitals, we
              considered to implement the EHR system, but we could not find
              anything on the market that satisfied us in terms of usability and
              functionality, so we decided to develop our own system.
            </p>
            <p className="font-light w-9/10 text-lg">
              We consulted with many veterinary hospitals, including our own
              group hospitals, during the development process, and incorporated
              a great deal of feedback from actual use in the field. However,
              our goal at Vet360 is not to improve operational efficiency, but
              to create an environment that provides value that can only be
              created by people.
            </p>
            <p className="font-light w-9/10 text-lg">
              Let’s create the best customer experience through Vet360 together.
            </p>
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

      <div>
        
      </div>
      </div>
    </>
  );
};

export default HomePage;