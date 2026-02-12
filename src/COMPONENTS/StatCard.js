import React from 'react';
import { ChevronDown, Calendar, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';

const PayingGuestIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20V9C2 9 3 5 12 5C21 5 22 9 22 9V20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 11V14M17 11V14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x="5" y="17" width="14" height="3" rx="1" fill={color}/>
  </svg>
);
const RentalIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer House Shape */}
    <path 
      d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Door/Inner Detail */}
    <path 
      d="M9 21V12H15V21" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);
const BuyingIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tag Shape */}
    <path 
      d="M7.5 3H21V16.5L11.5 21L3 12.5L7.5 3Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Tag Hole */}
    <circle cx="10.5" cy="8.5" r="1.5" fill={color} />
  </svg>
);

const PendingIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar Frame */}
    <path 
      d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z" 
      stroke={color} 
      strokeWidth="2"
    />
    <path d="M3 9H21" stroke={color} strokeWidth="2" />
    <path d="M8 2V5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 2V5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    
    {/* The "X" Indicator */}
    <path 
      d="M10 13L14 17M14 13L10 17" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);
const DashboardStats = () => {
  return (
    <div className="row g-3 mb-4">
      {/* 1. TOTAL REVENUE CARD */}
      <div className="col-xl-4">
        <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden h-100">
          <div className="d-flex justify-content-between align-items-center px-3 py-2" style={{ backgroundColor: '#fdfdfd', borderBottom: '1px solid #f1f1f1' }}>
            <span className="text-muted fw-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>TOTAL REVENUE</span>
            <button className="btn btn-sm d-flex align-items-center gap-2 fw-bold border-0 shadow-sm" 
                    style={{ backgroundColor: '#ccf0ee', color: '#0d4a46', fontSize: '10px', padding: '5px 12px', borderRadius: '8px' }}>
              <Calendar size={12} /> Last 30 days <ChevronDown size={12} />
            </button>
          </div>
          <div className="p-4 d-flex justify-content-between align-items-end">
            <div>
              <h2 className="fw-bold mb-0" style={{ fontSize: '32px', color: '#111' }}>₹1,00,000</h2>
              <div className="text-success fw-bold d-flex align-items-center gap-1 mt-1" style={{ fontSize: '13px' }}>
                <TrendingUp size={14} /> 1.10% <span className="text-muted fw-medium">Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SMALL STAT BOXES */}
      <div className="col-xl-8">
        <div className="row g-3">
          <StatBox title="PAYING GUEST" value="₹30K" growth="0.9%" Icon={PayingGuestIcon} bg="#fff1f1" />
          <StatBox 
  title="RENTAL" 
  value="₹25K" 
  growth="0.9%" 
  Icon={RentalIcon} 
  bg="#fff1f1" 
/><StatBox 
  title="BUYING" 
  value="₹20L" 
  growth="0.9%" 
  Icon={BuyingIcon} 
  bg="#fff1f1" 
  isDown={true} 
/> 
         <StatBox title="PENDING" value="₹15K" growth="Stable" Icon={PendingIcon} bg="#fff1f1" hideGrowth={true} />
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ title, value, growth, Icon, isDown, hideGrowth, bg }) => (
  <div className="col-md-3 col-6">
    <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100 position-relative" style={{ minHeight: '140px' }}>
      {/* Top Right Arrow */}
      <ArrowUpRight className="position-absolute top-0 end-0 m-3 text-dark" size={18} strokeWidth={2.5} />
      
      {/* Icon Box */}
      <div className="mb-3">
        <div className="d-flex align-items-center justify-content-center rounded-3" 
             style={{ backgroundColor: bg, width: '42px', height: '42px' }}>
          <Icon size={20} className="text-dark" strokeWidth={2} />
        </div>
      </div>

      <div className="text-muted fw-bold mb-1" style={{ fontSize: '10px', letterSpacing: '0.6px' }}>{title}</div>
      
      <div className="d-flex justify-content-between align-items-end">
        <div className="fw-bold text-dark mb-0" style={{ fontSize: '22px' }}>{value}</div>
        
        {!hideGrowth && (
          <div className={`fw-bold d-flex align-items-center gap-1 ${isDown ? 'text-danger' : 'text-success'}`} 
               style={{ fontSize: '11px' }}>
            {isDown ? <TrendingDown size={12} /> : <TrendingUp size={12} />} {growth}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DashboardStats;