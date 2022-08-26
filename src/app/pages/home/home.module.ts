import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { HomePageRoutingModule } from './home-routing.module';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    HomePage
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
