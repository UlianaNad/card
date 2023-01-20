let itemAmount = 0;
let Amount = document.querySelector('.amount');
let priceKg = document.querySelector('input');
let priceDiv = document.querySelector('.price');
let warning = document.querySelector('.warning');
let cur = document.querySelector('.currency');
//console.log(priceKg)


{
    let plusButton = document.querySelector('.plus');
    plusButton.addEventListener('click', () => {
        itemAmount = itemAmount+1;
        Amount.innerHTML = itemAmount;
        if (itemAmount < 0){
            Amount.innerHTML = 0;
        } else if (itemAmount >= 0) {
            warning.innerHTML = '';
        }
    })
}

{
    let minusButton = document.querySelector('.minus');
    minusButton.addEventListener('click', () => {
        itemAmount = itemAmount-1;
        Amount.innerHTML = itemAmount;
        if (itemAmount < 0) {
            Amount.innerHTML = 0;
            warning.innerHTML = 'Amount can not be less then 0!'
        } 
    })
}





{
    cur.addEventListener('change', (e) => {
        
        function totalPrice(itemAmount, priceKg){
            priceKg.addEventListener('change', (e) => {
                let priceperKg = Number(e.target.value);
                let price = itemAmount*priceperKg;
                priceDiv.innerHTML=price;
                })
        }
        totalPrice();
        if(cur.value="euro"){
            newPrice = price*1
        }else if(cur.value="uah"){
            newPrice = price*0,025
        }else if(cur.value="gpb"){
            newPrice = price*0.88
        }
        priceDiv.innerHTML=price;
    } )
}