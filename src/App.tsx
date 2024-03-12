import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import { DarkModeProvider } from "./components/contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
