import React from 'react'

const Login = () => {
  return (
    <div className=" px-8 py-8 md:px-16 md:py-0 lg:flex lg:flex-wrap">
      {/* <!-- Left column container--> */}
      <div className="pb-10 lg:w-6/12">
        <div className=" mt-4 md:p-12 md:pr-16">                  
          <form>
            <p className="mb-2 pl-4 ">Please login to your account</p>

            <label className="flex flex-1 justify-between py-2 px-3 mb-3 items-center gap-2 border-2 rounded-full border-grey-200 ">
              <input                     
                className="flex w-[75%] text-grey-600 focus:outline-none focus:border-white focus:ring-white focus:ring-0 text-sm" 
                placeholder="Username..." 
                type="username"
                label="Username" 
                autoComplete="off"
                name="search"/>
            </label>

            <label className="flex flex-1 justify-between py-2 px-3 mb-3 items-center gap-2 border-2 rounded-full border-grey-200 ">
              <input                     
                className="flex w-[75%] text-grey-600 focus:outline-none focus:border-white focus:ring-white focus:ring-0 text-sm" 
                placeholder="Password..." 
                type="Password"
                label="Password" 
                autoComplete="off"
                name="search"/>
            </label>

            <div className="flex flex-col mb-10 pb-1 pt-1 text-center">
            <button className="button-md bg-primary px-14 mb-3 text-white hover ">
              Log in
            </button>
              <a href="#!">Forgot password?</a>
            </div>

            <div className="flex items-center justify-between">
              <p className="mb-0 mr-2">Don't have an account?</p>
                <button className="py-2 px-6 justify-center items-center rounded-[40px] border-2 border-grey-200 hover">
                  REGISTER
                </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-center bg-primary lg:w-6/12">
        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
          <h4 className="mb-6 text-xl font-semibold">
            We are more than just a company
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>        
  );
}

export default Login