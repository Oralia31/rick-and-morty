import CharactersProvider from "./Context/CharactersProvider";
import AppRouter from "./Router/AppRouter";
import ThemeConfig from "./config/theme.config";

function App() {
  return (
    <CharactersProvider>
      <ThemeConfig>
        <AppRouter />
      </ThemeConfig>
    </CharactersProvider>
  );
}

export default App;
