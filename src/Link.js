import { useEffect } from 'react';

const useLink = (url) => {
  useEffect(() => {
    const link = document.createElement('link');

    link.rel = "stylesheet";
    link.href = url;
    link.async = true;

    document.body.appendChild(link);

    return () => {
      document.body.removeChild(link);
    }
  }, [url]);
};

export default useLink;