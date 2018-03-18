export class Article implements IArticle {
  headline: string;
  sideHeadline: string;
  author: string;
  picLink: string;
  secPicLink: string;
  tags: string[];
  content: string;
  constructor(headline, content, subheadline, author, picturelink, secondarypicturelink, tags) {
    this.headline = headline;
    this.sideHeadline = subheadline;
    this.author = author;
    this.picLink = picturelink;
    this.secPicLink = secondarypicturelink;
    this.tags = tags.split(',');
    this.content = content;
  }
}

export interface IArticle {
  headline: string;
  sideHeadline: string;
  author: string;
  picLink: string;
  secPicLink: string;
  tags: string[];
  content: string;
  upVotes?: number;
  downVotes?: number;
  featured?: boolean;
  views?: number;
  created?: Date;
}
