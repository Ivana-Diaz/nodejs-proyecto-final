import { db } from '../data/data.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore'; 

const productsCollection = collection(db, 'products'); 

// Obtener todos los productos o filtrar por categoría
export const getAllProducts = async (category) => {
  try {
    let queryRef;

    if (category) {
      queryRef = query(productsCollection, where("category", "==", category));
    } else {
      queryRef = productsCollection;
    }

    const snapshot = await getDocs(queryRef);
    const productsFormat = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return productsFormat;

  } catch (err) {
    console.error("Error al filtrar productos: ", err);
    throw err;
  }
}

// Buscar un producto por su ID
export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      return product;
    } else {
      return null;
    };

  } catch (err) {
    console.error("Error al buscar producto: ", err);
    throw err;
  }
}

// Crear y guardar un producto en Firestore
export const createProduct = async (product) => {
  try {
    await addDoc(productsCollection, product);
  } catch (err) {
    console.error("Error al crear el producto: ", err);
    throw err;
  }
}

// Eliminar un producto por su ID
export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(productsCollection, id)); 
  } catch (err) {
    console.error("Error al eliminar el producto: ", err);
    throw err;
  }
}