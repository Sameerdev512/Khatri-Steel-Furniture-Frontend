
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/free-energy-products" element={<FreeEnergyProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-enquiries" element={<MyEnquiries />} />
        <Route path="/profile" element={<Profile />}  />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/transformations" element={<TransformationGallery />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={localStorage.getItem("role") === "ADMIN" ? <AdminDashboard /> : <Home/> } />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/enquiries" element={<AdminEnquiries />} />
        <Route path="/admin/contact-messages" element={<ContactMessages />} />
      </Routes>
    </Router>
  );
}

export default App;













