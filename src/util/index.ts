function createElement(root:Element,node:string,className:string){
    let content = document.createElement(node)
    content.className = className
    root.appendChild(content)
    return content
}
export {createElement}