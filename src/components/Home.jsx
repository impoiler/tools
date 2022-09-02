import React from "react";
import Tool from "./Tool";

const Home = () => {
  return (
    <>
      <div className="container">

        <div className="grid">
        <Tool
          data={{
            name: "Image to Base64",
            icon: "/icons/image.svg",
            link: "/image2base64",
          }}
        />
        <Tool
          data={{
            name: "Domain Availability",
            icon: "/icons/domain.svg",
            link: "/domain",
          }}
        />
        <Tool
          data={{
            name: "Whois Lookup",
            icon: "/icons/whois.svg",
            link: "/whois",
          }}
        />
        <Tool
          data={{
            name: "Ip checker",
            icon: "/icons/location.svg",
            link: "/ip",
          }}
        />
        <Tool
          data={{
            name: "Link Shortner",
            icon: "/icons/link.svg",
            link: "/url-short",
          }}
        />
        <Tool
          data={{
            name: "Crypto Price",
            icon: "/icons/crypto.svg",
            link: "/crypto",
          }}
        />
        <Tool
          data={{
            name: "Viewport checker",
            icon: "/icons/viewport.svg",
            link: "/viewport",
          }}
        />
        <Tool
          data={{
            name: "Tv Show lookup",
            icon: "/icons/movie.svg",
            link: "/tv",
          }}
        />
        </div>

      </div>
    </>
  );
};

export default Home;
