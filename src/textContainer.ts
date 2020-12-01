import { createElement } from './util'
import { menus } from './toolbar'
function createTextContainer(root:Element){
    let ele = createElement(root, "div", "editor_container")
    ele['contentEditable'] = "true"
    ele.onclick = (e) =>{
        if(document.queryCommandState('bold') == false){
            menus.B.classList.remove('active')
        }else{
            menus.B.classList.add('active')
        }
    }
   
}
export {createTextContainer}