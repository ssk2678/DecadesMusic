import { Observable } from "rxjs";
import { YoutubeVideo } from "src/models/youTubeVideo.model";


export interface IYouTubeSearchAPIService {
    GetYoutubeVideos(videoQuery: string, maxResults: number) : Observable<YoutubeVideo>;
    
}