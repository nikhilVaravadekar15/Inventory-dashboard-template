import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import { TToken } from "./types";
import NotFound from "./pages/NotFound";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import SignupCompleted from "./pages/auth/SignupCompleted";
// import PasswordResetMail from './pages/auth/PasswordResetMail';
// import ForgetPassword from './pages/auth/ForgetPassword';
// import SignupVerified from './pages/auth/SignupVerified';
// import EmailVerification from './pages/auth/EmailVerification';
// import ResetPassword from './pages/auth/ResetPassword';
// import PasswordResetDone from './pages/auth/PasswordResetDone';
import RootLayout from "./components/layouts/RootLayout";
import Board from "./pages/dashboard/Board";
import Sales from "./pages/dashboard/Sales";
import Invoice from "./pages/dashboard/Invoice";
import Categories from "./pages/dashboard/category/Categories";
import AddProduct from "./pages/dashboard/product/AddProduct";
import SearchProduct from "./pages/dashboard/product/SearchProduct";
import UpdateProduct from "./pages/dashboard/product/UpdateProduct";
import UserProfile from "./pages/user/UserProfile";
import TokenService from "./services/TokenService";

function App() {
  const [token, setToken] = React.useState<TToken>();
  React.useEffect(() => {
    const token = TokenService.getToken();
    if (token?.accessToken && token.tokenType) {
      setToken(token);
    }
  }, [token]);

  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<UnProtectedRoutes token={token!} />}>
              <Route index={true} element={<Signin />} />
              <Route path="auth">
                <Route index={true} element={<Signin />} />
                <Route path="sign-in" element={<Signin />} />
                <Route path="sign-up" element={<Signup />} />
                <Route path="sign-up-completed" element={<SignupCompleted />} />
                {/* <Route path="email-verification" element={<EmailVerification />} /> */}
                {/* <Route path="sign-up-verified" element={<SignupVerified />} /> */}
                {/* <Route path="forget-password" element={<ForgetPassword />} /> */}
                {/* <Route path="password-reset-mail" element={<PasswordResetMail />} /> */}
                {/* <Route path="reset-password/:token" element={<ResetPassword />} /> */}
                {/* <Route path="password-reset-done" element={<PasswordResetDone />} /> */}
              </Route>
            </Route>

            <Route element={<PrivateRoutes token={token!} />}>
              <Route path="dashboard">
                <Route index={true} element={<Board />} />
                <Route path="board" element={<Board />} />
                <Route path="sales" element={<Sales />} />
                <Route path="invoice" element={<Invoice />} />
                <Route path="category">
                  <Route index={true} element={<Categories />} />
                </Route>
                <Route path="product">
                  <Route index={true} element={<AddProduct />} />
                  <Route path="add" element={<AddProduct />} />
                  <Route path="search" element={<SearchProduct />} />
                  <Route path="update" element={<UpdateProduct />} />
                </Route>
                <Route path="user">
                  <Route index={true} element={<UserProfile />} />
                  <Route path="profile" element={<UserProfile />} />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RootLayout>
  );
}

function UnProtectedRoutes({ token }: { token: TToken }) {
  return !token?.accessToken && !token?.tokenType ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" />
  );
}

function PrivateRoutes({ token }: { token: TToken }) {
  return token?.accessToken && token?.tokenType ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" />
  );
}

export default App;
