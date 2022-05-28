import { IKImage } from "imagekitio-react";
import React, { useState, useEffect, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";

const urlEndpoint = "https://ik.imagekit.io/paz/";

export default function MyImage(props) {
  let images = props.images || [props.image];

  let [index, setIndex] = useState(0);
  let [visible, setVisible] = useState(false);

  useInterval(() => {
    if (!visible) return;
    let nextIndex = index + 1;
    if (index != images.length - 1) setIndex(nextIndex);
    if (index == images.length - 1) setIndex(0);
  }, 4100);

  let { src, width, transformations } = images[index];

  function onEnterViewport() {
    setVisible(true);
  }

  function onExitViewport() {
    setVisible(false);
  }

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <IKImage
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
    </ScrollTrigger>
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
