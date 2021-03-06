import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const ZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`;

export const ZoomOut = keyframes`
  from {
   opacity: 1;
  }

  50% {
   opacity: 0;
   transform: scale3d(.3, .3, .3);
  }

  to {
   opacity: 0;
  } 
`;

export const Blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;


export const MoveCenter = keyframes`
  from {
    left: 480px;
  } 
  to{
    left:20px;
  } 
`;