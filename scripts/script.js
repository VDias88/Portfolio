
function openNav() {
    document.getElementsByClassName('sidenav')[0].style.width = "250px";
    
}  
function closeNav() {
    document.getElementsByClassName('sidenav')[0].style.width = "0";
}
function showModal(e){
  e.nextElementSibling.style.display='grid';
  
}
function closeModal(e){
  e.parentNode.parentNode.style.display='none';
}
var glid=new Glide ('.glide',{
  type:'slider',
  perView:1,

}).mount()



