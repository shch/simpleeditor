import { createElement } from './util'
import { menus } from './toolbar'

let range:any = ""
function createTextContainer(root:Element){
    let ele = createElement(root, "div", "editor_container")
    ele['contentEditable'] = "true"
    ele.onclick = (e) =>{
        range = window.getSelection().getRangeAt(0)
        if(document.queryCommandState('bold') == false){
            menus.B.classList.remove('active')
        }else{
            menus.B.classList.add('active')
        }
    }
   
}
export {createTextContainer,range}