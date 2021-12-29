import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
