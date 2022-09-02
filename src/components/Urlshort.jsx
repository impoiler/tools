import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Urlshort = () => {
  const [data, setdata] = useState("Enter url above to make it short");
  const [input, setinput] = useState("");
  const [loading, setloading] = useState(false);

  const fetchdata = (e) => {
    setloading(true);
    e.preventDefault();
    axios
      .get(
        `https://cutt.ly/api/api.php?key=${process.env.REACT_APP_CUTTLY_API}&short=${input}`
      )
      .then((res) => {
        setdata(res.data.url.shortLink);
        setloading(false);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  useEffect(() => {
    document.title="Make a short link from your big and ugly urls"
  }, []);

  return (
    <>
      <div className="container whois">
        <h2 className="heading">URL Shortner</h2>

        <form onSubmit={fetchdata}>
          <input
            required
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Ex. https://yourlongurl.com"
            type="url"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {loading ? (
        <div className="pleasewait">
          <div className="loader">
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <div className="result container">
          <div className="inner">
            <span className="shortlink">{data == undefined ? null : data}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(data == undefined ? null : data);
                toast.success("Link copid to Clipboard");
              }}
              disabled={
                data === "Enter url above to make it short" ? true : null
              }
            >
              Copy Link
            </button>
          </div>
        </div>
      )}

      <Toaster position="bottom center" />
    </>
  );
};

export default Urlshort;
