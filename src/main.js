import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// );

// const root = createRoot(
//   document.getElementById('root')
// );
// root.render(
//   <BrowserRouter>
//       <App/>
//   </BrowserRouter>
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
