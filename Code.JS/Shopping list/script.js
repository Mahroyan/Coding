function addItem() {
    var itemInput = document.getElementById("itemInput");
    var item = itemInput.value.trim();
    if (item) {
        var list = document.getElementById("shoppingList");
        list.innerHTML += "<li>" + item + "</li>";
        itemInput.value = "";
    }
}