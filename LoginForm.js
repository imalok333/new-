import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Sign In clicked', email, password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Log in</h2>
      <p style={styles.subtitle}>Your data is Safe Here!</p>
      <form onSubmit={handleSignIn} style={styles.form}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.showPasswordButton}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
        <button type="submit" style={styles.signInButton}>Sign In</button>
      </form>
      <p style={styles.registerText}>
        Don’t have an account? <a href="#" style={styles.registerLink}>Register Now</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '90px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  showPasswordButton: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
  forgotPassword: {
    color: '#6a0dad',
    textDecoration: 'none',
    margin: '10px 0',
    fontSize: '14px',
  },
  signInButton: {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '5px',
    border: 'none',
    background: '#008000',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  registerText: {
    marginTop: '20px',
    fontSize: '14px',
  },
  registerLink: {
    color: '#6a0dad',
    textDecoration: 'none',
  },
};

export default SignIn;
