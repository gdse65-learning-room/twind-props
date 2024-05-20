import GDSEButton from "../../components/Button";

export default function Customer() {
  return (
    <>
      <h1 className="text-3xl text-cyan-50 bg-indigo-500 p-3 rounded-md font-sans hover:font-serif">
        Hello React with Tailwind and props
      </h1>

      <GDSEButton btnName="save" btnColor="bg-blue-500" />
      <GDSEButton btnName="update" btnColor="bg-orange-500" />
      <GDSEButton btnName="delete" btnColor="bg-red-500" />
    </>
  );
}
