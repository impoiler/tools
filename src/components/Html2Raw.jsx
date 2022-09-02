import axios from "axios";
import React, { useState } from "react";

const Html2Raw = () => {
  const [state, setstate] = useState('');

  
  const handleinput = (e) => {
    let input = e.target.value;
    axios.post('https://thesuresh.in',input).then((res)=>{
        setstate(res.config.data)
    }).catch((Error)=>{
        setstate(Error.config.data)
    })
  };


  return (
    <>
      <div className="container">
        <h2 class="heading">HTML to RAW Converter</h2>

        <div className="flex twoprt">
          <form >
            <textarea
              onChange={handleinput}
              placeholder="Enter Your HTML here"
              name=""
              id=""
            ></textarea>
          </form>
          <textarea
            placeholder="Your Output will be here"
            name=""
            value={state}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Html2Raw;
