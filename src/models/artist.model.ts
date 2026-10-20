export class Artist {
    ArtistId: number;
    ArtistName: string;
    DateAdded: Date;
    DateModified: Date;
    
    constructor(obj?: any) {
        this.ArtistId = obj && obj.ArtistId         || null;
        this.ArtistName = obj && obj.ArtistName     || null;
        this.DateAdded = obj && obj.DateAdded       || null;
        this.DateModified = obj && obj.DateModified || null;
    }

}