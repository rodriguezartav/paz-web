import { IKImage } from "imagekitio-react";
import React, { useState, useEffect, useRef } from "react";

const urlEndpoint = "https://ik.imagekit.io/paz/";

export default function MyImage(props) {
  let { src, width, transformations, className } = props;

  return (
    <video
      className={className}
      controls
      autoPlay
      src={urlEndpoint + src}
      constrols
    />
  );
}
