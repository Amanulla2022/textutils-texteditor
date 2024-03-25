import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./context/Context";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
export default App;
