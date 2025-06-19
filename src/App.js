import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Form from "./components/Form/Form";
import Stats from "./components/Stats/Stats";

function App() {
    return (
        <div className="app">
            <Logo/>
            <Form/>
            <PackingList/>
            <Stats/>
        </div>
    );
}

export default App;
