(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{364:function(t,a,r){"use strict";r.r(a);var v=r(10),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"db-트랜잭션-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#db-트랜잭션-transaction"}},[t._v("#")]),t._v(" DB 트랜잭션(Transaction)")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"트렌잭션이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#트렌잭션이란"}},[t._v("#")]),t._v(" 트렌잭션이란?")]),t._v(" "),a("blockquote",[a("p",[t._v("데이터베이스의 상태를 변화시키기 위해 수행하는 작업 단위")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("상태를 변화시킨다는 것 → "),a("strong",[t._v("SQL 질의어를 통해 DB에 접근하는 것")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- SELECT\n- INSERT\n- DELETE\n- UPDATE\n")])])]),a("br"),t._v(" "),a("p",[t._v("작업 단위 → "),a("strong",[t._v("많은 SQL 명령문들을 사람이 정하는 기준에 따라 정하는 것")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('예시) 사용자 A가 사용자 B에게 만원을 송금한다.\n\n* 이때 DB 작업\n- 1. 사용자 A의 계좌에서 만원을 차감한다 : UPDATE 문을 사용해 사용자 A의 잔고를 변경\n- 2. 사용자 B의 계좌에 만원을 추가한다 : UPDATE 문을 사용해 사용자 B의 잔고를 변경\n\n현재 작업 단위 : 출금 UPDATE문 + 입금 UPDATE문\n→ 이를 통틀어 하나의 트랜잭션이라고 한다.\n- 위 두 쿼리문 모두 성공적으로 완료되어야만 "하나의 작업(트랜잭션)"이 완료되는 것이다. `Commit`\n- 작업 단위에 속하는 쿼리 중 하나라도 실패하면 모든 쿼리문을 취소하고 이전 상태로 돌려놓아야한다. `Rollback`\n\n')])])]),a("br"),t._v(" "),a("p",[a("strong",[t._v("즉, 하나의 트랜잭션 설계를 잘 만드는 것이 데이터를 다룰 때 많은 이점을 가져다준다.")])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"트랜잭션-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#트랜잭션-특징"}},[t._v("#")]),t._v(" 트랜잭션 특징")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[t._v("원자성(Atomicity)")]),t._v(" "),a("blockquote",[a("p",[t._v("트랜잭션이 DB에 모두 반영되거나, 혹은 전혀 반영되지 않아야 된다.")])])]),t._v(" "),a("li",[a("p",[t._v("일관성(Consistency)")]),t._v(" "),a("blockquote",[a("p",[t._v("트랜잭션의 작업 처리 결과는 항상 일관성 있어야 한다.")])])]),t._v(" "),a("li",[a("p",[t._v("독립성(Isolation)")]),t._v(" "),a("blockquote",[a("p",[t._v("둘 이상의 트랜잭션이 동시에 병행 실행되고 있을 때, 어떤 트랜잭션도 다른 트랜잭션 연산에 끼어들 수 없다.")])])]),t._v(" "),a("li",[a("p",[t._v("지속성(Durability)")]),t._v(" "),a("blockquote",[a("p",[t._v("트랜잭션이 성공적으로 완료되었으면, 결과는 영구적으로 반영되어야 한다.")])])])]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" Commit")]),t._v(" "),a("p",[t._v("하나의 트랜잭션이 성공적으로 끝났고,  DB가 일관성있는 상태일 때 이를 알려주기 위해 사용하는 연산")]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"rollback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollback"}},[t._v("#")]),t._v(" Rollback")]),t._v(" "),a("p",[t._v("하나의 트랜잭션 처리가 비정상적으로 종료되어 트랜잭션 원자성이 깨진 경우")]),t._v(" "),a("p",[t._v("transaction이 정상적으로 종료되지 않았을 때, last consistent state (예) Transaction의 시작 상태) 로 roll back 할 수 있음.")]),t._v(" "),a("br"),t._v(" "),a("p",[a("em",[t._v("상황이 주어지면 DB 측면에서 어떻게 해결할 수 있을지 대답할 수 있어야 함")])]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"transaction-관리를-위한-dbms의-전략"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-관리를-위한-dbms의-전략"}},[t._v("#")]),t._v(" Transaction 관리를 위한 DBMS의 전략")]),t._v(" "),a("p",[t._v("이해를 위한 2가지 개념 : DBMS의 구조 / Buffer 관리 정책")]),t._v(" "),a("br"),t._v(" "),a("ol",[a("li",[t._v("DBMS의 구조")])]),t._v(" "),a("blockquote",[a("p",[t._v("크게 2가지 : Query Processor (질의 처리기), Storage System (저장 시스템)")]),t._v(" "),a("p",[t._v("입출력 단위 : 고정 길이의 page 단위로 disk에 읽거나 쓴다.")]),t._v(" "),a("p",[t._v("저장 공간 : 비휘발성 저장 장치인 disk에 저장, 일부분을 Main Memory에 저장")])]),t._v(" "),a("img",{attrs:{src:"https://d2.naver.com/content/images/2015/06/helloworld-407507-1.png"}}),t._v(" "),a("br"),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Page Buffer Manager or Buffer Manager")])]),t._v(" "),a("p",[t._v("DBMS의 Storage System에 속하는 모듈 중 하나로, Main Memory에 유지하는 페이지를 관리하는 모듈")]),t._v(" "),a("blockquote",[a("p",[t._v("Buffer 관리 정책에 따라, UNDO 복구와 REDO 복구가 요구되거나 그렇지 않게 되므로, transaction 관리에 매우 중요한 결정을 가져온다.")])]),t._v(" "),a("br"),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("UNDO")])]),t._v(" "),a("p",[t._v("필요한 이유 : 수정된 Page들이 **"),a("u",[t._v("Buffer 교체 알고리즘에 따라서 디스크에 출력")]),t._v("**될 수 있음. Buffer 교체는 "),a("strong",[a("u",[t._v("transaction과는 무관하게 buffer의 상태에 따라서, 결정됨")])]),t._v(". 이로 인해, 정상적으로 종료되지 않은 transaction이 변경한 page들은 원상 복구 되어야 하는데,  이 복구를 undo라고 함.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("2개의 정책 (수정된 페이지를 디스크에 쓰는 시점으로 분류)")]),t._v(" "),a("p",[t._v("steal : 수정된 페이지를 언제든지 디스크에 쓸 수 있는 정책")]),t._v(" "),a("ul",[a("li",[t._v("대부분의 DBMS가 채택하는 Buffer 관리 정책")]),t._v(" "),a("li",[t._v("UNDO logging과 복구를 필요로 함.")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("¬steal : 수정된 페이지들을 EOT (End Of Transaction)까지는 버퍼에 유지하는 정책")]),t._v(" "),a("ul",[a("li",[t._v("UNDO 작업이 필요하지 않지만, 매우 큰 메모리 버퍼가 필요함.")])])])]),t._v(" "),a("br"),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("REDO")])]),t._v(" "),a("p",[t._v("이미 commit한 transaction의 수정을 재반영하는 복구 작업")]),t._v(" "),a("p",[t._v("Buffer 관리 정책에 영향을 받음")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Transaction이 종료되는 시점에 해당 transaction이 수정한 page를 디스크에 쓸 것인가 아닌가로 기준.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("FORCE : 수정했던 모든 페이지를 Transaction commit 시점에 disk에 반영")]),t._v(" "),a("p",[t._v("transaction이 commit 되었을 때 수정된 페이지들이 disk 상에 반영되므로 redo 필요 없음.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("¬FORCE : commit 시점에 반영하지 않는 정책")]),t._v(" "),a("p",[t._v("transaction이 disk 상의 db에 반영되지 않을 수 있기에 redo 복구가 필요. (대부분의 DBMS 정책)")]),t._v(" "),a("br"),t._v(" "),a("br")])]),t._v(" "),a("h4",{attrs:{id:"참고사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고사항"}},[t._v("#")]),t._v(" [참고사항]")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://d2.naver.com/helloworld/407507",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);