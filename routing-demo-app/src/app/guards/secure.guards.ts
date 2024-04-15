import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "../contact/contact.component";
import { inject } from "@angular/core";

// class Secure implements CanActivate
// {
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//         // 

//         return true;
//     }
    
// }

export function CanActivate() {
// make an api call
return IsAuthenticated;

}

// class test implements CanDeactivate{

// }


export interface ICanDeactivate
{
    canLeave() :boolean
}

export function CanDeactivateGeneric(component:ICanDeactivate ){
    if(!component.canLeave())
        {
          return confirm("Wish to leave without submiting the from?");      
        }
        return true;
}


export function CanDeactivateContactForm(component:ContactComponent):boolean{

if(component.email.length > 0 || component.name.length > 0 || component.message.length > 0)
    {
        return confirm("Are you wishing to leave the contact form?");
    }
    return true;
}



const IsAuthenticated:boolean = false;