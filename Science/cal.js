var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');


for(item of btn){
    item.addEventListener('click',(e)=>{
        btntxt=e.target.innerText;

        if(btntxt== '÷' ){
            if(screen.value.charAt(screen.value.length-1)!=='/'){
                btntxt='/';
            }else{
                btntxt='';
            }
            
        }
        if(btntxt=='×'){
            if(screen.value.charAt(screen.value.length-1)!=='*'){
                btntxt='*';
            }else{
                btntxt='';
            }
        }
       
        if (btntxt.match(/[.\-+()%]/)&& screen.value.includes(btntxt)) {
            return;
          }
          
        screen.value+=btntxt;
    });
}

function sin(){
    screen.value=Math.sin(screen.value);
}
function cos(){
    screen.value=Math.cos(screen.value);
}

function tan(){
    screen.value=Math.tan(screen.value);
}

function pow(){
    screen.value=Math.pow(screen.value,2);
}

function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function log(){
    screen.value=Math.log(screen.value);
}

function pi(){
    screen.value=3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}
function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}
function backspec(){
    screen.value=screen.value.slice(0,-1);
}
function clr(){
    screen.value=" ";
}

function result(){
   try {
    screen.value=eval(screen.value)
   } catch (error) {
    alert("please recheck")
   }
}
