const firebaseConfig = {
    apiKey: "AIzaSyCA5erd2uxxXu2v_07NTernX6DBAMkE2m0",
    authDomain: "confeitaria-cadastro.firebaseapp.com",
    projectId: "confeitaria-cadastro",
    storageBucket: "confeitaria-cadastro.appspot.com" ,
    messagingSenderId: "485732451288",
    appId:"1:485732451288:web:f0cb6f0a38481077d8a8ad"
  };


firebase.initializeApp(firebaseConfig);


function cadastrar() {
    var auth = null;
    
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("seus dados foram cadastrados com sucesso");
            auth = user;
            
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }).catch(function (error) {
            alert("falhar ao cadastrar");
        });
}

function logar() {
    var auth = null;
    
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
      .then(function (user) {
        alert("Login bem-sucedido!");
        auth = user;
        
        // Redirecione o usuário para a página de destino
        window.location.href = 'principal/index.html';
      }).catch(function (error) {
        alert("Erro ao fazer login");
      });
  }
