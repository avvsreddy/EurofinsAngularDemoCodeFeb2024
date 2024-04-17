import { AbstractControl } from "@angular/forms";



export function mobileNumberValidator(control:AbstractControl): {[key:string]:any}  | null
// return null if its valid
{

const data:String=control.value;
if(data.charAt(0) != '9' || data.length !== 10)
    {
        return { 'invalidMobileNumber': { value: control.value } };
    }
        return null;
}