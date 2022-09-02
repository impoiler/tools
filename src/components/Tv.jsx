import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Tv = () => {
  const [state, setstate] = useState([]);
  const [input, setinput] = useState("");
  const [content, setcontent] = useState(false);
  const [loading, setloading] = useState(false);

  const fetchdata = (e) => {
    setcontent(true);
    setloading(true);
    e.preventDefault();
    if (input.length > 1) {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then((res) => {
          let rawdata = res.data;
          setstate(rawdata);
          setloading(false);
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else {
      setloading(false);
      toast.error("Please enter a valid domain");
    }
  };

  useEffect(() => {
    document.title = " Know about any TV Show by just entering name";
  }, []);

  return (
    <>
      <img
        className="tb_bg"
        src="https://api.lorem.space/image/movie?w=1500"
        alt=""
      />
      <div className="container whois tv">
        <h2 className="heading">Get info about any TV Show</h2>

        <form onSubmit={fetchdata}>
          <input
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Enter any show name"
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
            {state?.length === 0 ? (
              <p className="notfound">Not Found</p>
            ) : state.map == undefined ? null : (
              state.map((e, i) => (
                <div key={i} className="details card_np">
                  <div className="sw_img">
                    <LazyLoadImage
                      effect="blur"
                      src={e?.show?.image?.original}
                      alt=""
                    />
                  </div>
                  <div className="cntt">
                    <h2>{e?.show?.name}</h2>
                    <h3>Language : {e?.show?.language}</h3>
                    <h3>Premiered : {e?.show?.premiered}</h3>
                    <h3>
                      Rating : <img src="./star.svg" alt="" />
                      {e?.show?.rating.average == null
                        ? "No rating"
                        : e.show.rating.average}
                    </h3>

                    <div className="genres">
                      <h3>Genres :</h3>
                      {e?.show?.genres.map((s, l) => (
                        <p key={l}>{s}</p>
                      ))}
                    </div>

                    <p
                      dangerouslySetInnerHTML={{ __html: e?.show?.summary }}
                      className="summury"
                    ></p>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : null}
      </div>
      <Toaster />
    </>
  );
};

export default Tv;
