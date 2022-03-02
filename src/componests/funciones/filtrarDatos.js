import firebaseApp from "../../firebase";
import{
    getFirestore,
    collection,query,
    where,
    getDocs,
} from 'firebase/firestore';
const db = getFirestore();

async function filtrarDatos(stringBusqueda){

    const docusFiltrado=[];

    const collectionRef = collection(db, "cotizador");
    const queryTitulo = query(collectionRef, 
        where('titulo', '==', stringBusqueda));
    const queryArea = query(collectionRef, 
        where('area', '==', stringBusqueda));
    const queryServicio = query(collectionRef, 
        where('servicio', '==', stringBusqueda));
    const queryEntregable = query(collectionRef, 
        where('entregable', '==', stringBusqueda));
    const queryPaquete = query(collectionRef, 
        where('paquete', '==', stringBusqueda));
    const queryPlazo = query(collectionRef, 
        where('plazo', '==', stringBusqueda));
    const queryCostoMensualo = query(collectionRef, 
        where('costoMensual', '==', stringBusqueda));
    const queryCostoTotal = query(collectionRef, 
        where('costoTotal', '==', stringBusqueda));
    
    const arraySnapshots = await Promise.all([
        getDocs(queryTitulo),
        getDocs(queryArea),
        getDocs(queryServicio),
        getDocs(queryEntregable),
        getDocs(queryPaquete),
        getDocs(queryPlazo),
        getDocs(queryCostoMensualo),
        getDocs(queryCostoTotal),
    ]);

    arraySnapshots.forEach((snapshot) => {
        snapshot.forEach((doc) => {
            docusFiltrado.push(doc.data());
        });
    });

    console.log(docusFiltrado);
    
    return docusFiltrado;

    


}

export default filtrarDatos;

// area
// servicio
// entregable
// paquete
// titulo
// plazo
// costoMensual
// costoTotal