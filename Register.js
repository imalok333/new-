import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setValidationMessage(''); // Clear validation message on input change
  };

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;

    return (
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password) &&
      numberRegex.test(password)
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validatePassword(form.password)) {
      setValidationMessage(
        'Password must include at least one uppercase letter, one special character, and one number.'
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setValidationMessage('Passwords do not match.');
      return;
    }

    // Add registration logic here
    console.log('Register clicked', form);
    setValidationMessage(''); // Clear validation messages after successful validation
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Attendance Book</h2>
      <p style={styles.subtitle}>Altrodius product</p>
      <form onSubmit={handleRegister} style={styles.form}>
        <div style={styles.row}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.row}>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={form.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Mobile (Optional)"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <input
          type="email"
          placeholder="example@mai.io"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <div style={styles.row}>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              name="password"
              value={form.password}
              onChange={handleChange}
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
          <div style={styles.passwordContainer}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.showPasswordButton}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        {validationMessage && (
          <p style={styles.validationMessage}>{validationMessage}</p>
        )}
        <p style={styles.terms}>
          By clicking “Register” you agree to our{' '}
          <a href="#" style={styles.link}>
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="#" style={styles.link}>
            Privacy Policy
          </a>
        </p>
        <button type="submit" style={styles.registerButton}>
          Register
        </button>
      </form>
      <p style={styles.loginText}>
        Already have an account?{' '}
        <a href="#" style={styles.loginLink}>
          Login
        </a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
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
  row: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  passwordContainer: {
    position: 'relative',
    flex: '1',
  },
  showPasswordButton: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
  validationMessage: {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
    textAlign: 'left',
  },
  terms: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '20px',
  },
  link: {
    color: '#6a0dad',
    textDecoration: 'none',
  },
  registerButton: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    background: '#008000',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  loginText: {
    marginTop: '20px',
    fontSize: '14px',
  },
  loginLink: {
    color: '#6a0dad',
    textDecoration: 'none',
  },
};

export default Register;
