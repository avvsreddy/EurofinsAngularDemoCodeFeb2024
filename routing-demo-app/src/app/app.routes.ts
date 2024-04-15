import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TeamsComponent } from './teams/teams.component';
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CanActivate, CanDeactivateContactForm, CanDeactivateGeneric } from './guards/secure.guards';

export const routes: Routes = 
[
    {
        path:'home', component:HomeComponent,title:'Routing Demo App - Home'
    },
    {
        path:'about', component:AboutComponent,title:'Routing Demo App - About'
    },
    {
        path:'about', component:AboutComponent, canActivateChild:[CanActivate], children:[
            {path:'teams',component:TeamsComponent},
            {path:'company',component:CompanyComponent},
            {path:'services',component:ServicesComponent, },
        ],
    },
    // {
    //     path:'about/teams',component:TeamsComponent
    // },
    // {
    //     path:'about/company',component:CompanyComponent
    // },
    // {
    //     path:'about/services',component:ServicesComponent
    // },
    {
        path:'contact', component:ContactComponent,title:'Routing Demo App - Contact', canDeactivate:[CanDeactivateGeneric]
    },
    {
        path:'products', 
        component:ProductListComponent,
        title:'Routing Demo App - Products List',
        canActivate:[CanActivate]
    },
    {
        path:'products/addtocart:id', component:AddToCartComponent,title:'Routing Demo App - Add To Cart'
    },
    // {
    //     path:'products/edit/:id', component:EditComponent,title:'Routing Demo App - Add To Cart'
    // },
    // {
    //     path:'products/delete/:id', component:DeleteComponent,title:'Routing Demo App - Add To Cart'
    // },
    {
        //path:'',component:HomeComponent
        path:'',redirectTo:'home',pathMatch:'full'
    },
    {
        path:'**',component:NotfoundComponent, title:"Routing Demo App - 404! Not Found"
    }

];
