import { useState } from 'react';

import Button from "../components/Button/index";
import Display from "../components/Display/index";

import styles from "./index.module.css";

const Home = () => {
  const [number, setNumber] = useState('');
  const [havePoint, setHavePoint] = useState(false);  
  const [firstValue, setFirstValue] = useState('');
  const [operation, setOperation] = useState('');
  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    'x',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '+',
    '=',
    'c',
  ];
  const specialKeyList = ['+', '-', 'x', '/', '=', '.'];
  console.log('number', number);
  console.log('firstValue', firstValue);
  console.log('Special Key ', operation);

  const handleClick = (pressedKey) => { 
    setNumber((prev) => {
      if (pressedKey === 'c') {
        setFirstValue(number);
        setHavePoint(false);
        setOperation('');
        return '';
      }
      if (['+', '-', 'x', '/'].indexOf(pressedKey) > -1) {
        setFirstValue(number);
        setHavePoint(false);
        setOperation(pressedKey);
        return '';
      } 
      if (pressedKey === '=') {
        if (operation === '+') return (parseFloat(firstValue) + parseFloat(number)).toString(); 
        if (operation === '-') return (parseFloat(firstValue) - parseFloat(number)).toString();
        if (operation === 'x') return (parseFloat(firstValue) * parseFloat(number)).toString();
        if (operation === '/') return (parseFloat(firstValue) / parseFloat(number)).toString();
      }
      if (pressedKey === '.' && !havePoint) {
        setHavePoint(true);
        return prev + pressedKey;
      }
      if (havePoint && pressedKey === '.') return prev;
      return prev + pressedKey;
    });  
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Display content={number} />
      </header>
      <section className={styles.buttonPanel}>
        {buttons.map((button) =>
          <Button key={button} value={button} onClick={() => {
            handleClick(button);
          }}/>
        )}
      </section>
    </main>
  )
}

export default Home;