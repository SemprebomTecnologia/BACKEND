<script>


function Login() {

    const usuario = usuario=document.getElementById("usuario").value;
    usuario=usuario.toLowerCase();
    const senha=document.getElementById("senha").value;
    senha=senha.toLowerCase();

    if(usuario == "" || senha == "") { 
             alert("Os campos usuário e senha são obrigatório"); }

             else (usuario=="admin" && senha=="admin"){
                 alert("Login realizado com sucesso!")

             }


             
    }
    
  }

  </script> 