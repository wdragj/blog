(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{445:function(a,t,r){"use strict";r.r(t);var s=r(10),v=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"csr-ssr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csr-ssr"}},[a._v("#")]),a._v(" CSR & SSR")]),a._v(" "),t("hr"),a._v(" "),t("br"),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CSR : Client Side Rendering\n\nSSR : Server Side Rendering\n")])])]),t("br"),a._v(" "),t("p",[a._v("CSR에는 모바일 시대에 들어서 SPA가 등장했다.")]),a._v(" "),t("h3",{attrs:{id:"spa-single-page-applictaion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spa-single-page-applictaion"}},[a._v("#")]),a._v(" SPA(Single Page Applictaion)")]),a._v(" "),t("blockquote",[t("p",[a._v("최초 한 번 페이지 전체를 로딩한 뒤, 데이터만 변경하여 사용할 수 있는 애플리케이션")])]),a._v(" "),t("p",[a._v("SPA는 기본적으로 페이지 로드가 없고, 모든 페이지가 단순히 Html5 History에 의해 렌더링된다.")]),a._v(" "),t("br"),a._v(" "),t("p",[a._v("기존의 전통적 방법인 SSR 방식에는 성능 문제가 있었다.")]),a._v(" "),t("p",[a._v("요즘 웹에서 제공되는 정보가 워낙 많다. 요청할 때마다 새로고침이 일어나면서 페이지를 로딩할 때마다 서버로부터 리소스를 전달받아 해석하고, 화면에 렌더링하는 방식인 SSR은 데이터가 많을 수록 성능문제가 발생했다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("현재 주소에서 동일한 주소를 가리키는 버튼을 눌렀을 때,\n설정페이지에서 필요한 데이터를 다시 가져올 수 없다.\n")])])]),t("p",[a._v("이는, 인터랙션이 많은 환경에서 비효율적이다. 렌더링을 서버쪽에서 진행하면 그만큼 서버 자원이 많이 사용되기 때문에 불필요한 트래픽이 낭비된다.")]),a._v(" "),t("br"),a._v(" "),t("p",[a._v("CSR 방식은 사용자의 행동에 따라 필요한 부분만 다시 읽어온다. 따라서 서버 측에서 렌더링하여 전체 페이지를 다시 읽어들이는 것보다 빠른 인터렉션을 기대할 수 있다. 서버는 단지 JSON파일만 보내주고, HTML을 그리는 역할은 자바스크립트를 통해 클라이언트 측에서 수행하는 방식이다.")]),a._v(" "),t("br"),a._v(" "),t("p",[a._v("뷰 렌더링을 유저의 브라우저가 담당하고, 먼저 웹앱을 브라우저에게 로드한 다음 필요한 데이터만 전달받아 보여주는 CSR은 트래픽을 감소시키고, 사용자에게 더 나은 경험을 제공할 수 있도록 도와준다.")]),a._v(" "),t("br"),a._v(" "),t("br"),a._v(" "),t("h3",{attrs:{id:"csr-장단점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csr-장단점"}},[a._v("#")]),a._v(" CSR 장단점")]),a._v(" "),t("ul",[t("li",[t("h4",{attrs:{id:"장점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[a._v("#")]),a._v(" 장점")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("트래픽 감소")]),a._v(" "),t("p",[a._v("필요한 데이터만 받는다")])]),a._v(" "),t("li",[t("p",[a._v("사용자 경험")]),a._v(" "),t("p",[a._v("새로고침이 발생하지 않음. 사용자가 네이티브 앱과 같은 경험을 할 수 있음")])])])]),a._v(" "),t("li",[t("h4",{attrs:{id:"단점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[a._v("#")]),a._v(" 단점")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("검색 엔진")]),a._v(" "),t("p",[a._v("크롬에서 리액트로 만든 웹앱 소스를 확인하면 내용이 비어있음. 이처럼 검색엔진 크롤러가 데이터 수집에 어려움이 있을 가능성 존재")]),a._v(" "),t("p",[a._v("구글 검색엔진은 자바스크립트 엔진이 내장되어있지만, 네이버나 다음 등 검색엔진은 크롤링에 어려움이 있어 SSR을 따로 구현해야하는 번거로움 존재")])])])])]),a._v(" "),t("br"),a._v(" "),t("h3",{attrs:{id:"ssr-장단점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssr-장단점"}},[a._v("#")]),a._v(" SSR 장단점")]),a._v(" "),t("ul",[t("li",[t("h4",{attrs:{id:"장점-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장점-2"}},[a._v("#")]),a._v(" 장점")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("검색엔진 최적화")])]),a._v(" "),t("li",[t("p",[a._v("초기로딩 성능개선")]),a._v(" "),t("blockquote",[t("p",[a._v("첫 렌더링된 HTML을 클라이언트에서 전달해주기 때문에 초기로딩속도를 많이 줄여줌")])])])])]),a._v(" "),t("li",[t("h4",{attrs:{id:"단점-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#단점-2"}},[a._v("#")]),a._v(" 단점")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("프로젝트 복잡도")]),a._v(" "),t("blockquote",[t("p",[a._v("라우터 사용하다보면 복잡도가 높아질 수 있음")])])]),a._v(" "),t("li",[t("p",[a._v("성능 악화 가능성")])])])])]),a._v(" "),t("br"),a._v(" "),t("br"),a._v(" "),t("h4",{attrs:{id:"참고-자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[a._v("#")]),a._v(" [참고 자료]")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://velog.io/@zansol/%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C%EB%A0%8C%EB%8D%94%EB%A7%81SSR-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%82%AC%EC%9D%B4%EB%93%9C%EB%A0%8C%EB%8D%94%EB%A7%81CSR",target:"_blank",rel:"noopener noreferrer"}},[a._v("링크"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);