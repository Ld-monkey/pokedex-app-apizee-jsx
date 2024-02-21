import { useEffect, useState } from 'react';

function usePageBottom(refBottom) {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (
        refBottom.current.offsetTop === window.innerHeight + window.scrollY ||
        refBottom.current.offsetTop <= window.innerHeight + window.scrollY
      ) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      setBottom(false);
    };
  }, [refBottom]);

  return bottom;
}

export default usePageBottom;
