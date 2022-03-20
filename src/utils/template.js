// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
var cache = {};
// function tmpl(str, data){
//   var str =  'test';
//   var html = `<ul>
//   <% for ( var i = 0; i < users.length; i++ ) { %>
//     <li>
//         <a href="<%=users[i].url%>">
//             <%=users[i].name%>
//         </a>
//     </li>
//   <% } %>
// </ul>`;
// Figure out if we're getting a template, or if we need to
// load the template - and be sure to cache the result.
//   var fn = !/\W/.test(str) ?
//     cache[str] = cache[str] ||
//       tmpl(html) :

//     // Generate a reusable function that will serve as a template
//     // generator (and which will be cached).
//     new Function("obj",
//       "var p=[],print=function(){p.push.apply(p,arguments);};" +

//       // Introduce the data as local variables using with(){}
//       "with(obj){p.push('" +

//       // Convert the template into pure JavaScript
//       html
//         .replace(/[\r\t\n]/g, " ")
//         .split("<%").join("\t")
//         .replace(/((^|%>)[^\t]*)'/g, "$1\r")
//         .replace(/\t=(.*?)%>/g, "',$1,'")
//         .split("\t").join("');")
//         .split("%>").join("p.push('")
//         .split("\r").join("\\'")
//     + "');}return p.join('');");

//   // Provide some basic currying to the user
//   return data ? fn( data ) : fn;
// };


export default function tmpl(users){
  var html = `<ul>
  <% for ( var i = 0; i < users.length; i++ ) { %>
    <li>
        <a href="<%=users[i].url%>">
            <%=users[i].name%>
        </a>
    </li>
  <% } %>
</ul>`;
  var result="var p=[];with(users){p.push('"
      +html.replace(/[\r\n\t]/g," ")
        .replace(/<%=(.*?)%>/g,"');p.push($1);p.push('")
        .replace(/<%/g,"');")
        .replace(/%>/g,"p.push('")
      +"');}return p.join('');";
  console.log(result);
  var fn =  new Function("users",result);
  console.log(users);
  return fn(users);
}
