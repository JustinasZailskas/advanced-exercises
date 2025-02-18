import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <p>Sveiki, jus esate prisijungęs. Galite peržiūrėti visas užduotis</p>
      <Outlet />
    </>
  );
};

export default Dashboard;
