import React from "react";
import getStartedBG from '../assets/getStartedBG.png'
import star from '../assets/star.png'
export const GetStarted = () => {

  return (
    <>
 <div style={{
      width: '100%',
    //    height: '100%',
       
      background: `url(${getStartedBG}) `,
      backgroundSize: 'cover',
      display:"flex",
      justifyContent:"space-between"

    }}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",padding:"2%",}}>
        <img src={star}  width="40px" height="40px" style={{backgroundImage:"white"}}  />
        <div style={{fontSize:"30px",color:"black"}}>
        Get started now
        </div>
       
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",padding:"2%",}}>
        <img src={star}  width="40px" height="40px" style={{backgroundImage:"white"}}  />
        <div style={{fontSize:"30px",color:"black"}}>
        Get started now
        </div>
       
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",padding:"2%",}}>
        <img src={star}  width="40px" height="40px" style={{backgroundImage:"white"}}  />
        <div style={{fontSize:"30px",color:"black"}}>
        Get started now
        </div>
       
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",padding:"2%",}}>
        <img src={star}  width="40px" height="40px" style={{backgroundImage:"white"}}  />
        <div style={{fontSize:"30px",color:"black"}}>
        Get started now
        </div>
       
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",padding:"2%",}}>
        <img src={star}  width="40px" height="40px" style={{backgroundImage:"white"}}  />
        <div style={{fontSize:"30px",color:"black"}}>
        Get started now
        </div>
       
        </div>

        </div>

    </>
  );
};
