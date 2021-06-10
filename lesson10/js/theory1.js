const collections = document.querySelectorAll('.collection');
const elems = document.querySelectorAll('.elem');
elems[3].remove();
elems[1].remove();

collections[1].append(elems[3]);
collections[1].append(elems[1]);

collections[1].prepend(elems[5]);

collections[0].before(collections[1]);
elems[0].after(elems[6]);
elems[0].before(elems[6]);