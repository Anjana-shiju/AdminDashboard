import React from 'react';

const ReportGenerator = () => {
  return (
    <div className="h-100 bg-white d-flex flex-column p-3 rounded-4 shadow-sm border-0">
      <h6 className="fw-bold mb-4" style={{ fontSize: '15px' }}>Generate Report</h6>

      <div className="d-flex flex-column gap-3">
        {/* 1. REVENUE SECTION */}
        <div>
          {/* Radio maatti, background black aakki */}
          <div className="d-flex align-items-center justify-content-between p-2 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="d-flex align-items-center gap-2">
              <div className="d-flex align-items-center justify-content-center rounded-2 shadow-sm" 
                   style={{ width: '32px', height: '32px', backgroundColor: '#000000' }}>
                <i className="bi bi-wallet2 text-white" style={{ fontSize: '14px' }}></i>
              </div>
              <span className="fw-bold text-dark" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>REVENUE BY CATEGORY</span>
            </div>
          </div>
          
          <div className="ps-5 pe-2 mt-2 d-flex flex-column gap-2">
            {["Buying", "Paying Guest", "Rental"].map((item) => (
              <div key={item} className="d-flex justify-content-between align-items-center">
                <span className="text-muted" style={{ fontSize: '12px' }}>{item}</span>
                <input type="checkbox" className="form-check-input mt-0 shadow-none" 
                       style={{ width: '16px', height: '16px', borderRadius: '4px', cursor: 'pointer' }} />
              </div>
            ))}
          </div>
        </div>

        {/* 2. PROPERTY DETAILS */}
        <div className="d-flex align-items-center justify-content-between p-2 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center justify-content-center rounded-2 shadow-sm" 
                 style={{ width: '32px', height: '32px', backgroundColor: '#000000' }}>
              <i className="bi bi-house-door text-white" style={{ fontSize: '14px' }}></i>
            </div>
            <span className="fw-bold text-dark" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>PROPERTY DETAILS</span>
          </div>
        </div>

        {/* 3. USER DETAILS */}
        <div className="d-flex align-items-center justify-content-between p-2 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center justify-content-center rounded-2 shadow-sm" 
                 style={{ width: '32px', height: '32px', backgroundColor: '#000000' }}>
              <i className="bi bi-people text-white" style={{ fontSize: '14px' }}></i>
            </div>
            <span className="fw-bold text-dark" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>USER DETAILS</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex-grow-1 d-flex flex-column justify-content-end">
       {/* BUTTONS SECTION */}
      <div className="mt-auto d-flex flex-column gap-2">
        <button 
          className="btn w-100 py-2 fw-bold" 
          style={{ 
            color: '#11A6A1', 
            backgroundColor: 'transparent',
            border: '1.5px solid #11A6A1', 
            borderRadius: '12px', 
            fontSize: '13px',
            transition: '0.3s'
          }}>
          Export Report
        </button>
        
        <button 
          className="btn w-100 text-white py-2 fw-bold" 
          style={{ 
            backgroundColor: '#11A6A1', 
            border: '1.5px solid #11A6A1',
            borderRadius: '12px', 
            fontSize: '13px',
            transition: '0.3s'
          }}>
          Download Pdf
        </button>
      </div>
      </div>
    </div>
  );
};

export default ReportGenerator;