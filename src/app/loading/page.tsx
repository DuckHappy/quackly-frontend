// 'use client'

// const LoadingPage = () => {
//     return (
//         <section>
//             <h1>loading page</h1>
//         </section>
//     );
// }

// export default LoadingPage;
'use client'
import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

interface LoaderProps {
    image?: string;
}

const Loader = ( ) => {
    const imagePath = "/images/dunk-loader.png";
  return (
    <StyledWrapper>
      <div className='flex justify-center items-center relative mt-30 '>
        <div className="z z-1">z</div>
        <div className="z z-2">z</div>
        <div className="z z-3">z</div>
        <div className="z z-4">z</div>
       <Image
            src={imagePath}
            alt="Sleeping duck"
            width={100}
            height={100}
            className="bg-amber-50 mt-26"
       />
      </div>
      <img>
      </img>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
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
  @keyframes swayUpToRight {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translate(80px, -100px) rotate(30deg);
      opacity: 0;
    }
  }`;

export default Loader;
