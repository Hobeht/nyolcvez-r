const cards=document.querySelectorAll('.kep');
function megjelenit(){
 this.classlist.toggle('show');
}
cards.forEach(card=>card.addEventListener('click',"megjelenit"));