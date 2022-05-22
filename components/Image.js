import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/paz/";

export default function MyImage(props) {
  let images = props.images || [props.image];

  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      lqip={{ active: true, quality: 1 }}
      path={props.src}
      width={props.width + "px"}
      transformation={[
        {
          width: props.width,
        },
      ]}
    />
  );
}
