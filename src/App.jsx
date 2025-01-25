import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";

function App() {
  return (
    <>
      <div className="justify-center flex flex-col min-h-screen items-center">
        <h1>Test2</h1>
        <ButtonPrimary>Sign Up</ButtonPrimary>
        <ButtonSecondary>Login</ButtonSecondary>
      </div>
    </>
  );
}

export default App;
