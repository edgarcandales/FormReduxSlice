import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form/Form';
import ListUsers from './List/ListUsers';


function App() {
    //const Name = useSelector(state => state.user.users[0].name);
    return (
        <div className="App">
            {/*{Name}*/}
            <Form />
            <ListUsers />
        </div>
    );
}

export default App;
