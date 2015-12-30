body {
font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif; /*使用无衬线字体*/
}

a, img {
-webkit-touch-callout: none; /*禁止长按链接与图片弹出菜单*/
}

html, body {
-webkit-user-select: none; /*禁止选中文本*/
user-select: none;
}

button,input,optgroup,select,textarea {
-webkit-appearance:none; /*去掉webkit默认的表单样式*/
}

a,button,input,optgroup,select,textarea {
-webkit-tap-highlight-color:rgba(0,0,0,0); /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
}

input::-webkit-input-placeholder {
color:#ccc; /*修改webkit中input的planceholder样式*/
}

input:focus::-webkit-input-placeholder {
color:#f00; /*修改webkit中focus状态下input的planceholder样式*/
}

body {
-webkit-text-size-adjust: 100%!important; /*禁止IOS调整字体大小*/
}

input::-webkit-input-speech-button {
display: none; /*隐藏Android的语音输入按钮*/
}
