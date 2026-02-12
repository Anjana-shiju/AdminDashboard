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
       {/* DESKTOP HEADER - Pure White Background */}
{/* DESKTOP HEADER - Full-Width Style */}
<div className="d-none d-lg-flex justify-content-between align-items-center mb-4 pt-2 px-4 bg-white border-bottom" 
     style={{ 
       height: '75px', 
       margin: '-1rem -1rem 1.5rem -1rem' 
     }}>
  
  {/* Search with Light Green Background */}
  <div className="position-relative">
    <input 
      type="text" 
      className="form-control rounded-pill border-0 ps-4 shadow-none" 
      placeholder="Search" 
      style={{ 
        width: '400px', 
        backgroundColor: '#f0f7f6', 
        height: '42px', 
        fontSize: '14px' 
      }} 
    />
    <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3" style={{ color: '#11A6A1' }}></i>
  </div>
  
  <div className="d-flex align-items-center gap-2">
    {/* Message SVG Icon */}
    <div style={{ cursor: 'pointer' }}>
      <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="51.9395" height="39.6719" rx="6" fill="#11A6A1" fill-opacity="0.1"/>
        <path d="M32.4824 10.3127H18.5639C17.8845 10.3148 17.2335 10.6081 16.7531 11.1286C16.2727 11.649 16.0019 12.3543 16 13.0903V22.6135C16.0019 23.3495 16.2727 24.0548 16.7531 24.5752C17.2335 25.0957 17.8845 25.389 18.5639 25.3911H20.3953V29.3591L24.6862 25.4833C24.7521 25.4237 24.8352 25.3911 24.9211 25.3911H32.4824C33.1618 25.389 33.8128 25.0957 34.2932 24.5752C34.7736 24.0548 35.0444 23.3495 35.0463 22.6135V13.0903C35.0444 12.3543 34.7736 11.649 34.2932 11.1286C33.8128 10.6081 33.1618 10.3148 32.4824 10.3127Z" stroke="#11A6A1" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M21.1277 17.0148C21.4672 17.0148 21.8434 17.3318 21.8435 17.8517C21.8435 18.3717 21.4672 18.6896 21.1277 18.6896C20.7882 18.6894 20.4128 18.3716 20.4128 17.8517C20.413 17.332 20.7883 17.0149 21.1277 17.0148Z" fill="#11A6A1" stroke="#11A6A1" stroke-width="1.5"/>
        <path d="M25.5237 17.0148C25.8632 17.0148 26.2394 17.3318 26.2395 17.8517C26.2395 18.3717 25.8632 18.6896 25.5237 18.6896C25.1842 18.6894 24.8088 18.3716 24.8088 17.8517C24.809 17.332 25.1843 17.0149 25.5237 17.0148Z" fill="#11A6A1" stroke="#11A6A1" stroke-width="1.5"/>
        <path d="M29.918 17.0148C30.2575 17.0148 30.6337 17.3318 30.6338 17.8517C30.6338 18.3717 30.2575 18.6896 29.918 18.6896C29.5785 18.6894 29.2031 18.3716 29.2031 17.8517C29.2033 17.332 29.5786 17.0149 29.918 17.0148Z" fill="#11A6A1" stroke="#11A6A1" stroke-width="1.5"/>
      </svg>
    </div>

    {/* Notification SVG Icon */}
    <div style={{ cursor: 'pointer' }}>
      <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="51.9395" height="39.6719" rx="6" fill="#11A6A1" fill-opacity="0.1"/>
        <path d="M25.6775 30.249C24.4793 30.249 23.5081 29.3166 23.5081 28.1664H27.8469C27.8469 29.3166 26.8756 30.249 25.6775 30.249ZM34.355 27.1251H17V25.0425L19.1694 24.0012V18.274C19.1694 14.669 20.7107 12.3313 23.5081 11.693V9.42297H26.7622C26.0549 10.3226 25.6739 11.4198 25.6775 12.5469C25.6775 12.8086 25.6978 13.07 25.7382 13.3289H25.6775C24.3541 13.2466 23.0775 13.8148 22.2878 14.8377C21.6127 15.8629 21.2814 17.0623 21.3387 18.274V25.0425H30.0162V18.274C30.0162 18.0543 30.0086 17.8429 29.9935 17.6492C30.711 17.7915 31.4508 17.794 32.1693 17.6565C32.1813 17.8762 32.1856 18.0855 32.1856 18.2813V24.0012L34.355 25.0425V27.1251ZM31.1009 15.6708C30.4456 15.6715 29.8053 15.4817 29.2645 15.1262C27.9866 14.2875 27.501 12.7006 28.1034 11.3316C28.7058 9.96257 30.2295 9.19053 31.7467 9.48549C33.264 9.78044 34.3548 11.0607 34.355 12.5469C34.355 14.2721 32.8981 15.6708 31.1009 15.6708Z" fill="#11A6A1"/>
      </svg>
    </div>
    
    {/* Profile Section */}
    <div className="d-flex align-items-center gap-3 border-start ps-4 ms-2">
      <div className="text-end">
        <div className="fw-bold text-dark" style={{fontSize: '15px', lineHeight: '1.2'}}>Alen John</div>
      </div>
      <img src={alenImg} className="rounded-circle shadow-sm border border-2 border-white" 
           style={{ width: '45px', height: '45px', objectFit: 'cover' }} alt="Alen" />
    </div>
  </div>
</div>
        {/* DASHBOARD STATS */}
        <DashboardStats />

        <div className="row mt-3 g-3">
          {/* REVENUE INSIGHTS */}
          <div className="col-xl-5 col-lg-12">
            <div className="card border-0 shadow-sm p-3 rounded-4 h-100 bg-white">
              <h6 className="fw-bold mb-3 small">Revenue Insights</h6>
              <div style={{ height: '220px' }}>
                <RevenueChart />
              </div>
            </div>
          </div>

          {/* LISTING STATS */}
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

          {/* NEW REGISTRATIONS */}
          {/* NEW REGISTRATIONS SECTION */}
<div className="col-xl-3 col-md-6">
  <div className="card border-0 shadow-sm p-4 rounded-4 h-100 bg-white">
    
    {/* Header with Icon and Count */}
    <div className="d-flex align-items-start gap-3 mb-4">
      <div className="d-flex align-items-center justify-content-center rounded-3" 
           style={{ color: '#11A6A1', fontSize: '32px' }}>
        <i className="bi bi-people-fill"></i>
      </div>
      <div>
        <h6 className="mb-1 fw-bold text-dark" style={{ fontSize: '15px' }}>New Registrations</h6>
        <div className="d-flex align-items-center gap-2">
          <h3 className="fw-bold mb-0" style={{ fontSize: '24px' }}>10</h3>
          <div className="d-flex align-items-center">
            <span className="text-success fw-bold d-flex align-items-center" style={{ fontSize: '13px' }}>
              <i className="bi bi-arrow-up-short fs-4"></i>+1.1%
            </span>
            <span className="text-muted ms-1" style={{ fontSize: '12px', fontWeight: '500' }}>This Month</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Total Active Users Box */}
    <div className="p-3 mb-4 rounded-3 d-flex justify-content-between align-items-center" 
         style={{ backgroundColor: '#E6F6F4' }}>
      <span className="text-dark fw-bold" style={{ fontSize: '14px' }}>Total Active Users</span>
      <span className="text-dark fw-bold" style={{ fontSize: '14px' }}>50</span>
    </div>

    {/* Breakdown Row */}
    <div className="row text-center g-0 mb-4">
      <div className="col border-end border-light">
        <div className="text-muted mb-1" style={{ fontSize: '12px', fontWeight: '500' }}>Buyers</div>
        <div className="fw-bold text-dark" style={{ fontSize: '16px' }}>05</div>
      </div>
      <div className="col border-end border-light">
        <div className="text-muted mb-1" style={{ fontSize: '12px', fontWeight: '500' }}>Rentals</div>
        <div className="fw-bold text-dark" style={{ fontSize: '16px' }}>15</div>
      </div>
      <div className="col">
        <div className="text-muted mb-1" style={{ fontSize: '12px', fontWeight: '500' }}>PG</div>
        <div className="fw-bold text-dark" style={{ fontSize: '16px' }}>30</div>
      </div>
    </div>

    {/* View All Button - Matches your design perfectly */}
    <button className="btn w-100 py-2 fw-bold text-white shadow-none mt-auto" 
            style={{ 
              backgroundColor: '#11A6A1', 
              borderRadius: '12px', 
              fontSize: '14px',
              border: 'none'
            }}>
      View All
    </button>
  </div>
</div>
        </div>

        {/* BOTTOM ROW */}
        <div className="row mt-3 g-3 mb-4">
          <div className="col-lg-4 col-md-6"><ReportGenerator /></div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white h-100">
              <h6 className="fw-bold mb-3 small">Remainder</h6>
              <div className="d-flex flex-column gap-2">
                <RemainderItem amount="₹15,000" text="overdue from Alen for '3BHK Flat'" action="Send Reminder" />
                <RemainderItem amount="expires in 3 days" text="'2BHK Villa in Goa'" action="View" />
                <RemainderItem amount="₹15,000" text="overdue from Alen for '3BHK Flat'" action="Send Reminder" />
                <RemainderItem amount="expires in 3 days" text="'2BHK Villa in Goa'" action="View" />
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

// Updated RemainderItem for Uniform Button Sizes
const RemainderItem = ({ amount, text, action }) => (
  <div className="p-2 px-3 rounded-4 d-flex justify-content-between align-items-center shadow-sm" 
       style={{ backgroundColor: '#e6f7f5', minHeight: '62px' }}>
    <div style={{ maxWidth: '58%' }}>
      <div className="fw-bold text-dark" style={{ fontSize: '11px' }}>{amount}</div>
      <div className="text-muted" style={{ fontSize: '9px' }}>{text}</div>
    </div>
    <button className="btn bg-white shadow-sm border-0 py-1 px-2 rounded-pill fw-bold" 
            style={{ 
              fontSize: '9px', 
              color: '#00a896',
              minWidth: '85px', // Ee value aanu buttons orey size aakkunnath
              textAlign: 'center'
            }}>
      {action}
    </button>
  </div>
);