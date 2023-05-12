import { getRndInteger } from "../util/util";

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

  get getProfile() {
    return {
      title: this._title,
      tag: this._tag,
      img: this._imageSrc,
      likes: this._likes,
    };
  }

  getProfiles(): Profile[] {
    // Pretent retrieve from database
    // ${process.env.PUBLIC_URL} - Gets root
    const imgPath = `${process.env.PUBLIC_URL}/assets/`;
    let profiles: Profile[] = [
      new Profile({
        title: "2nd Healer",
        tag: "@bailu",
        imageSrc: imgPath + "bailu.jpg",
        likes: getRndInteger(25, 45),
      }),
      new Profile({
        title: "Lady Boss",
        tag: "@bronya",
        imageSrc: imgPath + "bronya.jpg",
        likes: getRndInteger(30, 52),
      }),
      new Profile({
        title: "Klee",
        tag: "@clara",
        imageSrc: imgPath + "clara.jpg",
        likes: getRndInteger(25, 50),
      }),
      new Profile({
        title: "Must Pull",
        tag: "@seele",
        imageSrc: imgPath + "seele.jpg",
        likes: getRndInteger(40, 70),
      }),
    ];

    return profiles;
  }
}

export default Profile;
