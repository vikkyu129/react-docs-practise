import { useState } from "react";
import SharedCounter from "./sharedState";
const Counter = () => {
  const [count, setCounter] = useState(0);
  const onClickCounter = () => {
    setCounter(count + 1);
  };
  return (
    <>
      <button onClick={onClickCounter}>Hit Me!</button>
      <p> `Clicked {count} times`</p>
    </>
  );
};

export default function App() {
  const [Loggedin, setLoggedin] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setLoggedin(true);
    alert("Have a good day!");
  };
  function WelcomeButton({ name }) {
    return <button onClick={onClick}>Hello, {name}</button>;
  }
  return (
    <>
      <WelcomeMessage user={user.name} />
      <WelcomeProfilePic imgUrl={user.imageUrl} />
      {!Loggedin && <WelcomeButton name="Please mark your attendance!" />}
      <div />
      <Counter />
      <Counter />
      <SharedCounter />
    </>
  );
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
};

const WelcomeProfilePic = ({ imgUrl }) => {
  return <img className="avatar" src={imgUrl} alt="Pic" />;
};

const WelcomeMessage = ({ user }) => {
  return <h1>"Welcome {user}" </h1>;
};
