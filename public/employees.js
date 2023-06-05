let david = 'David Martindale';
let amol = 'Amol Shookup';
let holly = 'Holly Unlikely';
let sue = 'Sue Wedge';
let robin = 'Robin Banks';
let aaron = 'Aaron D. Tyres';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, david), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, holly.toLowerCase()), /*#__PURE__*/React.createElement("li", null, sue.toUpperCase()), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron));
ReactDOM.render(element, document.getElementById('content'));

// let david = 'David Martindale'
// let amol = 'Amol Shookup'
// let holly = 'Holly Unlikely'
// let sue = 'Sue Wedge'
// const App = () => {
//     const colors = ['red', 'green', 'purple']
//     let colorsIndex = 0   
//     setInterval(() => {
//         document.getElementById('content').style.backgroundColor = colors[colorsIndex]
//         colorsIndex = (colorsIndex + 1) % colors.length
//     }, 1000)
//     return (
//         <div id='content'>
//             <ul style={{'color': 'blue', 'fontSize': '24px'}}>
//                 <li>{david}</li>
//                 <li>{amol.length}</li>
//                 <li>{holly.toLowerCase()}</li>
//                 <li>{sue.toUpperCase()}</li>
//             </ul>
//         </div>
//     )
// }
// ReactDOM.render(<App />, document.getElementById('content'))

// const element = (
//     <ul style={{'color': 'blue', 'fontSize': '24px'}}>
//         <li>David Martindale</li>
//         <li>Amol Shookup</li>
//         <li>Holly Unlikely</li>
//     </ul>
// )
// ReactDOM.render(element, document.getElementById('content'))

// const element = React.createElement(
//     'ul', 
//     {style: {'color': 'green', 'font-size': '24px' }}, 
//     React.createElement('li', null, 'David Martindale'),
//     React.createElement('li', null, 'Holly Smith'),
//     React.createElement('li', null, 'Amol Shookup')
// )
// ReactDOM.render(element, document.getElementById('content'))

// const element = React.createElement(
//     'div', 
//     {title: 'Outer div'}, 
//     React.createElement('h1', null, 'Hello world. I have arrived')
// )
// ReactDOM.render(element, document.getElementById('content'))

// ReactDOM.render(
//     React.createElement(
//         'div', 
//         {title: 'Outer div'}, 
//         'Hello World!'
//     ),
//     document.getElementById('content')
// )