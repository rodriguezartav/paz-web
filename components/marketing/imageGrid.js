export default function imageGrid(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-8 mx-auto max-w-7xl sm:max-w-7xl space-x-4 mb-12">
      <div className=" col-span-2 sm:col-span-4 ">
        <img
          src={props.images[0]}
          className="object-cover rounded-tl-lg rounded-bl-lg "
        />
      </div>

      <div className=" sm:col-span-2 ">
        <img src={props.images[1]} className="object-cover " />
        <img src={props.images[2]} className="object-cover mt-5 " />
      </div>
      <div className=" sm:col-span-2 ">
        <img src={props.images[3]} className="object-cover rounded-tr-lg" />
        <img
          src={props.images[4]}
          className="object-cover mt-5 rounded-br-lg"
        />
      </div>
    </div>
  );
}
