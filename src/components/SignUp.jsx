import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "../inputs/CustomCheckbox";
import CustomInput from "../inputs/CustomInput";
import CustomSelect from "../inputs/CustomSelect";
import  CustomPhone  from '../inputs/CustomPhone.jsx'
import { Button, Typography } from "@material-tailwind/react";

const onSubmit = async (values, actions) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    actions.resetForm();
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const SignUp = () => {
  return (
    <div className=" px-8 py-8 md:px-16 md:py-0 lg:flex lg:flex-wrap">
      {/* <!-- Left column container--> */}
      <div className="pb-10 m-auto lg:w-1/2 ">
        <div className=" mt-4 md:p-12 md:pr-16">  
        <Typography variant="h4" color="gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 mb-4 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <Formik
          initialValues={{ username: "", firstName: "", lastName: "", email: "", tel: "", addresse: "", password: "", confirmPassword: "", acceptedTos: false }}
          validationSchema={advancedSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <CustomInput
                label="Username"
                name="username"
                type="text"
                placeholder="Username"
              />
              <CustomInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <CustomInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <CustomInput
                label="Email"
                name="email"
                type="text"
                placeholder="Email"
              />
              <CustomPhone
                label="Phone Number"
                name="tel"
                type="text"
                placeholder="Phone Number"
              />
              <CustomInput
                label="Addresse"
                name="addresse"
                type="text"
                placeholder="Addresse"
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="on"
              />
              <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                autoComplete="on"
              />    
              <CustomCheckbox type="checkbox" name="acceptedTos"/>      
              <Button disabled={isSubmitting} type="submit"  className="mt-6 bg-primary rounded-full" fullWidth>
                sign up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link onClick={() => window.scrollTo(0, 0)} to={'/signin'} className="font-bold text-gray-900">
                  Sign In
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
        </div>
      </div>  
    </div>   
  );
}

  export default SignUp

  