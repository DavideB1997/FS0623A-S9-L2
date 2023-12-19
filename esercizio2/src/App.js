import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import logo from "./logo.svg";

function App() {
	return (
		<div className='App'>
			<Header titolo='EpicBooks' />
			<Hero />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
