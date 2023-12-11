import './App.css'
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import NotFound from './pages/NotFound';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import PasswordResetMail from './pages/auth/PasswordResetMail';
import ForgetPassword from './pages/auth/ForgetPassword';
import SignupVerified from './pages/auth/SignupVerified';
import EmailVerification from './pages/auth/EmailVerification';
import ResetPassword from './pages/auth/ResetPassword';
import PasswordResetDone from './pages/auth/PasswordResetDone';
import RootLayout from './components/layouts/RootLayout'
import Board from './pages/dashboard/Board';
import Sales from './pages/dashboard/Sales';
import Invoice from './pages/dashboard/Invoice';
import AddCategory from './pages/dashboard/category/AddCategory';
import SearchCategory from './pages/dashboard/category/SearchCategory';
import UpdateCategory from './pages/dashboard/category/UpdateCategory';
import AddProduct from './pages/dashboard/product/AddProduct';
import SearchProduct from './pages/dashboard/product/SearchProduct';
import UpdateProduct from './pages/dashboard/product/UpdateCategory';
import UserProfile from './pages/user/UserProfile';
import UserSettings from './pages/user/UserSettings';


function App() {

  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index={true} element={<Signin />} />
            <Route path="auth">
              <Route index={true} element={<Signin />} />
              <Route path="sign-in" element={<Signin />} />
              <Route path="sign-up" element={<Signup />} />
              <Route path="email-verification" element={<EmailVerification />} />
              <Route path="sign-up-verified" element={<SignupVerified />} />
              <Route path="forget-password" element={<ForgetPassword />} />
              <Route path="password-reset-mail" element={<PasswordResetMail />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route path="password-reset-done" element={<PasswordResetDone />} />
            </Route>
            <Route path="dashboard">
              <Route index={true} element={<Board />} />
              <Route path="board" element={<Board />} />
              <Route path="sales" element={<Sales />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="category">
                <Route index={true} element={<AddCategory />} />
                <Route path="add" element={<AddCategory />} />
                <Route path="search" element={<SearchCategory />} />
                <Route path="update" element={<UpdateCategory />} />
              </Route>
              <Route path="product">
                <Route index={true} element={<AddProduct />} />
                <Route path="add" element={<AddProduct />} />
                <Route path="search" element={<SearchProduct />} />
                <Route path="update" element={<UpdateProduct />} />
              </Route>
            </Route>
            <Route path="user">
              <Route index={true} path="profile" element={<UserProfile />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RootLayout>
  )
}

export default App
