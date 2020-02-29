import MaterialButton from "@material-ui/core/Button";

const Button = ({ text, ...rest }) => {
  return (
    <MaterialButton variant="contained" color="primary" {...rest}>
      {text}
    </MaterialButton>
  );
};
Button.defaultProps = {
  text: "Submit"
};

export default Button;
