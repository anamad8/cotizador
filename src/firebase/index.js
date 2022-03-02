import { initializeApp } from "firebase/app";


const firebaseConfig = {
  
  apiKey: "AIzaSyBZWqbuAFWDaWHqvJF90sFj71qzFcE9YeU",
  authDomain: "db-cotizador.firebaseapp.com",
  projectId: "db-cotizador",
  storageBucket: "db-cotizador.appspot.com",
  messagingSenderId: "423926519909",
  appId: "1:423926519909:web:283303669db55142d18e8c"
};

const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;

