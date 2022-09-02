import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Iploader from "../Loaders/Iploader";

const Ip = () => {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get("https://ipinfo.io/?token=eb1a2f471b0848").then((res) => {
      setdata(res.data);
      setloading(false);
    });
    console.log(data);
    document.title = "Your info based on your ip address";
  }, []);


  return (
    <>
      <div className="mapbg"></div>
      <div className="ipcontent">
        <div className="box container">
          {loading ? (
            <Iploader />
          ) : (
            <>
              <img
                src={`https://flagsapis.netlify.app/${data?.country}.svg`}
                alt=""
              />

              <h2>
                Your IP Address is : <b>{data?.ip}</b>
              </h2>
              <h2>
                Your city is : <b>{data?.city}</b>
              </h2>
              <h2>
                Your Zipcode is : <b>{data?.postal}</b>
              </h2>
              <h2>
                Your country is : <b>{data?.country}</b>
              </h2>
              <h2>
                Your timezone is : <b>{data?.timezone}</b>
              </h2>
              <h2>
                Your ISP is : <b>{data?.org}</b>
              </h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Ip;
