const AboutWrapper = ({ name, changeName }) => {

  return (
    <div className="wrapper">
      <h1>{name}</h1>
      <button onClick={() => changeName(name)}>Change name</button>
    </div>
  )
}

export default AboutWrapper