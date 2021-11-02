import './App.css';
import Counter from './counter/counter'

export default function App() {

  const users = [
    { name: "DK", pic: "https://cdn.onlinewebfonts.com/svg/img_24787.png" },
    { name: "Got it", pic: "https://i.etsystatic.com/15971018/r/il/14c008/1957171418/il_794xN.1957171418_r3wl.jpg" }
  ]
  return (
    <div className="App">
      <h1>Hello React.</h1>

      {/* passing value to the props */}

      {/* <Msg name="Got It" />
      <Msg name="DK" /> */}

      {/* Transforming - Array of String to Array of JSX */}


      {/* Working with array of obj 01-11-2021*/}
      {/* {users.map(value =>
        <Msg name={value.name} pic={value.pic} />)} */}

      {/* Counter 02-11-2021 */}
      <Counter />

    </div>
  );
}

// Creating Components
// First Letter Caps
// return JSX

function Msg({ name, pic }) {
  // let name = "DK";
  console.log({ name });

  return (
    <div>
      <img className="user-pic" src={pic} />
      <h2 className="user-msg">Lets Start - {name}</h2>
    </div>
  );
}

//App - component can created by
//1. function component
//2. class component

// jsx -> javascript xml / javascript extented
// domain-specific language called JSX.

//noscript
// If JS is disabled in browser, content inside noscript will be displayed
