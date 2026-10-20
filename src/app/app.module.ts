import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DmheaderComponent } from './dmheader/dmheader.component';
import { DmfooterComponent } from './dmfooter/dmfooter.component';
import { TuneSelectionComponent } from './tune-selection/tune-selection.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { VideoResultsComponent } from './video-results/video-results.component';
import { YoutubePipe } from './Pipes/SafeURL.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DmheaderComponent,
    DmfooterComponent,
    TuneSelectionComponent,
    VideoResultsComponent,
    YoutubePipe,
    ArrayOfComponents,
    NavigationComponent    
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    NgbModule,
    BsDropdownModule,    
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  

}
