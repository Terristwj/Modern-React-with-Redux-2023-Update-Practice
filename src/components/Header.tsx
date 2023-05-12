import "bulma/css/bulma.css";

function Header(props: { TotalLikes: number }): JSX.Element {
  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Random Weeb Project</p>
          <p className="subtitle has-text-weight-bold">
            Total Likes: {props.TotalLikes}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
