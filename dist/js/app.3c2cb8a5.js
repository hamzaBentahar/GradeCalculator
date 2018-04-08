webpackJsonp([1],{"/cDb":function(e,t){},0:function(e,t,i){e.exports=i("NHnr")},JD12:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("/5sW"),a=(i("XtiL"),i("WpTh"),i("tqSY"),i("EuXz"),i("U6qc"),{name:"modal"}),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal is-active"},[i("div",{staticClass:"modal-background",on:{click:function(t){e.$emit("close")}}}),e._v(" "),i("div",{staticClass:"modal-content"},[e._t("default")],2),e._v(" "),i("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(t){e.$emit("close")}}})])},r=[],o=i("XyMi");function u(e){i("/cDb")}var l=!1,d=u,c="data-v-2bde745c",m=null,v=Object(o["a"])(a,n,r,l,d,c,m),p=v.exports,g={name:"course",components:{modal:p},props:{data:{required:!0,type:Object},letterGrades:{type:Array}},data:function(){return{course:null,prediction:null,remaining:null,showModal:!1,userLetterGrades:[]}},computed:{finalGrade:function(){return(parseFloat(this.prediction)*this.remainingWeight()/100+this.average()).toFixed(2)},remainingAssignments:function(){return(100*(this.remaining-this.average())/this.remainingWeight()).toFixed(2)}},mounted:function(){this.course=this.data,this.userLetterGrades=this.course.letterGrades},methods:{average:function(){var e=0;return this.course.assignments.forEach(function(t){""!==t.grade&&""!==t.weight&&(e+=parseFloat(t.grade)*(parseFloat(t.weight)/100))}),e},weightedAverage:function(){var e=this,t=0;return this.course.assignments.forEach(function(i){""!==i.grade&&""!==i.weight&&(t+=parseFloat(i.grade)*(parseFloat(i.weight)/(100-e.remainingWeight())))}),this.course.grade=this.getLetterGrade(t),Event.$emit("new-input",this.course),t.toFixed(2)},remainingWeight:function(){var e=0;for(var t in this.course.assignments){var i=this.course.assignments[t];""!==i.grade&&""!==i.weight&&(e+=parseFloat(i.weight))}return 100-e},add:function(){this.course.assignments.push({name:"",grade:"",weight:""})},remove:function(){this.course.assignments.pop()},save:function(){this.course.letterGrades=this.userLetterGrades,Event.$emit("new-input",this.course)},reset:function(){this.userLetterGrades=this.letterGrades,Event.$emit("new-input",this.course)},closeModal:function(){this.showModal=!1},deleteCourse:function(){confirm("Are you sure that you want to remove the course "+this.course.name+" from the list?")&&Event.$emit("delete-course",this.course.id)},newInput:function(){Event.$emit("new-input",this.course)},getLetterGrade:function(e){var t="";return this.course.letterGrades.forEach(function(i){!i.max&&e>=i.min?t=i.letter:e>=i.min&&e<i.max?t=i.letter:!i.min&&e<i.max&&(t=i.letter)}),t}}},f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tile is-parent"},[i("modal",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],on:{close:e.closeModal}},[i("div",{staticClass:"card"},[i("header",{staticClass:"card-header"},[i("p",{staticClass:"card-header-title"},[e._v("\n                    Change Letter Grades for "+e._s(e.data.name)+"\n                ")])]),e._v(" "),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[i("table",{staticClass:"table is-narrow"},[i("thead",[i("tr",[i("th",[e._v("Letter")]),e._v(" "),i("th",[e._v("Min")]),e._v(" "),i("th",[e._v("Max")])])]),e._v(" "),i("tbody",e._l(e.userLetterGrades,function(t,s){return i("tr",{key:s},[i("td",[e._v(e._s(t.letter))]),e._v(" "),i("td",[t.min?i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.min,expression:"letterGrade.min",modifiers:{number:!0}}],staticClass:"input is-small",attrs:{type:"text"},domProps:{value:t.min},on:{input:function(i){i.target.composing||e.$set(t,"min",e._n(i.target.value))},blur:function(t){e.$forceUpdate()}}}):e._e()]),e._v(" "),i("td",[t.max?i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.max,expression:"letterGrade.max",modifiers:{number:!0}}],staticClass:"input is-small",attrs:{type:"text"},domProps:{value:t.max},on:{input:function(i){i.target.composing||e.$set(t,"max",e._n(i.target.value))},blur:function(t){e.$forceUpdate()}}}):e._e()])])}))])])]),e._v(" "),i("footer",{staticClass:"card-footer"},[i("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:e.save}},[e._v("Save")]),e._v(" "),i("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:e.reset}},[e._v("Reset")])])])]),e._v(" "),i("div",{staticClass:"tile is-child box"},[e.course?i("div",{on:{input:e.newInput}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-8"},[i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Course Name"},domProps:{value:e.data.name},on:{input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.data.credits,expression:"data.credits",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",placeholder:"Credits",min:"0",max:"7",step:"1"},domProps:{value:e.data.credits},on:{input:function(t){t.target.composing||e.$set(e.data,"credits",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])])]),e._v(" "),i("div",{staticClass:"column"},[i("div",{staticClass:"field"},[i("button",{staticClass:"button",on:{click:function(t){e.showModal=!0}}},[e._v("Settings")])])])]),e._v(" "),i("table",{staticClass:"table is-narrow"},[e._m(0),e._v(" "),i("tbody",e._l(e.course.assignments,function(t,s){return i("tr",{key:s},[i("td",[i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"assignment.name"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(i){i.target.composing||e.$set(t,"name",i.target.value)}}})])])]),e._v(" "),i("td",[i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.grade,expression:"assignment.grade"}],staticClass:"input is-small",attrs:{type:"number"},domProps:{value:t.grade},on:{input:function(i){i.target.composing||e.$set(t,"grade",i.target.value)}}})])])]),e._v(" "),i("td",[i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.weight,expression:"assignment.weight",modifiers:{number:!0}}],staticClass:"input is-small",attrs:{type:"number",min:"0"},domProps:{value:t.weight},on:{input:function(i){i.target.composing||e.$set(t,"weight",e._n(i.target.value))},blur:function(t){e.$forceUpdate()}}})])])])])}))]),e._v(" "),i("h6",[e._v("Your average grade : "),i("strong",[e._v(e._s(e.weightedAverage())+" ("+e._s(e.getLetterGrade(e.weightedAverage()))+")")])]),e._v(" "),i("button",{staticClass:"button is-small is-primary",on:{click:e.add}},[e._v("Add Assignment")]),e._v(" "),i("button",{staticClass:"button is-small is-danger",on:{click:e.remove}},[e._v("Remove last row")]),e._v(" "),i("button",{staticClass:"button is-small is-danger",on:{click:e.deleteCourse}},[e._v("Remove this course from the list\n            ")]),e._v(" "),i("hr"),e._v(" "),i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("label",[e._v("What is your desired grade?")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.remaining,expression:"remaining"}],staticClass:"input",attrs:{type:"number",placeholder:"Grade (%)"},domProps:{value:e.remaining},on:{input:function(t){t.target.composing||(e.remaining=t.target.value)}}})])]),e._v(" "),e.remaining?i("p",[e._v("\n                        To end up with a grade of "+e._s(e.remaining)+"% ("+e._s(e.getLetterGrade(e.remaining))+"), you will need\n                        "),i("strong",[e._v(e._s(e.remainingAssignments)+"%")]),e._v(" on the\n                        remaining assignments.\n                    ")]):e._e()]),e._v(" "),i("div",{staticClass:"column"},[i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("label",[e._v("Prediction on the future assignments")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.prediction,expression:"prediction"}],staticClass:"input",attrs:{type:"number",placeholder:"Grade (%)"},domProps:{value:e.prediction},on:{input:function(t){t.target.composing||(e.prediction=t.target.value)}}})])]),e._v(" "),e.prediction?i("p",[e._v("\n                        Your final grade is going to be "),i("strong",[e._v(e._s(e.finalGrade)+" ("+e._s(e.getLetterGrade(e.finalGrade))+")")]),e._v(" if you get "+e._s(e.prediction)+"%\n                        on\n                        the remaining assignments\n                    ")]):e._e()])])]):e._e()])],1)},h=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",[e._v("Assignment")]),e._v(" "),i("th",[e._v("Grade")]),e._v(" "),i("th",[e._v("Weight")])])])}];function _(e){i("c6Aa")}var b=!1,C=_,q="data-v-ecbc372e",x=null,w=Object(o["a"])(g,f,h,b,C,q,x),G=w.exports,A={name:"courses",components:{Course:G},data:function(){return{earnedCredits:null,overallGpa:null,courses:[],letterGrades:[{letter:"A+",min:97,max:null,gpa:4},{letter:"A",min:93,max:97,gpa:4},{letter:"A-",min:90,max:93,gpa:3.7},{letter:"B+",min:87,max:90,gpa:3.3},{letter:"B",min:83,max:87,gpa:3},{letter:"B-",min:80,max:83,gpa:2.7},{letter:"C+",min:77,max:80,gpa:2.3},{letter:"C",min:73,max:77,gpa:2},{letter:"C-",min:70,max:73,gpa:1.7},{letter:"D+",min:67,max:70,gpa:1.3},{letter:"D",min:60,max:67,gpa:1},{letter:"F",min:null,max:60,gpa:0}]}},mounted:function(){var e=this,t=this.$ls.get("courses");null===t?this.$ls.set("courses",this.courses):this.courses=t,Event.$on("delete-course",function(t){e.courses=e.courses.filter(function(e){return e.id!==t})}),Event.$on("new-input",function(i){t=e.courses;var s=t.findIndex(function(e){return e.id===i.id});t[s].assignments=i.assignments,t[s].name=i.name,t[s].repeat=i.repeat,t[s].letterGrades=i.letterGrades,e.$ls.set("courses",t)})},computed:{semesterGpa:function(){var e=this,t=0;return this.courses.forEach(function(i){var s=e.letterGrades.find(function(e){return e.letter===i.grade});s&&(t+=s.gpa*i.credits)}),(t/this.totalCreditsForSemester()).toFixed(2)},totalGpa:function(){return(this.overallGpa*((this.overallTotalCredits()-this.totalCreditsForSemester())/this.overallTotalCredits())+this.semesterGpa*(this.totalCreditsForSemester()/this.overallTotalCredits())).toFixed(2)}},methods:{addCourse:function(){var e=this.courses[this.courses.length-1];e=void 0===e?0:e.id+1;var t={id:e,name:"",credits:null,grade:"",repeat:!1,assignments:[{name:"",grade:"",weight:""},{name:"",grade:"",weight:""},{name:"",grade:"",weight:""},{name:"",grade:"",weight:""},{name:"",grade:"",weight:""}],letterGrades:this.letterGrades};this.courses.push(t)},totalCreditsForSemester:function(){var e=0;return this.courses.forEach(function(t){Number.isInteger(t.credits)&&(e+=t.credits)}),e},overallTotalCredits:function(){return this.totalCreditsForSemester()+this.earnedCredits}},watch:{courses:function(e,t){this.$ls.set("courses",e)}}},$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("div",{staticClass:"columns is-multiline"},[e._l(e.courses,function(t){return i("div",{key:t.id,staticClass:"column is-4-desktop is-12-mobile is-6-tablet"},[i("course",{attrs:{data:t,"letter-grades":e.letterGrades}})],1)}),e._v(" "),i("div",{staticClass:"column is-4-desktop is-12-mobile is-6-tablet"},[i("div",{staticClass:"tile is-parent"},[i("div",{staticClass:"tile is-child box"},[i("button",{staticClass:"button is-large is-primary",on:{click:e.addCourse}},[e._v("ADD COURSE")])])])])],2)]),e._v(" "),i("div",{staticClass:"column is-one-fifth"},[i("article",{staticClass:"tile notification fixed"},[i("div",{staticClass:"content"},[i("p",{staticClass:"subtitle"},[e._v("Compute Your GPA")]),e._v(" "),i("div",{staticClass:"content"},[i("div",[i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("label",{attrs:{for:"credits"}},[e._v("Credits Earned")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.earnedCredits,expression:"earnedCredits",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",placeholder:"Credits Earned",id:"credits",min:"0"},domProps:{value:e.earnedCredits},on:{input:function(t){t.target.composing||(e.earnedCredits=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("label",{attrs:{for:"gpa"}},[e._v("Overall GPA")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.overallGpa,expression:"overallGpa",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",placeholder:"Overall GPA",id:"gpa",min:"0",max:"4"},domProps:{value:e.overallGpa},on:{input:function(t){t.target.composing||(e.overallGpa=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])])]),e._v(" "),i("hr"),e._v(" "),i("p",{staticClass:"subtitle"},[e._v("Results")]),e._v(" "),i("p",[e._v("Number of credits for this semester: "),i("strong",[e._v(e._s(e.totalCreditsForSemester()))])]),e._v(" "),i("p",[e._v("Number of credits after this semester: "),i("strong",[e._v(e._s(e.overallTotalCredits()))])]),e._v(" "),i("p",[e._v("GPA for this semester: "),i("strong",[e._v(e._s(e.semesterGpa))])]),e._v(" "),i("p",[e._v("Overall GPA: "),i("strong",[e._v(e._s(e.totalGpa))])])])])])])])},y=[];function E(e){i("qHHi")}var N=!1,k=E,M="data-v-7b6fec0d",F=null,P=Object(o["a"])(A,$,y,N,k,M,F),L=P.exports,D={name:"app",components:{Courses:L,Modal:p},data:function(){return{showModal:!1}},methods:{closeModal:function(){this.showModal=!1}}},O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-menu"},[i("div",{staticClass:"navbar-end"},[i("button",{staticClass:"button is-primary",on:{click:function(t){e.showModal=!0}}},[e._v("Help")])])])]),e._v(" "),i("div",{staticClass:"container is-fluid"},[i("courses")],1),e._v(" "),i("modal",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],on:{close:e.closeModal}},[i("article",{staticClass:"tile is-vertical box"},[i("p",{staticClass:"title"},[e._v("Help!")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est inventore ipsum reiciendis? Accusantium asperiores at beatae cumque cupiditate dicta eveniet, impedit laudantium maiores modi necessitatibus, quas quasi quis quos repudiandae, sapiente voluptatibus. Ab consequatur consequuntur dignissimos, doloremque doloribus harum illum ipsam ipsum laborum magni maiores minus nobis nulla obcaecati reiciendis repellendus reprehenderit veniam! Assumenda esse ipsa labore laboriosam praesentium quaerat quibusdam recusandae reprehenderit, sunt vitae? Aperiam architecto assumenda consequatur consequuntur debitis deleniti dignissimos dolorem dolorum, esse ex excepturi illo impedit inventore magnam magni minima minus neque nihil numquam odio odit perferendis placeat qui quia reiciendis rerum sapiente similique! Ad asperiores itaque libero minus rem? Ab beatae consectetur consequuntur, earum iste placeat vitae. Ad aliquid amet aperiam, aspernatur assumenda at aut blanditiis corporis debitis deserunt doloremque dolores, doloribus eos est explicabo impedit iste itaque minima necessitatibus perspiciatis qui quos, sint sunt suscipit velit. Debitis, obcaecati, placeat? Deserunt dolorem ducimus fugiat possimus qui quibusdam, quidem rem sunt ut voluptate! Ab, adipisci aliquam aliquid cum excepturi exercitationem fugit id illum ipsa laboriosam laborum officia sint temporibus tenetur voluptate. Commodi deserunt, eligendi facere fugit hic impedit laboriosam, provident quae quia quis reiciendis sed tempora? Accusantium aspernatur consequatur eaque eveniet harum nisi officia sed sit veniam! Alias beatae blanditiis consequuntur debitis deleniti dolore dolorum error est fuga illo laudantium magni, modi molestiae, non nostrum ullam veritatis. Beatae blanditiis deserunt dicta, expedita iste iusto minima nam, natus porro possimus praesentium quaerat quos temporibus, velit voluptatibus! Amet assumenda doloribus fugiat ipsam maxime minima nemo nisi quae quos vitae. Animi aperiam asperiores aspernatur consequatur consequuntur deserunt, dolor dolores expedita, illo maiores necessitatibus nemo nobis nulla odit omnis quasi quia quo quos repellendus rerum soluta ullam vitae? Deleniti dolore id illo illum quis quo quod ullam! Adipisci atque beatae natus porro provident. Aliquid, eos illo impedit mollitia, placeat quae quam quas, quod soluta totam vitae voluptatibus. Ab beatae dolore ducimus, eius eum libero nobis nulla sed similique velit. Adipisci culpa, ex illum magnam officiis saepe unde! Amet beatae cumque cupiditate dicta dolorum laborum molestias nesciunt omnis quam voluptates. Accusamus adipisci aliquid assumenda ducimus eius eos esse id illo in inventore ipsum iste, maxime molestiae molestias odit officia pariatur quia rem, saepe sequi sit, totam voluptate. Earum inventore minus natus rem saepe sapiente sit sunt! Alias assumenda atque beatae commodi corporis doloremque, ea ex excepturi impedit ipsa labore, maiores mollitia nesciunt nihil quae qui, quia sint soluta ut voluptate?")])])])],1)},S=[];function H(e){i("kVB5")}var T=!1,U=H,W=null,j=null,B=Object(o["a"])(D,O,S,T,U,W,j),R=B.exports,I=i("yXtV"),X=i.n(I);i("JD12"),s["a"].use(X.a),s["a"].config.productionTip=!1,Event=new s["a"],new s["a"]({render:function(e){return e(R)}}).$mount("#app")},c6Aa:function(e,t){},kVB5:function(e,t){},qHHi:function(e,t){}},[0]);
//# sourceMappingURL=app.3c2cb8a5.js.map