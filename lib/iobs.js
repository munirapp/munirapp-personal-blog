import { useEffect, useState, useRef } from "react";

const iobs = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);
  const observer = useRef(null);
  const { root, rootMargin, threshold } = options || {};

  useEffect(() => {
    if (elements.length) {
      console.log(elements);
      observer.current = new IntersectionObserver(
        (ioEntrires) => {
          setEntries(ioEntrires);
        },
        { root, rootMargin, threshold }
      );

      elements.forEach((element) => {
        observer.current.observe(element);
      });
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, root, rootMargin, threshold]);

  return [observer.current, setElements, entries];
};

export default iobs;
