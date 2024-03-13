import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import { DarkModeProvider } from "./components/contexts/DarkModeContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#0c0e16",
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
