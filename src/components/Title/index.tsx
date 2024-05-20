export default function Title(props) {
  return (
    <p className="text-3xl text-cyan-50 bg-indigo-500 p-3 rounded-md font-sans hover:font-serif">
      {props.name}
    </p>
  );
}
