export class Song{
    SongId: number;
    SongName: string;
    SongArtistId: number;
    SongDecadeId: number;
    DateAdded: Date;
    DateModified: Date;


    constructor(obj?: any) {
        this.SongId = obj && obj.SongId             || null;
        this.SongName = obj && obj.SongName         || null;
        this.SongArtistId = obj && obj.SongArtistId || null;
        this.SongDecadeId = obj && obj.SongDecadeId || null;
        this.DateAdded = obj && obj.DateAdded       || null;
        this.DateModified = obj && obj.DateModified || null;
    }
}