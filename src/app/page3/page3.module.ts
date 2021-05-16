import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatTableModule } from '@angular/material/table';

import { Page3PageRoutingModule } from './page3-routing.module';

import { Page3Page } from './page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page3PageRoutingModule,
    MatTableModule
  ],
  declarations: [Page3Page]
})
export class Page3PageModule {}
