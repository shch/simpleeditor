import './css/index.scss';

import { createToolBar } from './toolbar'
import { createTextContainer } from './textContainer'

window.onload = function () {
    let editor = document.getElementById("editor")
    if (editor) {
        createToolBar(editor)
        createTextContainer(editor)
    } else {
        throw new Error("error")
    }

}