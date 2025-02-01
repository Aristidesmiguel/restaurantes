import { collection, addDoc } from "firebase/firestore";


const COLLECTION_NAME_PRODUTOS = 'produts';

async function salvarTarefa(valorDoItem) {
    const docRef = await addDoc(collection(db, COLLECTION_NAME_PRODUTOS), valorDoItem);
    return docRef.id;
}

export default salvarTarefa
