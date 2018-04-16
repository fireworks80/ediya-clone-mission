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

var drinkDisc = [
	{
		title: 'ICED 벚꽃라떼',
		titEn: 'Cherry Blossom Latte',
		disc: '은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼',
		ingredient: [
			{name: '칼로리', val: '393kcal'},
			{name: '포화지방', val: '18.6g'},
			{name: '당류', val: '35g'},
			{name: '나트륨', val: '149mg'},
			{name: '단백질', val: '7g'},
			{name: '카페인', val: '0mg'}
		]
	},
	{
		title: 'HOT 벚꽃라떼',
		titEn: 'Cherry Blossom Latte',
		disc: '은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼',
		ingredient: [
			{name: '칼로리', val: '430kcal'},
			{name: '포화지방', val: '19.0g'},
			{name: '당류', val: '38g'},
			{name: '나트륨', val: '190mg'},
			{name: '단백질', val: '10g'},
			{name: '카페인', val: '0mg'}
		]
	},
	{
		title: 'ICED 브라우니 쇼콜라',
		titEn: 'Brownie Chocolate',
		disc: '깊고 진한 초콜릿의 맛에 부드러운 휘핑크림과 브라우니를 함께 어울러져 고급스러운 디저트 같은 초콜릿 음료',
		ingredient: [
			{name: '칼로리', val: '503kcal'},
			{name: '포화지방', val: '20.8g'},
			{name: '당류', val: '42g'},
			{name: '나트륨', val: '262mg'},
			{name: '단백질', val: '9g'},
			{name: '카페인', val: '12mg'}
		]
	},
	{
		title: 'HOT 브라우니 쇼콜라',
		titEn: 'Brownie Chocolate',
		disc: '깊고 진한 초콜릿의 맛에 부드러운 휘핑크림과 브라우니를 함께 어울러져 고급스러운 디저트 같은 초콜릿 음료',
		ingredient: [
			{name: '칼로리', val: '503kcal'},
			{name: '포화지방', val: '20.9g'},
			{name: '당류', val: '42g'},
			{name: '나트륨', val: '299mg'},
			{name: '단백질', val: '9g'},
			{name: '카페인', val: '12mg'}
		]
	},
	{
		title: '제주청귤 오리지널',
		titEn: 'Jeju Green Tangerine Tea',
		disc: '청정 제주지역에서 자라난 귀한 청귤의 풍부한 과육을 맛볼 수 있는 새콤달콤한 홈메이드 스타일 과일차',
		ingredient: [
			{name: '칼로리', val: '218kcal'},
			{name: '포화지방', val: '0.1g'},
			{name: '당류', val: '51g'},
			{name: '나트륨', val: '4mg'},
			{name: '단백질', val: '0g'},
			{name: '카페인', val: '0mg'}
		]
	},
	{
		title: '제주청귤 블라썸',
		titEn: 'Jeju Green Tangerine Blossom',
		disc: '청귤의 새콤함이 복숭아, 포도 등의 다양한 과일향과 함께 어우러져 밸런스가 훌륭한 블렌딩티',
		ingredient: [
			{name: '칼로리', val: '202kcal'},
			{name: '포화지방', val: '0.1g'},
			{name: '당류', val: '46g'},
			{name: '나트륨', val: '5mg'},
			{name: '단백질', val: '1g'},
			{name: '카페인', val: '0mg'}
		]
	},
	{
		title: '석류 오리지널',
		titEn: 'Pomegranate Tea',
		disc: '석류 특유의 산뜻한 향과 깔끔한 뒷맛이 느껴지며, 과육이 한알 한알 살아있는 붉은 빛의 매력적인 과일차',
		ingredient: [
			{name: '칼로리', val: '210kcal'},
			{name: '포화지방', val: '0.1g'},
			{name: '당류', val: '42g'},
			{name: '나트륨', val: '5mg'},
			{name: '단백질', val: '0g'},
			{name: '카페인', val: '0mg'}
		]
	},
	{
		title: '석류 애플라임',
		titEn: 'Pomegranate Apple Lime',
		disc: '산뜻한 석류에 다양한 과일과 꽃, 그리고 샴페인의 향이 더해져 보다 깊고 중후한 맛이 느껴지는 블렌딩티',
		ingredient: [
			{name: '칼로리', val: '220kcal'},
			{name: '포화지방', val: '0.1g'},
			{name: '당류', val: '42g'},
			{name: '나트륨', val: '7mg'},
			{name: '단백질', val: '1g'},
			{name: '카페인', val: '0mg'}
		]
	}
];

var hamburger;
var gnbCloseBtn;
var gnb;
var list;
var items;

var onElSettion = function() {
	hamburger = el('.hamburger', '.header');
	gnbCloseBtn = el('.gnb__close-btn', '.header');
	gnb = el('.gnb', '.header');
	list = el('.drink-list');
	items = els('.drink-list__item', list);
};

// 제품 설명 세팅
var onDiscSettion = function() {
	drinkDisc.forEach(function(obj, idx) {
		var wrap = document.createElement('div');
		wrap.className = 'drink-disc';
		wrap.hidden = true;
		var dl = document.createElement('di');
		var dt = document.createElement('dt');
		dt.className = 'drink-disc__tit';
		dt.appendChild(document.createTextNode(drinkDisc[idx].title));
		var span = document.createElement('span');
		span.appendChild(document.createTextNode(drinkDisc[idx].titEn));
		dt.appendChild(span);
		dl.appendChild(dt);

		var dd = document.createElement('dd');
		dd.className = 'drink-disc__txt';

		var ul = document.createElement('ul');

		ul.className = 'drink-disc__ingredient clear-fix';

		drinkDisc[idx].ingredient.forEach(function(obj, idx) {
			var li = document.createElement('li');
			var em = document.createElement('em');
			li.appendChild(document.createTextNode(obj.name));
			em.appendChild(document.createTextNode('(' + obj.val + ')'));
			li.appendChild(em);
			ul.appendChild(li);
		});

		dd.appendChild(ul);
		dl.appendChild(dd);

		var button = document.createElement('button');
		button.setAttribute('type','button');
		button.setAttribute('aria-label', '음료수 설명창 닫기');
		button.appendChild(document.createTextNode('x'));

		wrap.appendChild(dl);
		wrap.appendChild(button);

		items[idx].appendChild(wrap);
	});
};



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

var onDetailPanel = function(me, idx) {
	var disc = el('.drink-disc', items[idx]);

	me.addEventListener('click', function(e) {
		e.preventDefault();

		if (e.target.tagName.toLowerCase() === 'figure' || e.target.tagName.toLowerCase() === 'img') {
			showPannel(disc, 100);

		} else if (e.target.tagName.toLowerCase() === 'button') {
			hidePannel(disc, 400);
		}
	}, false);

	var link = el('.drink-link', items[idx]);

	link.addEventListener('keydown', function(e) {

		if (e.keyCode === 13) {
			showPannel(disc, 100);
		}
	}, false);
};

var a11yOffCanvasMenu = function() {
	var nav_focusables = els('a, button', gnb);
	var nav_focusables_first = nav_focusables[0];
	var nav_focusables_last = nav_focusables[nav_focusables.length - 1];

	var escCloseMenu = function(e) {
		if (e.keyCode === 27) {
			hidePannel(gnb, 400);
		}
	};

	var navFirstFocus = function(e) {
		if (!e.shiftKey && e.keyCode === 9) {
			setTimeout(function() {
				nav_focusables_first.focus();
			}, 10);
		}
	};

	var navLastFocus = function(e) {
		if (document.activeElement === e.target && e.shiftKey && e.keyCode === 9) {
			nav_focusables_last.removeEventListener('keydown', navFirstFocus);

			setTimeout(function() {
				nav_focusables_last.focus();
				nav_focusables_last.addEventListener('keydown', navFirstFocus);
			}, 10);
		}
	};
	window.addEventListener('keyup', escCloseMenu);
	nav_focusables_first.addEventListener('keydown', navLastFocus);
	nav_focusables_last.addEventListener('keydown', navFirstFocus);
};

var onEvents = function() {
	hamburger.addEventListener('click', function() {
		showPannel(gnb, 100);
		var gnbLinks = els('.gnb__link', gnb);
		gnbLinks[0].focus();
	}, false);

	gnbCloseBtn.addEventListener('click', function() {
		hidePannel(gnb, 400);
	}, false);

	items.forEach(onDetailPanel);

	a11yOffCanvasMenu();
};

var init = function() {
	onElSettion();
	onDiscSettion();
	onEvents();
};

init();







