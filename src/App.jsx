
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import About from './pages/About';
import Services from './pages/Services';
import FreeEnergyProducts from './pages/FreeEnergyProducts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyEnquiries from './pages/MyEnquiries';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import TransformationGallery from './pages/TransformationGallery';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { Toaster } from 'react-hot-toast';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminServices from './pages/admin/Services';
import AdminOrders from './pages/admin/Orders';
import AdminUsers from './pages/admin/Users';
import AdminEnquiries from './pages/admin/Enquiries';
import ContactMessages from './pages/admin/ContactMessages';

function App() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            // position:'absolute',
            // top:"3rem",
            background: '#363636',
            color: '#fff',
            // padding: '16px',
            borderRadius: '8px',
          },
          success: {
            duration: 1000,
            theme: {
              primary: '#4CAF50',
            },
            style: {
              background: '#4CAF50',
            },
          },
          error: {
            duration: 4000,
            theme: {
              primary: '#F44336',
            },
            style: {
              background: '#F44336',
            },
          },
          loading: {
            duration: 5000,
          },
          // Enable close button and customize its appearance
          closeButton: true,
          closeStyle: {
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '4px',
            cursor: 'pointer',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            opacity: '0.7',
            transition: 'opacity 0.2s ease',
            '&:hover': {
              opacity: '1',
            },
          },
        }}
      />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/free-energy-products" element={<FreeEnergyProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/transformations" element={<TransformationGallery />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected User Routes */}
        <Route
          path="/my-enquiries"
          element={
            token ? (
              <MyEnquiries />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/profile"
          element={
            token ? <Profile /> : <Navigate to="/login" replace />
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            token ? role=== "ADMIN" ? (
              <AdminDashboard />):(
              <Navigate to="/login" replace />
            ):<Navigate to="/login" replace />
          }
        />
        <Route
          path="/admin/products"
          element={
            token && role === "ADMIN" ? (
              <AdminProducts />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/admin/services"
          element={
            token && role === "ADMIN" ? (
              <AdminServices />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/admin/orders"
          element={
            token && role === "ADMIN" ? (
              <AdminOrders />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/admin/users"
          element={
            token && role === "ADMIN" ? (
              <AdminUsers />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/admin/enquiries"
          element={
            token && role === "ADMIN" ? (
              <AdminEnquiries />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/admin/contact-messages"
          element={
            token && role === "ADMIN" ? (
              <ContactMessages />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;













