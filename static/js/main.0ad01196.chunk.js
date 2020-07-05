(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(7),c=o.n(l),r=(o(14),o(15),o(5)),i=o(8),d=o(1),s=o(2),u=o(4),m=o(3),p=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={inputValue:""},e.changeInputValue=function(t){e.setState({inputValue:t.target.value})},e.onEnter=function(t){"Enter"===t.key&&(e.props.createTodo(e.state.inputValue),e.setState({inputValue:""}))},e}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.inputValue,onChange:this.changeInputValue,onKeyDown:this.onEnter})}}]),o}(a.a.PureComponent),f=function(e){var t=e.createTodo;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(p,{createTodo:t}))},g=function(e){var t=e.items,o=e.toggleAllCompleted,n=t.every((function(e){return e.completed}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:n,onChange:function(){return o(n)}}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))},h=function(e){var t=e.index,o=e.title,n=e.id,l=e.completed,c=e.onEdit,r=e.toggleCompleted;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(t),checked:l,onChange:function(){return r(n)}}),a.a.createElement("label",{htmlFor:"todo-".concat(t),onClick:function(e){return e.preventDefault()},onDoubleClick:c},o))},E=function(e){var t=e.id,o=e.destroyTodo;return a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(t)}})},v=function(e){var t=e.index,o=e.title,n=e.id,l=e.completed,c=e.toggleCompleted,r=e.onEdit,i=e.destroyTodo;return a.a.createElement("div",{className:"view"},a.a.createElement(h,{index:t,title:o,id:n,completed:l,onEdit:r,toggleCompleted:c}),a.a.createElement(E,{id:n,destroyTodo:i}))},C=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={editTitle:e.props.title},e.changeTitle=function(t){e.setState({editTitle:t.target.value})},e.closeEdit=function(t){"Enter"===t.key&&(e.props.editTodo(e.state.editTitle,e.props.id),e.props.offEdit()),"Escape"===t.key&&(e.props.offEdit(),e.setState({editTitle:e.props.title}))},e}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("input",{type:"text",className:"edit",value:this.state.editTitle,onChange:this.changeTitle,onKeyDown:this.closeEdit})}}]),o}(a.a.PureComponent),b=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={isEditing:!1},e.onEdit=function(){e.setState({isEditing:!0})},e.offEdit=function(){e.setState({isEditing:!1})},e}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props,t=e.index,o=e.item,n=e.toggleCompleted,l=e.editTodo,c=e.destroyTodo,r=this.state.isEditing;return a.a.createElement("li",{className:r?"editing":o.completed?"completed":""},a.a.createElement(v,{index:t,title:o.title,id:o.id,completed:o.completed,toggleCompleted:n,onEdit:this.onEdit,destroyTodo:c}),a.a.createElement(C,{title:o.title,id:o.id,offEdit:this.offEdit,editTodo:l}))}}]),o}(a.a.PureComponent),y=function(e){var t=e.items,o=e.toggleCompleted,n=e.destroyTodo,l=e.editTodo;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e,t){return a.a.createElement(b,{key:e.id,index:t,item:e,toggleCompleted:o,editTodo:l,destroyTodo:n})})))},T=function(e){var t=e.items,o=e.todosFilter,n=e.toggleAllCompleted,l=e.toggleCompleted,c=e.editTodo,r=e.destroyTodo;return a.a.createElement("section",{className:"main"},0===t.length?"":a.a.createElement(g,{items:t,toggleAllCompleted:n}),a.a.createElement(y,{items:t.filter(o),toggleCompleted:l,editTodo:c,destroyTodo:r}))},S=function(e){var t=e.uncompletedLength;return a.a.createElement("span",{className:"todo-count"},"".concat(t," items left"))},j=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={allSelected:!0,activeSelected:!1,completedSelected:!1},e.onAllClick=function(){e.setState({allSelected:!0,activeSelected:!1,completedSelected:!1}),e.props.changeFilter((function(e){return!0}))},e.onActiveClick=function(){e.setState({allSelected:!1,activeSelected:!0,completedSelected:!1}),e.props.changeFilter((function(e){return!e.completed}))},e.onCompletedClick=function(){e.setState({allSelected:!1,activeSelected:!1,completedSelected:!0}),e.props.changeFilter((function(e){return e.completed}))},e}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:this.state.allSelected?"selected":"",onClick:this.onAllClick},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:this.state.activeSelected?"selected":"",onClick:this.onActiveClick},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:this.state.completedSelected?"selected":"",onClick:this.onCompletedClick},"Completed")))}}]),o}(a.a.PureComponent),k=function(e){var t=e.clearCompleted;return a.a.createElement("button",{type:"button",className:"clear-completed",onClick:t},"Clear completed")},O=function(e){var t=e.uncompletedLength,o=e.changeFilter,n=e.clearCompleted;return a.a.createElement("footer",{className:"footer"},a.a.createElement(S,{uncompletedLength:t}),a.a.createElement(j,{changeFilter:o}),a.a.createElement(k,{clearCompleted:n}))},N=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],todoNumber:0,todosFilter:function(){return!0}},e.createTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[{title:t,id:++e.todoNumber,completed:!1}])}}))},e.toggleAllCompleted=function(t){t?e.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})}))}})):e.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})}))}}))},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}}))},e.editTodo=function(t,o){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===o?Object(r.a)(Object(r.a)({},e),{},{title:t}):e}))}}))},e.destroyTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({todosFilter:t})},e.clearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},e}return Object(s.a)(o,[{key:"render",value:function(){var e=this.state,t=e.todos,o=e.todosFilter;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(f,{createTodo:this.createTodo}),a.a.createElement(T,{items:t,todosFilter:o,toggleAllCompleted:this.toggleAllCompleted,toggleCompleted:this.toggleCompleted,editTodo:this.editTodo,destroyTodo:this.destroyTodo}),0===this.state.todos.length?"":a.a.createElement(O,{uncompletedLength:t.filter((function(e){return!e.completed})).length,changeFilter:this.changeFilter,clearCompleted:this.clearCompleted}))}}]),o}(a.a.Component);c.a.render(a.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,o){e.exports=o(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0ad01196.chunk.js.map