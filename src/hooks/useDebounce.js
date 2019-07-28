import { useState, useEffect } from 'react';

export default function useDebounce(value, timeout) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, timeout);
    return function cleanUp() {
      clearTimeout(handler);
    };
  });

  return debounced;
}
