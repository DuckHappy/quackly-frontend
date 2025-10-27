'use client'
import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

const Loader = () => {
  const imagePath = "/images/dunk-loader.png";
  
  return (
    <StyledWrapper>
      <div className="loader-content">
        <div className='duck-wrapper'>
          <div className="z z-1">z</div>
          <div className="z z-2">z</div>
          <div className="z z-3">z</div>
          <div className="z z-4">z</div>
          <Image
            className="duck-image z-50"
            src={imagePath}
            alt="Sleeping duck"
            width={100}
            height={100}
          />
        </div>
        <span className="loading-text">Loading</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  
  .loader-content {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 1rem;
  }

  .duck-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .z {
    position: absolute;
    font-size: 32px;
    opacity: 0;
  }
  .z-1 {
    animation: swayUpToRight 2s ease-out infinite;
  }
  .z-2 {
    animation: swayUpToRight 2s ease-out 0.5s infinite;
  }
  .z-3 {
    animation: swayUpToRight 2s ease-out 1s infinite;
  }
  .z-4 {
    animation: swayUpToRight 2s ease-out 1.5s infinite;
  }

  .loading-text {
    font-size: 1.5rem;
    font-weight: 500;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
  }
`;

export default Loader;


