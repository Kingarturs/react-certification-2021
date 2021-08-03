import { useRef, useEffect } from 'react';

const useDebounce = (handler, dependencies = [], delay = 300) => {
  const interval = useRef(null);

  useEffect(() => {
    if (interval.current != null) {
      clearTimeout(interval.current);
    }

    interval.current = setTimeout(() => {
      handler();
    }, delay);

    return () => {
      clearTimeout(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
};

export default useDebounce;
