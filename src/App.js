import './App.css';
import React from 'react'
import Container from './components/Container';
import store from './redux/store';


function App() {

  return (
    <div className="App">
      <script src="https://api-maps.yandex.ru/2.1/?apikey=59611a2e-87ee-45d1-840b-75810a5e5772
&lang=ru_RU"
        type="text/javascript"></script>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
      </style>
      <Container store={store} />
    </div>
  );
}




export default App;
