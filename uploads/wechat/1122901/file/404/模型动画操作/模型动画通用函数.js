let tool = null

// 选择工具的方法
// function toolChoice(ev){
//     tool = ev
// }

//改变光标样式的动画
function cursorChoice(ev){
    var body = document.querySelector("body")
    console.log(ev)
    if(ev == 0){ 
        tool = "扳手"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/banshou.png'), auto";
    } else if (ev == 1){
        tool = "M6呆扳手"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/M6banshou.png'), auto";
    } else if (ev == 2){
        tool = "M8呆扳手"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/M8banshou.png'), auto";
    } else if (ev == 3){
        tool = "M10呆扳手"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/M10banshou.png'), auto";
    } else if (ev == 4){
        tool = "M12内六角扳手"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/liujiao.png'), auto";
    } else if (ev == 5){
        tool = "电动扳手"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/diandongbanshou.png'), auto";
    } else if (ev == 6){
        tool = "螺丝刀"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/luosidao.png'), auto";
    } else if (ev == 7){
        tool = "十字螺丝刀"
        body.style.cursor = "url('./uploads/wechat/1122901/file/404/image/shiziluosidao.png'), auto";
    } else if (ev == null){
        tool = null
        document.body.style.cursor = 'pointer' 
    }
}
