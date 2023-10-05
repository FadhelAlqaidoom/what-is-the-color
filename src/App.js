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

function App() {
  const initialColors = [
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
  ];
  const [colors, setColors] = useState(initialColors);
  const [color, setColor] = useState(
    initialColors[Math.floor(Math.random() * initialColors.length)]
  );
  const [isCorrectGuess, setIsCorrectGuess] = useState();

  const handleOnClick = (clicked) => {
    if (clicked === color) setIsCorrectGuess(true);
    else setIsCorrectGuess(false);
    const randomColors = [
      getRandomHexColor(),
      getRandomHexColor(),
      getRandomHexColor(),
    ];
    const randomColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];
    setColors(randomColors);
    setColor(randomColor);
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
