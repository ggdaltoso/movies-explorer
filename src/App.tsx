import { useEffect, useState } from 'react';
import { Button, Cursor, List, TaskBar } from '@react95/core';
import { useClippy } from '@react95/clippy';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // const { clippy } = useClippy();

  // useEffect(() => {
  //   if (clippy) {
  //     clippy.speak('Hello!', false);
  //   }
  // }, [clippy]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  );
}

export default App;
