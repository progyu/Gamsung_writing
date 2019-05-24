(function () {
  const btn = document.querySelector('.btn');
  const getBoard = document.querySelector('.board');
  const tempList = [];
  const topic = ['옛 사진', '먼지', '개성', '과정', '안부', '새벽',
    '걷기', '발자국', '성격', '메모', '보관', '목소리', '그늘', '시선', '안경', '현실', '그림자', '규칙', '핑계'];
  let _randomTopic = 0;

  const storage_key = 'writeSave';
  function saveWrite() {
    // tempList.forEach(function (item) {
    // });                                                                                                                                                                                               
    localStorage.setItem(storage_key, JSON.stringify(item));
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
      getBoard.innerHTML = item.textContent;
    });
  }

  loadWrite();


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


  //로컬스토리지 -------------------------------------------------------------------------------
  // storage_key = "mytodos";

  // function loadTodo() {
  //     var todos = localStorage.getItem(storage_key);
  //     todos = JSON.parse(todos);
  //     console.log(todos);
  //     for (var key in todos) {
  //         var value = todos[key][0];
  //         var class_value = todos[key][1];
  //         var top_value = todos[key][2];
  //         var left_value = todos[key][3];
  //         sample_item = $(list_item).clone();
  //         sample_item.find(".postit_text").append(value);
  //         sample_item.find(".postit_text").attr("data-value", value);
  //         sample_item.find(".postit_text").attr("class", class_value);
  //         sample_item.find(".postit_text").css("top", top_value);
  //         sample_item.find(".postit_text").css("left", left_value);
  //         $(".postit_wrapper").append(sample_item);
  //         dragAll(class_value);
  //     }
  // }


  // function saveTodo() {
  //     var data = {};
  //     var todos = $('.postit_text');
  //     todos.each(function (index) {
  //         data[index] = [$(this).attr('data-value'), $(this).attr('class'), $(this).css('top'), $(this).css('left')];
  //     });
  //     localStorage.setItem(storage_key, JSON.stringify(data));
  // }

  // function Write(title, content) {
  //     this.title = title;
  //     this.content = content;
  // }
  // let writeList = [];
  // let writeTemp = new Write("우산", "예수 석가");
  // writeList[writeList.length] = writeTemp;
  // writeTemp = new Write("규하", "유하");
  // writeList[writeList.length] = writeTemp;
  // writeTemp = new Write("가영", "가영91");
  // writeList[writeList.length] = writeTemp;
  // writeTemp = new Write("들", "김들이");
  // writeList[writeList.length] = writeTemp;
  // writeTemp = new Write("현호", "귀염둥이");
  // writeList[writeList.length] = writeTemp;
  // console.log(writeList);
  // writeList.forEach(f => { document.querySelector('.board').innerHTML += f.title });





  // # 2. 특정 프로퍼티 값 추출 
  // 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중

  // 해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.

  // 단, for 문이나 Array#forEach는 사용하지 않도록 하자

  // const todos = [
  //   { id: 3, content: 'HTML', completed: false },
  //   { id: 2, content: 'CSS', completed: true },
  //   { id: 1, content: 'Javascript', completed: false }
  // ];

  // function getValues(key) { return todos.map(todo => todo[key]); }
  // function getValues(key) {
  //   return todos.map(function (todo) {
  //     return todo[key];
  //   });
  // }

  // console.log(getValues('id')); // [3, 2, 1]
  // console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
  // console.log(getValues('completed')); // [ false, true, false ]

}());