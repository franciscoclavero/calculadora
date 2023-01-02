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
  const handleClick = (pressedKey) => { 
    setNumber((prev) => {
      if (['+', '-', 'x', '/', 'c'].indexOf(pressedKey) > -1) {
        setFirstValue(number);
        setHavePoint(false);
        setOperation(pressedKey === 'c' ? '' : pressedKey);
        return '';
      }
      if (pressedKey === '=') {
        if (operation === '+') return (parseFloat(firstValue) + parseFloat(number)).toString(); 
        if (operation === '-') return (parseFloat(firstValue) - parseFloat(number)).toString();
        if (operation === 'x') return (parseFloat(firstValue) * parseFloat(number)).toString();
        if (operation === '/') { 
          if (parseFloat(number) < 1) {
            alert('O divisor não pode ser menor que 1');
            return '';
          }
          return (parseFloat(firstValue) / parseFloat(number)).toString() 
        };
        if (pressedKey === '=') return prev;
      }
      if (havePoint && pressedKey === '.') return prev;

      if (pressedKey === '.' && !havePoint) {
        setHavePoint(true);
      }
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