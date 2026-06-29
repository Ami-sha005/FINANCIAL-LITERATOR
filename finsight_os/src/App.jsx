import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";

import FloatingAIChat from "./components/FloatingAIChat";

function App() {

  return (

    <AuthProvider>

      <AppRoutes />

      <FloatingAIChat />

    </AuthProvider>

  );

}

export default App;