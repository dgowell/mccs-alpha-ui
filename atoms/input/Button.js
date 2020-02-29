import MaterialButton from "@material-ui/core/Button";

const Button = ({ text, ...rest }) => {
  return (
    <MaterialButton variant="contained" {...rest}>
      {text}
    </MaterialButton>
  );
};
Button.defaultProps = {
  text: "Sumbit"
};

export default Button;
