// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFWn3MOlX8W08656EJGsuaqpAI0_y_OZU",
  authDomain: "bdsupportti.firebaseapp.com",
  projectId: "bdsupportti",
  storageBucket: "bdsupportti.appspot.com",
  messagingSenderId: "408998021645",
  appId: "1:408998021645:web:394fa909743e7544466344",
  measurementId: "G-DDSP5NESCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function adicionarNoBanco() {
    var formulario = document.getElementById('meuFormulario');
    var titulo = formulario.elements['titulo'].value;
    var problema = formulario.elements['problema'].value;

    // Verifique se ambos os campos estão preenchidos antes de adicionar ao banco
    if (titulo && problema) {
        // Obtenha uma referência para a sua coleção no banco de dados
        var colecao = firebase.database().ref('conhecimento');

        // Adicione os dados
        colecao.push({
            titulo: titulo,
            problema: problema
        });

        // Limpe o formulário
        formulario.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}