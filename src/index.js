import React from 'react';
//React enfocado al navegador. Estamos creando una aplicacion web.
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
//simula los datos de manera local. Ejemplo: instagram cuando se queda sin internet. Guarda los datos en la memoria local del computador.
import * as serviceWorker from './serviceWorker';

//renderiza la aplicacion que hemos escrito.
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
