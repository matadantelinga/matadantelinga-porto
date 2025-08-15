import { useEffect, useState } from "react";

const TypingAnimation = () => {
  const titles = [
    { text: "Frontend Developer", color: "#2352cb" },
    { text: "UI Designer", color: "#3EAFBE" },
    { text: "Logo Designer", color: "#FF8EB7" },
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentColor, setCurrentColor] = useState(titles[0].color);

  useEffect(() => {
    const currentTitle = titles[currentIndex].text;
    const color = titles[currentIndex].color;

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
          setCurrentColor(color);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          setCurrentColor(color);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % titles.length);
      }
    }
  }, [displayText, currentIndex, isTyping]);

  return (
    <div className="typing-container">
      <span className="typing-text" style={{ color: currentColor }}>
        {displayText}
      </span>
      <span className="typing-cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
