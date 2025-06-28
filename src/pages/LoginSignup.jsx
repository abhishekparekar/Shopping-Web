import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from '../firebaseConfig'; // ✅ Import both
import { useNavigate, Link } from 'react-router-dom';


const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
const handleSignup = async () => {
  if (!name || !email || !password) {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  try {
    console.log("🚀 Attempting signup...");

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("✅ Firebase Auth successful");

    const user = userCredential.user;

    // ✅ Try writing to the database
    await set(ref(database, 'users/' + user.uid), {
      name: name,
      email: email
    });

    setLoading(true);
    console.log("✅ Data saved to Realtime DB");

    alert("🎉 Signup successful!");

    setName('');
    setEmail('');
    setPassword('');
  } catch (error) {
    console.error("❌ Error during signup:", error.code, error.message);

    if (error.code === 'auth/email-already-in-use') {
      alert("⚠️ This email is already registered. Please log in.");
    } else if (error.code === 'auth/weak-password') {
      alert("⚠️ Password should be at least 6 characters.");
    } else if (error.code === 'auth/invalid-email') {
      alert("⚠️ Please enter a valid email address.");
    } else {
      alert("❌ Signup failed: " + error.message);
    }
  }
    setLoading(false); // ✅ done loading
};


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
       <button type='submit' onClick={handleSignup} disabled={loading}>
  {loading ? 'Creating Account...' : 'Continue'}
</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
