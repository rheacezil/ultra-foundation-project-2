import Index from './components/Index';
import Auth from './components/authentication/Auth';
import { useSelector } from 'react-redux';

function App() {
  const activeUser = useSelector((state) => state.activeUser)
  return (
    <div className="App">
      {activeUser.email ? <Index /> : <Auth />}
    </div>
  );
}

export default App;