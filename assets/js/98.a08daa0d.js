(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{395:function(t,e,a){"use strict";a.r(e);var s=a(10),v=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"pcb-context-switching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pcb-context-switching"}},[t._v("#")]),t._v(" PCB & Context Switching")]),t._v(" "),e("br"),t._v(" "),e("h4",{attrs:{id:"process-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-management"}},[t._v("#")]),t._v(" Process Management")]),t._v(" "),e("blockquote",[e("p",[t._v("CPU가 프로세스가 여러개일 때, CPU 스케줄링을 통해 관리하는 것을 말함")])]),t._v(" "),e("p",[t._v("이때, CPU는 각 프로세스들이 누군지 알아야 관리가 가능함")]),t._v(" "),e("p",[t._v("프로세스들의 특징을 갖고있는 것이 바로 "),e("code",[t._v("Process Metadata")])]),t._v(" "),e("ul",[e("li",[t._v("Process Metadata\n"),e("ul",[e("li",[t._v("Process ID")]),t._v(" "),e("li",[t._v("Process State")]),t._v(" "),e("li",[t._v("Process Priority")]),t._v(" "),e("li",[t._v("CPU Registers")]),t._v(" "),e("li",[t._v("Owner")]),t._v(" "),e("li",[t._v("CPU Usage")]),t._v(" "),e("li",[t._v("Memeory Usage")])])])]),t._v(" "),e("p",[t._v("이 메타데이터는 프로세스가 생성되면 "),e("code",[t._v("PCB(Process Control Block)")]),t._v("이라는 곳에 저장됨")]),t._v(" "),e("br"),t._v(" "),e("h4",{attrs:{id:"pcb-process-control-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pcb-process-control-block"}},[t._v("#")]),t._v(" PCB(Process Control Block)")]),t._v(" "),e("blockquote",[e("p",[t._v("프로세스 메타데이터들을 저장해 놓는 곳, 한 PCB 안에는 한 프로세스의 정보가 담김")])]),t._v(" "),e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/25673A5058F211C224",width:"400"}}),t._v(" "),e("h5",{attrs:{id:"다시-정리해보면"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#다시-정리해보면"}},[t._v("#")]),t._v(" 다시 정리해보면?")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("프로그램 실행 → 프로세스 생성 → 프로세스 주소 공간에 (코드, 데이터, 스택) 생성 \n→ 이 프로세스의 메타데이터들이 PCB에 저장\n")])])]),e("br"),t._v(" "),e("h5",{attrs:{id:"pcb가-왜-필요한가요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pcb가-왜-필요한가요"}},[t._v("#")]),t._v(" PCB가 왜 필요한가요?")]),t._v(" "),e("blockquote",[e("p",[t._v("CPU에서는 프로세스의 상태에 따라 교체작업이 이루어진다. (interrupt가 발생해서 할당받은 프로세스가 wating 상태가 되고 다른 프로세스를 running으로 바꿔 올릴 때)")]),t._v(" "),e("p",[t._v("이때, "),e("strong",[t._v("앞으로 다시 수행할 대기 중인 프로세스에 관한 저장 값을 PCB에 저장해두는 것")]),t._v("이다.")])]),t._v(" "),e("h5",{attrs:{id:"pcb는-어떻게-관리되나요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pcb는-어떻게-관리되나요"}},[t._v("#")]),t._v(" PCB는 어떻게 관리되나요?")]),t._v(" "),e("blockquote",[e("p",[t._v("Linked List 방식으로 관리함")]),t._v(" "),e("p",[t._v("PCB List Head에 PCB들이 생성될 때마다 붙게 된다. 주소값으로 연결이 이루어져 있는 연결리스트이기 때문에 삽입 삭제가 용이함.")]),t._v(" "),e("p",[t._v("즉, 프로세스가 생성되면 해당 PCB가 생성되고 프로세스 완료시 제거됨")])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("p",[t._v("이렇게 수행 중인 프로세스를 변경할 때, CPU의 레지스터 정보가 변경되는 것을 "),e("code",[t._v("Context Switching")]),t._v("이라고 한다.")]),t._v(" "),e("h4",{attrs:{id:"context-switching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context-switching"}},[t._v("#")]),t._v(" Context Switching")]),t._v(" "),e("blockquote",[e("p",[t._v("CPU가 이전의 프로세스 상태를 PCB에 보관하고, 또 다른 프로세스의 정보를 PCB에 읽어 레지스터에 적재하는 과정")])]),t._v(" "),e("p",[t._v("보통 인터럽트가 발생하거나, 실행 중인 CPU 사용 허가시간을 모두 소모하거나, 입출랙을 위해 대기해야 하는 경우에 Context Switching이 발생")]),t._v(" "),e("p",[e("code",[t._v("즉, 프로세스가 Ready → Running, Running → Ready, Running → Waiting처럼 상태 변경 시 발생!")])]),t._v(" "),e("br"),t._v(" "),e("h5",{attrs:{id:"context-switching의-overhead란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context-switching의-overhead란"}},[t._v("#")]),t._v(" Context Switching의 OverHead란?")]),t._v(" "),e("p",[t._v("overhead는 과부하라는 뜻으로 보통 안좋은 말로 많이 쓰인다.")]),t._v(" "),e("p",[t._v("하지만 프로세스 작업 중에는 OverHead를 감수해야 하는 상황이 있다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("프로세스를 수행하다가 입출력 이벤트가 발생해서 대기 상태로 전환시킴\n이때, CPU를 그냥 놀게 놔두는 것보다 다른 프로세스를 수행시키는 것이 효율적\n")])])]),e("p",[t._v("즉, CPU에 계속 프로세스를 수행시키도록 하기 위해서 다른 프로세스를 실행시키고 Context Switching 하는 것")]),t._v(" "),e("p",[t._v("CPU가 놀지 않도록 만들고, 사용자에게 빠르게 일처리를 제공해주기 위한 것이다.")])])}),[],!1,null,null,null);e.default=v.exports}}]);