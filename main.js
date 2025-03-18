const addBtn = document.querySelector('.fa-plus'); // 추가버튼
const removeBtn = document.querySelector('.fa-skull'); // 모두삭제버튼
const input = document.querySelector('.footer_input'); //input 요소
const items = document.querySelector('.items'); // ul
const progressBar = document.querySelector('#progress-bar'); // 진행률 바
const totalCount = document.querySelector('#total-count');
const completedCount = document.querySelector('#completed-count');

// 로컬 스토리지에서 저장된 데이터를 불러와 배열로 변환
// 값이 없다면 빈 배열로 설정
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 완료된 항목 개수 / 전체 항목 개수 * 100 → 퍼센트 값
window.addEventListener('DOMContentLoaded', updateProgress);
window.onload = function () {
  renderTodos();
};

// 진행률 바를 업데이트 하는 함수
function updateProgress() {
  let totalTasks = Array.from(items.children).length;
  let activeTasks = document.querySelectorAll('.item_done').length;
  totalCount.textContent = totalTasks;
  completedCount.textContent = activeTasks;
  progressBar.value = activeTasks;
  progressBar.max = totalTasks;
  console.log('totalTasks', totalTasks);
  console.log('activeTasks', activeTasks);
}

// 화면에 todo 리스트를 랜더링 하는 함수
function renderTodos() {
  items.innerHTML = '';
  todos.forEach((todo, index) => {
    const itemRow = document.createElement('li');
    itemRow.className = 'item';

    // 체크 상태에 따라 클래스 추가
    const checkedClass = todo.done;
    if (checkedClass) itemRow.classList.add('item_done');

    itemRow.innerHTML = `<span>${todo.text}</span>
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-trash-can"></i>
          </li>`;

    // 체크버튼 클릭시 done 상태 변경경
    itemRow.querySelector('.fa-check').addEventListener('click', () => {
      todo.done = !todo.done;
      localStorage.setItem('todos', JSON.stringify(todos)); // 로컬 스토리지에 상태 저장
      itemRow.classList.toggle('item_done');
      updateProgress(); // 진행률 바 업데이트
    });
    //삭제 버튼 클릭시 itemRow 제거 이벤트
    itemRow.querySelector('.fa-trash-can').addEventListener('click', () => {
      // 1. todos 배열에서 삭제할 요소의 인덱스를 찾기
      const indexToRemove = todos.indexOf(todo);

      // 2. 배열에서 해당 요소 제거
      todos.splice(indexToRemove, 1);

      // 3. 로컬 스토리지 업데이트
      localStorage.setItem('todos', JSON.stringify(todos));

      // 4. 화면에서 삭제
      itemRow.remove();
      updateProgress(); // 진행률 바 업데이트
    });

    //setTimeout(() => itemRow.scrollIntoView({ block: 'center' }), 0);
    requestAnimationFrame(() => itemRow.scrollIntoView({ block: 'center' }));
    items.appendChild(itemRow);
    updateProgress();
  });
}

// 추가함수
function onAdd() {
  const text = input.value.trim();
  if (!text) {
    input.value = '';
    input.focus();
    return;
  }
  // li생성하는 함수 - createItem(text)
  // ul에 생성값을 추가함
  todos.push({ text: text, done: false });
  localStorage.setItem('todos', JSON.stringify(todos));
  input.value = '';
  // 진행률 바 업데이트
  renderTodos();
  updateProgress();
}

// 전체 삭제함수
function removeAll() {
  console.log('Array.from(items.children)', Array.from(items.children));

  const arr = Array.from(items.children); // children을 배열로 변환
  arr.forEach((item) => item.remove()); // 각 아이템을 삭제
  // 로컬 스토리지 초기화
  localStorage.clear();
  updateProgress(); // 진행률 바 업데이트
}

// 이벤트 등록
addBtn.addEventListener('click', onAdd);
removeBtn.addEventListener('click', removeAll);
// input.addEventListener('keypress', (e) => {
//   console.log(e);
//   if (e.key === 'Enter') {
//     onAdd();
//   }
// });

input.addEventListener('keyup', (e) => e.key === 'Enter' && onAdd());
