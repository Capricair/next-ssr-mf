import PropTypes from "prop-types";

function Test(props) {
  const { text = "Hello, world!" } = props;

  return (
    <div>
      <div>{text}</div>
    </div>
  );
}

Test.propTypes = {
  text: PropTypes.string,
};

export default Test;
