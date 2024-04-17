import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to validate mobile number format
export function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const mobileNumberRegex = /^[0-9]{10}$/; // Regular expression to match 10-digit mobile numbers
    const valid = mobileNumberRegex.test(control.value); // Test if the input matches the regex
    return valid ? null : { invalidMobileNumber: true }; // Return null if valid, otherwise return validation error object
  };
}


// Custom validator function to validate mobile number format
export function mobileNumberValidator2(control: AbstractControl): { [key:string]:any } | null  {

   
      const mobileNumberRegex = /^[0-9]{10}$/; // Regular expression to match 10-digit mobile numbers
      const valid = mobileNumberRegex.test(control.value); // Test if the input matches the regex
      return valid ? null : { invalidMobileNumber: true }; // Return null if valid, otherwise return validation error object
    };
  