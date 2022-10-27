function maxt(){
    //tope de la piramide
    let max = document.getElementsByClassName("grid-item")[0].textContent;
    console.log(max);
    document.getElementsByClassName("grid-item")[0].setAttribute("style","background-color: Yellow;")
    //segundo piso
    if(document.getElementsByClassName("grid-item")[1].textContent>document.getElementsByClassName("grid-item")[2].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[1].textContent);
        document.getElementsByClassName("grid-item")[1].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[2].textContent);
       document.getElementsByClassName("grid-item")[2].setAttribute("style","background-color: Yellow;")

     
    }
    console.log(max);   
    //tercer piso
    if(document.getElementsByClassName("grid-item")[3].textContent>document.getElementsByClassName("grid-item")[4].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[3].textContent);
        document.getElementsByClassName("grid-item")[3].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[4].textContent);
       document.getElementsByClassName("grid-item")[4].setAttribute("style","background-color: Yellow;")

     
    }
    //cuarto piso
    if(document.getElementsByClassName("grid-item")[7].textContent>document.getElementsByClassName("grid-item")[8].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[7].textContent);
        document.getElementsByClassName("grid-item")[7].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[8].textContent);
       document.getElementsByClassName("grid-item")[8].setAttribute("style","background-color: Yellow;")

     
    }
     //quinto piso
     if(document.getElementsByClassName("grid-item")[12].textContent>document.getElementsByClassName("grid-item")[13].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[12].textContent);
        document.getElementsByClassName("grid-item")[12].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[13].textContent);
       document.getElementsByClassName("grid-item")[13].setAttribute("style","background-color: Yellow;")

     
    }
     //sexto piso
     if(document.getElementsByClassName("grid-item")[17].textContent>document.getElementsByClassName("grid-item")[18].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[17].textContent);
        document.getElementsByClassName("grid-item")[17].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[18].textContent);
       document.getElementsByClassName("grid-item")[18].setAttribute("style","background-color: Yellow;")

     
    }
     //septimo piso
     if(document.getElementsByClassName("grid-item")[24].textContent>document.getElementsByClassName("grid-item")[25].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[24].textContent);
        document.getElementsByClassName("grid-item")[24].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[25].textContent);
       document.getElementsByClassName("grid-item")[25].setAttribute("style","background-color: Yellow;")

    }
    //octavo piso
    if(document.getElementsByClassName("grid-item")[31].textContent>document.getElementsByClassName("grid-item")[32].textContent){
       max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[31].textContent);
       document.getElementsByClassName("grid-item")[31].setAttribute("style","background-color: Yellow;")

   }else{
      max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[32].textContent);
      document.getElementsByClassName("grid-item")[32].setAttribute("style","background-color: Yellow;")

    
    }
    //noveno piso
    if(document.getElementsByClassName("grid-item")[39].textContent>document.getElementsByClassName("grid-item")[40].textContent){
       max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[39].textContent);
       document.getElementsByClassName("grid-item")[39].setAttribute("style","background-color: Yellow;")

   }else{
      max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[40].textContent);
      document.getElementsByClassName("grid-item")[40].setAttribute("style","background-color: Yellow;")

    }
     //decimo piso
     if(document.getElementsByClassName("grid-item")[49].textContent>document.getElementsByClassName("grid-item")[50].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[49].textContent);
        document.getElementsByClassName("grid-item")[49].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[50].textContent);
       document.getElementsByClassName("grid-item")[50].setAttribute("style","background-color: Yellow;")
    }
     //onceavo piso
     if(document.getElementsByClassName("grid-item")[59].textContent>document.getElementsByClassName("grid-item")[60].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[59].textContent);
        document.getElementsByClassName("grid-item")[59].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[60].textContent);
       document.getElementsByClassName("grid-item")[60].setAttribute("style","background-color: Yellow;")

     
    }
     //duodecimo piso
     if(document.getElementsByClassName("grid-item")[71].textContent>document.getElementsByClassName("grid-item")[72].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[71].textContent);
        document.getElementsByClassName("grid-item")[71].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[72].textContent);
       document.getElementsByClassName("grid-item")[72].setAttribute("style","background-color: Yellow;")

     
    }
     //decimotercero piso
     if(document.getElementsByClassName("grid-item")[84].textContent>document.getElementsByClassName("grid-item")[85].textContent){
        max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[84].textContent);
        document.getElementsByClassName("grid-item")[84].setAttribute("style","background-color: Yellow;")

    }else{
       max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[85].textContent);
       document.getElementsByClassName("grid-item")[85].setAttribute("style","background-color: Yellow;")

    }
    //decimocuarto piso
    if(document.getElementsByClassName("grid-item")[97].textContent>document.getElementsByClassName("grid-item")[98].textContent){
       max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[97].textContent);
       document.getElementsByClassName("grid-item")[97].setAttribute("style","background-color: Yellow;")

   }else{
      max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[98].textContent);
      document.getElementsByClassName("grid-item")[98].setAttribute("style","background-color: Yellow;")

    
    }
    //decimoquinto piso
    if(document.getElementsByClassName("grid-item")[111].textContent>document.getElementsByClassName("grid-item")[112].textContent){
       max= parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[111].textContent);
       document.getElementsByClassName("grid-item")[111].setAttribute("style","background-color: Yellow;")

   }else{
      max=parseInt(max)+parseInt(document.getElementsByClassName("grid-item")[112].textContent);
      document.getElementsByClassName("grid-item")[112].setAttribute("style","background-color: Yellow;")
   }

     //alert("todos los pisos listos: "+max); 
     document.getElementById("T").setAttribute("value",max); 
}
