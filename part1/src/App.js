import './App.css';

// Esto son componentes. Se deben crear fuera del componente donde los vemoa a meter. Así podemos extraerlos
const Mensaje = (props) => {
	console.log(props);
	return <h1> Hola Mundo! { props.msg }</h1>
}
const Description = (props) => {
	return <p style={{color: props.color}}> Bootcamp midudev fullstack Youtube </p>
}

// Es un componente. Se pone en Mayuscuila para poder usarlo como un HTML tag después
function App() {
  return (
    <div className="App">
			<Mensaje msg="Estamos trabajando en un curso de React" />
			<Description color="green" />
			<Description color="red" />
    </div>
  );
}

export default App;
