import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./context/Context";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

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
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
export default App;
