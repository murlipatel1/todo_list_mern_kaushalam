import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../src/components/Auth';
import Register from '../src/components/Register';
import Todo from '../src/components/Todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
