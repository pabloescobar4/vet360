import React from "react";
import messageIcon from "../assets/messageIcon.png";
const Faq = () => {
  return (
    <div
      style={{
        width: "100%",
        //    height: '100%',

        //   background: `url(${getStartedBG}) `,
        backgroundSize: "cover",
          display:"flex",
        flexDirection:"column",
        gap:"30px",

        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "64px", color: "#F46A34", padding: "5%" }}>
        Frequently asked questions
      </div>
      <div
        style={{
          width: "70%",
          padding: "2%",
          borderRadius: "20px",
          marginBottom: "20px",
          margin: "0% 12%",
          textAlign: "start",
          alignItems: "start",
          display: "flex",
          color: "white",
          background: "linear-gradient(180deg, #181818 40%, #313131 100%)",
        }}
      >
        <div style={{ fontSize: "28px" }}>
          <div>How long does it take to build ?</div>

          <div style={{ fontSize: "24px", color: "#D9D9D9" }}>
            Typically 2 - 4 weeks. Sometimes even faster. We guarantee you will
            have it in 60 days or less.
          </div>
        </div>
      </div>
      <div
        style={{
          width: "70%",
          padding: "2%",
          borderRadius: "20px",
          margin: "0% 12%",
          textAlign: "start",
          alignItems: "start",
          display: "flex",
          color: "white",
          background: "linear-gradient(180deg, #181818 40%, #313131 100%)",
        }}
      >
        <div style={{ fontSize: "28px" }}>
          <div>How long does it take to build ?</div>

          <div style={{ fontSize: "24px", color: "#D9D9D9" }}>
            Typically 2 - 4 weeks. Sometimes even faster. We guarantee you will
            have it in 60 days or less.
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            margin: "3% 10%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "1% 2%",
              backgroundColor: "black",
              color: "white",
              borderRadius: "30px",
            }}
          >
            <div style={{ display: "flex" }}>
              <img src={messageIcon} />
            </div>
            <div style={{ fontSize: "28px", textAlign: "center" }}>Chat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
