const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let ValueByDefault = parseInt(inputQuantity.value)

//funciones click

btnIncrement.addEventListener('click', () =>{
    ValueByDefault += 1
    inputQuantity.value = ValueByDefault
})

btnDecrement.addEventListener('click', () =>{
    if (ValueByDefault == 1){
        return
    }
    ValueByDefault -= 1
    inputQuantity.value = ValueByDefault
})
//toggle
//constantes toggle titles

const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const toggleReviews = document.querySelector('.title-reviews');

//constantes de texto
const contentDescription = document.querySelector('.text-description');
const contentAdditionalInformation = document.querySelector('.text-additional-information');
const contentReviews = document.querySelector('.text-reviews');

//funciones
toggleDescription.addEventListener('click', ()=>{
    contentDescription.classList.toggle('hidden');
});
toggleAdditionalInformation.addEventListener('click', ()=>{
    contentAdditionalInformation.classList.toggle('hidden');
});
toggleReviews.addEventListener('click', ()=>{
    contentReviews.classList.toggle('hidden');
});