import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from "../schemas";
import  CustomPhone  from '../inputs/CustomPhone.jsx'
import { Checkbox, Button, Typography } from "@material-tailwind/react";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

const SignUp = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit,} = useFormik({
    initialValues: {
      email: "",
      tel: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });


    return (
    <div className=" px-8 py-8 md:px-16 md:py-0 lg:flex lg:flex-wrap">
      {/* <!-- Left column container--> */}
      <div className="pb-10 m-auto lg:w-1/2 ">
        <div className=" mt-4 md:p-12 md:pr-16">  
        <Typography variant="h4" color="gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit} autoComplete="off" className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-3">
            
            <Typography variant="h6" color="gray" className="pl-3 -mb-2">
              Email
            </Typography>
            <input                     
              className={`flex py-2 px-3 rounded-full border-2 focus:border-grey-500 text-grey-600 bg-white focus:outline-none text-sm 
              ${errors.email && touched.email ? " border-red-700" : " border-grey-200"}`}
              placeholder="name@mail.com" 
              id="email"
              autoComplete="off"
              type="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <Typography variant="h6" color="gray" className="pl-3 -mb-2">
              Phone Number
            </Typography>
            <PhoneInput />
              {errors.tel && touched.tel && <p className="error">{errors.tel}</p>}
            <Typography variant="h6" color="gray" className="pl-3 -mb-2">
              Password
            </Typography>
            <input                     
              className={`flex py-2 px-3 rounded-full border-2 border-grey-200 focus:border-grey-500 text-grey-600 focus:outline-none text-sm 
              ${errors.password && touched.password ? " border-red-700" : " border-grey-200"}`}
              placeholder="Password" 
              id="password"
              autoComplete="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              />
              {errors.password && touched.password && <p className="error">{errors.password}</p>}
            <Typography variant="h6" color="gray" className="pl-3 -mb-2">
              Confirm Password
            </Typography>
            <input
              className={`flex py-2 px-3 rounded-full border-2 border-grey-200 focus:border-grey-500 text-grey-600 focus:outline-none text-sm 
              ${errors.confirmPassword && touched.confirmPassword ? " border-red-700" : " border-grey-200"}`}
              placeholder="Confirm Password" 
              id="confirmPassword"
              type="password"
              autoComplete="password"
              onChange={handleChange}
              value={values.confirmPassword}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          
          
          
          </div>

          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button disabled={isSubmitting} type="submit"  className="mt-6 bg-primary rounded-full" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
        </div>
      </div>  
    </div>   
  );
}

  export default SignUp