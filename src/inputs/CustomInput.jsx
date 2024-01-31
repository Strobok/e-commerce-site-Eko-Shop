import { useField } from "formik";
import { Typography } from "@material-tailwind/react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
			<Typography variant="h6" color="gray" className="pl-3 mb-1 mt-2">
				{label}
			</Typography>
      <input
      className={`flex w-full py-2 px-3 rounded-full border-2 focus:border-grey-500 text-grey-600 bg-white focus:outline-none text-sm 
      ${meta.touched && meta.error ? " border-grey-200" : " border-grey-200"}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <div className="error pl-3 body-sm pt-1 text-error ">{meta.error}</div>}
    </>
  );
};
export default CustomInput;