var zz =document.getElementById('zz')
var zz1 =document.getElementById('zz1')
zz1.style.height='60px'

zz.onclick=function(){
    if(zz1.style.height=='60px'){
        zz1.style.height='unset'
        zz1.style.overflow='unset'

    }else{
        zz1.style.height='60px'
        zz1.style.overflow='hidden'

    }
   
}
