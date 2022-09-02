import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Whois = () => {
  const [data, setdata] = useState("");
  const [input, setinput] = useState("");
  const [content, setcontent] = useState(false);
  const [loading, setloading] = useState(false);

  const fetchdata = (e) => {
    setcontent(true);
    setloading(true);
    e.preventDefault();
    if (input.length > 1 && input.includes(".")) {
      axios
        .get(`https://registration.domain.com/domains/lookup/${input}`)
        .then((res) => {
          let rawdata = res.data.data;
          let puredata = rawdata.replaceAll("\n", "<br/>");
          setdata(puredata);
          setloading(false);
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else {
      setloading(false);
      setdata('Domain is not valid')
      toast.error("Please enter a valid domain");
    }
  };

  useEffect(() => {
    document.title="Whois Lookup by domain or IP address"
  }, []);

  return (
    <>
      <div className="container whois">
        <h2 className="heading">Domain or IP Whois Lookup</h2>

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

        {content ? (
          <div className="content">
            {loading ? (
              <div className="loader">
                <div className="spinner"></div>
              </div>
            ) : null}
            <div className="details">
              <p dangerouslySetInnerHTML={{ __html: data }}></p>
            </div>
          </div>
        ) : (
          null
        )}
      </div>
      <Toaster />
    </>
  );
};

export default Whois;
