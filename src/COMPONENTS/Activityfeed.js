import React from 'react';

const ActivityFeed = () => {
  const activities = [
    { type: "Payment Received", from: "Jane Smith", time: "2 mins ago", amount: "₹10,000", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { type: "New Booking", from: "3BHK Villa in Delhi", time: "1 hour ago", amount: "", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { type: "New Booking", from: "2BHK Flat in Kochi", time: "Yesterday", amount: "₹15,000", img: "https://randomuser.me/api/portraits/men/85.jpg" },
    { type: "Payment Received", from: "Rahul Sharma", time: "2 hours ago", img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { type: "New Booking", from: "1BHK Studio in Mumbai", time: "5 hours ago", amount: "", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { type: "New Booking", from: "3BHK Villa in Delhi", time: "Yesterday",  img: "https://randomuser.me/api/portraits/men/32.jpg" },
  ];

  return (
    <div className="h-100 bg-white">
      {/* Scrollable container with fixed height */}
      <div className="overflow-auto " style={{ maxHeight: '280px', paddingRight: '5px' }}>
        {activities.map((act, i) => (
          <div className="d-flex justify-content-between align-items-center py-2 border-bottom" key={i}>
            <div className="d-flex align-items-center gap-2">
              <img src={act.img} className="rounded-circle shadow-sm" style={{ width: '32px', height: '32px', objectFit: 'cover' }} alt="u" />
              <div>
                <div className="fw-bold text-dark" style={{ fontSize: '11px', lineHeight: '1.2' }}>{act.type}</div>
                <div className="text-muted" style={{ fontSize: '9px' }}>{act.from} • {act.time}</div>
              </div>
            </div>
            <div className="text-end">
              {act.amount && <div className="fw-bold text-dark" style={{ fontSize: '11px' }}>{act.amount}</div>}
              
            </div>
          </div>
        ))}
      </div>
      
      {/* Compact View More Button */}
      
    </div>
  );
};

export default ActivityFeed;