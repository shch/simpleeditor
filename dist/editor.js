(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    function createElement(root, node, className) {
        var content = document.createElement(node);
        content.className = className;
        root.appendChild(content);
        return content;
    }

    var menus = {};
    function createToolBar(root) {
        var toolbar = createElement(root, "div", "toolbar");
        var H = createToolBarMenu(toolbar, 'H', function (e) {
            if (document.queryCommandValue('formatBlock') !== "div" && document.queryCommandValue('formatBlock') !== "") {
                document.execCommand("formatBlock", false, "div");
            }
            else {
                document.execCommand("formatBlock", false, "H1");
            }
            toggleMenuStatus(e.target);
        });
        var B = createToolBarMenu(toolbar, 'B', function (e) {
            document.execCommand("bold", false, null);
            toggleMenuStatus(e.target);
        });
        var C = createToolBarMenu(toolbar, 'C', function (e) {
            document.execCommand("foreColor", false, e.target.value);
        });
        menus.H = H;
        menus.B = B;
        menus.C = C;
    }
    function createToolBarMenu(root, text, func) {
        var ele;
        if (['H', 'B'].indexOf(text) != -1) {
            ele = document.createElement('span');
            ele.innerText = text;
            root.appendChild(ele);
            ele.onmousedown = func;
        }
        else if (text == 'C') {
            ele = document.createElement('input');
            ele.type = "color";
            ele.value = "";
            ele.onchange = func;
            root.append(ele);
        }
        return ele;
    }
    function toggleMenuStatus(node) {
        if (node.classList.contains('active')) {
            node.classList.remove('active');
        }
        else {
            node.classList.add('active');
        }
    }

    function createTextContainer(root) {
        var ele = createElement(root, "div", "editor_container");
        ele['contentEditable'] = "true";
        ele.onclick = function (e) {
            if (document.queryCommandState('bold') == false) {
                menus.B.classList.remove('active');
            }
            else {
                menus.B.classList.add('active');
            }
        };
    }

    window.onload = function () {
        var editor = document.getElementById("editor");
        if (editor) {
            createToolBar(editor);
            createTextContainer(editor);
        }
        else {
            throw new Error("error");
        }
    };

})));
//# sourceMappingURL=editor.js.map
