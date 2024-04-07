/** React */
import ReactDOM from "react-dom/client";

/** Styles */
import "./assets/styles/main.scss";

/** Setup */
import "./config";

/** Components */
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
