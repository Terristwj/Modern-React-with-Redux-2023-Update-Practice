import ProfileCard from "./components/ProfileCard";

function App(): JSX.Element {
  const profileContainerStyle = {
    display: "flex",
  };
  return (
    <div style={profileContainerStyle}>
      <ProfileCard title="Alexa" twitter="@alexa99" />
      <ProfileCard title="Cortana" twitter="@cortana32" />
      <ProfileCard title="Sin" twitter="@siri01" />
    </div>
  );
}

export default App;
