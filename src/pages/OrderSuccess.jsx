import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSuccess.css'; // optional

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const dishName = location.state?.dishName;

  if (!dishName) {
    return (
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2>Oops! No dish was selected.</h2>
        <button className="btn primary" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>🎉 Order Successful!</h1>
      <h2>{dishName} has been ordered successfully.</h2>
      <button className="btn primary" onClick={() => navigate('/')}>
        Back to Menu
      </button>
    </div>
  );
}

export default OrderSuccess;
