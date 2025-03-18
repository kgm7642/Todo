# 📝 Todo List

간단한 Todo List 웹 애플리케이션입니다.

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/f29f0ced-3d51-470e-9e32-dab1928fe6ea" alt="TodoList 다이어그램" style="width:60%">
  <img src="https://github.com/user-attachments/assets/31a474c4-9d88-4152-90d1-b48d3a9f46cf" alt="todo 실행화면" style="width:60%">
</div>

## ✨ 주요 기능

- 할 일 추가 및 삭제
- 완료한 항목 표시

## ✔️ 추가한 기능

- 진행률(Progress Bar) 표시
- 전체 목록 삭제
- 로컬 스토리지

### 진행률(Progress Bar) 표시

- 사용자의 할 일 목록중 완료된 항목의 비율을 시각적으로 보여줍니다. 사용자는 이를 통해 얼마나 할 일을 완료했는지 한눈에 확인할 수 있습니다.
- 동작 원리: 할 일이 추가되거나 완료되거나 삭제될 때 진행률이 자동으로 업데이트됩니다.

### 전체 목록 삭제

- 사용자의 할 일 목록을 한번에 삭제할 수 있는 기능입니다.
- 동작 원리: 해골 모양의 버튼을 클릭하면 사용자의 모든 할 일 목록이 삭제됩니다. 이때 진행률도 초기화됩니다.

### 로컬 스토리지

- 할 일 목록과 상태가 로컬 스토리징 저장됩니다.
- 페이지를 새로 고침 하거나 브라우저 창을 닫아도 할 일과 상태가 유지됩니다.
