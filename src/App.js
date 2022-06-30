import './App.css';
import Row from './components/Row'
import categories from "./api";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className={"App"}>
            <Navbar/>
            <Banner/>
            {categories.map((categories) => {
                return <Row key={categories.name} title={categories.title} path={categories.path} isLarge={categories.isLarge}/>
            })}
        </div>
    );
}

export default App;
