// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function getTimeLeft(date) {
    const totalSeconds = Math.floor((new Date(date) - new Date()) / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { days, hours, minutes, seconds };
  }

  return (
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
  );
}

export default CountdownTimer;