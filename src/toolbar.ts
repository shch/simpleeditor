import { createElement } from './util'
import { range } from './textContainer'
let menus:any = {}

function createToolBar(root:Element){
    let toolbar = createElement(root, "div", "toolbar")
    let H = createToolBarMenu(toolbar,'H',(e) =>{
        if (document.queryCommandValue('formatBlock')!=="div"&&document.queryCommandValue('formatBlock')!=="") {
            document.execCommand("formatBlock", false, "div")
        } else {
            document.execCommand("formatBlock", false, "H1")
        }
        toggleMenuStatus(e.target)
    })
    let B = createToolBarMenu(toolbar,'B',(e) =>{
        let selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand("bold", false, null)
        toggleMenuStatus(e.target)
    })
    let C = createToolBarMenu(toolbar,'C',(e) =>{
        document.execCommand("foreColor", false, e.target.value)
    })
    menus.H = H
    menus.B = B
    menus.C = C

}
function createToolBarMenu(root:Element,text:string,func:any){
    var ele:any
    if(['H','B'].indexOf(text) != -1){
        ele = document.createElement('span')
        ele.innerText = text
        root.appendChild(ele)
        ele.onmousedown = func
    }
    else if(text == 'C'){
        ele = document.createElement('input')
        ele.type = "color"
        ele.value = ""
        ele.onchange = func 
        root.append(ele)
    }    
    return ele
}

function toggleMenuStatus(node:Element){
    if(node.classList.contains('active')){
        node.classList.remove('active')
    }else{
        node.classList.add('active')
    }
}


export {createToolBar,menus}