import logo from './logo.svg';
import './App.css';
import Myline from './Components/Myline/Myline';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!flip),


  })

  return (
    <div className="App">
      <div style={{ fontSize: '40px' }}>

        <animated.div style={props}>I will fade in</animated.div>
      </div>
      <Myline></Myline>
    </div>
  );
}

export default App;
