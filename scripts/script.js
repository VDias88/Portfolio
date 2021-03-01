//fechar e abrir navegação
function openNav() {
    document.getElementsByClassName('sidenav')[0].style.width = "250px";
  }
  
  function closeNav() {
    document.getElementsByClassName('sidenav')[0].style.width = "0";
  }


//modal boxes

//adicionando funçaõ de clique em cada modal

function showModal(e){
 //funçao que ao ser ativada mostra model box
 e.nextElementSibling.style.display='grid';
}

function closeModal(e){
  //funçao que ao ser ativada mostra model box
  
  e.parentNode.parentNode.style.display='none';
 }

//glider

