import { useState } from "react";
import Form from "./components/Form.jsx";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.licenseType
    ) {
      alert("Please fill in all required fields");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Nav  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <HomePage darkMode={darkMode}/>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      <Footer/>
    </div>
  );
}

export default App;
