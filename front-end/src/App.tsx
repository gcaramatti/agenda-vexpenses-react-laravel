import Router from "./routes/routes";
import GlobalStyle from "./globalStyles";
import HeaderComponent from "./components/header";

function App() {
  //Apenas para mostrar os componentes que vou utilizar na tela.
  return (
    <div>
      <GlobalStyle />
      <HeaderComponent />
      <Router />
    </div>
  );
}

export default App;
