import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  console.log(cursorPosition)

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Check if the element under the cursor has `cursor: pointer`
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      console.log(elementUnderCursor)
      if (elementUnderCursor) {
        const computedStyle = window.getComputedStyle(elementUnderCursor);
        console.log(computedStyle)
        if (computedStyle.cursor === 'pointer') {
          setScale(1.5); // Scale up when hovering over `cursor: pointer` elements
        } else {
          setScale(1); // Reset scale when not hovering over `cursor: pointer` elements
        }
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    ></div>
  );
};

export default CustomCursor;
