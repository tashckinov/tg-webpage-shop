let tg = window.Telegram.WebApp;

tg.expand();

// tg.MainButton.textColor = "#FFFFFF";
// tg.MainButton.textColor = "#2cab37";

let item = "";

const buttonItems = document.querySelectorAll('.btn');

for (let buttonItem of buttonItems) {
    buttonItem.addEventListener('click', function () {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            item = buttonItem.getAttribute("data-id")
            tg.MainButton.setText(`Вы выбрали товар ${item}`);

            tg.MainButton.show();
        }
    });
}
Telegram.WebApp.onEvent('mainButtonClicked', function () {
    tg.sendData("some string that we need to send");
    //при клике на основную кнопку отправляем данные в строковом виде
});

let usercard = document.getElementById("usercard")

let p = document.createElement("p")

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`

usercard.appendChild(p)