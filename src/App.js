import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
