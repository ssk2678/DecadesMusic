import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'video-results',
  templateUrl: './video-results.component.html',
  styleUrls: ['./video-results.component.css']
})
export class VideoResultsComponent implements OnInit {


  @Input() videosFromTuneSelectionToVideoResults: any;
  
 
  constructor() {

      
  }  

  ngOnInit(): void {
    

  }
  
  ReturnCSSClass (totalItems: number, videoItemIndex: number): string {
   

    if(videoItemIndex == 0)
    {
      switch(totalItems){
        case 1:
          return "videoDivOneOne";
        case 2:
          return "videoDivTwoOne";
        case 3:
          return "videoDivThreeOne";
        case 4:
          return "videoDivFourOne";
        case 5:
          return "videoDivFiveOne";
        default:
            throw Error('Invalid Number of Items');
      }    
    }
    else
    {
      switch(videoItemIndex){
        case 1:
          return "videoDivTwo";
        case 2:
          return "videoDivThree";
        case 3:
          return "videoDivFour";
        case 4:
          return "videoDivFive";        
        default:
            throw Error('Invalid Number of Items');
      }
    }

    return "videoDivFiveOne";

  }

}
