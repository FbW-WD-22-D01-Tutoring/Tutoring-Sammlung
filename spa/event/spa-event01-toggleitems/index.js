const toggleList = document.getElementById("toggleListJS"); // ID abfrage
const toggleList1 = document.querySelector(".toggleListJS"); // Class abfrage
const toggleList2 = document.querySelector("[data-toggleList]"); // Attribut abfrage
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    toggleList.classList.toggle("d-none");
})

const listItems = toggleList.children;

for(const item of listItems){
    // console.log(item);
    item.addEventListener("click", () => {

        // Lange Variante ohne Schleife (alles Manuell entfernen)
        // listItems[0].classList.remove("active");
        // listItems[1].classList.remove("active");
        // listItems[2].classList.remove("active");
        // listItems[3].classList.remove("active");
        // listItems[4].classList.remove("active");

        // Kurze variante mit Schleife
        for(const item2 of listItems){
            item2.classList.remove("active");
        }
        item.classList.add("active");
    })
}