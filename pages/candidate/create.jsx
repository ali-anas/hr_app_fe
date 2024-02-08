import React from 'react';
import Link from 'next/link';
import { statusLabelsMap, statusValuesMap } from '../../helpers/constants';
import Button from '../../components/Button';
import { Form, Field } from 'react-final-form';
import { useRouter } from 'next/router';

function CandidateForm(props) {
  const { onSubmit, validateEmail, validateMobileNumber, validateName, hasValidationErrors } = props;
  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto">
      <div className="text-3xl my-4">Create new candidate</div>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <Field name="name" validate={validateName}>
          {({ input, meta }) => (
            <div className="mb-4">
              <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                Candidate Name
              </label>
              <div className="relative mb-4">
                <input
                  placeholder="Enter candidate name"
                  id="name"
                  name="name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  type="text"
                  {...input}
                />
                {meta.error && !meta.pristine && <p className="text-red-500 text-sm">{meta.error}</p>}
                
              </div>
            </div>
          )}
        </Field>
        <div className="mb-4 flex flex-col md:flex-row  flex-nowrap items-start justify-center md:items-center md:justify-start gap-4">
          <Field name="email" validate={validateEmail}>
            {({ input, meta }) => (
              <div className='w-full'>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  type="text"
                  {...input}
                />
                {meta.error && !meta.pristine && <p className="text-red-500 text-sm">{meta.error}</p>}
              </div>
              </div>
            )}
          </Field>
          <Field name="mobile" validate={validateMobileNumber}>
            {({ input, meta }) => (
              <div className='w-full'>
              <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                Mobile number
              </label>
              <div className="relative">
                <input
                  placeholder="Mobile no."
                  id="mobile"
                  name="mobile"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  type="text"
                  {...input}
                />
                {meta.error && !meta.pristine && <p className="text-red-500 text-sm">{meta.error}</p>}
              </div>
              </div>
            )}
          </Field>
        </div>

        <Field name="status" validate={value => value && value.length ? undefined : 'Required'}>
          {({ input, meta }) => (
            <div className="mb-4">
            <label htmlFor="customer" className="mb-2 block text-sm font-medium">
              Candidate Status
            </label>
            <div className="relative">
              <select
                id="status"
                name="status"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                // ref={register}
                {...input}
              >
                <option value="" disabled>
                  Select a status
                </option>
                {Object.values(statusValuesMap).map((status) => (
                  <option key={status} value={status}>
                    {statusLabelsMap[status]}
                  </option>
                ))}
              </select>
              {meta.error && !meta.pristine && <p className="text-red-500 text-sm">{meta.error}</p>}
            </div>
          </div>
          )}
          </Field>

        
        <div className="mb-4 flex flex-col md:flex-row  flex-nowrap items-start justify-center md:items-center md:justify-start gap-4">
          <Field name="reactjs_exp" validate={value => !value ? 'Required' : undefined}>
            {({ input, meta }) => (
              <div className="w-full">
                <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                  Total Professional Experience using Reactjs
                </label>
                <div>
                  <input
                    placeholder="Enter years of experience"
                    id="reactjs_exp"
                    name="reactjs_exp"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue=""
                    type="number"
                    // ref={register}
                    {...input}
                  />
                  {meta.error && !meta.pristine && <p className="text-red-500 text-sm">{meta.error}</p>}
                </div>
              </div>
            )}
          </Field>
          <Field name="nodejs_exp" validate={value => !value ? 'Required' : undefined}>
            {({ input, meta }) => (
              <div className="w-full">
                <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                  Total Professional Experience using Nodejs
                </label>
                <div>
                  <input
                    placeholder="Enter years of experience"
                    id="nodejs_exp"
                    name="nodejs_exp"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue=""
                    type="number"
                    // ref={register}
                    {...input}
                  />
                  {meta.error && !meta.pristine && <p className="text-red-500 text-sm">{meta.error}</p>}
                </div>
            </div>
            )}
          </Field>
        </div>

        <Field name="expected_salary" validate={value => !value ? 'Required' : undefined}>
          {({ input, meta }) => (
            <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Expected Salary
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="expected_salary"
                  name="expected_salary"
                  type="number"
                  step="0.01"
                  placeholder="Enter amount in INR"
                  {...input}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                {meta.error && !meta.pristine && <p className="text-red-500 text-sm">{meta.error}</p>}
              </div>
            </div>
          </div>
        )}
          
        </Field>
      </div>
      <div>{hasValidationErrors ? <p className="text-sm">**All fields are required</p> : null}</div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
        >
          <div className="cursor-pointer flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">Cancel</div>
          
        </Link>
        <Button type="submit" disabled={hasValidationErrors}>Create Candidate</Button>
      </div>
    </form>
  );
}


export default function CreateCandidate() {
  const router = useRouter();
  const onFormSubmit = async (values) => {
    try {
      // Make a POST request using fetch or any HTTP client library
      const response = await fetch(`/api/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        router.push('/');
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const validateEmail = (value) => {
    if (!value) {
      return 'Email is required';
    }
  
    // Use a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Invalid email address';
    }
  
    return undefined; // Validation passed
  };

  const validateMobileNumber = (value) => {
    if (!value) {
      return 'Mobile number is required';
    }
  
    // Use a regular expression to check for a valid mobile number format
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(value)) {
      return 'Invalid mobile number';
    }
  
    return undefined; // Validation passed
  };

  const validateName = (value) => {
    if (!value) {
      return 'Name is required';
    }
  
    // Use a regular expression to check for a valid mobile number format
    return value.length < 2 ? 'Invalid name' : undefined;
  };

  return (
    <div>
      <Form onSubmit={onFormSubmit} render={({ handleSubmit, hasValidationErrors }) => <CandidateForm onSubmit={handleSubmit} validateEmail={validateEmail} validateMobileNumber={validateMobileNumber} validateName={validateName} hasValidationErrors={hasValidationErrors} />} />
    </div>
  );
}