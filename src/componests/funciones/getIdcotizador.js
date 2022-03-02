 import firebaseApp from "../../firebase";
import { getFirestore,setDoc, getDocs,doc, getDoc, collection, } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { useParams } from 'react-router-dom'
 const db = getFirestore(firebaseApp);

export default async function getIdCotizador(id) {
  // const {id} =useParams
  // const docRef = doc(db, "cotizador", `${id}`);
  // const docSnap = await getDoc(docRef);

  // console.log(id)
  // if(docSnap.exists()){
    
  //   console.log('documento data: ', docSnap.id)
    
  // }else{
  //   console.log('no hay tal documento')
  // }

//   const dbRef = ref(getDatabase());
//   get(child(dbRef, `cotizador/${id}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
 
  const cotizador = [];
  const collectionRef = collection(db, "cotizador"  );
  const snapshot = await getDocs(collectionRef);
  console.log( id )
  snapshot.forEach((doc) => {
    cotizador.push(doc.id);
  });
  return cotizador; 
}
