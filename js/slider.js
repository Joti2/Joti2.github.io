(function(){
    const sliders = [...document.querySelectorAll(".testimony__body")];  /*Lo cierro entre [] y le doy 3 puntos(...) para que en vez de ser un nodo de elementos, sea un array*/  
    const buttonNext = document.querySelector("#next"); /*El (#next) significa que tomara aquellos que tiene como id next */
    const buttonBefore = document.querySelector("#before");
    let value;

    buttonNext.addEventListener("click", ()=>{ /*El ()=> significa que se ejecute una funcion, en este caso sera changeposition */
        changePosition(1);
    });

    buttonBefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector(".testimony__body--show").dataset.id;
        value = Number(currentTestimony); /*Esto significa que el variable value va ser igual al data id del slider actual */
        value = value + add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        
        /*Lo pongo +1 porque si estamos en el id numero 4 y si le sumo mas 1, sera 5 y ya no tengo un quinto elemento(en este caso) y quiero que pase algo alli */
        if(value === sliders.length+1 || value === 0){
            if(value===0){
                value = sliders.length;
            }else{
                value = 1;
            }
        }


        /*Lo pongo value-1 ya que como tenemos 4 elementos, las posicion comienza en 0, luego va a 1, leugo va a 2 y finalmente 3 para los 4 elementos */
        sliders[value-1].classList.add('testimony__body--show');
    }

})();