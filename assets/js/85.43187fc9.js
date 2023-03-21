(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{385:function(t,a,e){"use strict";e.r(a);var v=e(10),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"대칭키-공개키"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대칭키-공개키"}},[t._v("#")]),t._v(" 대칭키 & 공개키")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"대칭키-symmetric-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대칭키-symmetric-key"}},[t._v("#")]),t._v(" 대칭키(Symmetric Key)")]),t._v(" "),a("blockquote",[a("p",[t._v("암호화와 복호화에 같은 암호키(대칭키)를 사용하는 알고리즘")])]),t._v(" "),a("p",[t._v("동일한 키를 주고받기 때문에, 매우 빠르다는 장점이 있음")]),t._v(" "),a("p",[t._v("but, 대칭키 전달과정에서 해킹 위험에 노출")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"공개키-public-key-비대칭키-asymmetric-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공개키-public-key-비대칭키-asymmetric-key"}},[t._v("#")]),t._v(" 공개키(Public Key)/비대칭키(Asymmetric Key)")]),t._v(" "),a("blockquote",[a("p",[t._v("암호화와 복호화에 사용하는 암호키를 분리한 알고리즘")])]),t._v(" "),a("p",[t._v("대칭키의 키 분배 문제를 해결하기 위해 고안됨.(대칭키일 때는 송수신자 간만 키를 알아야하기 때문에 분배가 복잡하고 어렵지만 공개키와 비밀키로 분리할 경우, 남들이 알아도 되는 공개키만 공개하면 되므로)")]),t._v(" "),a("p",[t._v("자신이 가지고 있는 고유한 암호키(비밀키)로만 복호화할 수 있는 암호키(공개키)를 대중에 공개함")]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"공개키-암호화-방식-진행-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공개키-암호화-방식-진행-과정"}},[t._v("#")]),t._v(" 공개키 암호화 방식 진행 과정")]),t._v(" "),a("ol",[a("li",[t._v("A가 웹 상에 공개된 'B의 공개키'를 이용해 평문을 암호화하여 B에게 보냄")]),t._v(" "),a("li",[t._v("B는 자신의 비밀키로 복호화한 평문을 확인, A의 공개키로 응답을 암호화하여 A에개 보냄")]),t._v(" "),a("li",[t._v("A는 자신의 비밀키로 암호화된 응답문을 복호화함")])]),t._v(" "),a("p",[t._v("하지만 이 방식은 Confidentiallity만 보장해줄 뿐, Integrity나 Authenticity는 보장해주지 못함")]),t._v(" "),a("p",[t._v("-> 이는 MAC(Message Authentication Code)나 전자 서명(Digital Signature)으로 해결\n(MAC은 공개키 방식이 아니라 대칭키 방식임을 유의! T=MAC(K,M) 형식)")]),t._v(" "),a("p",[t._v("대칭키에 비해 암호화 복호화가 매우 복잡함")]),t._v(" "),a("p",[t._v("(암호화하는 키가 복호화하는 키가 서로 다르기 때문)")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"대칭키와-공개키-암호화-방식을-적절히-혼합해보면-하이브리드-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대칭키와-공개키-암호화-방식을-적절히-혼합해보면-하이브리드-방식"}},[t._v("#")]),t._v(" 대칭키와 공개키 암호화 방식을 적절히 혼합해보면? (하이브리드 방식)")]),t._v(" "),a("blockquote",[a("p",[t._v("SSL 탄생의 시초가 됨")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. A가 B의 공개키로 암호화 통신에 사용할 대칭키를 암호화하고 B에게 보냄\n2. B는 암호문을 받고, 자신의 비밀키로 복호화함\n3. B는 A로부터 얻은 대칭키로 A에게 보낼 평문을 암호화하여 A에게 보냄\n4. A는 자신의 대칭키로 암호문을 복호화함\n5. 앞으로 이 대칭키로 암호화를 통신함\n")])])]),a("p",[t._v("즉, 대칭키를 주고받을 때만 공개키 암호화 방식을 사용하고 이후에는 계속 대칭키 암호화 방식으로 통신하는 것!")]),t._v(" "),a("BR")],1)}),[],!1,null,null,null);a.default=r.exports}}]);