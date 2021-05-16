import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input';
import { IonicStorageModule } from '@ionic/storage';

import { Page4PageRoutingModule } from './page4-routing.module';

import { Page4Page } from './page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page4PageRoutingModule,
    MatInputModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page4Page]
})
export class Page4PageModule {}
