import styled, { keyframes } from 'styled-components';

// Define the keyframes for the spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Create a styled div for the spinner
const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  animation: ${spin} 2s linear infinite;
`;

// Create the LoadingSpinner component
const LoadingSpinner = () => {
  return (
    <Spinner />
  );
};

export default LoadingSpinner;