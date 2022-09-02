import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Iploader = () => {
  return (
    <>
      <Skeleton height={40} width={60} />
      <h2>
        <Skeleton height={25} />
      </h2>
      <h2>
        <Skeleton height={25} />
      </h2>
      <h2>
        <Skeleton height={25} />
      </h2>
      <h2>
        <Skeleton height={25} />
      </h2>
      <h2>
        <Skeleton height={25} />
      </h2>
      <h2>
        <Skeleton height={25} />
      </h2>
    </>
  );
};

export default Iploader;
