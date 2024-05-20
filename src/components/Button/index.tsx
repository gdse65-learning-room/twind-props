export default function GDSEButton(props) {
  return (
    <button className={`${props.btnColor} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
     {props.btnName}
    </button>
  );
}
