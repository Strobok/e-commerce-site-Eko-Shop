import React, { useState, useRef } from 'react';
import { useCountries } from 'use-react-countries';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useField } from "formik";
import { Typography } from "@material-tailwind/react";

const CustomPhone = ({ label, actions, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { countries } = useCountries();
  const [country, setCountry] = useState('197');
  const { name, flags, countryCallingCode } = countries[country];

  const menuListRef = useRef(null);

  const handleKeyDown = (event) => {
    const pressedKey = event.key.toLowerCase();
    const countryIndex = countries.findIndex(({ name }) => name.toLowerCase().startsWith(pressedKey));
  
    if (countryIndex !== -1) {
      if (menuListRef.current) {
        const selectedCountryElement = menuListRef.current.children[countryIndex];
        if (selectedCountryElement) {
          selectedCountryElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      }
    }
  };

  const countriesToDisplay = countries
    .sort((a, b) => a.name.localeCompare(b.name));

    React.useEffect(() => {
      helpers.setValue(countryCallingCode);
    }, [countryCallingCode, actions]);
    
    // ...
    
    // Kada se vrednost input polja promeni, ažuriraj vrednost pomoću helpers.setValue
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      // Ako želiš da dodate nešto ispred input vrednosti, dodaj ovde
      helpers.setValue(countryCallingCode + inputValue);
    };

  return (
    <>
      <Typography variant="h6" color="gray" className="pl-3 mb-1 mt-2">
        {label}
      </Typography>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <button
              ripple={false}
              variant="text"
              className="flex items-center px-3 gap-2 py-2  bg-gray-200  border-2 rounded-full rounded-r-none border-r-0  text-grey-400 focus:outline-none text-sm  border-grey-200"
            >
              <img
                src={flags.svg}
                alt={name}
                className="h-4 w-4 rounded-full object-cover"
              />
            {name.slice(0,3)}..
            </button>
          </MenuHandler>
          <div tabIndex={0} onKeyDown={handleKeyDown}>
            <MenuList className="max-h-[20rem] max-w-[18rem]" ref={menuListRef}>
              {countriesToDisplay.map(({ name, flags, countryCallingCode }, index) => {
                return (
                  <MenuItem
                    key={name}
                    value={name}
                    className='flex items-center gap-2 text-grey-400 bg-white'
                    onClick={() => setCountry(index)}
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {name} <span className="ml-auto text-grey-400">{countryCallingCode}</span>
                  </MenuItem>
                );
              })}
            </MenuList>
          </div>
        </Menu>
        <input  
          onChange={() => handleInputChange()}                  
          className={`flex w-full py-2 px-3 rounded-full rounded-l-none border-2 focus:border-grey-500 text-grey-600 bg-white focus:outline-none text-sm 
          ${meta.touched && meta.error ? " border-grey-200" : " border-grey-200"}`}
            {...field}
            {...props}
          />
      </div>
      {meta.touched && meta.error && <div className="error pl-3 body-sm pt-1 text-error ">{meta.error}</div>}
    </>
  );
}

export default CustomPhone


