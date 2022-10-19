import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { AllLocationsComponent } from './all-locations/all-locations.component';


@NgModule({
  declarations: [AllCharactersComponent, AllLocationsComponent],
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent, AllLocationsComponent]
})
export class SharedComponentsModule { }
