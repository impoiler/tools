import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import privacy from "../img/privacy.svg";

const Domain = () => {
  const [data, setdata] = useState([]);
  const [suggest, setsuggest] = useState([]);
  const [input, setinput] = useState("");
  const [resultcount, setresultcount] = useState(7);
  const [content, setcontent] = useState(false);
  const [tab, settab] = useState(true);
  const [loading, setloading] = useState(false);

  const fetchdata = (e) => {
    setloading(true);
    e.preventDefault();
    if (input.length > 1) {
      axios
        .get(
          `https://registration.domain.com/domains/search/${input}?currency=INR&propertyID=47&tlds=com,net,io,in,co,asia,org,xyz,org.in,tech,online,info,store,live,gg,ai,game,art,pro,blog,fit,id,ink,wiki,im,health,vip,is,so&suggestions=30`
        )
        .then((res) => {
          setloading(false);
          setdata(res.data.results);
          setsuggest(res.data.suggestions);
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else {
      setloading(false);
      setdata("");
      toast.error("Please enter a valid name");
    }
  };


  useEffect(() => {
    document.title="Domain availability checker"
  }, []);

  let sliceddata = data.slice(0, resultcount);

  return (
    <>
      <div className="container whois">
        <h2 className="heading">Domain Availability checker </h2>

        <form onSubmit={fetchdata}>
          <input
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Enter Domain name"
            type="text"
          />
          <button type="submit">Submit</button>
        </form>

            <ul className="options">
                <li className={tab?'active':null}  onClick={()=>{settab(!tab)}}>Domain Availability checker</li>
                <li className={tab?null:"active"}  onClick={()=>{settab(!tab)}}>Domain Suggestion</li>
            </ul>

        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : null}

        {data.length ? (
          <>
          {
            tab?<div className="doamincheck">
            <div className="doamin_box">
              {sliceddata.map == undefined
                ? null
                : sliceddata.map((e, i) => (
                    <div key={i} className="box">
                      <div className="left">
                        <h2>{e.domainInfo.domain}</h2>
                        <img
                          src={e.privacyAvailable == true ? privacy : null}
                        ></img>
                      </div>
                      <div className="right">
                        <p className="price">
                          {e.domainInfo.availability == false ? (
                            <p className="notavilable">Not Avilable</p>
                          ) : (
                            <p>$ {e.terms[0].price}</p>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}

              <button
                onClick={() => {
                  setresultcount(20);
                }}
              >
                Load more
              </button>
            </div>
          </div>: <div className="suggestions">
                <div className="sugbox">
                {
                  suggest.map((e,i)=>(
                    <div className="sug_single">
                      <h2>{e.domainInfo.domain}</h2>
                      <p>$ {e.terms[0].price}</p>
                    </div>
                  ))
                }
                </div>
          </div>
          }
          </>
        ) : null}
      </div>
      <Toaster />
    </>
  );
};

export default Domain;
