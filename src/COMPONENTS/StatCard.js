import React from 'react';

const DashboardStats = () => {
  return (
    <div className="row g-3 mb-4">
      {/* 1. TOTAL REVENUE CARD */}
      <div className="col-xl-4 col-lg-6">
        <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden h-100">
          <div className="d-flex justify-content-between align-items-center px-3 py-2" style={{ backgroundColor: '#f8f9fa' }}>
            <span className="text-muted fw-bold" style={{ fontSize: '11px' }}>TOTAL REVENUE</span>
            <button className="btn btn-sm d-flex align-items-center gap-1 fw-bold border-0 shadow-sm" 
                    style={{ backgroundColor: '#89d4cf', color: '#103d39', fontSize: '10px', padding: '4px 12px', borderRadius: '6px' }}>
              <i className="bi bi-calendar3"></i> Last 30 days <i className="bi bi-chevron-down ms-1"></i>
            </button>
          </div>
          <div className="p-3 d-flex justify-content-between align-items-end">
            <h2 className="fw-bold text-teal mb-0" style={{ fontSize: '28px' }}>₹1,00,000</h2>
            {/* Growth aligned under arrow area */}
            <div className="text-success fw-bold d-flex align-items-center gap-1 pb-1" style={{ fontSize: '13px' }}>
              1.10% <i className="bi bi-arrow-up"></i> Growth
            </div>
          </div>
        </div>
      </div>

      {/* 2. STAT CARDS WITH MATCHING ICONS */}
      <div className="col-xl-8 col-lg-6">
        <div className="row g-2">
          {/* Paying Guest - Bed Icon */}
          <StatBox title="PAYING GUEST" value="₹30K" growth="+0.9%" icon="bi-postage-heart" bg="#fdf2f2" /> 
          
          {/* Rental - Circular House Icon */}
          <StatBox title="RENTAL" value="₹25K" growth="+0.9%" icon="bi-house-gear" bg="#fdf2f2" /> 
          
          {/* Buying - House with Tag/Price Icon */}
          <StatBox title="BUYING" value="₹20L" growth="-0.9%" icon="bi-house-heart" bg="#fdf2f2" isDown={true} /> 
          
          {/* Pending - Calendar/Check Icon */}
          <StatBox title="PENDING" value="₹15K" growth="Stable" icon="bi-calendar-x" bg="#fdf2f2" hideGrowth={true} />
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ title, value, growth, icon, isDown, hideGrowth, bg }) => (
  <div className="col-md-3">
    <div className="card border-0 shadow-sm p-3 rounded-4 bg-white h-100 position-relative">
      {/* Top Right Arrow - Black */}
      <i className="bi bi-arrow-up-right text-black position-absolute top-0 end-0 m-3" style={{ fontSize: '14px', fontWeight: 'bold' }}></i>
      
      {/* Icon Box with specific background */}
      <div className="mb-2">
        <div className="d-flex align-items-center justify-content-center rounded-3" 
             style={{ backgroundColor: bg, width: '38px', height: '38px' }}>
          <i className={`bi ${icon} text-black`} style={{ fontSize: '18px' }}></i>
        </div>
      </div>

      <div className="text-muted fw-bold mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>{title}</div>
      
      {/* Value Left & Growth Right Alignment */}
      <div className="d-flex justify-content-between align-items-end mt-1">
        <div className="fw-bold text-dark mb-0" style={{ fontSize: '20px' }}>{value}</div>
        
        {!hideGrowth && (
          <div className={`fw-bold d-flex align-items-center gap-1 ${isDown ? 'text-danger' : 'text-success'}`} 
               style={{ fontSize: '12px', paddingBottom: '2px' }}>
            <i className={`bi bi-arrow-${isDown ? 'down' : 'up'}`}></i> {growth}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DashboardStats;