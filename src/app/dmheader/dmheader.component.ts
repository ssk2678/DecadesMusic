import { Component, OnInit, AfterViewInit, Input, Output, SimpleChanges, ChangeDetectorRef, AfterContentChecked, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'dmheader',
  templateUrl: './dmheader.component.html',
  styleUrls: ['./dmheader.component.css'],
  
})
export class DmheaderComponent implements OnInit, AfterViewInit  {

  public decadesMusicLOGO = "assets/images/DMLogoTwo.png";
  public decadesMusicLoadingIcon = "assets/images/TrebleClefLoader.gif";  

  @Input() loadingVisible: boolean = false;
  @Input() artistsObservable: Observable<Artist[]>;
  @Output() decadeLinkClicked: EventEmitter<string> = new EventEmitter;

  constructor(private cdRef : ChangeDetectorRef) { }  

  ngOnInit() {
   
      
  }

  ngAfterViewInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges){
   
    const chng = changes['artistsObservable'];
    const cur = chng.currentValue;
    
    if (cur != undefined)
    {
      this.loadingVisible = false;
    }

  }

  
  SendDecadeId(decadeValue: string){
    
    this.loadingVisible = true;
    this.decadeLinkClicked.emit(decadeValue);
    
    
  } 

  

}
