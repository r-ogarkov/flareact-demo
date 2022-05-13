import i18next from "../i18next";

const App = ({ Component, pageProps }) => (
  <div>
    <button onClick={() => i18next.changeLanguage("ru")}>RU</button>
    <button onClick={() => i18next.changeLanguage("en")}>EN</button>
    <Component {...pageProps} />
  </div>
)

export default App;


