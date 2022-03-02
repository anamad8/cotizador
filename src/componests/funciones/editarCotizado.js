import  firebaseApp  from "../../firebase";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";


function editarCotizado(infoProducto) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "cotizador");
  const docRef = doc(collectionRef, infoProducto.titulo);
  setDoc(docRef, infoProducto);

}

export default editarCotizado;