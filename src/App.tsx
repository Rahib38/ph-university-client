import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <>
      <div>
        {/* <h1>Ph university management system</h1> */}
        <ProtectedRoute>
          <MainLayout></MainLayout>
        </ProtectedRoute>
      </div>
    </>
  );
}

export default App;
