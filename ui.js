// -----------------------------------------------------------------------------------------
// 인터랙션 UI 디자인 - OffCanvas 메뉴 / Toggle 패널
// - DOM API, 변수, 함수, 조건문, 반복문, 연산자 등을 활용하는 총체적 예제.
//
// [1.1] EDIYA COFFEE 로고 오른쪽 옆에 위치한 토글 버튼(.button.is-open)을 누르면,
//       오프캔버스 메뉴(.app-navigation)을 화면에 표시한다.
//       - hidden 속성 값 false 설정.
//       - is-active 클래스 추가.
//
// [1.2] 오프캔버스 닫기 버튼(.button.is-close-menu)을 누르면,
//       오프캔버스 메뉴(.app-navigation)을 화면에서 감춘다.
//       - hidden 속성 값 true 설정.
//       - is-active 클래스 제거.
//
// [2.1] 이디야 메뉴 아이템(.ediya-menu__item)을 문서에서 모두 수집한 후,
//       메뉴 아이템 내부에서 a 요소를 찾아 클릭 이벤트를 연결한다.
//       이벤트에 연결된 함수(핸들러)는 음료 상세 설명 패널을 화면에 표시한다.
//       - 상세 설명 패널(.ediya-menu__item--detail) hidden 속성 값 false 설정.
//       - 상세 설명 패널에 is-active 클래스 추가.
//
// [2.2] 상세 설명 패널 내부에 위치한 패널 닫기 버튼(.button.is-close-panel)을 클릭하면,
//       패널을 닫는 이벤트 핸들러를 연결하여 패널을 닫도록 설정한다.
//       - 상세 설명 패널(.ediya-menu__item--detail) hidden 속성 값 true 설정.
//       - 상세 설명 패널에 is-active 클래스 제거.
//
//
// 예제 참고 URL: ediya.com/contents/drink.html
// ------------------------------------------------------------------------------------------

var hamburger = el('.hamburger', '.header');
var gnbCloseBtn = el('.gnb__close-btn', '.header');
var gnb = el('.gnb', '.header');
var list = el('.drink-list');
var items = els('.drink-list__item', list);

var showPannel = function(target, time) {
	target.hidden = false;
	setTimeout(function() {
		target.classList.add('is-active');
	}, time);
};

var hidePannel = function(target, time) {
	target.classList.remove('is-active');
	setTimeout(function() {
		target.hidden = true;
	}, time);
};


var toggleDetailPanel = function(me, idx) {
	me.addEventListener('click', function(e) {
		e.preventDefault();

		var disc = el('.drink-disc', items[idx]);

		if (e.target.tagName.toLowerCase() === 'figure' || e.target.tagName.toLowerCase() === 'img') {
			showPannel(disc, 100);

		} else if (e.target.tagName.toLowerCase() === 'button') {
			hidePannel(disc, 400);
		}
	}, false);
};

hamburger.addEventListener('click', function() {
	showPannel(gnb, 100);
}, false);
gnbCloseBtn.addEventListener('click', function() {
	hidePannel(gnb, 400);
}, false);

items.forEach(toggleDetailPanel);