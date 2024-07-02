// 加载场景代码 
// var app = new THING.App({ resourceLibraryUrl: "./", 
//    url: './scene/1/'
// });

class CheLun1 extends THING.Thing{
    constructor(app){
        super(app)
    }
}
class CheLun2 extends THING.Thing{
    constructor(app){
        super(app)
    }
}
THING.factory.registerClass('CheLun1',CheLun1)
THING.factory.registerClass('CheLun2',CheLun2)


// 离线开发引入园区场景
// '/api/scene/-20181718585115866' 
// '/api/scene/-20181719473515854'测试
var app = new THING.App({
    url:  '/api/scene/-20181718585115866', // 场景地址
    skyBox:"BlueSky",
    resourceLibraryUrl:'./'
});

THING.Utils.dynamicLoad([
    '/uploads/wechat/1122901/file/404/模型引入方法.js'
])

THING.Utils.dynamicLoad([
    '/uploads/wechat/1122901/file/404/模型动画操作/测试模型动画.js'
])

THING.Utils.dynamicLoad([
    '/uploads/wechat/1122901/file/404/模型动画操作/模型动画通用函数.js'
])

THING.Utils.dynamicLoad([
    '/uploads/wechat/1122901/file/404/移动模型方法的实现/移动模型的方法.js'
])

function callFuncInMain(funcName, data) {
    var message = {
        'funcName': funcName, // 所要调用父页面里的函数名
        'param': data
    }
    // 向父窗体(用户主页面)发送消息 
    // 第一个参数是具体的信息内容，
    // 第二个参数是接收消息的窗口的源（origin），即"协议 + 域名 + 端口"。也可以设为*，表示不限制域名，向所有窗口发送
    window.parent.postMessage(message, '*');
}

// 监听用户页面传回的数据 并调用 ThingJS 页面方法
window.addEventListener('message', function(e) {
    var data = e.data;
    var funcName = data.funcName;
    var param = data.param;
    // 调用 ThingJS 页面方法
    window[funcName](param);
});

//主页面使用的变量创建
var campus
var plant
//用于接受面板数据的变量
var panel = null
var uiAnchor
//接受场景模型
var scene
var equipment
//
var ui
var ui_number = 0
var pointArr = []
var str = []
var list = [
    {
        id:16,
        name:"旋转料仓"
    },
    {
        id:41,
        name:"通道4"
    },
    {
        id:81,
        name:"通道5"
    },
    {
        id:156,
        name:"通道6"
    },
    {
        id:226,
        name:"支架"
    },
    {
        id:251,
        name:"齿轮"
    },
    {
        id:251,
        name:"齿轮"
    },
    {
        id:256,
        name:"轴台"
    },
    {
        id:261,
        name:"螺母"
    },
    {
        id:266,
        name:"盖板1"
    },
    {
        id:256,
        name:"盖板2"
    },
    {
        id:276,
        name:"轴"
    },
    {
        id:281,
        name:"链轮轴组件1"
    },
    {
        id:286,
        name:"链轮轴组件2"
    },
    {
        id:291,
        name:"连接齿轮"
    },
    {
        id:296,
        name:"螺栓"
    },
    {
        id:331,
        name:"螺栓"
    },
    {
        id:366,
        name:"井"
    },
    {
        id:436,
        name:"接料过渡舱"
    },
    {
        id:516,
        name:"Other"
    },
    {
        id:541,
        name:"插销"
    },
    {
        id:546,
        name:"侧向滚轮"
    },
    {
        id:591,
        name:"轴"
    },
    {
        id:636,
        name:"十字螺栓"
    },
    {
        id:801,
        name:"剪切滑阵"
    },
    {
        id:811,
        name:"支撑滚轮"
    },
    {
        id:816,
        name:"活动刀体"
    },
    {
        id:821,
        name:"活动刀"
    },
    {
        id:836,
        name:"盖板"
    },
    {
        id:841,
        name:"挡块"
    },
    {
        id:846,
        name:"螺栓"
    },
    {
        id:866,
        name:"十字螺钉"
    },
    {
        id:891,
        name:"支撑滑轮"
    },
    {
        id:896,
        name:"十字螺栓"
    },
    {
        id:926,
        name:"支撑轴轮盖"
    },
    {
        id:931,
        name:"支撑轴轮"
    },
    {
        id:936,
        name:"轴"
    },
    {
        id:941,
        name:"档盖1"
    },
    {
        id:946,
        name:"档盖2"
    },
    {
        id:951,
        name:"垫块"
    },
    {
        id:976,
        name:"轴轮2"
    },
    {
        id:1086,
        name:"轴轮3"
    },
    {
        id:1196,
        name:"轴轮4"
    },
    {
        id:1306,
        name:"机体"
    },
    {
        id:1316,
        name:"压头"
    },
    {
        id:1321,
        name:"销子"
    },
    {
        id:1326,
        name:"轮子"
    },
    {
        id:1371,
        name:"主体"
    },
    {
        id:1376,
        name:"轴盖板"
    },
    {
        id:1461,
        name:"十字螺栓"
    },
    {
        id:1631,
        name:"轴"
    },
    {
        id:1636,
        name:"头盖"
    },
    {
        id:1641,
        name:"轴套"
    },
    {
        id:1646,
        name:"轴"
    },
    {
        id:1651,
        name:"螺栓1"
    },
    {
        id:1676,
        name:"螺栓2"
    },
    {
        id:1691,
        name:"竖直大滚轮"
    },
    {
        id:1761,
        name:"摄像头螺栓"
    },
    {
        id:1781,
        name:"摄像头"
    },
    {
        id:1791,
        name:"刀片"
    },
    {
        id:1796,
        name:"刀体"
    },
    {
        id:1801,
        name:"固定刀机体"
    },
    {
        id:1811,
        name:"快速接头"
    },
    {
        id:1826,
        name:"螺栓A"
    },
    {
        id:1851,
        name:"支架"
    },
    {
        id:1856,
        name:"缸盖"
    },
    {
        id:1861,
        name:"螺栓B"
    },
    {
        id:1886,
        name:"O圈"
    },
    {
        id:1896,
        name:"O圈1"
    },
    {
        id:1901,
        name:"活塞"
    },
    {
        id:1906,
        name:"O圈2"
    },
    {
        id:1911,
        name:"活塞杆1"
    },
    {
        id:1916,
        name:"活塞杆2"
    },
    {
        id:1921,
        name:"把手"
    },
    {
        id:1926,
        name:"支块"
    },
    {
        id:1931,
        name:"缸体"
    },
    {
        id:1941,
        name:"堵塞"
    },
    {
        id:1946,
        name:"端盖"
    },
    {
        id:1951,
        name:"插销"
    },
    {
        id:1956,
        name:"螺杆"
    },
    {
        id:1961,
        name:"底座"
    },
    {
        id:1966,
        name:"垫圈"
    },
    {
        id:1971,
        name:"防脱螺栓"
    },
    {
        id:1996,
        name:"M8螺栓"
    },
    {
        id:2031,
        name:"M6螺栓"
    },
    {
        id:2056,
        name:"盖板1"
    },
    {
        id:2061,
        name:"盖板2"
    },
    {
        id:2066,
        name:"轴承座"
    },
    {
        id:2071,
        name:"M6螺栓"
    },
    {
        id:2096,
        name:"内部轴承1"
    },
    {
        id:2131,
        name:"内部轴承2"
    },
    {
        id:2161,
        name:"楔紧块"
    },
    {
        id:2166,
        name:"小盖板"
    },
    {
        id:2171,
        name:"支座"
    },
    {
        id:2176,
        name:"螺栓"
    },
    {
        id:2181,
        name:"箱盖"
    },
    {
        id:2186,
        name:"楔紧机构2"
    },
    {
        id:2416,
        name:"楔紧机构3"
    },
    {
        id:2646,
        name:"楔紧机构4"
    },
    {
        id:2881,
        name:"内框架"
    },
    {
        id:2886,
        name:"箱体滑盖刀"
    },
    {
        id:2891,
        name:"剪切机支撑滑轮"
    },
    {
        id:3616,
        name:"箱体刀箱板"
    },
    {
        id:3621,
        name:"剪切机箱体"
    },
    {
        id:3641,
        name:"02"
    },
    {
        id:3646,
        name:"管套"
    },
    {
        id:3651,
        name:"04"
    },
    {
        id:3661,
        name:"螺栓1"
    },
    {
        id:3666,
        name:"螺栓2"
    },
    {
        id:3671,
        name:"螺栓3"
    },
    {
        id:3676,
        name:"螺栓4"
    },
    {
        id:3681,
        name:"螺栓5"
    },
    {
        id:3686,
        name:"螺栓6"
    },
    {
        id:3691,
        name:"螺栓7"
    },
    {
        id:3696,
        name:"螺栓8"
    },
    {
        id:3701,
        name:"螺栓"
    },
    {
        id:3711,
        name:"缸体"
    },
    {
        id:3716,
        name:"前端盖"
    },
    {
        id:3721,
        name:"后端盖"
    },
    {
        id:3731,
        name:"连接头插栓"
    },
    {
        id:3736,
        name:"连接头"
    },
    {
        id:3741,
        name:"活塞"
    },
    {
        id:3791,
        name:"抽斗小车"
    },
    {
        id:3806,
        name:"螺栓A"
    },
    {
        id:3831,
        name:"螺栓B"
    },
    {
        id:3856,
        name:"螺栓C"
    },
    {
        id:3881,
        name:"螺栓D"
    },
    {
        id:3906,
        name:"减速机轴套"
    },
    {
        id:3911,
        name:"电机"
    },
    {
        id:3916,
        name:"电机轴套"
    },
    {
        id:3921,
        name:"减速器"
    },
    {
        id:3926,
        name:"电机联轴器1"
    },
    {
        id:3931,
        name:"电机联轴器2"
    },
    {
        id:3936,
        name:"轴套"
    },
    {
        id:3941,
        name:"螺栓"
    },
    {
        id:3971,
        name:"支架1"
    },
    {
        id:3976,
        name:"支架2"
    },
    {
        id:3981,
        name:"支架"
    },
    {
        id:3986,
        name:"推链动力组件"
    },
    {
        id:4171,
        name:"穿墙组件1"
    },
    {
        id:4356,
        name:"穿墙组件2"
    },
    {
        id:4546,
        name:"上箱体"
    },
    {
        id:4551,
        name:"更换盖板"
    },
    {
        id:4556,
        name:"后盖板"
    },
    {
        id:4561,
        name:"卡紧组件2"
    },
    {
        id:4586,
        name:"卡紧组件3"
    },
    {
        id:4611,
        name:"卡紧组件1"
    },
    {
        id:4636,
        name:"通道"
    },
    {
        id:4641,
        name:"下箱体"
    },
    {
        id:4651,
        name:"推头组件"
    },
    {
        id:4656,
        name:"推头小车"
    },
    {
        id:4661,
        name:"轮子"
    },
    {
        id:4706,
        name:"轴"
    },
    {
        id:4731,
        name:"轮子"
    },
    {
        id:4766,
        name:"轴"
    },
    {
        id:4791,
        name:""
    },
    {
        id:4796,
        name:""
    },
    {
        id:4801,
        name:""
    },
    {
        id:4806,
        name:""
    },
    {
        id:4811,
        name:""
    },
    {
        id:4816,
        name:""
    },
    {
        id:4821,
        name:""
    },
    {
        id:4826,
        name:""
    },
    {
        id:4831,
        name:"安装支座"
    },
    {
        id:4836,
        name:""
    },
    {
        id:4841,
        name:""
    },
    {
        id:4846,
        name:"谷型联轴器"
    },
    {
        id:4851,
        name:""
    },
    {
        id:4856,
        name:""
    },
    {
        id:4861,
        name:"手柄"
    },
    {
        id:4866,
        name:"小套"
    },
    {
        id:4871,
        name:"弹簧"
    },
    {
        id:4876,
        name:"插销"
    },
    {
        id:4881,
        name:"摆臂"
    },
    {
        id:4886,
        name:"螺钉"
    },
    {
        id:4891,
        name:"快拆机构"
    },
    {
        id:5001,
        name:"重启密封台"
    },
    {
        id:5006,
        name:"缩紧组件"
    },
    {
        id:5011,
        name:"缩紧组件"
    },
    {
        id:5016,
        name:"密封圈"
    },
    {
        id:5021,
        name:"重启密封BB"
    },
    {
        id:5051,
        name:"把手"
    },
    {
        id:5056,
        name:"插销"
    },
    {
        id:5061,
        name:"插销螺栓"
    },
    {
        id:5066,
        name:"指针"
    },
    {
        id:5071,
        name:"活塞套"
    },
    {
        id:5076,
        name:"螺栓"
    },
    {
        id:5081,
        name:"拧杆"
    },
    {
        id:5086,
        name:""
    },
    {
        id:5091,
        name:"安装板"
    },
    {
        id:5096,
        name:"螺栓"
    },
    {
        id:5101,
        name:"定位气缸"
    },
    {
        id:5106,
        name:"活塞"
    },
    {
        id:5111,
        name:"气缸支座"
    },
    {
        id:5116,
        name:"M6螺栓"
    },
    {
        id:5146,
        name:"O圈3"
    },
    {
        id:5151,
        name:"O圈1"
    },
    {
        id:5156,
        name:"O圈2"
    },
    {
        id:5161,
        name:"O圈4"
    },
    {
        id:5166,
        name:"定位气缸"
    },
    {
        id:5286,
        name:"旋转平台"
    },
    {
        id:5466,
        name:"M6螺栓"
    },
    {
        id:5491,
        name:"M8螺栓"
    },
    {
        id:5516,
        name:"O圈1"
    },
    {
        id:5521,
        name:"箱体"
    },
    {
        id:5526,
        name:"后触感指针"
    },
    {
        id:5531,
        name:"组件挡板"
    },
    {
        id:5536,
        name:"O圈4"
    },
    {
        id:5541,
        name:""
    },
    {
        id:5546,
        name:"O圈3"
    },
    {
        id:5551,
        name:""
    },
    {
        id:5556,
        name:"活塞"
    },
    {
        id:5561,
        name:"锁紧装置"
    },
    {
        id:5581,
        name:"锁紧装置"
    },
    {
        id:5601,
        name:"O圈5"
    },
    {
        id:5606,
        name:"箱盖"
    },
    {
        id:5611,
        name:"O圈2"
    },
    {
        id:5616,
        name:"定位气缸"
    },
    {
        id:5621,
        name:"Brep"
    },
    {
        id:5626,
        name:"螺栓"
    },
    {
        id:5651,
        name:"密封装置"
    },
    {
        id:5671,
        name:"Other"
    },
    {
        id:5691,
        name:"螺栓B"
    },
    {
        id:5841,
        name:"剪切油缸"
    },
    {
        id:5846,
        name:"连接板"
    },
    {
        id:5851,
        name:"压紧油缸"
    },
    {
        id:5856,
        name:"维修组件B"
    },
    {
        id:5901,
        name:"维修组件"
    },
    {
        id:5948,
        name:"屏蔽预埋件"
    },
    {
        id:5953,
        name:"屏蔽组件"
    },
    {
        id:5958,
        name:"液压缸拉杆"
    },
    {
        id:5993,
        name:"放缩螺母"
    },
    {
        id:6058,
        name:"锁紧螺母"
    },
    {
        id:6123,
        name:"导轨"
    },
    {
        id:6128,
        name:"挡板"
    },
    {
        id:6135,
        name:"压紧轴套"
    },
    {
        id:6140,
        name:"压紧轴"
    },
    {
        id:6145,
        name:"压紧缸活塞A"
    },
    {
        id:6175,
        name:"压紧缸活塞B"
    },
    {
        id:6190,
        name:""
    },
    {
        id:6207,
        name:""
    },
    {
        id:6224,
        name:"剪切轴套"
    },
    {
        id:6229,
        name:"剪切油缸活塞A"
    },
    {
        id:6244,
        name:"剪切油缸活塞"
    },
    {
        id:6284,
        name:"剪切轴"
    },
    {
        id:6289,
        name:"紧固螺母"
    },
    {
        id:6314,
        name:"螺栓"
    },
    {
        id:6455,
        name:"螺母"
    }
]

app.on('load',function(){

    //获取园区
    campus = app.query('.Campus')[0];
    console.log(campus.children[1].subNodes)
    scene = campus.children[2]
    scene.visible = false
    equipment = campus.children[1]
    //获取园区模型
    // campusModel = app.query('.Campus')

    app.camera.flyTo({
        'position':[-1843.930354293268, 1964.4553821261152, 178.24589802623962],
        'target':[-675.2114747657494, 913.4226294062348, 159.95884144865516],
        'time':1000
    })

    for (var i=0 ; i<list.length ; i++){
        equipment.subNodes[list[i].id].name = list[i].name
        str.push(equipment.subNodes[list[i].id])
    }
    // for (let i=0 ; i<equipment.subNodes.length ; i++){
    //     if (equipment.subNodes[i].name.search("AssimpFbx") != -1){

    //     } else {
    //         console.log(equipment.subNodes[i].name,i)
    //         var a = [equipment.subNodes[i],i]
    //         str.push(equipment.subNodes[i])
    //     }
    //     // var s = equipment.subNodes[i].name.toLocaleLowerCase()
    //     // var k = 0
    //     // for (var j=0 ; j<s.length; j++){
    //     //     if (s[j] == "_"){
    //     //         k++
    //     //     }
    //     // }
    //     // if(k == 4){
    //     //     equipment.subNodes[i].id = i
    //     //     str.push(equipment.subNodes[i])
    //     // }
    // }
    for (let i=0 ; i<str.length ; i++){
        str[i].on("mouseenter",function(ev){
            str[i].style.outlineColor = '#FF00FF'
        })
        str[i].on("mouseleave",function(){
            str[i].style.outlineColor = null
        })
        str[i].on("dblclick",function(ev){
            // if (str[i].style.opacity == 1){
            //     str[i].style.opacity = 0.5
            // } else if (str[i].style.opacity == 0.5) {
            //     str[i].visible = false
            //     str[i].style.opacity = 1
            // }
            console.log(app.camera.position)
        })
    }
    app.on("click",function(ev){
        if(ui != null){
            ui.destroy()
        }
        if (ev.object == undefined){
            return
        } else {
            panel = new THING.widget.Panel({
                width:'200px',
                cornerType:'polyline'
            })

            panel.addString(ev.object,"name").caption('名称')

            ui = app.create({
                type:'UIAnchor',
                parent:ev.object,
                element:panel.domElement,
                localPosition:[0,2,0],
                pivot:[0,0],
            })
        }
    })
})

function createElement(){
    var srcElem = document.getElementById('board');
    var newElem = srcElem.cloneNode(true);
    newElem.style.display = "visible";
    // newElem.setAttribute("id",item.id);
    app.domElement.insertBefore(newElem,srcElem);
    console.log(newElem)
    return newElem
}

function createHtml_html(){
    var html = 
    `<div id="board" class="sign" style="position: relative;background: #000;width: 200px;height: 80px;border-radius: 4px; z-index:999">
    <div style="width: 194px;height: 74px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);border: 1px solid #9a9a9a;">
      <div style="height: 64px;color: #fff;display: flex;flex-direction: column;justify-content: space-between;padding: 2px 20px;">
        <div style="display: flex;justify-content: space-between;padding: 2px 20px;">
        <span>厂房</span>
        <span class="text">ZH厂房</span>
        </div>
        <div style="display: flex;justify-content: space-between;padding: 2px 20px;">
          <span>名称</span>
          <span class="text1">WuDing01</span>
        </div>
      </div>
    </div>
    <div style="height: 1px;width: 176px;background: #959595;position: absolute;top: 46%;left: 6%;"></div>
    <img src="" alt="" style="position: absolute;bottom: -20px;left:-15px;clip-path: inset(0 89% 0 0);">
  </div>`
  $('#div3d').append($(html));
}

function labels(ev){
    _destory()
    let add = ev
    createHtml_html()
    console.log(add,createElement(),"ADS")

        // 创建widget (绑定数据用)
        panel = new THING.widget.Panel({
            // 设置面板宽度
            width: '250px',
            // cornerType 角标样式
            // 没有角标 none ，没有线的角标 noline ，折线角标 polyline
            cornerType: 'polyline'
        })
        // 绑定物体身上相应的属性数据
        // panel.addString(plant, 'name').caption('厂房');
        panel.addString(add, 'name').caption('名称');
    ui = app.create({
        type:'UIAnchor',
        parent:add,
        element:panel.domElement,
        localPosition:[0,2,0],
        // pivotPixel: [0, 0] // 当前用值是角标的中心点
        pivot:[1,1],
        // pivotPixel:[parseFloat($(".sign").css("width"))/2, parseFloat($(".sign").css("height"))]
    })
    ui_number = 1
    pointArr.push(ui)
    console.log(ui,"UI")
    // $('#' + add.id + '.text').text("id:" + add.id);
    // $('#' + add.id + '.text1').text("name:" + add.name);



    // uiAnchor = app.create({
    //     // 类型
    //     type: 'UIAnchor',
    //     // 父节点设置
    //     parent: add,
    //     // 要绑定的页面的 element 对象
    //     element: panel.domElement,
    //     // 设置 localPosition 为 [0, 0, 0]
    //     localPosition: [0, 0, 0],
    //     // 相对于Element左上角的偏移像素值
    //     pivotPixel: [0, 0] // 当前用值是角标的中心点
    // });
}

function _destory(){
    if(ui_number == 1){
        ui.destory()
        ui_number = 0
    }
}


