let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
//number=410
let ele
function fun()
{
    let txt=ele.getAttribute("msg")
       alert(txt);
}
function fun2(callBack)
{
    container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
    setTimeout(callBack,5000)
    
}
//number=405
//let dem=document.querySelector(".one")
//dem.style.backgroundColor="grey"
btn.onclick = async function () {
    let no=number%360
    if(no>=22.5 && no<67.5)
    {
        ele=document.querySelector(".eight")
      //fun()
    }
    else if(no>=67.5 && no<112.5)
    {
        ele=document.querySelector(".seven")
      //fun()
    }
    else if(no>=112.5 && no<157.5)
    {
        ele=document.querySelector(".six")
       // fun()
    }
    else if(no>=157.5 && no<202.5)
    {
        ele=document.querySelector(".five")
        //fun()
    }
    else if(no>=202.5 && no<247.5)
    {
        ele=document.querySelector(".four")
       // fun()
    }
    else if(no>=247.5 && no<292.5)
    {
        ele=document.querySelector(".three")
       // fun()
    }
    else if(no>=292.5 && no<337.5)
    {
        ele=document.querySelector(".two")
      //  fun()
    }
    else
    {
        ele=document.querySelector(".one")
       // fun()
    }
	
    fun2(fun)
}