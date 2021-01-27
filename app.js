const nav = document.getElementById("nav");
 const butto = document.getElementById("btn");
 const closebtn = document.getElementsByClassName("closebtn") [0];
// let icon = document.getElementById('btnn');

//listen for open click
  butto.addEventListener('click', openModal);

  //listen for close click
  closebtn.addEventListener('click', closeModal);

  //listen for window close
window.addEventListener('click', closeclick);

//function for open click
  function openModal(){
      nav.style.display = 'block';
      
  }
// function for close click
  function closeModal(){
    nav.style.display= 'none';
  }
 //function for window close
 function closeclick(e){
     if(e.target==nav){
         nav.style.display='none';
     }
 
