(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{321:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"c-동적할당"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-동적할당"}},[t._v("#")]),t._v(" [C] 동적할당")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("프로그램 실행 중에 동적으로 메모리를 할당하는 것")]),t._v(" "),s("p",[t._v("Heap 영역에 할당한다")])]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("<stdlib.h>")]),t._v(" 헤더 파일을 include 해야한다.")])]),t._v(" "),s("li",[s("h3",{attrs:{id:"함수-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수-function"}},[t._v("#")]),t._v(" 함수(Function)")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"메모리-할당-함수-malloc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메모리-할당-함수-malloc"}},[t._v("#")]),t._v(" 메모리 할당 함수 : malloc")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("void* malloc(size_t size)")])])]),t._v(" "),s("li",[s("p",[t._v("메모리 할당은 size_t 크기만큼 할당해준다.")])])])])])])]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"메모리-할당-및-초기화-calloc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메모리-할당-및-초기화-calloc"}},[t._v("#")]),t._v(" 메모리 할당 및 초기화 : calloc")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("void* calloc(size_t nelem, sizeo_t elsize)")])])]),t._v(" "),s("li",[s("p",[t._v("첫번째 인자는 배열요소 개수, 두번째 인자는 각 배열요소 사이즈")])]),t._v(" "),s("li",[s("p",[t._v("할당된 메모리를 0으로 초기화")])])])])]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"메모리-추가-할당-realloc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메모리-추가-할당-realloc"}},[t._v("#")]),t._v(" 메모리 추가 할당 : realloc")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("void* realloc(void *ptr, size_t size)")])])]),t._v(" "),s("li",[s("p",[t._v("이미 할당받은 메모리에 추가로 메모리 할당 (이전 메모리 주소 없어짐)")])])])])]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"메모리-해제-함수-free"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메모리-해제-함수-free"}},[t._v("#")]),t._v(" 메모리 해제 함수 : free")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("void free(void* ptr)")])])]),t._v(" "),s("li",[s("p",[t._v("할당된 메모리 해제")])])])])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"중요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#중요"}},[t._v("#")]),t._v(" 중요")]),t._v(" "),s("p",[t._v("할당한 메모리는 반드시 해제하자 (해제안하면 메모리 릭, 누수 발생)")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdlib.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pArr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 동적할당 : int 타입의 사이즈 * 4만큼 메모리를 할당")]),t._v("\n    pArr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pArr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 할당할수 없는 경우")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"malloc error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pArr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d \\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pArr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 할당 메모리 해제")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pArr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("동적할당 부분")]),t._v(" : "),s("code",[t._v("pArr = (int*)malloc(sizeof(int)*4);")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("(int*)")]),t._v(" : malloc의 반환형이 void*이므로 형변환")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("sizeof(int)")]),t._v(" : sizeof는 괄호 안 자료형 타입을 바이트로 연산해줌")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("*4")]),t._v(" : 4를 곱한 이유는, arr[4]가 가진 동일한 크기의 메모리를 할당하기 위해")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("free[pArr]")]),t._v(" : 다 사용하면 꼭 메모리 해제")])])])])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"참고-자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blockdmask.tistory.com/290",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);