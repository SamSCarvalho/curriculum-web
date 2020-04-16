import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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