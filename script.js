var items = document.querySelectorAll("#list li");

items.forEach(function(li) {
  li.addEventListener("click", () => {
    items.forEach(function(item) {
      item.classList.remove('click');
    });
    li.classList.toggle('click');
  });
});
