import { useCallback, useEffect, useState } from 'react';

export type Size = {
  height: number | undefined;
  width: number | undefined;
};

export const useWindowSize = (): Size => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  // Handler to call on window resize
  const handleResize = useCallback((): void => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return windowSize;
};
