'use client';
import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  
  const textArray = ["Backend Developer", "MERN stack Developer", "DevOps Engineer"]; // Array of texts to display
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200; // Speed of typing and deleting
    const nextTextTimeout = isDeleting ? 500 : 1500; // Delay before next word is typed

    if (letterIndex === textArray[textIndex].length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), nextTextTimeout);
    } else if (isDeleting && letterIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % textArray.length);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, letterIndex - 1)
            : prev + textArray[textIndex][letterIndex]
        );
        setLetterIndex((prev) =>
          isDeleting ? prev - 1 : prev + 1
        );
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [letterIndex, isDeleting, textArray, textIndex]);

  return (
    <div className="flex items-center text-2xl font-bold">
      <span className="mr-1">{currentText}</span>
      <span className="type-cursor">|</span>
    </div>
  );
};

export default AnimatedText;
