// DOM API 랩핑 해놓음.

export function qs(selector, scope = document) {
  if (!selector) throw "no selector";

  return scope.querySelector(selector);
}

export function qsAll(selector, scope = document) {
  if (!selector) throw "no selector";

  return Array.from(scope.querySelectorAll(selector));  // Array 사용하여 element 여러개 반환
}

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);  // target에서 eventName 이벤트 수신하고, 그 이벤트가 발행되면 handler 함수 호출 
}

export function delegate(target, eventName, selector, handler) {  // 특정 element 하위에 있는 자식 element들의 이벤트를 처리
  const emitEvent = (event) => { // 이벤트 핸들러를 따로 랩핑 
    const potentialElements = qsAll(selector, target);  // target 안에서 selector로 모든 후보 element 찾음

    for (const potentialElement of potentialElements) { // 후보 element를 순회하면서
      if (potentialElement === event.target) {  // 이벤트를 발생시긴 element와 같은지 체크
        return handler.call(event.target, event);
      }
    }
  };

  on(target, eventName, emitEvent); 
}

export function emit(target, eventName, detail) { // 이벤트 발행
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

// 상대 시간 반환
export function formatRelativeDate(date = new Date()) {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;

  const diff = new Date() - date;

  if (diff < TEN_SECOND) return `방금 전`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 24)}시간 전`;
  return date.toLocaleString("ko-KR", {
    hour12: false,
    dateStyle: "medium",
  });
}

// 과거 날짜
export function createPastDate(date = 1, now = new Date()) {
  if (date < 1) throw "date는 1 이상입니다";

  const yesterday = new Date(now.setDate(now.getDate() - 1));
  if (date === 1) return yesterday;

  return createPastDate(date - 1, yesterday);
}

export function createNextId(list = []) {
  return Math.max(...list.map((item) => item.id)) + 1;
}
