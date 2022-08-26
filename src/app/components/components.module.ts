import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {UserCardComponent} from "./user-card/user-card.component";
import {AboutPageRoutingModule} from "../pages/about/about-routing.module";
import {ScarsComponent} from "./scards/scars.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SearchComponent} from "./search/search.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    ScarsComponent,
    SearchComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    AboutPageRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    ScarsComponent,
    SearchComponent
  ]
})
export class ComponentsModule{

}
