import { useField } from "formik";
import { Checkbox, Typography } from "@material-tailwind/react";


const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Checkbox 
        {...field}
        {...props}
        type="checkbox" 
        name="acceptedTos"
        label={
        <Typography
          variant="small"
          color="gray"
          className="flex items-center font-normal"
        >
          I agree the
          <a
            href="#"
            className="font-medium transition-colors   hover:text-gray-900"
          >
            &nbsp;Terms and Conditions
          </a>
        </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      {meta.touched && meta.error && <div className="error pl-3 body-sm -mt-2 text-error ">{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;


