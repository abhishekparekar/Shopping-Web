import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // ⬅️ New state
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("⚠️ Please enter both email and password.");
      return;
    }

    try {
      setLoading(true); // ⬅️ Start loading
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

     
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert("⚠️ No account found with this email.");
      } else if (error.code === 'auth/wrong-password') {
        alert("⚠️ Incorrect password.");
      } else {
        alert("❌ Login failed: " + error.message);
      }
    } finally {
      setLoading(false); // ⬅️ Stop loading
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit' onClick={handleLogin} disabled={loading}>
          {loading ? <span className="loader"></span> : "Login"}
        </button>

        <p className="loginsignup-login">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
        {loading && (
      <div className="spinner-popup">
        <div className="spinner"></div>
      </div>
    )}
    </div>
  );
};

export default Login;
