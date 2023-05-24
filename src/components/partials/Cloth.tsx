import { TextField } from "../ui/inputs";

export const Cloth = () => {
  return (
    <div className="my-4 flex flex-col items-center md:block md:mx-10">
        <div>Name:</div>
        <TextField
            className="mt-4"
            readOnly
            value="dsjadlasjfkljsd;f"
            label="ID"
        />
    </div>
  )
}
