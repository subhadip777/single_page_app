import React from 'react';
import './App.css';
import Main from './Components/MainComponent';
import 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store =ConfigureStore();

function App() {
  return (
    //this provider tag creates a wrapper ciontainer with store attribute that makes that store available to the wrapped component//
    <Provider store={store}>       

        <BrowserRouter>
            <div>
              <Main/>
            </div>
        </BrowserRouter>

    </Provider>
    
    
  );
}

export default App;
