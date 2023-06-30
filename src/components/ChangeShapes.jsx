import React, { useEffect, useRef } from 'react';
import '../styles/changingShapes.css';

const ChangeShapes = () => {
  const wrapperRef = useRef(null);

  let prev = 0;

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 },
  ];

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;
    while (next === prev) {
      next = rand(min, max);
    }
    return next;
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const interval = setInterval(() => {
      const index = uniqueRand(0, combinations.length - 1, prev);
      const combination = combinations[index];

      if (wrapper) {
        wrapper.dataset.configuration = combination.configuration;
        wrapper.dataset.roundness = combination.roundness;
      }

      prev = index;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={wrapperRef}  id="wrapper" data-configuration="1" data-roundness="1">
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
};

export default ChangeShapes;
