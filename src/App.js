import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewByBookingNo from './components/flatbooking/ViewByBookingNo';
import ViewAllByTenant from './components/flatbooking/ViewAllByTenant';
import ViewAllFlatBooking from './components/flatbooking/ViewAllFlatBooking';
import UpdateFlatBooking from './components/flatbooking/UpdateFlatBooking';
import ApprovalFlatBooking from './components/flatbooking/ApprovalFlatBooking';
import ViewFlatBookingApproval from './components/flatbooking/ViewFlatBookingApproval';
import ViewAllLandlord from './components/landlord/ViewAllLandlord';
import DeleteLandlord from './components/landlord/DeleteLandlord';
import ProfileLandlord from './components/landlord/ProfileLandlord';
import ViewFlatById from './components/flat/ViewFlatById';
import ViewAllFlats from './components/flat/ViewAllFlats';
import Homepage from './components/dashboard/Homepage';
import ViewAllTenant from './components/tenant/ViewAllTenant';
import TenantProfile from './components/tenant/TenantProfile';
import DeleteTenant from './components/tenant/DeleteTenant';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Navbar from './components/headerfooter/Navbar';
import NavbarTenant from './components/headerfooter/NavbarTenant';
import NavbarLandlord from './components/headerfooter/NavbarLandlord';
import AddUser from './components/authentication/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/flatbooking/all" element={<ViewAllFlatBooking />}></Route>
        <Route path="/flatbooking/update/:id" element={<UpdateFlatBooking />}></Route>
        <Route path="/flatbooking/:id" element={<ViewByBookingNo />}></Route>
        <Route path="/flatbooking/tenant/:id" element={<ViewAllByTenant />}></Route>
        <Route path="/flatbooking/approval/all" element={<ApprovalFlatBooking />}></Route>
        <Route path="/flatbooking/approval/:id" element={<ViewFlatBookingApproval />}></Route>
        {/* <Route path='/' element={<Home />}></Route> */}

        <Route path="/landlord/all" element={<ViewAllLandlord />}></Route>

        {/* <Route path="/landlord/update/:id" element={<UpdateLandlord />}></Route> */}

        <Route path="/landlord/details/:id" element={<ProfileLandlord />}></Route>

        <Route path="/landlord/delete/:id" element={<DeleteLandlord />}></Route>

        {/* <Route path='/landlord/add' element={<AddLandlord />}></Route> */}
        <Route path="/flat/details/:id" element={<ViewFlatById />} />

        <Route path="/flat/all" element={<ViewAllFlats/>} />

        <Route path="/" element={<Homepage />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/navbar/tenant" element={<NavbarTenant/>} />
        <Route path="/navbar/landlord" element={<NavbarLandlord/>} />
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path='/signup' element={<AddUser/>}></Route>

{/* <Route path="/tenant/update/:id" element={<UpdateTenant />}></Route> */}

<Route path="/tenant/all" element={<ViewAllTenant />}></Route>

{/* <Route path="/tenant/profile" element={<TenantProfile />}></Route> */}

<Route path="/tenant/details/:id" element={<TenantProfile/>}></Route>

<Route path="/tenant/delete/:id" element={<DeleteTenant />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
