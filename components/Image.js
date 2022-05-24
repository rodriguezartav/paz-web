import { IKImage } from "imagekitio-react";
import React, { useState, useEffect, useRef } from "react";

const urlEndpoint = "https://ik.imagekit.io/paz/";

export default function MyImage(props) {
  let images = props.images || [props.image];

  let [index, setIndex] = useState(0);

  useInterval(() => {
    let nextIndex = index + 1;
    if (index != images.length - 1) setIndex(nextIndex);
  }, 2500);

  let { src, width } = images[index];

  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      lqip={{ active: true, quality: 1 }}
      path={src}
      width={width + "px"}
      transformation={[
        {
          width: width,
        },
      ]}
    />
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
