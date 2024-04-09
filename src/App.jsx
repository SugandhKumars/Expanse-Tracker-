import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import SignupSignInForm from "./Components/SignupSignInForm";

function App() {
  return (
    <div className="w-full h-full">
      <ToastContainer />
      <Navbar />
      <SignupSignInForm />
    </div>
  );
}

export default App;
