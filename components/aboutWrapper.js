import Button from '../atoms/input/Button';

const AboutWrapper = ({ name, changeName }) => {

  return (
    <div className="wrapper">
      <h1>{name}</h1>
      <Button 
        text="Change Name"
        color="primary"
        onClick={() => {
        changeName(name);
      }}></Button>
    </div>
  )
}

export default AboutWrapper