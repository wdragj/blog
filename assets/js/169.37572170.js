(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{471:function(t,a,n){"use strict";n.r(a);var s=n(10),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-data-jpa-더티-체킹-dirty-checking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-data-jpa-더티-체킹-dirty-checking"}},[t._v("#")]),t._v(" [Spring Data JPA] 더티 체킹 (Dirty Checking)")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:"https://cdn.inflearn.com/public/courses/324474/course_cover/58c8632c-7a6e-4c76-9893-d7fffa32faf2/kyh_JPA_Spring2%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%206.png"}}),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("트랜잭션 안에서 Entity의 변경이 일어났을 때\n변경한 내용을 자동으로 DB에 반영하는 것\n")])])]),a("br"),t._v(" "),a("p",[t._v("ORM 구현체 개발 시 더티 체킹이라는 말을 자주 볼 수 있다.")]),t._v(" "),a("p",[t._v("더티 체킹이 어떤 것을 뜻하는 지 간단히 살펴보자.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("JPA로 개발하는 경우 구현한 한 가지 기능을 예로 들어보자")]),t._v(" "),a("h5",{attrs:{id:"ex-주문-취소-기능"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-주문-취소-기능"}},[t._v("#")]),t._v(" ex) 주문 취소 기능")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" orderId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//주문 엔티티 조회  ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),t._v(" order "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orderRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orderId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//주문 취소  ")]),t._v("\n    order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("orderId")]),t._v("를 통해 주문을 취소하는 메소드다. 데이터베이스에 반영하기 위해선, "),a("code",[t._v("update")]),t._v("와 같은 쿼리가 있어야할 것 같은데 존재하지 않는다.")]),t._v(" "),a("p",[t._v("하지만, 실제로 이 메소드를 실행하면 데이터베이스에 update가 잘 이루어진다.")]),t._v(" "),a("ul",[a("li",[t._v("트랜잭션 시작")]),t._v(" "),a("li",[a("code",[t._v("orderId")]),t._v("로 주문 Entity 조회")]),t._v(" "),a("li",[t._v("해당 Entity 주문 취소 상태로 "),a("strong",[t._v("Update")])]),t._v(" "),a("li",[t._v("트랜잭션 커밋")])]),t._v(" "),a("p",[t._v("이를 가능하게 하는 것이 바로 '더티 체킹(Dirty Checking)'이라고 보면 된다.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("그냥 더티 체킹의 단어만 간단히 해석하면  "),a("code",[t._v("변경 감지")]),t._v("로 볼 수 있다. 좀 더 자세히 말하면, Entity에서 변경이 일어난 걸 감지한 뒤, 데이터베이스에 반영시켜준다는 의미다. (변경은 최초 조회 상태가 기준이다)")]),t._v(" "),a("blockquote",[a("p",[t._v("Dirty : 상태의 변화가 생김")]),t._v(" "),a("p",[t._v("Checking : 검사")])]),t._v(" "),a("p",[t._v("JPA에서는 트랜잭션이 끝나는 시점에 변화가 있던 모든 엔티티의 객체를 데이터베이스로 알아서 반영을 시켜준다. 즉, 트랜잭션의 마지막 시점에서 다른 점을 발견했을 때 데이터베이스로 update 쿼리를 날려주는 것이다.")]),t._v(" "),a("ul",[a("li",[t._v("JPA에서 Entity를 조회")]),t._v(" "),a("li",[t._v("조회된 상태의 Entity에 대한 스냅샷 생성")]),t._v(" "),a("li",[t._v("트랜잭션 커밋 후 해당 스냅샷과 현재 Entity 상태의 다른 점을 체크")]),t._v(" "),a("li",[t._v("다른 점들을 update 쿼리로 데이터베이스에 전달")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("이때 더티 체킹을 검사하는 대상은 "),a("code",[t._v("영속성 컨텍스트")]),t._v("가 관리하는 Entity로만 대상으로 한다.")]),t._v(" "),a("p",[t._v("준영속, 비영속 Entity는 값을 변경할 지라도 데이터베이스에 반영시키지 않는다.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("기본적으로 더티 체킹을 실행하면, SQL에서는 변경된 엔티티의 모든 내용을 update 쿼리로 만들어 전달하는데, 이때 필드가 많아지면 전체 필드를 update하는게 비효율적일 수도 있다.")]),t._v(" "),a("p",[t._v("이때는 "),a("code",[t._v("@DynamicUpdate")]),t._v("를 해당 Entity에 선언하여 변경 필드만 반영시키도록 만들어줄 수 있다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NoArgsConstructor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DynamicUpdate")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strategy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GenerationType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IDENTITY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://velog.io/@jiny/JPA-%EB%8D%94%ED%8B%B0-%EC%B2%B4%ED%82%B9Dirty-Checking-%EC%9D%B4%EB%9E%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://jojoldu.tistory.com/415",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);