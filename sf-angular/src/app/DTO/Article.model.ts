export class Article {
  headline;
  sideHeadline;
  author;
  picLink;
  secPicLink;
  tags;
  content;
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
