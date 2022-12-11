import { useState } from "react";

const SharedButton = ({ counter, onClickshbutton }) => {
  return (
    <>
      <p> Clicked {counter} times</p>
      <button onClick={onClickshbutton}> Click SharedState Button </button>
    </>
  );
};

export default function SharedCounter() {
  const [shcounter, setshcounter] = useState(0);
  const onClickshbutton = () => {
    setshcounter(shcounter + 1);
  };
  return (
    <>
      <SharedButton counter={shcounter} onClickshbutton={onClickshbutton} />;
      <SharedButton counter={shcounter} onClickshbutton={onClickshbutton} />;
    </>
  );
}
