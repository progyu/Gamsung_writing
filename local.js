const storage_key = 'writeSave';
const galleryword = document.querySelector('.one');

function loadWrite() {
  let load = localStorage.getItem(storage_key);
  load = JSON.parse(load);
  if (load === null) {
    return null;
  }
  console.log('load' + load);

  load.forEach(function (item) {
    console.log(item);
    galleryword.innerHTML += `<a href="view.html"><div class="wrapper">
    <div class="photo one">${item.title}</div>
  </div></a>`;
  });
}

loadWrite();

function saveWrite() {
  tempList.forEach(function (item) {
    localStorage.setItem(storage_key, JSON.stringify(tempList));
  });
}

galleryword.addEventListener('click', function (e) {
  console.log('hi');
});
