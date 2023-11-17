import './app.scss'
import NavBar from './components/NavBar/NavBar'
import UserForm from './components/UserForm/UserForm';


function App() {

  return (
    <div className='app'>
      <NavBar />
      <h1 className="form-heading">User Form</h1>
      <UserForm />
    </div>
  );
}

export default App
