
init();

function init() {
    setTotalItemCount();
    setGrandTotal();
}

const qtyInput = document.querySelectorAll('.qty-input');
qtyInput.forEach((input) => {
    input.addEventListener('change', function () {
        const unitPrice = this.parentElement.previousElementSibling.innerText;
        const qty = this.value;
        const totalPriceElement = this.parentElement.nextElementSibling;
        const updatePrice = parseFloat(unitPrice) * parseInt(qty);
        totalPriceElement.innerText = updatePrice;
        setGrandTotal();
    });
})

const removeBtn = document.querySelectorAll('.remove-btn');
removeBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', function () {
        this.parentElement.parentElement.remove()
        setTotalItemCount();
        setGrandTotal();
    });
})

function setTotalItemCount() {
    const tbodyElement = qs('tbody');
    const totalItemCount = qs('#totalItem');
    totalItemCount.innerText = tbodyElement.children.length;
}

function setGrandTotal() {
    const tbodyElement = qs('tbody');
    let totalPrice = 0;
    for (let i = 0; i < tbodyElement.children.length; i++) {
        const item = tbodyElement.children[i];
        const price = item.children[5].innerText;
        totalPrice += parseInt(price);
    }
    qs('#grandTotal').innerText = totalPrice;
}

function qs(selector) {
    return document.querySelector(selector)
}

// const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

// // const res = fetch(apiUrl);
// // res
// // .then(data => data.json())
// // .then(result => console.log(result))
// // .catch(err => console.log(err))

// // async/await
// const todos = async () => {
//     const res = await fetch(apiUrl);
//     const todos = await res.json();
//     return todos;
// }

// todos().then(data => console.log(data));

const isWorkDone = true;

const promise = new Promise((resolve, reject) =>{
    if(isWorkDone){
        resolve('work is done')
    }else{
        reject('rejected')
    }
})
.then(result =>{
    return Promise.resolve('Another work is done')
})
.then(data => {
    console.log(data)
})
.catch(err =>{
    console.log(err)
});
console.log(promise)