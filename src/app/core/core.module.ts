import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BrandComponent } from './brand/brand.component';
import { CoreRoutingModule } from "./core-routing.module";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent,
        NavigationComponent,
        BrandComponent
    ],
    imports: [
        AppRoutingModule,
        CoreRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        NavigationComponent,
        CoreRoutingModule
    ]
})
export class CoreModule{}