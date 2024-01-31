import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Formik } from "formik";
import { sigInSchema } from "../schemas";
import CustomInput from "../inputs/CustomInput";
import { Button, Typography } from "@material-tailwind/react";

const onSubmit = async (values, actions) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const SignIn = () => {
  return (
    <div className=" px-8 py-8 md:px-16 md:py-0 lg:flex lg:flex-wrap">
      {/* <!-- Left column container--> */}
      <div className="pb-10 m-auto lg:w-1/2 ">
        <div className=" mt-4 md:p-12 md:pr-16">  
        <Typography variant="h4" color="gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 mb-4 font-normal">
        Please Sign In to your account.
        </Typography>
        <Formik
          initialValues={{ username: "", password: ""}}
          validationSchema={sigInSchema}
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
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="on"
              />
              <Button disabled={isSubmitting} type="submit"  className="mt-6 bg-primary rounded-full" fullWidth>
                sign in
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                    Don't have an account?{" "}
                <Link onClick={() => window.scrollTo(0, 0)} to={'/signup'} className="font-bold text-gray-900">
                  Sign Up
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

  export default SignIn

  