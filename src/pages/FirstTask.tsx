import CounterResultContainer from "../components/CounterResultContainer";
import ButtonContainer from "../components/ButtonContainer";
import { CounterProvider } from "../context/CounterContext";

function FirstTask() {
  return (
    <CounterProvider>
      <div>
        <CounterResultContainer />
        <ButtonContainer />
      </div>
    </CounterProvider>
  );
}

export default FirstTask;
