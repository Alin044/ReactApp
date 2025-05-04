import { createRoot } from 'react-dom/client';
import App from './App.jsx';


const mainContainer = createRoot(document.querySelector("#root"));

mainContainer.render(
  <App />
)