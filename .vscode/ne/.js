function allowDrop(a){
a.preventDefault();

};

function drag(en){
  en.dataTransfer.setData('text',en.target.id);
  en.target.style.background='yellow'
  en.target.style.fontSize='12px'
};

function drop(ev){
const data=ev.dataTransfer.getData('text');
ev.target.appendChild(document.getElementById(data))

}
