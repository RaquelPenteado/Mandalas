var items = document.querySelectorAll("#list li");

items.forEach(function(li) {
  li.addEventListener("click", () => {
    items.forEach(function(item) {
      item.classList.remove('click');
    });
    li.classList.toggle('click');
  });
});

var images = [
  'mandalas/mandala-red-right.jpeg',
  'mandalas/mandala-red.jpeg',
  'mandalas/mandala-red-left.jpeg',
  'mandalas/black-white-circle.jpeg',
  'mandalas/black-white-flowers.jpeg',
  'mandalas/black-white-three.jpeg',
];

var container = document.getElementById("grid-container");

for (var i = 0; i < images.length; i++) {
  var cell = document.createElement("div");
  cell.classList.add("item");

  var image = document.createElement("img");
  image.src = images[i];

  cell.appendChild(image);
  container.appendChild(cell);
}
