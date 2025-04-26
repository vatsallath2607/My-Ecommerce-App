// src/components/LimitedTimeSale.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Banner = styled.div`
  background-color: #e0f2f7; /* Light teal background */
  color: #00796b; /* Darker teal text */
  text-align: center;
  padding: 30px 0;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.1em;
  margin-bottom: 20px;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const TimeSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeValue = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

const TimeLabel = styled.span`
  font-size: 0.8em;
  color: #777;
`;

const ShopSaleButton = styled.button`
  background-color: #e0f2f7; /* Light teal background */
  color: #00796b; /* Darker teal text */
  border: 1px solid #00796b; /* Darker teal border */
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  &:hover {
    background-color: #00796b; /* Darker teal background on hover */
    color: white; /* White text on hover */
    border-color: #0056b3; /* Slightly darker border on hover */
  }
`;

function LimitedTimeSale({ showShopButton = true }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(new Date('2025-04-30T23:59:59'))); // Set your target date
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date('2025-04-30T23:59:59'))); // Update target date if needed
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft(date) {
    const totalSeconds = Math.floor((new Date(date) - new Date()) / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { days: Math.max(0, days), hours: Math.max(0, hours), minutes: Math.max(0, minutes), seconds: Math.max(0, seconds) };
  }

  const handleShopSaleClick = () => {
    navigate('/sale'); // Navigate to your SalePage route
  };

  return (
    <Banner>
      <Title>Limited Time Sale!</Title>
      <Subtitle>Hurry! These deals won't last forever.</Subtitle>
      <TimerContainer>
        <TimeSegment>
          <TimeValue>{String(timeLeft.days).padStart(2, '0')}</TimeValue>
          <TimeLabel>DAYS</TimeLabel>
        </TimeSegment>
        <span>:</span>
        <TimeSegment>
          <TimeValue>{String(timeLeft.hours).padStart(2, '0')}</TimeValue>
          <TimeLabel>HOURS</TimeLabel>
        </TimeSegment>
        <span>:</span>
        <TimeSegment>
          <TimeValue>{String(timeLeft.minutes).padStart(2, '0')}</TimeValue>
          <TimeLabel>MINUTES</TimeLabel>
        </TimeSegment>
        <span>:</span>
        <TimeSegment>
          <TimeValue>{String(timeLeft.seconds).padStart(2, '0')}</TimeValue>
          <TimeLabel>SECONDS</TimeLabel>
        </TimeSegment>
      </TimerContainer>
      {showShopButton && (
        <ShopSaleButton onClick={handleShopSaleClick}>Shop Sale Items →</ShopSaleButton>
      )}
    </Banner>
  );
}

export default LimitedTimeSale;