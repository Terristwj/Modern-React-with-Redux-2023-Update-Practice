import Header from "../components/Header";
import CarForm from "../components/CarForm";
import CarList from "../components/CarList";
import CarSearch from "../components/CarSearch";
import CarValue from "../components/CarValue";

function HotWheels(): JSX.Element {
  return (
    <div>
      <Header />
      <div>
        <CarForm />
        <CarList />
        <CarSearch />
        <CarValue />
      </div>
    </div>
  );
}

export default HotWheels;
