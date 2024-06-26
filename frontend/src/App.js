

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ... rest of your imports and component definitions


import EmployeeManagement from './EmployeeManagement';
// Transport
import AddShuttle from './Transportation Management/components/AddShuttle/Shuttle';
import AllShuttle from './Transportation Management/components/AddShuttle/AllShuttle';
import Header from './Transportation Management/components/AddShuttle/Header';
import ApplyShuttle from './Transportation Management/components/Apply/ApplyShuttle';
import Passenger from './Transportation Management/components/Apply/Passenger';
import DriverPassenger from './Transportation Management/components/Apply/DriverPassenger';
import PassengerReport from './Transportation Management/components/Apply/PassengerReport';
import TransportHome from './Transportation Management/components/Home/TransportHome';
import LearnMore from './Transportation Management/components/AddShuttle/LearnMore';
import Shuttle from './Transportation Management/components/AddShuttle/Shuttle';
// Help
import AddFeedback from './Help and Support Management/components/Feedback/Feedback';
import SupportHome from './Help and Support Management/components/SupportHome';
import AllFeedbacks from './Help and Support Management/components/Feedback/AllFeedbacks';
import Ticket from './Help and Support Management/components/Ticket/Ticket';
import AllTickets from './Help and Support Management/components/Ticket/AllTickets';
import TicketDetail from './Help and Support Management/components/Ticket/TicketDetail';
import FAQ from './Help and Support Management/components/Faq/FAQ';
import Chat from './Help and Support Management/components/Chat';

//attendance
import Leave from './Attendance and Leave Management/components/leave/Leave';
import Attendance from './Attendance and Leave Management/components/attendance/attendance';
import HRleave from './Attendance and Leave Management/components/HRleave';
import AttendanceForm from './Attendance and Leave Management/components/attendance/AttendanceForm';
import AttendanceSheet from './Attendance and Leave Management/components/attendance/AttendanceSheet';
import ApprovedMedicFront from './Attendance and Leave Management/components/leave/ApprovedMedicFront';
import OffTimeForm from './Attendance and Leave Management/components/attendance/OffTimeForm';
import OffTimeTable from './Attendance and Leave Management/components/attendance/OffTimeTable';
import ApprovedHalfDayFront from './Attendance and Leave Management/components/leave/ApprovedHalfDayLvFront';
import ApprovedDutyLvFront from './Attendance and Leave Management/components/leave/ApprovedDutyLvFront';
import HRfront from './Attendance and Leave Management/components/HRfront';
import LeaveHistoryFront from './Attendance and Leave Management/components/leave/LeaveHistoryFront';
import LeaveHistory from './Attendance and Leave Management/components/leave/LeaveHistory';

//Kdeelz
import PersonList from './Customer Management/Components/PersonList';
import AddEmployee from './Customer Management/Components/AddEmployee';
import PersonDetails from './Customer Management/Components/PersonDetails';
import UpdatePersonForm from './Customer Management/Components/UpdatePersonForm';
import UpdateEmployee from './Customer Management/Components/UpdateEmployee';
import Login from './Customer Management/Components/Login';
import AdminProfile from './Customer Management/Components/AdminProfile';
import LecturerProfile from './Customer Management/Components/LecturerProfile';
import DriverProfile from './Customer Management/Components/DriverProfile';
import EmployeeProfile from './Customer Management/Components/EmployeeProfile';

//kavi
import Recruit from "./Recruit and Resigning Management/Recruit";
import RecruitDetail from "./Recruit and Resigning Management/RecruitDetail";
import RecruitView from "./Recruit and Resigning Management/AllRecruits";
import AllRecruits from "./Recruit and Resigning Management/AllRecruits";
import Resigning from "./Recruit and Resigning Management/Resigning";
import AllResigning from "./Recruit and Resigning Management/AllResigning";
//Awi

import Forms from "./Salary_and_Benefits_Management/components/Forms";
import ItemList from "./Salary_and_Benefits_Management/components/ItemList";
import EditEmployee from "./Salary_and_Benefits_Management/components/EditEmployee";
import AdminDashboard from "./Salary_and_Benefits_Management/components/AdminDashboard";
import Footer from "./Salary_and_Benefits_Management/components/Footer";
   
//progress tracking



// pages & components


function App() {
  return (
    
    <BrowserRouter>
 

      
        <Routes>
        <Route path="/" element={<EmployeeManagement />} />
 {/* Transport */}
          <Route path="/AddShuttle" exact element={<AddShuttle/>}/>
          <Route path="/Shuttle" exact element={<Shuttle/>}/>
          <Route path="/AllShuttle" exact element={<AllShuttle/>}/>
          <Route path="/ApplyShuttle" exact element={<ApplyShuttle/>}/>
          <Route path="/Passenger" exact element={<Passenger/>}/>
          <Route path="/DriverPassenger" exact element={<AllShuttle/>}/>
          <Route path="/report" exact element={<PassengerReport/>}/>
          <Route path="/TransportHome" exact element={<TransportHome/>}/>
          <Route path="/LearnMore" exact element = {<LearnMore/>}/>
        

 {/* Help */}
          <Route path="/Chat" exact element={<Chat/>}/>
          <Route path="/Feedbackadd" exact element={<AddFeedback/>}/>
          <Route path='/AllFeedbacks' exact element = {<AllFeedbacks/>}/>
          <Route path='/SupportHome' exact element = {<SupportHome/>}/>
          <Route path='/Ticket' exact element = {<Ticket/>}/>
          <Route path='/AllTickets' exact element = {<AllTickets/>}/>
          <Route path='/FAQ' exact element = {<FAQ/>}/>
          <Route path="/TicketDetail/:id" exact element={<TicketDetail/>} />

          
 {/* Attendance */}
 <Route path='/attendance' exact element={<Attendance/>}/>
        <Route path='/leave/Leave' exact element={<Leave/>}/>
        <Route path='/HRleave' exact element={<HRleave/>}/>
        <Route path='/AttendanceForm' exact element={<AttendanceForm/>}/>
        <Route path='/AttendanceSheet' exact element={<AttendanceSheet/>}/>
        <Route path='HRfront/AM' exact element={<ApprovedMedicFront/>}/>
        <Route path='/OffTimeadd' exact element={<OffTimeForm/>}/>
        <Route path='/offTimeDis' exact element={<OffTimeTable/>}/>
        <Route path='HRfront/HDdis' exact element={<ApprovedHalfDayFront/>}/>
        <Route path='/addHD' exact element={<ApprovedHalfDayFront/>}/>
        <Route path='HRfront/DL' exact element={<ApprovedDutyLvFront/>}/>
        <Route path= '/HRfront' exact element={<HRfront/>}/>
        <Route path= '/LeaveHistoryFront' exact element={<LeaveHistoryFront/>}/>
        <Route path= '/leave/LeaveHistory' exact element={<LeaveHistory/>}/>

    {/* Customer */}
    <Route path="/person/personlist" element={<PersonList />} />
        <Route path="/person/add" element={<AddEmployee />} />
        <Route path="/person/:id" element={<PersonDetails />}/>
        <Route path="/person/nationalId/:nationalId" element={ <AdminProfile />}/>
        <Route path="/person/lecturer/nationalId/:nationalId" element={ <LecturerProfile />}/>
        <Route path="/person/driver/nationalId/:nationalId" element={ <DriverProfile />}/>
        <Route path="/person/employee/itNumber/:itNumber" element={ <EmployeeProfile />}/>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/person/update/:id" element={<UpdatePersonForm />} />
        <Route path="/person/employee/update/:id" element={<UpdateEmployee />} />
      {/* Awi */}
      
       {/* kavi */}
       <Route exact path="/Recruit" element={<Recruit/>} />
      <Route path="/RecruitDetail/:id" element={<RecruitDetail/>} />
      <Route path="/AllRecruits" element={<AllRecruits/>} />
      <Route path="/Resigning" element={<Resigning/>} />
      <Route path="/AllResigning" element={<AllResigning/>} />
               
    
      <Route path="/p" element={<AdminDashboard />} />
          <Route path="/add" element={<Forms />} />
          <Route path="/ItemList" element={<ItemList />} />
          <Route path="/New/:id" element={<EditEmployee />} />
         <Route path="/add" element={<Footer />} />
        



        
       
        </Routes>
    </BrowserRouter>
    

  );
}

export default App;