import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import SocialMedia from "./components/social-media";

function App() {
  return (
    <div className="opacity-100 transform-none">
      <Header />
      <SocialMedia />
      <Main />
    </div>
  );
}

export default App;
