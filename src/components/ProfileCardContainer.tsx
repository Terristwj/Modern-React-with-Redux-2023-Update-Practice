import ProfileCard from "./ProfileCard";
import Profile from "../models/ProfileCard";
import "bulma/css/bulma.css";

function ProfileCardContainer(): JSX.Element {
  // Pretent retrieve from database
  // ${process.env.PUBLIC_URL} - Gets root
  const imgPath = `${process.env.PUBLIC_URL}/assets/`;
  let profiles: Profile[] = [
    { title: "2nd Healer", tag: "@bailu", img: imgPath + "bailu.jpg" },
    { title: "Lady Boss", tag: "@bronya", img: imgPath + "bronya.jpg" },
    { title: "Klee", tag: "@clara", img: imgPath + "clara.jpg" },
    { title: "Must Pull", tag: "@seele", img: imgPath + "seele.jpg" },
  ];

  let profilesContainer: JSX.Element[] = [];
  profiles.forEach((profile) => {
    let { title, tag, img } = profile;
    profilesContainer.push(
      <ProfileCard key={tag} title={title} tag={tag} img={img} />
    );
  });

  return (
    <div className="container">
      <section className="section">
        <div className="card columns">{profilesContainer}</div>
      </section>
    </div>
  );
}

export default ProfileCardContainer;
