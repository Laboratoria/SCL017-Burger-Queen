import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGaEb1z7GtQI5LJt93vbGs-ZeoUhzmVdc",
  authDomain: "bq-commitbar.firebaseapp.com",
  projectId: "bq-commitbar",
  storageBucket: "bq-commitbar.appspot.com",
  messagingSenderId: "833908616428",
  appId: "1:833908616428:web:d551f760fa54a8a61489c9",
  measurementId: "G-Y4E3D63EQJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//FUNCION QUE ALMACENA LOS DATOS INGRESADOR POR GARZON
export async function sendOrderList(e, ...orderProducts) {
  console.log("Hola soy el boton");
  await addDoc(collection(db, "order"), {
    name: orderProducts[0].name,
    price: orderProducts[0].price,
    mesa: "",
    mesero: "",
  });
}

//FUNCION QUE MUESTRA LA ORDEN EN LA COCINA
