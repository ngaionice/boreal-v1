(this.webpackJsonpboreal=this.webpackJsonpboreal||[]).push([[0],{175:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(47),c=n.n(a),i=n(4),o=n(55),s=n(7),l=n(20),u=n(226),j=n(227),d=n(235),b=n(228),O=n(249),h=n(237),f=n(16),p=n(28),x=n.n(p),m=n(236),v=n(121),g=n(49),C=n(107),y=n(50),S=function(){var e=360;return{flex:{flex:1},paginator:{justifyContent:"center",padding:"4px"},drawerWidth:e,drawer:{width:{md:e},flexShrink:{md:0}},appBar:{width:{md:"calc(100% - ".concat(e,"px)")},ml:{md:"".concat(e,"px")}},menuButton:{marginRight:2,display:{md:"none"}},tabs:{height:"48px"},drawerPaper:{width:e},content:{flexGrow:1,padding:3},contentWrapper:{flexGrow:1,paddingLeft:3,paddingRight:3,paddingTop:5,paddingBottom:5,marginLeft:"".concat(e,"px")},contentMobileWrapper:{flexGrow:1,paddingLeft:3,paddingRight:3,paddingTop:5,paddingBottom:5},loader:{padding:3},gridItem:{height:"100%"}}},J=n(85),E=n.n(J),k=n(109),P=n(72),w=n.n(P),I=n(218),M=n(230),R=n(241),T=n(242),A=n(243),F=n(231),N=n(240),L=n(244),W=n(246),D=n(110),H=n.n(D),B=n(30),G=n(238),U=n(1),_=function(){var e=S();return Object(U.jsx)(h.a,{display:"flex",justifyContent:"center",alignItems:"center",sx:e.loader,children:Object(U.jsx)(G.a,{})})},q=function(e){var t=e.fetchedDataControl,n=e.onCourseSelection,a=e.onButtonClick,c=Object(r.useState)(""),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(r.useRef)(0),j=Object(s.a)(t,2),d=j[0],b=j[1],O=Object(r.useState)(!1),h=Object(s.a)(O,2),f=h[0],p=h[1],x=Object(r.useRef)(new Date),m=Object(r.useState)(1),v=Object(s.a)(m,2),g=v[0],C=v[1],y=Object(r.useState)(Math.ceil(Object.keys(d).length/10)),S=Object(s.a)(y,2),J=S[0],P=S[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(k.a)(E.a.mark((function e(t){var n,r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://ionice.herokuapp.com/https://timetable.iit.artsci.utoronto.ca/api/20219/courses?code=".concat(o),x.current=new Date,e.next=4,w.a.get(n,{headers:{}});case 4:r=e.sent,a=r.data,u.current===t&&(Object.keys(a).forEach((function(e){a[e].updated=x.current})),b(a),P(Math.ceil(Object.keys(a).length/10)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){u.current+=1,p(!0),C(1),e(u.current).then((function(){return p(!1)}))};if(!o||d){var n=setTimeout((function(){o&&t()}),500);return function(){clearTimeout(n)}}t()}),[o]),Object(U.jsxs)(I.a,{flex:1,spacing:1,children:[Object(U.jsx)(Q,{searchTermControl:[o,l],onButtonClick:a}),Object(U.jsx)(V,{loading:f,data:d,onCourseClick:function(){n()},pageControl:[g,C],noOfPages:J,itemsPerPage:10})]})},Q=function(e){var t=e.searchTermControl,n=e.onButtonClick,r=Object(s.a)(t,2),a=r[0],c=r[1];return Object(U.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(U.jsxs)(I.a,{spacing:1,children:[Object(U.jsx)(M.a,{id:"code-input",label:"Course Code",variant:"filled",placeholder:"Quick search",value:a,onChange:function(e){return c(e.target.value.toUpperCase())},fullWidth:!0,size:"small",flex:1}),Object(U.jsx)(R.a,{variant:"caption",children:"Quick search shows courses for the current year. For more options, use advanced search."}),Object(U.jsx)(T.a,{variant:"outlined",color:"inherit",startIcon:Object(U.jsx)(H.a,{}),component:B.b,to:"/search",onClick:n,children:"Advanced Search"})]})})},V=function(e){var t=e.loading,n=e.data,r=e.onCourseClick,a=e.pageControl,c=e.itemsPerPage,i=e.noOfPages;if(t)return Object(U.jsx)(_,{});if(null===n||x.a.isEmpty(n))return Object(U.jsxs)(I.a,{spacing:1,justifyContent:"center",alignItems:"center",children:[Object(U.jsx)(A.a,{flexItem:!0}),Object(U.jsx)(R.a,{variant:"body2",children:"Start searching to see courses here!"})]});var o=S(),l=Object(s.a)(a,2),u=l[0],j=l[1];return Object(U.jsxs)(I.a,{spacing:1,children:[Object(U.jsx)(A.a,{}),Object(U.jsx)(F.a,{count:i,page:u,onChange:function(e,t){j(t)},defaultPage:1,siblingCount:0,boundaryCount:1,color:"primary",sx:{ul:o.paginator}}),Object(U.jsx)(A.a,{}),Object(U.jsx)(N.a,{dense:!0,children:Object.keys(n).slice((u-1)*c,u*c).map((function(e){var t=n[e],a=t.courseTitle,c=t.code,i=t.section,o=t.session;return Object(U.jsx)(L.a,{button:!0,onClick:function(){return r(t)},component:B.b,to:"/course/".concat(o,"/").concat(i.toLowerCase(),"/").concat(c.toLowerCase()),children:Object(U.jsx)(W.a,{primary:a,secondary:"".concat(c).concat(i)})},e)}))})]})},Y=n(224),z=n(247),K=n(248),X=n(234),Z=n(112),$=n.n(Z),ee=n(75),te=n.n(ee),ne=n(113),re=n.n(ne),ae=function(e){var t=e.label,n=e.icon,r=e.right,a=void 0===r?null:r,c=e.to,i=void 0===c?null:c,o=e.onClick,s=void 0===o?null:o;return Object(U.jsx)(L.a,{children:Object(U.jsxs)(Y.a,{component:B.b,to:i,onClick:s,children:[Object(U.jsx)(z.a,{children:n}),Object(U.jsx)(W.a,{primary:t}),a]})})},ce=function(e){var t=e.children,n=e.mobileClose;return Object(U.jsxs)(N.a,{dense:!0,children:[Object(U.jsx)(K.a,{id:"site-functions",children:"Site functions"}),Object(U.jsx)(ae,{label:"Favourites",icon:Object(U.jsx)(te.a,{}),to:"/favorites",onClick:n}),Object(U.jsx)(ae,{label:"Timetable",icon:Object(U.jsx)($.a,{}),to:"/timetable",onClick:n}),Object(U.jsx)(ae,{label:"Settings",icon:Object(U.jsx)(re.a,{}),to:"/settings",onClick:n}),Object(U.jsx)(K.a,{id:"search",children:"Search"}),Object(U.jsx)(L.a,{children:t})]})},ie=function(e){var t=e.children,n=e.navControl,r=e.mobile,a=Object(s.a)(n,2),c=a[0],i=a[1],o=S(),l=function(e){return{mobileSx:{display:{xs:"block",md:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:e}},permanentSx:{display:{xs:"none",md:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:e}}}}(o.drawerWidth),u=l.mobileSx,j=l.permanentSx,d=function(){i(!c)};return Object(U.jsx)(h.a,{sx:o.drawer,"aria-label":"search",children:Object(U.jsxs)(X.a,{variant:r?"temporary":"permanent",open:!r||c,onClose:r?d:null,ModalProps:{keepMounted:!0},sx:r?u:j,children:[Object(U.jsx)(O.a,{}),Object(U.jsx)(A.a,{}),Object(U.jsx)(ce,{children:t,mobileClose:r?d:null})]})})},oe=n(225),se=n(229),le=n(250),ue=n(251),je=n(114),de=n.n(je),be=n(115),Oe=n.n(be),he=n(116),fe=n.n(he),pe=n(118),xe=n.n(pe),me=(n(117),function(e){var t=e.children,n=Object(oe.a)({disableHysteresis:!0,threshold:0});return Object(r.cloneElement)(t,{elevation:n?4:0})}),ve=function(e){var t=e.title,n=e.navControl,a=e.themeControl,c=e.favoriteControl,i=e.mobile,o=Object(s.a)(a,2),l=o[0],u=o[1],j=Object(s.a)(n,2),d=j[0],b=j[1],h=Object(s.a)(c,2),f=h[0],p=h[1],x=Object(r.useState)(f),m=Object(s.a)(x,2),v=m[0],g=m[1];Object(r.useEffect)((function(){g(f)}),[t,f]);var C=function(){b(!d)},y=function(){p(v?"remove":"add")},J=S(),E=function(){return Object(U.jsx)(se.a,{title:"Toggle theme",children:Object(U.jsx)(le.a,{color:"inherit","aria-label":"toggle theme",onClick:function(){return u(!l)},children:l?Object(U.jsx)(de.a,{}):Object(U.jsx)(Oe.a,{})})})},k=function(){return t?Object(U.jsx)(se.a,{title:"".concat(v?"Remove from":"Add to"," favorites"),children:Object(U.jsx)(le.a,{color:"inherit",onClick:y,children:v?Object(U.jsx)(te.a,{}):Object(U.jsx)(fe.a,{})})}):null},P=function(){return i?Object(U.jsx)(le.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:C,sx:J.menuButton,children:Object(U.jsx)(xe.a,{})}):null},w=function(){return Object(U.jsx)(R.a,{variant:"h6",sx:J.flex,children:t})};return Object(U.jsx)(me,{children:Object(U.jsx)(ue.a,{position:"fixed",sx:J.appBar,children:Object(U.jsxs)(O.a,{children:[Object(U.jsx)(P,{}),Object(U.jsx)(w,{}),Object(U.jsx)(k,{}),Object(U.jsx)(E,{})]})})})},ge=n(255),Ce=function(e){var t=e.subheader;return Object(U.jsx)(R.a,{variant:"h5",paragraph:!0,children:t})},ye=function(e){var t=e.title,n=e.retrievedOn;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(R.a,{variant:"h4",children:t}),Object(U.jsx)(R.a,{variant:"body2",children:"Retrieved on ".concat(n)})]})},Se=function(e){var t=e.description;return t?Object(U.jsx)(R.a,{variant:"body1",dangerouslySetInnerHTML:{__html:t}}):null},Je=function(e){var t=e.prerequisite;return t?Object(U.jsx)(R.a,{variant:"body1",children:"Pre-requisites: ".concat(t)}):null},Ee=function(e){var t=e.corequisite;return t?Object(U.jsx)(R.a,{variant:"body1",children:"Co-requisites: ".concat(t)}):null},ke=function(e){var t=e.exclusion;return t?Object(U.jsx)(R.a,{variant:"body1",children:"Exclusions: ".concat(t)}):null},Pe=function(e){var t=e.recommendedPreparation;return t?Object(U.jsx)(R.a,{variant:"body1",children:"Recommended preparation: ".concat(t)}):null},we=function(e){var t=e.breadthCategories;return t?Object(U.jsx)(R.a,{variant:"body1",children:"Breadth categories: ".concat(t)}):null},Ie=function(e){var t=e.distributionCategories;return t?Object(U.jsx)(R.a,{variant:"body1",children:"Distribution categories: ".concat(t)}):null},Me=function(e){var t=e.webTimetableInstructions;return t?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(R.a,{variant:"body1",children:"Timetable instructions:"}),Object(U.jsx)(R.a,{variant:"body1",dangerouslySetInnerHTML:{__html:t}})]}):null},Re=function(e){var t=e.deliveryInstructions;return t?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(R.a,{variant:"body1",children:"Delivery instructions:"}),Object(U.jsx)(R.a,{variant:"body1",dangerouslySetInnerHTML:{__html:t}})]}):null},Te=function(e){var t=e.prerequisite,n=e.corequisite,r=e.exclusion,a=e.recommendedPreparation;return t||n||r||a?Object(U.jsxs)(I.a,{spacing:1,children:[Object(U.jsx)(Ce,{subheader:"Enrollment limitations"}),Object(U.jsx)(Je,{prerequisite:t}),Object(U.jsx)(Ee,{corequisite:n}),Object(U.jsx)(ke,{exclusion:r}),Object(U.jsx)(Pe,{recommendedPreparation:a})]}):null},Ae=function(e){var t=e.breadthCategories,n=e.distributionCategories;return t||n?Object(U.jsxs)(I.a,{spacing:1,children:[Object(U.jsx)(Ce,{subheader:"Breadth classifications"}),Object(U.jsx)(we,{breadthCategories:t}),Object(U.jsx)(Ie,{distributionCategories:n})]}):null},Fe=function(e){var t=e.webTimetableInstructions,n=e.deliveryInstructions;return t||n?Object(U.jsxs)(I.a,{spacing:1,children:[Object(U.jsx)(Ce,{subheader:"Additional instructions"}),Object(U.jsx)(Me,{webTimetableInstructions:t}),Object(U.jsx)(Re,{deliveryInstructions:n})]}):null},Ne=n(252),Le=n(253),We=n(254),De=n(119),He=n.n(De),Be=function(e){if(x.a.isEmpty(e))return"TBA";var t="";return Object.entries(e).forEach((function(e){var n=Object(s.a)(e,2)[1],r=n.lastName,a=n.firstName;t+=a+". "+r+", "})),t.substring(0,t.length-2)},Ge=function(e,t){var n=e.meetingDay,r=e.meetingStartTime,a=e.meetingEndTime,c=e.assignedRoom1,i=e.assignedRoom2,o=function(e,t){switch(e){case"MO":return t?"Mon":"M";case"TU":return t?"Tue":"T";case"WE":return t?"Wed":"W";case"TH":return t?"Thu":"R";case"FR":return t?"Fri":"F";default:return null}}(n,t),s=t?r+" \u2013 "+a:r.replace(":","")+"\u2013"+a.replace(":","");if(!t)return o+" "+s;var l=function(e,t){return e||t?e&&t?e===t?e:e+"/"+t:e||t:"TBA"}(c,i);return o+" "+s+" "+(t?"at ":"")+l},Ue=function(e,t,n,r,a){var c=Number(e)-Number(t);return a?c>0?"Remaining capacity: ".concat(c+" out of "+e):r?"Waitlist: ".concat(n," (capacity: ").concat(e,")"):"Full, no waitlisting. (capacity: ".concat(e,")"):c>0?"Available: "+c:r?"Waitlist: "+n:"Full, no waitlisting"},_e=function(e,t){switch(e){case"CLASS":return"In person";case"ONLSYNC":return t?"Online \u2014 Synchronous":"Online Sync";case"ONLASYNC":return t?"Online \u2014 Asynchronous":"Online Async";default:return null}},qe=function(e){switch(e){case"P":return"Priority: Some students are given priority access until a specific date.";case"E":return"Enrol at Department: Students must contact the sponsoring Department to enrol.";case"AE":return"Department Approval Required: Students must request enrolment on ACORN and await Departmental review of their request.";case"PE":return"Priority, then Enrol at Department: Some students are given priority access until a specific date, after which time another group of students is also able to enrol by contacting the sponsoring Department.";case"R1":return"Restricted: Course/section is restricted at all times for specific students.";case"R2":return"Restricted: Course/section is restricted to a group of students until a specific date, after which time another group of students is also able to enrol.";default:return""}},Qe=function(e){if(!e)return null;var t=e.toString().split(" ");return"".concat(t[1]," ").concat(t[2]," ").concat(t[3]," ").concat(t[4]," ").concat(t[6]," ").concat(t[7]," ").concat(t[8])},Ve=function(e){var t=e.meeting,n=e.onClick,r=t.schedule,a=t.instructors,c=t.teachingMethod,i=t.sectionNumber,o=t.enrollmentCapacity,j=t.actualEnrolment,d=t.actualWaitlist,b=t.waitlist,O=t.deliveryMode,h=t.enrollmentIndicator,f=t.enrollmentControls,p=t.cancel,x=function(){var e=Object(l.a)(),t=Object(u.a)(e.breakpoints.down("sm"))?"caption":"body2";if(p)return Object(U.jsx)(R.a,{variant:t,children:"Cancelled"});var n=!1;return Object(U.jsxs)(I.a,{spacing:1,direction:"row",divider:Object(U.jsx)(A.a,{orientation:"vertical",flexItem:!0}),children:[Object(U.jsx)(R.a,{variant:t,children:Ue(o,j,d,b,n)}),Object(U.jsx)(R.a,{variant:t,children:_e(O,n)}),function(n){return Object(u.a)(e.breakpoints.down("sm"))?null:Object(U.jsx)(R.a,{variant:t,display:{xs:"none",sm:"block"},children:Be(n)})}(a),Object.entries(r).map((function(e){var r=Object(s.a)(e,2),a=r[0],c=r[1];return"-"===a?null:Object(U.jsx)(R.a,{variant:t,children:Ge(c,n)},a)})),function(n){return Object(u.a)(e.breakpoints.down("sm"))||!n?null:Object(U.jsx)(R.a,{variant:t,children:n})}(h)]})},m="".concat(c+i);return Object(U.jsx)(L.a,{disableGutters:!0,children:Object(U.jsx)(Y.a,{onClick:function(){var e=!0;n({section:m,instructors:Be(a),meetings:Object.entries(r).filter((function(e){return"-"!==Object(s.a)(e,1)[0]})).map((function(t){var n=Object(s.a)(t,2)[1];return Ge(n,e)})),delivery:_e(O,e),priority:qe(h),capacity:Ue(o,j,d,b,e),priorityGroups:f.map((function(e){return function(e){var t=e.postCode,n=e.postName,r=e.restrictedGroup,a=r?"Group ".concat(r," \u2014 "):"";if(t&&n)return a+t+" "+n;var c=e.yearOfStudy,i=e.primaryOrgName,o=e.secondaryOrgName,s=e.assocOrgName,l=e.adminOrgName||o||"";return a+(i?i+": ":"")+(c&&"*"!==c?"Year ".concat(c," "):"")+(l||s||"")}(e)}))})},children:Object(U.jsxs)(I.a,{children:[Object(U.jsx)(W.a,{primary:m}),Object(U.jsx)(x,{})]})})})},Ye=function(e){var t=e.data,n=e.onListEntryClick;return Object(U.jsx)(N.a,{dense:!0,children:Object.entries(t).map((function(e){var t=Object(s.a)(e,2),r=t[0],a=t[1];return Object(U.jsx)(Ve,{meeting:a,onClick:n},r)}))})},ze=function(e){var t=e.data,n=t.instructors,a=t.meetings,c=t.delivery,i=t.priority,o=t.capacity,l=t.priorityGroups,u=Object(r.useState)(!1),j=Object(s.a)(u,2),d=j[0],b=j[1];return Object(U.jsx)(Ne.a,{children:Object(U.jsxs)(I.a,{spacing:2,divider:Object(U.jsx)(A.a,{}),children:[Object(U.jsx)(R.a,{variant:"body1",children:"Instructors: ".concat(n)}),Object(U.jsx)(R.a,{variant:"body1",children:"Delivery mode: ".concat(c)}),Object(U.jsx)(R.a,{variant:"body1",children:o}),Object(U.jsxs)(I.a,{children:[Object(U.jsx)(R.a,{variant:"body1",paragraph:!0,children:"Meetings:"}),a.map((function(e){return Object(U.jsx)(R.a,{variant:"body2",children:e},e)}))]}),i?Object(U.jsxs)(I.a,{children:[Object(U.jsx)(R.a,{variant:"body1",paragraph:!0,children:"Enrollment priority:"}),Object(U.jsx)(R.a,{variant:"body2",children:i})]}):null,x.a.isEmpty(l)?null:Object(U.jsxs)(I.a,{children:[Object(U.jsxs)(I.a,{direction:"row",spacing:1,alignItems:"center",paddingBottom:1,children:[Object(U.jsx)(R.a,{variant:"body1",children:"Priority student groups:"}),Object(U.jsx)(le.a,{onClick:function(){return b(!d)},children:Object(U.jsx)(He.a,{sx:{transform:d?"rotate(-180deg)":"rotate(0)",transition:"0.2s"}})})]}),Object(U.jsx)(I.a,{sx:{display:d?"block":"none"},children:l.map((function(e,t){return Object(U.jsx)(R.a,{variant:"body2",children:e},t)}))})]})]})})},Ke=function(e){var t=e.data,n=Object(r.useState)(!1),a=Object(s.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)({section:"",instructors:"",meetings:[],delivery:"",priority:"",capacity:"",priorityGroups:[]}),l=Object(s.a)(o,2),u=l[0],j=l[1];if(!t)return null;return Object(U.jsxs)(I.a,{children:[Object(U.jsx)(R.a,{variant:"h5",paragraph:!0,children:"Meeting Sections"}),Object(U.jsx)(Ye,{data:t,onListEntryClick:function(e){i(!0),j(e)}}),Object(U.jsxs)(Le.a,{open:c,onClose:function(){return i(!1)},maxWidth:"sm",fullWidth:!0,children:[Object(U.jsx)(We.a,{children:u.section}),Object(U.jsx)(ze,{data:u})]})]})},Xe=function(e){var t=e.currDisplayedDataControl,n=e.currFetchedData,a=e.favorites,c=Object(f.f)(),i=Object(r.useState)(!1),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(s.a)(t,2),b=d[0],O=d[1];if(Object(r.useEffect)((function(){var e=c.pathname.replace("/course","").toUpperCase().split("/").filter((function(e){return e}));3!==e.length&&(O({}),j(!1));var t=e[2],r=e[1],i=e[0],s="".concat(t,"-").concat(r,"-").concat(i);if(n.hasOwnProperty(s))O(n[s]),j(!1);else{if(j(!0),!window.navigator.onLine)return void(a.hasOwnProperty(s)&&(O(a[s]),j(!1)));var l=new Date;w.a.create({baseURL:"https://ionice.herokuapp.com/https://timetable.iit.artsci.utoronto.ca/api/",headers:{}}).get("".concat(i,"/courses/"),{params:{code:t,section:r}}).then((function(e){O(e.data[s]?Object(o.a)(Object(o.a)({},e.data[s]),{},{updated:l}):{}),j(!1)})).catch((function(){O({}),j(!1)}))}}),[c]),u)return Object(U.jsx)(_,{});if(0===Object.keys(b).length)return Object(U.jsx)(ge.a,{maxWidth:"lg",children:Object(U.jsx)(h.a,{display:"flex",justifyContent:"center",children:Object(U.jsx)(R.a,{variant:"h4",children:"Invalid URL. Perhaps you visited a broken link?"})})});var p=b.courseTitle,x=b.courseDescription,m=b.prerequisite,v=b.corequisite,g=b.exclusion,C=b.recommendedPreparation,y=b.breadthCategories,S=b.distributionCategories,J=b.webTimetableInstructions,E=b.deliveryInstructions,k=b.meetings,P=b.updated;return Object(U.jsx)(ge.a,{maxWidth:"lg",children:Object(U.jsxs)(I.a,{spacing:3,divider:Object(U.jsx)(A.a,{}),children:[Object(U.jsx)(ye,{title:p,retrievedOn:Qe(P)}),Se({courseDescription:x}),Te({prerequisite:m,corequisite:v,exclusion:g,recommendedPreparation:C}),Ae({breadthCategories:y,distributionCategories:S}),Fe({webTimetableInstructions:J,deliveryInstructions:E}),Object(U.jsx)(Ke,{data:k})]})})},Ze=n(245),$e=n(120),et=n.n($e),tt=function(){return Object(U.jsx)(R.a,{variant:"h4",children:"Saved Courses"})},nt=function(e){var t=e.favoritesControl,n=Object(s.a)(t,2),r=n[0],a=n[1],c=function(e){var t=e.entry,n=t.courseTitle,r=t.code,c=t.section,i=t.session;return Object(U.jsxs)(L.a,{disableGutters:!0,children:[Object(U.jsx)(Y.a,{component:B.b,to:"/course/".concat(i,"/").concat(c.toLowerCase(),"/").concat(r.toLowerCase()),children:Object(U.jsx)(W.a,{primary:"".concat(n),secondary:"".concat(r).concat(c)})}),Object(U.jsx)(Ze.a,{children:Object(U.jsx)(le.a,{onClick:function(){return a("remove","".concat(r,"-").concat(c,"-").concat(i))},children:Object(U.jsx)(et.a,{})})})]})};return Object(U.jsx)(N.a,{dense:!0,children:Object.entries(r).sort((function(e,t){return e<t?-1:1})).map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(U.jsx)(c,{entry:r},n)}))})},rt=function(e){var t=e.favoritesControl;return Object(U.jsx)(ge.a,{maxWidth:"lg",children:Object(U.jsxs)(I.a,{spacing:3,divider:Object(U.jsx)(A.a,{}),children:[Object(U.jsx)(tt,{}),Object(U.jsx)(nt,{favoritesControl:t})]})})},at=function(e){var t=e.favoritesControl,n=e.currFetchedData,r=e.currDisplayedDataControl,a=Object(s.a)(t,1)[0];return Object(U.jsxs)(f.c,{children:[Object(U.jsx)(f.a,{path:"/course",children:Object(U.jsx)(Xe,{currDisplayedDataControl:r,currFetchedData:n,favorites:a})}),Object(U.jsx)(f.a,{path:"/favorites",children:Object(U.jsx)(rt,{favoritesControl:t})})]})},ct=[{value:"20169",label:"'16 Fall - '17 Winter",short_label:"'16-'17 FW"},{value:"20175",label:"'17 Summer",short_label:"'17 S"},{value:"20179",label:"'17 Fall - '18 Winter",short_label:"'17-'18 FW"},{value:"20185",label:"'18 Summer",short_label:"'18 S"},{value:"20189",label:"'18 Fall - '19 Winter",short_label:"'18-'19 FW"},{value:"20195",label:"'19 Summer",short_label:"'19 S"},{value:"20199",label:"'19 Fall - '20 Winter",short_label:"'19-'20 FW"},{value:"20205",label:"'20 Summer",short_label:"'20 S"},{value:"20209",label:"'20 Fall - '21 Winter",short_label:"'20-'21 FW"},{value:"20215",label:"'21 Summer",short_label:"'21 S"},{value:"20219",label:"'21 Fall - '22 Winter",short_label:"'21-'22 FW"}],it=("ABP/ACT/AFR/AMS/ANA/ANT/APM/ARC/ARH/AST/BCB/BCH/BIO/BMS/BPM/CAR/CAS/CDN/CHC/CHM/CIN/CJH/CJS/CLA/CLT/COG/COL/CRE/CRI/CSB/CSC/CSE/CTA/DHU/DRM/DTS/EAS/ECE/ECO/EDS/EDU/EEB/EHJ/ELL/ENG/ENT/ENV/ESS/EST/ETH/EUR/FAH/FCS/FIN/FOR/FRE/FSL/GER/GGR/GRK/HAJ/HIS/HMB/HPS/HST/HUN/IFP/IMC/IMM/INI/INS/IRE/ITA/IVP/JAH/JAL/JAR/JCA/JCC/JCI/JDC/JEE/JEG/JEH/JEI/JFE/JFG/JFL/JFP/JFV/JGA/JGE/JGI/JGJ/JGU/JHA/JHE/JHN/JHP/JIA/JIG/JLN/JLP/JLS/JMB/JNH/JNR/JNS/JOP/JPA/JPD/JPE/JPF/JPH/JPI/JPM/JPP/JPR/JPS/JPU/JQR/JRA/JSC/JSH/JSR/JSU/JSV/JUG/JUM/JWE/LAS/LAT/LCT/LIN/LMP/MAT/MCS/MGR/MGT/MGY/MHB/MIJ/MST/MUN/MUS/NEW/NFS/NMC/NML/NUS/PCJ/PCL/PHC/PHL/PHS/PHY/PLN/POL/PPG/PRT/PSL/PSY/REN/RLG/RSM/SAS/SDS/SLA/SMC/SOC/SPA/STA/SWE/SWK/TRN/UNI/URB/USA/UTP/VIC/WDW/WGS/WRR".split("/"),function(){var e=S(),t=Object(l.a)(),n=Object(u.a)(t.breakpoints.down("md")),a=Object(f.f)(),c=Object(r.useState)("dark"===localStorage.getItem("darkMode")),p=Object(s.a)(c,2),J=p[0],E=p[1],k=Object(r.useState)(!1),P=Object(s.a)(k,2),w=P[0],I=P[1],M=Object(r.useState)(""),R=Object(s.a)(M,2),T=R[0],A=R[1],F="dfsoudfhsud",N=Object(r.useState)({}),L=Object(s.a)(N,2),W=L[0],D=L[1],H=Object(r.useState)(function(){var e=localStorage.getItem(F);return e?JSON.parse(e):{}}()),B=Object(s.a)(H,2),G=B[0],_=B[1],Q=Object(r.useState)({}),V=Object(s.a)(Q,2),Y=V[0],z=V[1];Object(r.useEffect)((function(){var e=localStorage.getItem(F);e&&_(JSON.parse(e));var t=function(e){"darkMode"===e.key?E("dark"===e.newValue):e.key===F&&_(JSON.parse(e.newValue))};return window.addEventListener("storage",t),function(){window.removeEventListener("storage",t)}}),[]),Object(r.useEffect)((function(){var e=function(e,t){if("/search"===e)return"Search";if("/favorites"===e)return"Favorites";if("/timetable"===e)return"Timetable";if("/settings"===e)return"Settings";if(e.startsWith("/course")){if(x.a.isEmpty(t))return"";if(t.session!==x.a.last(ct).value){var n=ct.filter((function(e){return e.value===t.session}));return console.log(n),"".concat(t.code).concat(t.section," (Session: ").concat(x.a.isEmpty(n)?t.session:n[0].short_label,")")}return"".concat(t.code).concat(t.section)}return"Boreal"}(a.pathname,Y);A(a.pathname.startsWith("/course")?e:""),document.title="Boreal".concat("Boreal"===e?"":" \u2014 "+e)}),[a,Y]),Object(r.useEffect)((function(){localStorage.setItem("darkMode",J?"dark":"light")}),[J]);var K,X=function(){return x.a.isEmpty(Y)?null:"".concat(Y.code,"-").concat(Y.section,"-").concat(Y.session)},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X();t&&_((function(n){if("add"!==e&&"remove"!==e)return n;var r="remove"===e?x.a.omit(n,t):Object(o.a)(Object(o.a)({},n),{},Object(i.a)({},t,Y));return localStorage.setItem(F,JSON.stringify(r)),r}))};return Object(U.jsx)(j.a,{injectFirst:!0,children:Object(U.jsxs)(d.a,{theme:(K=J,Object(m.a)(Object(v.a)({palette:{mode:K?"dark":"light",primary:{main:g.a[800]},secondary:{main:C.a[50]},error:{main:y.a[500]}},typography:{fontFamily:["Roboto","Quicksand"].join(",")},components:{MuiTypography:{defaultProps:{variantMapping:{h4:"h1",h5:"h2",h6:"h3"}},styleOverrides:{h3:{fontFamily:"Quicksand",fontWeight:300},h4:{fontFamily:"Quicksand",fontWeight:300},h5:{fontFamily:"Quicksand",fontWeight:400},h6:{fontFamily:"Quicksand",fontWeight:400}}}}}))),children:[Object(U.jsx)(b.a,{}),Object(U.jsx)(ve,{title:T,navControl:[w,I],themeControl:[J,E],favoriteControl:[Object.keys(G).includes(X()),Z],mobile:n}),Object(U.jsx)(ie,{mobile:n,navControl:[w,I],children:Object(U.jsx)(q,{fetchedDataControl:[W,D],onCourseSelection:function(){I(!1)},onButtonClick:function(){return I(!w)}})}),Object(U.jsx)(O.a,{}),Object(U.jsx)(h.a,{sx:n?e.contentMobileWrapper:e.contentWrapper,children:Object(U.jsx)(at,{favoritesControl:[G,Z],currFetchedData:W,currDisplayedDataControl:[Y,z]})})]})})});c.a.render(Object(U.jsx)(B.a,{children:Object(U.jsx)(it,{})}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.6ee703ba.chunk.js.map