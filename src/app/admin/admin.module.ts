import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    CommonModule,
    ComponentsModule,    
    NgxSpinnerModule  
  ],
  exports: [
    LayoutModule,
  ]
})
export class AdminModule { }
