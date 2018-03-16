

export class Article {
    headline;
    subheadline;
    author;
    picturelink;
    secondarypicturelink;
    tags;
    content;
    constructor(headline,content,subheadline,author,picturelink,secondarypicturelink,tags){
        this.headline=headline;
        this.subheadline=subheadline;
        this.author =author;
        this.picturelink =picturelink;
        this.secondarypicturelink =secondarypicturelink;
        this.tags=tags;
        this.content=content;
    }
}