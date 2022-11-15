import { useEffect } from 'react';
import './App.css';

function App() {

  const x = "Ajat"
  const y = "Dev"
  const str1 = 'Cats are the best!';
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const str = 'Geeks for Geeks'
  const array = str.split("for");
  const num=12;


  useEffect(() => {
    console.log(x.concat(y))
    console.log(str1.endsWith('best!'));
    console.log(fruits.slice(1, 3));
    console.log(array);
    console.log("Output : " + num.toString(2));  

  }, [])
  return (
    <>

    </>
  );
}

export default App;
