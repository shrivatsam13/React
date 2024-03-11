import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google.'
}

function Myapp(){
    return(
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}


//way to create html element in react and insert it
const AnotherElement = (
    <a href='http://google.com' target='_blank'>Visit Googlee</a>
)

//way to create react element
const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google.com'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
