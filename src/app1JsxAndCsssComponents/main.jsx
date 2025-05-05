import { createRoot } from 'react-dom/client';
import App from './app1JsxAndCsssComponents/App.jsx';


const mainContainer = createRoot(document.querySelector("#root"));

mainContainer.render(
  <App />
)