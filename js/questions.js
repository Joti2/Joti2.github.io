(function () {
   const titleQuestion = [...document.querySelectorAll(".questions__title")];

   titleQuestion.forEach(question =>{
    question.addEventListener("click", ()=>{
        let height = 0;
        let answer = question.nextElementSibling; /*el nextElementSibling se refiere al siguiente elemento que sigue del index */
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('questions__padding--add');
        question.children[0].classList.toggle('questions__arrow--rotate');
       
        if(answer.clientHeight === 0){ /*el clientHeight se refiere al elemento en que estamos en esta funcion del index */
            height = answer.scrollHeight; /*scrollHeight nos da el alto minimo para que el elemento se muestre */
        }

        answer.style.height = `${height}px`;
    });
   });
})();