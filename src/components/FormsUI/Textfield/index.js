import React from 'react'
import { useField } from 'formik'

const TextfieldWrapper = ({
	name,
	...otherProps
}) => {
	const [field, mata] = useField(name);

	const configTextfield = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: 'outlined'
	};

	if(mata && mata.touched && mata.error)  { 
		configInput.error = true;
		configTInput.helperText = mata.error;
	}
	
    return(
      <div>
				<Textfield {...configTextfield} />
			</div>
    )
}

export default TextfieldWrapper