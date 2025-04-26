import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background-color: #f4f4f4;
`;

const AuthCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SignUpButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoginLink = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #777;
  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignUpPage() {
  const navigate = useNavigate(); // Get the navigate function

  const handleSignUp = () => {
    // Add your actual sign-up logic here (e.g., API call)
    console.log('Signing up...');
    // After successful sign-up (or immediately for this example), navigate to the login page
    navigate('/login');
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Create an Account</AuthTitle>
        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" />
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type="password" id="password" />
          <SignUpButton type="button" onClick={handleSignUp}>Sign Up</SignUpButton> {/* Attach onClick handler */}
        </form>
        <LoginLink>
          Already have an account? <Link to="/login">Log in</Link>
        </LoginLink>
      </AuthCard>
    </AuthContainer>
  );
}

export default SignUpPage;