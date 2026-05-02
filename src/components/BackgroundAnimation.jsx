import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden" style={{ backgroundColor: '#1d182b' }}>
      {/* Container to handle the rotation and stacking of wavy shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] opacity-90">
        
        {/* Layer 1 - Deep Purple */}
        <div 
          className="absolute origin-center rounded-[45%]"
          style={{
            backgroundColor: '#38214f',
            width: '100%', height: '100%',
            top: '5%', left: '5%',
            animation: 'spin 35s linear infinite reverse',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
          }}
        />

        {/* Layer 2 - Magenta Purple */}
        <div 
          className="absolute origin-center rounded-[42%]"
          style={{
            backgroundColor: '#572359',
            width: '90%', height: '90%',
            top: '15%', left: '15%',
            animation: 'spin 40s linear infinite',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
          }}
        />

        {/* Layer 3 - Deep Pink */}
        <div 
          className="absolute origin-center rounded-[48%]"
          style={{
            backgroundColor: '#7b2656',
            width: '80%', height: '80%',
            top: '25%', left: '25%',
            animation: 'spin 45s linear infinite reverse',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
          }}
        />

        {/* Layer 4 - Ruby Red */}
        <div 
          className="absolute origin-center rounded-[43%]"
          style={{
            backgroundColor: '#a82c4f',
            width: '70%', height: '70%',
            top: '35%', left: '35%',
            animation: 'spin 30s linear infinite',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
          }}
        />

        {/* Layer 5 - Red Orange */}
        <div 
          className="absolute origin-center rounded-[46%]"
          style={{
            backgroundColor: '#cf3841',
            width: '60%', height: '60%',
            top: '45%', left: '45%',
            animation: 'spin 38s linear infinite reverse',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
          }}
        />

        {/* Layer 6 - Bright Orange */}
        <div 
          className="absolute origin-center rounded-[40%]"
          style={{
            backgroundColor: '#ec5735',
            width: '50%', height: '50%',
            top: '55%', left: '55%',
            animation: 'spin 25s linear infinite',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;
