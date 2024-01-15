import React from 'react';
import  { ChangeEvent, FormEvent, useState, } from 'react';

//Describes the shape of the FormData state & Errors
interface FormData {
  name: string;
  email: string;
  password: string;
}

//Errors props can be string or undefined
interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

//Adds TypeScript Generics with useState to ensure the state variables have the expected types.
const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  //Responsible for updating the form data as the user types. 
  //handleChange is attached to the onChange event below
  //Destructor is used to extract name and value props from e.target
  //Indicates that the handleChange function expects an event object 
  //(e) of type ChangeEvent where the target element is an HTMLInputElement
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Performs client-side validation on the form fields. Checking whether the entered
  //data is valid based on the criteria.
  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: any = {};

    // Validates name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validates email
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    // Validates password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    //Updates the state variable 'errors' with a new object (newErrors).
    //The errors state is used to store the error messages assocaited with each form field
    setErrors(newErrors);
    return isValid;
  };

  //email validation
  const isValidEmail = (email: string) => {
    return email.includes('@') && email.includes('.');
  };


  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Submits the form data
      // Can add aditional logic for form submission
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
