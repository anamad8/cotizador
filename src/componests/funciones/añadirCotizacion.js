import  firebaseApp  from "../../firebase";
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';


function añadirCotizacion (infoCotizador){
    const db = getFirestore(firebaseApp);
    const collectionRef = collection(db,"cotizador");
    const docRef = doc(collectionRef, infoCotizador.titulo);
    setDoc(docRef, infoCotizador);
    

}

export default añadirCotizacion;




