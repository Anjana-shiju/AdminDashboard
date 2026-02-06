import React, { useState } from 'react';
import Sidebar from "../COMPONENTS/Sidebar";
import DashboardStats from "../COMPONENTS/StatCard";
import ActivityFeed from "../COMPONENTS/Activityfeed";
import ReportGenerator from "../COMPONENTS/ReportGenarator";
import RevenueChart from '../COMPONENTS/Revenewcharts';
import logoImg from "../COMPONENTS/images/logooo.png"; 
import alenImg from "../COMPONENTS/images/download.jfif"; 
import "../COMPONENTS/dashboard.css"; 

export default function DashboardPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="d-flex min-vh-100 position-relative overflow-hidden" style={{ backgroundColor: '#edf1ef' }}>
      
      {/* 1. SIDEBAR */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* 2. MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div className="sidebar-overlay d-lg-none" onClick={toggleSidebar}></div>
      )}

      <div className="flex-grow-1 p-2 p-md-3 main-content overflow-auto">
        
        {/* MOBILE HEADER */}
        <div className="d-lg-none mb-3 mt-1">
          {!showMobileSearch ? (
            <div className="d-flex justify-content-between align-items-center bg-white p-2 rounded-4 shadow-sm">
              <div className="d-flex align-items-center gap-2">
                <button className="btn p-0 border-0" onClick={toggleSidebar}>
                  <div className="header-icon-box bg-white shadow-sm border d-flex align-items-center justify-content-center" 
                       style={{ width: '42px', height: '42px', borderRadius: '12px' }}>
                    <i className="bi bi-grid-fill text-teal fs-5"></i>
                  </div>
                </button>
                <img src={logoImg} alt="Logo" style={{ width: '80px' }} />
              </div>

              <div className="d-flex align-items-center gap-2 pe-1">
                <div className="header-icon-box shadow-sm d-flex align-items-center justify-content-center" 
                     onClick={() => setShowMobileSearch(true)}
                     style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#e6f7f5' }}>
                  <i className="bi bi-search text-teal fs-5"></i>
                </div>
                <img src={alenImg} className="rounded-circle shadow-sm border border-2 border-white" 
                     style={{ width: '42px', height: '42px', objectFit: 'cover' }} alt="Alen" />
              </div>
            </div>
          ) : (
            <div className="bg-white p-2 rounded-4 shadow-sm d-flex align-items-center gap-2">
              <div className="position-relative flex-grow-1">
                <input type="text" className="form-control rounded-pill border-0 bg-light ps-4" placeholder="Search here..." autoFocus />
                <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-teal"></i>
              </div>
              <button className="btn btn-sm text-muted fw-bold" onClick={() => setShowMobileSearch(false)}>Cancel</button>
            </div>
          )}
        </div>

        {/* DESKTOP HEADER */}
        <div className="d-none d-lg-flex justify-content-between align-items-center mb-4 pt-2 px-2">
          <div className="position-relative">
            <input type="text" className="form-control rounded-pill border-0 shadow-sm ps-4" placeholder="Search" 
                   style={{ width: '350px', backgroundColor: '#ffffff', height: '45px', fontSize: '14px' }} />
            <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-teal"></i>
          </div>
          
          <div className="d-flex align-items-center gap-3">
            <div className="header-icon-box shadow-sm border-0 d-flex align-items-center justify-content-center" 
                 style={{backgroundColor: '#ffffff', width: '40px', height: '40px', borderRadius: '10px'}}>
              <i className="bi bi-chat-left-dots text-teal"></i>
            </div>
            <div className="header-icon-box shadow-sm border-0 d-flex align-items-center justify-content-center" 
                 style={{backgroundColor: '#ffffff', width: '40px', height: '40px', borderRadius: '10px'}}>
              <i className="bi bi-bell text-teal"></i>
            </div>
            
            <div className="d-flex align-items-center gap-2 border-start ps-3 ms-2">
              <div className="text-end">
                <div className="fw-bold text-dark" style={{fontSize: '14px', lineHeight: '1.2'}}>Alen John</div>
              </div>
              <img src={alenImg} className="rounded-circle shadow-sm border border-2 border-white" 
                   style={{ width: '45px', height: '45px', objectFit: 'cover' }} alt="Alen" />
            </div>
          </div>
        </div>

        {/* DASHBOARD STATS */}
        <DashboardStats />

        <div className="row mt-3 g-3">
          <div className="col-xl-5 col-lg-12">
            <div className="card border-0 shadow-sm p-3 rounded-4 h-100 bg-white">
              <h6 className="fw-bold mb-3 small">Revenue Insights</h6>
              <div style={{ height: '220px' }}>
                <RevenueChart />
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="card border-0 shadow-sm p-4 rounded-4 h-100 bg-white">
              <div className="d-flex gap-2 mb-4 overflow-auto pb-1">
                <button className="btn btn-teal-light btn-sm px-4 fw-bold border-0" style={{backgroundColor: '#cceced', color: '#00a896'}}>PG</button>
                <button className="btn btn-outline-light text-muted btn-sm px-3 border rounded-pill">RENTAL</button>
                <button className="btn btn-outline-light text-muted btn-sm px-3 border rounded-pill">BUYING</button>
              </div>
              <StatRow label="Active Listings" value="15" />
              <StatRow label="Booked Properties" value="10" />
              <StatRow label="Payment Approvals" value="04" />
              <div className="d-flex justify-content-between mt-auto fw-bold pt-3 border-top">
                <span className="text-muted small">Monthly Dues</span>
                <span className="text-dark">₹8,000</span>
              </div>
            </div>
          </div>

          {/* NEW REGISTRATIONS WITH HEART ICON */}
          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm p-3 rounded-4 h-100 bg-white">
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="p-2 rounded-3 d-flex align-items-center justify-content-center" 
                     style={{backgroundColor: '#e6f7f5', width: '45px', height: '45px'}}>
                  {/* Bed icon maatti Heart icon aakki */}
                  <i className="bi bi-heart-fill text-teal fs-4"></i> 
                </div>
                <div>
                  <h6 className="mb-0 fw-bold text-dark" style={{fontSize: '14px'}}>New Registrations</h6>
                  <div className="d-flex align-items-center gap-2">
                    <h4 className="fw-bold mb-0">10</h4>
                    <span className="text-success fw-bold" style={{fontSize: '12px'}}>↑ +1.1%</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 rounded-4 mt-3" style={{backgroundColor: '#e6f7f5'}}>
                <div className="d-flex justify-content-between align-items-center fw-bold mb-3" style={{fontSize: '12px'}}>
                  <span className="text-dark">Total Active Users</span>
                  <span className="text-dark fs-5">50</span>
                </div>
                
                <div className="row text-center g-0 border-top pt-3 border-secondary border-opacity-10">
                  <div className="col border-end">
                    <div className="text-muted mb-1" style={{fontSize: '10px'}}>Buyers</div>
                    <div className="fw-bold text-dark small">05</div>
                  </div>
                  <div className="col border-end">
                    <div className="text-muted mb-1" style={{fontSize: '10px'}}>Rentals</div>
                    <div className="fw-bold text-dark small">15</div>
                  </div>
                  <div className="col">
                    <div className="text-muted mb-1" style={{fontSize: '10px'}}>PG</div>
                    <div className="fw-bold text-dark small">30</div>
                  </div>
                </div>
              </div>

              <button className="btn w-100 mt-3 py-2 rounded-3 border-0 fw-bold text-white shadow-sm" 
                      style={{backgroundColor: '#00a896'}}>
                View All
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-3 g-3 mb-4">
          <div className="col-lg-4 col-md-6"><ReportGenerator /></div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100">
              <h6 className="fw-bold mb-3 small">Remainder</h6>
              <div className="d-flex flex-column gap-2">
                <RemainderItem amount="₹15,000" text="overdue from Alen for '3BHK Flat'" action="Send Reminder" />
                <RemainderItem amount="expires in 3 days" text="'2BHK Villa in Goa'" action="View" />
                <RemainderItem amount="₹15,000" text="overdue from Alen for '3BHK Flat'" action="Send Reminder" />
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-12"><ActivityFeed /></div>
        </div>
      </div>
    </div>
  );
}

const StatRow = ({ label, value }) => (
  <div className="d-flex justify-content-between mb-4 text-muted fw-semibold small">
    <span>{label}</span><span className="text-dark fw-bold">{value}</span>
  </div>
);

const RemainderItem = ({ amount, text, action }) => (
  <div className="p-2 px-3 rounded-4 d-flex justify-content-between align-items-center shadow-sm" style={{ backgroundColor: '#e6f7f5', minHeight: '62px' }}>
    <div style={{ maxWidth: '68%' }}>
      <div className="fw-bold text-dark" style={{ fontSize: '11px' }}>{amount}</div>
      <div className="text-muted" style={{ fontSize: '9px' }}>{text}</div>
    </div>
    <button className="btn bg-white shadow-sm border-0 py-1 px-3 rounded-pill fw-bold" style={{ fontSize: '9px', color: '#00a896' }}>{action}</button>
  </div>
);