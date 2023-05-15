import "bulma/css/bulma.css";

function Header(_: { HonkaiStarRailLikes?: number }): JSX.Element {
  let headerContent: JSX.Element;

  // Honkai Star Rail
  if (_.HonkaiStarRailLikes) {
    headerContent = (
      <div className="hero-body">
        <p className="title">Random Weeb Project</p>
        <p className="subtitle has-text-weight-bold">
          Total Likes: {_.HonkaiStarRailLikes}
        </p>
      </div>
    );
  } else {
    headerContent = (
      <div className="hero-body">
        <p className="title">React Practice Project</p>
      </div>
    );
  }

  return (
    <div>
      <section className="hero is-info">{headerContent}</section>
    </div>
  );
}

export default Header;
