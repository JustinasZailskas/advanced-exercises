import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <p>Čia yra pagrindinis puslapis</p>
      {isAuthenticated ? (
        <p>Prisijungęs</p>
      ) : (
        <div>
          <p>
            Jūs esate neprisijungęs, dėl to negalite peržiūrėti praktinių
            užduočių
          </p>
          <ButtonComponent
            title="Prisijungti"
            action={() => {
              navigate("/login");
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
