import { getRndInteger } from "../util/util";

/**
 * Interface of Profile
 * @summary - Required to allow null likes
 */
interface iProfile {
  title: string;
  tag: string;
  imageSrc: string;
  likes?: number;
}

class Profile {
  private _title: string;
  private _tag: string;
  private _imageSrc: string;
  private _likes: number;

  constructor(obj?: iProfile) {
    this._title = obj?.title ?? "";
    this._tag = obj?.tag ?? "";
    this._imageSrc = obj?.imageSrc ?? "";
    this._likes = obj?.likes ?? 0;
  }

  get getTitle() {
    return this._title;
  }
  get getTag() {
    return this._tag;
  }
  get getImageSrc() {
    return this._imageSrc;
  }
  get getLikes() {
    return this._likes;
  }
  addLike() {
    this._likes += 1;
  }

  /**
   * @returns - items as an object
   */
  get getProfile() {
    return {
      Title: this._title,
      Tag: this._tag,
      Img: this._imageSrc,
      Likes: this._likes,
    };
  }

  /**
   * Retreive profiles from 'Database'
   * @returns - Array of Profiles
   */
  getProfiles(): Profile[] {
    // Pretent retrieve from database
    // ${process.env.PUBLIC_URL} - Gets root
    const imgPath = `${process.env.PUBLIC_URL}/assets/`;
    const profiles = this.makeProfiles(imgPath);
    return profiles;
  }

  // Database
  makeProfiles(imgPath: string): Profile[] {
    let profiles: Profile[] = [
      new Profile({
        title: "2nd Healer",
        tag: "@bailu",
        imageSrc: imgPath + "bailu.jpg",
        likes: getRndInteger(500, 800),
      }),
      new Profile({
        title: "Lady Boss",
        tag: "@bronya",
        imageSrc: imgPath + "bronya.jpg",
        likes: getRndInteger(700, 1000),
      }),
      new Profile({
        title: "Klee",
        tag: "@clara",
        imageSrc: imgPath + "clara.jpg",
        likes: getRndInteger(600, 1000),
      }),
      new Profile({
        title: "Must Pull",
        tag: "@seele",
        imageSrc: imgPath + "seele.jpg",
        likes: getRndInteger(700, 1200),
      }),
      new Profile({
        title: "Always Depressed",
        tag: "@pompom",
        imageSrc: imgPath + "pompom.jpg",
        likes: getRndInteger(300, 500),
      }),
    ];
    return profiles;
  }
}

export default Profile;
