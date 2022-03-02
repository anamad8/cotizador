import firebaseApp from "../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllCotizador() {
  const cotizador = [];
  const collectionRef = collection(db, "cotizador");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    cotizador.push(doc.data());
  });
  return cotizador;
}