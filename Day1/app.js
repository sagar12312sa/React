const heading = React.createElement("h1",{},"Hello World From React")
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading)

const parent = React.createElement("div",{id : "parent"},
                    React.createElement("div",{id:"child"},
                    [React.createElement("h1",{},"I am a heding 1"),React.createElement("h2",{},"I am")]))

root.render(parent)
console.log(parent)

