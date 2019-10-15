(function () {
  const btn = document.querySelector('.save');
  const del = document.querySelector('.delete');
  const getBoard = document.querySelector('.board');
  const tempList = [];
  const topic = ['옛 사진', '먼지', '개성', '과정', '안부', '새벽',
    '걷기', '발자국', '성격', '메모', '보관', '목소리', '그늘', '시선', '안경', '현실', '그림자', '규칙', '핑계'];
  let _randomTopic = 0;

  const storage_key = 'writeSave';
  function saveWrite() {
    // tempList.forEach(function (item) {
    // });                                                                                                                                                                                               
    localStorage.setItem(storage_key, JSON.stringify(tempList));
  }

  function loadWrite() {
    let load = localStorage.getItem(storage_key);
    load = JSON.parse(load);
    if (load === null) {
      return null;
    }
    console.log(load);

    load.forEach(function (item) {
      console.log(item);
      // getBoard.innerHTML = item.textContent;

      tempList[tempList.length] = item;
    });
  }

  loadWrite();

  function saveWrite() {
    // tempList.forEach(function (item) {
    // });                                                                                                                                                                                               
    localStorage.setItem(storage_key, JSON.stringify(tempList));
  }



  // 글감 랜덤으로 던져서 뿌려주기
  function writeTopic() {
    const randomTopic = Math.floor(Math.random() * topic.length);
    document.querySelector('.title').innerHTML = `<h2>${topic[randomTopic]}</h2>`;
    _randomTopic = randomTopic;
  }
  writeTopic();

  // 사용자가 입력한 글 가져오기
  btn.addEventListener('click', function (e) {
    const getValue = getBoard.textContent;
    const tempObj = {};
    tempObj.title = topic[_randomTopic];
    tempObj.textContent = getValue;
    tempList[tempList.length] = tempObj;
    console.log(tempList);
    saveWrite();
  });


  del.addEventListener('click', function (e) {
    // saveWrite();
    // localStorage.clear();
    // setTimeout(function () {
    //   location.reload();
    // }, 1000);
  });

  // focus되면 기본 글인 '여기에 글을...'  이 사라짐.
  // getBoard.addEventListener('focus', function (e) {
  //   e.target.textContent = '';
  // });
}());
