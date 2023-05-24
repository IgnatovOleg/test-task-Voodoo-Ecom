

var productCardsContainer = document.getElementById("product-cards-container");

let x = [];
async function fetchData() {
    const response = await fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12');
    const json = await response.json();
    for (let i of json.products) {
        x.push(i);
    }
}
fetchData().then(() => { generateProductCards(x) })

function generateProductCards(x) {

    for (var i = 0; i < x.length; i++) {
        var product = x[i];
        console.log(product);

        var card = document.createElement("div");
        card.classList.add("cardOleg", "w-[342px]", "h-max", "sm:w-[300px]", "sm:h-max");

        var icon = document.createElement("img")
        icon.classList.add("rounded", "border-2", "border-black", "h-72", "p-3", "w-full")
        icon.src = product.images[0].src


        var used = document.createElement("div")
        used.classList.add("bg-black", "rounded", "w-max", "text-yellow-50", "font-normal", "text-sm", "leading-4", "p-1")
        used.textContent = "USED"

        var leftInfo = document.createElement("div")
        leftInfo.classList.add("flex", "justify-between")

        var productTitle = document.createElement("span")
        productTitle.classList.add("font-bold", "text-sm", "leading-5", "relative", "top-2")
        productTitle.textContent = product.title

        var secondLeft = document.createElement("span")
        secondLeft.classList.add("font-bold", "text-sm", "leading-5", "relative", "top-2")
        secondLeft.textContent = "Condition"

        var rightInfo = document.createElement("div")
        rightInfo.classList.add("flex", "justify-between", "mt-[7px]")

        var productPrice = document.createElement("span")
        productPrice.classList.add("font-bold", "text-sm", "leading-4")
        productPrice.textContent = product.variants[0].price + " KR"

        var secondRight = document.createElement("div")
        secondRight.classList.add("font-normal", "text-sm", "leading-4")
        secondRight.textContent = "Slightly used"

        var button = document.createElement("div")
        button.classList.add("oleg", "p-3", "mt-[12px]", "flex", "justify-center", "items-center", "bg-black", "rounded", "text-white", "sm:flex", "sm:justify-center", "sm:items-center", "sm:opacity-0")
        button.textContent = "PICK-UP IN 2200"

        

        card.appendChild(icon);
        icon.appendChild(used)
        card.appendChild(leftInfo);
        leftInfo.appendChild(productTitle)
        leftInfo.appendChild(secondLeft)
        card.appendChild(rightInfo);
        rightInfo.appendChild(productPrice)
        rightInfo.appendChild(secondRight)
        card.appendChild(button);

        productCardsContainer.appendChild(card);

        (function(button, card) {
            card.addEventListener("mouseover", function() {
                console.log(card, "over");
                button.classList.remove("sm:opacity-0");
            });
            card.addEventListener("mouseout", function() {
                button.classList.add("sm:opacity-0");
            });
        })(button, card);

    }

}

var alpha = document.getElementById("alpha-click");
var visibleDesc = document.getElementById("visible-desc");
var visibleList = document.getElementById("visible-list")

alpha.addEventListener("click", function() {
    alpha.classList.toggle("h-max");
    visibleDesc.classList.toggle("opacity-100");
    visibleList.classList.toggle("opacity-100")
});




