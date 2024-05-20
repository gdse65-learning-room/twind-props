import GDSEButton from "../../components/Button";
import Title from "../../components/Title";
import DanuInput from "../../components/DanuInput";

export default function Customer() {
  return (
    <>
      <Title name="Customer Manage"/>

      <GDSEButton btnName="save" btnColor="bg-blue-500" />
      <GDSEButton btnName="update" btnColor="bg-orange-500" />
      <GDSEButton btnName="delete" btnColor="bg-red-500" />
      
      {/* dumb component */}
      
      <DanuInput name="Input customer id" />
      <DanuInput name="Input customer name" />
      <DanuInput name="Address" />
    </>
  );
}


