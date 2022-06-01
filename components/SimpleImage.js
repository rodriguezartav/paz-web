import { IKImage } from "imagekitio-react";
import React, { useState, useEffect, useRef } from "react";

const urlEndpoint = "https://ik.imagekit.io/paz/";

export default function MyImage(props) {
  let { src, width, transformations, className } = props;

  return (
    <IKImage
      className={className}
      urlEndpoint={urlEndpoint}
      lqip={{ active: true, quality: 1 }}
      path={src}
      width={width + "px"}
      transformation={
        transformations || [
          {
            width: width,
          },
        ]
      }
    />
  );
}
