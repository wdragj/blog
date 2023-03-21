(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{417:function(t,a,s){"use strict";s.r(a);var n=s(10),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"스트레티지-패턴-strategy-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스트레티지-패턴-strategy-pattern"}},[t._v("#")]),t._v(" 스트레티지 패턴(Strategy Pattern)")]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("어떤 동작을 하는 로직을 정의하고, 이것들을 하나로 묶어(캡슐화) 관리하는 패턴")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("새로운 로직을 추가하거나 변경할 때, 한번에 효율적으로 변경이 가능하다.")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[ 슈팅 게임을 설계하시오 ]\n유닛 종류 : 전투기, 헬리콥터\n유닛들은 미사일을 발사할 수 있다.\n전투기는 직선 미사일을, 헬리콥터는 유도 미사일을 발사한다.\n필살기로는 폭탄이 있는데, 전투기에는 있고 헬리콥터에는 없다.\n")])])]),a("br"),t._v(" "),a("p",[t._v("Strategy pattern을 적용한 설계는 아래와 같다.")]),t._v(" "),a("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F255CF641559E74AC09EFBB"}}),t._v(" "),a("br"),t._v(" "),a("blockquote",[a("p",[t._v("상속은 무분별한 소스 중복이 일어날 수 있으므로, 컴포지션을 활용한다. (인터페이스와 로직의 클래스와의 관계를 컴포지션하고, 유닛에서 상황에 맞는 로직을 쓰게끔 유도하는 것)")])]),t._v(" "),a("br"),t._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"미사일을-쏘는-것과-폭탄을-사용하는-것을-캡슐화하자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#미사일을-쏘는-것과-폭탄을-사용하는-것을-캡슐화하자"}},[t._v("#")]),t._v(" 미사일을 쏘는 것과 폭탄을 사용하는 것을 캡슐화하자")]),t._v(" "),a("p",[t._v("ShootAction과 BombAction으로 인터페이스를 선언하고, 각자 필요한 로직을 클래스로 만들어 implement한다.")])]),t._v(" "),a("li",[a("h4",{attrs:{id:"전투기와-헬리콥터를-묶을-unit-추상-클래스를-만들자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전투기와-헬리콥터를-묶을-unit-추상-클래스를-만들자"}},[t._v("#")]),t._v(" 전투기와 헬리콥터를 묶을 Unit 추상 클래스를 만들자")]),t._v(" "),a("p",[t._v("Unit에는 공통적으로 사용되는 메서드들이 들어있고, 미사일과 폭탄을 선언하기 위해 variable로 인터페이스들을 선언한다.")])])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("전투기와 헬리콥터는 Unit 클래스를 상속받고, 생성자에 맞는 로직을 정의해주면 끝난다.")]),t._v(" "),a("h4",{attrs:{id:"전투기-예시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전투기-예시"}},[t._v("#")]),t._v(" 전투기 예시")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fighter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShootAction")]),t._v(" shootAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BombAction")]),t._v(" bombAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fighter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        shootAction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OneWayMissle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        bombAction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpreadBomb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[a("code",[t._v("Fighter.doAttack()")]),t._v("을 호출하면, OneWayMissle의 attack()이 호출될 것이다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[t._v("#")]),t._v(" 정리")]),t._v(" "),a("p",[t._v("이처럼 Strategy Pattern을 활용하면 로직을 독립적으로 관리하는 것이 편해진다. 로직에 들어가는 '행동'을 클래스로 선언하고, 인터페이스와 연결하는 방식으로 구성하는 것!")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://flowarc.tistory.com/entry/1-Strategy-Pattern?category=562154",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);