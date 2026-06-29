import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import WealthTracker from "../pages/WealthTracker";
import FutureMap from "../pages/FutureMap";
import SchemeNavigator from "../pages/SchemeNavigator";
import FraudLens from "../pages/FraudLens";
import InvestWise from "../pages/InvestWise";
import RiskProtector from "../pages/RiskProtector";
import AIFinancialGuardian from "../pages/AIFinancialGuardian";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {

  return (

    <Routes>

      {/* ---------------- PUBLIC ROUTES ---------------- */}

      <Route

        path="/"

        element={<Dashboard />}

      />

      <Route

        path="/dashboard"

        element={<Dashboard />}

      />

      <Route

        path="/login"

        element={<Login />}

      />

      <Route

        path="/register"

        element={<Register />}

      />

      {/* ---------------- PROTECTED ROUTES ---------------- */}

      <Route

        path="/wealth-tracker"

        element={

          <ProtectedRoute>

            <WealthTracker />

          </ProtectedRoute>

        }

      />

      <Route

        path="/future-map"

        element={

          <ProtectedRoute>

            <FutureMap />

          </ProtectedRoute>

        }

      />

      <Route

        path="/scheme-navigator"

        element={

          <ProtectedRoute>

            <SchemeNavigator />

          </ProtectedRoute>

        }

      />

      <Route

        path="/fraud-lens"

        element={

          <ProtectedRoute>

            <FraudLens />

          </ProtectedRoute>

        }

      />

      <Route

        path="/invest-wise"

        element={

          <ProtectedRoute>

            <InvestWise />

          </ProtectedRoute>

        }

      />

      <Route

        path="/risk-protector"

        element={

          <ProtectedRoute>

            <RiskProtector />

          </ProtectedRoute>

        }

      />

      <Route

        path="/ai-financial-guardian"

        element={

          <ProtectedRoute>

            <AIFinancialGuardian />

          </ProtectedRoute>

        }

      />

    </Routes>

  );

}

export default AppRoutes;