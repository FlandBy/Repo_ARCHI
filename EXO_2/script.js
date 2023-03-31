document.querySelector('form').addEventListener('submit', function() {
    
    // Récupère les valeurs des champs username et password
    const password = document.querySelector('#password').value;
    
    // compare le mot de passe

    if (password == 1234){
        alert("le mot de passe est correct")
    }
    else {
        alert('mot de passe inccorect');
    }

  });
  