const selector_1 = document.getElementsByClassName("selector-1");
console.log(selector_1[0].attributes[2].value)
const selector_2 = document.getElementsByClassName("selector-2");
console.log(selector_2[0].attributes[2].value)
const selector_3 = document.getElementsByClassName("selector-3");
const selector_4 = document.getElementsByClassName("selector-4");

const btn_1 = document.getElementsByClassName("btn-1");
const btn_2 = document.getElementsByClassName("btn-2");
const btn_3 = document.getElementsByClassName("btn-3");
const btn_4 = document.getElementsByClassName("btn-4");
console.log(btn_1[0].attributes[2].value);
const number_box = document.getElementsByClassName("input");
const answer_box = document.getElementsByClassName("output");

fetch(`https://api.exchangerate.host/latest?base=USD&symbols=RUB`)
    .then((val) => val.json())
    .then((val) => {
        console.log(val.rates.RUB);
    })

fetch('https://api.exchangerate.host/latest')
    .then((res) => res.json())
    .then((data) => {
        show(data.rates);
    })


const show = (data) => {
    const asArray = Object.entries(data);
    asArray.forEach((index) => {
        console.log(index)
    })

    btn_1.value = `${asArray[120][0]}`;
    btn_2.value = `${asArray[149][0]}`;
    // console.log(asArray[46][0]);
    // console.log(asArray[49][0]);
}

//   console.log(btn_1.innerHTML);
  selector_2.addEventListener('click', (e) => {
        e.preventDefault();
        let currency_two = selector_2[0].attributes[2].value;
        let value = number_box.value;

    btn_1.addEventListener('click', () => {
   
    let selected_button = btn_1[0].attributes[2].value

    if (selected_button !== currency_two) {
        convert(currency_two, selected_button, value);
    } else {
        alert('choose the currency');
    }
})

    })








// btn_2.addEventListener('click', ()=>{


//     let currency_one = btn_1.value;
//     let currency_two = btn_2.value;
//     console.log(currency_one);
//     console.log(currency_two);

//     let value = number_box.value;
//     if(currency_one !== currency_two){
//         convert(currency_one,currency_two, value)
//     } else{
//         alert('choose the currency')
//     }

// });

// btn_3.addEventListener('click', ()=>{


//     let currency_one = btn_1.value;
//     let currency_two = btn_2.value;
//     console.log(currency_one);
//     console.log(currency_two);

//     let value = number_box.value;
//     if(currency_one !== currency_two){
//         convert(currency_one,currency_two, value)
//     } else{
//         alert('choose the currency')
//     }

// });

// btn_4.addEventListener('click', ()=>{


//     let currency_one = btn_1.value;
//     let currency_two = btn_2.value;
//     console.log(currency_one);
//     console.log(currency_two);

//     let value = number_box.value;
//     if(currency_one !== currency_two){
//         convert(currency_one,currency_two, value)
//     } else{
//         alert('choose the currency')
//     }

// });

function convert(currency_two, selected_button, value){
        const host = 'api.exchangerate.host';
        fetch(`https://${host}/latest?base=${currency_two}&symbols=${selected_button}`)
            .then((val) => val.json())
            .then((val) => {
                answer_box.value = val.rates.RUB * value;
            })
    }

