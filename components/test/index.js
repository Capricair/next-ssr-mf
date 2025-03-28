import PropTypes from "prop-types";
import { useState } from "react";

function Test(props) {
  const { text = "Hello, world!" } = props;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{text}</div>
      <div>
        <div>Counter: {counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}

Test.propTypes = {
  text: PropTypes.string,
};

export default Test;
