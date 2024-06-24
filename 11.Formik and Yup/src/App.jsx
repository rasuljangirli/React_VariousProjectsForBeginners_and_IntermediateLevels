import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PortalForm from "./components/PortalForm";
import GeneralForm from "./components/GeneralForm";
import Loading from "./components/Loading";
// import NotFound from "./components/NotFound";
const LazyNotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<GeneralForm />} />
          <Route path="/portal" element={<PortalForm />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <LazyNotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
