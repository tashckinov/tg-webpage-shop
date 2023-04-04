let tg = window.Telegram.WebApp;

tg.expand();
//
// // tg.MainButton.textColor = "#FFFFFF";
// // tg.MainButton.textColor = "#2cab37";
//
// let cart = {};
//
// const buttonItems = document.querySelectorAll('.btn');
//
// for (let buttonItem of buttonItems) {
//     buttonItem.addEventListener('click', function () {
//
//         if (!cart[[buttonItem.getAttribute("data-id")]]) {
//             cart[[buttonItem.getAttribute("data-id")]] = 1
//         } else if (cart[[buttonItem.getAttribute("data-id")]] >= 1) {
//             cart[[buttonItem.getAttribute("data-id")]] += 1
//         }
//
//         // if (tg.MainButton.isVisible) {
//         //     tg.MainButton.hide();
//         // } else {
//         //     item = buttonItem.getAttribute("data-id")
//         //     tg.MainButton.setText(`Вы выбрали товар ${item}`);
//         //     tg.MainButton.show();
//         // }
//         console.log(cart)
//     });
// }
// Telegram.WebApp.onEvent('mainButtonClicked', function () {
//     tg.sendData(cart);
//     //при клике на основную кнопку отправляем данные в строковом виде
// });
//
// let item = document.getElementsByClassName("item")[2]
// let counter = document.createElement("div")
// counter.className = "counter";
// counter.innerText = 99;
// item.appendChild(counter)
//
//
// let usercard = document.getElementById("usercard")
//
// let p = document.createElement("p")
//
// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`
//
// usercard.appendChild(p)
let order_id = '123'
Telegram.WebApp.onEvent('mainButtonClicked', function () {
    tg.sendData(order_id);
    //при клике на основную кнопку отправляем данные в строковом виде
});

Vue.createApp({
    data() {
        return {
            check: 0,
            catalog: [{
                id: 1, name: "Serenity", price: 400
            }, {
                id: 2, name: "Serenity", price: 400
            }, {
                id: 3, name: "Serenity", price: 400
            }, {
                id: 4, name: "Serenity", price: 400
            }, {
                id: 5, name: "Serenity", price: 400
            }, {
                id: 6, name: "Serenity", price: 400
            }], cart: {}
        }
    },
    methods: {
        add(id) {
            if (!this.cart[id]) {
                this.cart[id] = 1
            } else {
                this.cart[id] += 1
            }
            this.check += 1
            if (this.cart) {
                tg.MainButton.show();
            }
        },
        del(id) {
            if (this.cart[id] > 0) {
                this.cart[id] -= 1
            }
            let sum = 0;
            for (i in this.cart) {
                sum += this.cart[i];
            }
            if (sum <= 0) {
                tg.MainButton.hide();
            }
        }
    }
}).mount('.container')