import "./App.css";
import Tabs from "./components/Tabs";
import CacheProvider from "./components/context/CacheContext";
function App() {
  return (
    <CacheProvider>
      <div>
        <Tabs />
      </div>
    </CacheProvider>
  );
}

export default App;
