import { useState } from 'react';
import './App.css';

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomColors() {
  return [
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
  ];
}

function App() {
  const initialColors = generateRandomColors();
  const [colors, setColors] = useState(initialColors);
  const [color, setColor] = useState(
    initialColors[Math.floor(Math.random() * initialColors.length)]
  );
  const [isCorrectGuess, setIsCorrectGuess] = useState();

  const handleOnClick = (clickedColor) => {
    const isCorrect = clickedColor === color;
    const newColors = generateRandomColors();
    const newColor =
      newColors[Math.floor(Math.random() * newColors.length)];

    setIsCorrectGuess(isCorrect);
    setColors(newColors);
    setColor(newColor);
  };
  return (
    <div className="App App-header">
      <div className="div" style={{ background: color }}></div>
      <div className="row">
        {colors.map((c) => (
          <button className="button" onClick={() => handleOnClick(c)}>
            {c}
          </button>
        ))}
      </div>
      {isCorrectGuess === false ? (
        <div>Wrong!</div>
      ) : isCorrectGuess === true ? (
        <div>Correct</div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
