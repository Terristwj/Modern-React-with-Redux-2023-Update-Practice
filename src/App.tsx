import ProfileCard from "./components/ProfileCard";
import Profile from "./models/ProfileCard";

function App(): JSX.Element {
  const profileContainerStyle = {
    display: "flex",
  };
  let profiles: Profile[] = [
    { title: "Alexa", twitter: "@alexa99"},
    { title: "Cortana", twitter: "@cortana32" },
    { title: "Sin", twitter: "@siri01" },
    { title: "Thomas", twitter: "@Thom" },
  ];

  let profilesContainer: JSX.Element[] = [];
  profiles.forEach(profile => {
    profilesContainer.push(<ProfileCard key={profile.twitter} title={profile.title} twitter={profile.twitter} />);
  });

  return (
    <div style={profileContainerStyle}>
      {profilesContainer}
    </div>
  );
}

export default App;
