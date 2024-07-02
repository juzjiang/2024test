

let Step = 0

//显示模型
function show(ev){
    equipment.subNodes[ev].visible = true
}
//取消模型触发事件
function closedblclick(ev){
    for (var i =0 ; i < ev.length ;i++){
        equipment.subNodes[ev[i]].off("dblclick")
    }
}
//让所有模型显示
function modelShow(){
    for(var i=0 ; i<str.length; i++){
        str[i].visible = true
    }
}

function test(ev){
    console.log(ev.subNodes)
    step = 1
    //步骤1
    ev.subNodes[6].on("dblclick",function(){
        if (step == 1 && tool == 1){
            ev.subNodes[6].rotateTo({
                angles:[-90,0,-90],
                speed:200
            })
            ev.subNodes[6].moveTo({
                offsetPosition:[0,0,1],
                time:1000,
                complete: function () {
                    ev.subNodes[6].visible = false
                    step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            ev.subNodes[6].off("dblclick")
        }
    })
    //步骤2
    ev.subNodes[5].on("dblclick",function(){
        if (step == 2 && tool == null){
            ev.subNodes[5].moveTo({
                offsetPosition:[0,0,1],
                time:1000,
                complete: function () {
                    ev.subNodes[5].visible = false
                    step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            ev.subNodes[5].off("dblclick")
        }
        
    })
    //步骤3
     ev.subNodes[7].on("dblclick",function(){
        if (step == 3 && tool == 1){
            ev.subNodes[7].rotateTo({
                angles:[0,0,-90],
                speed:200
            })
            ev.subNodes[7].moveTo({
                offsetPosition:[0,0,1],
                time:1000,
                complete: function () {
                    // ev.subNodes[7].visible = false
                    step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            ev.subNodes[7].off("dblclick")
        }
    })
    //步骤4
        ev.subNodes[4].on("dblclick",function(){
        if (step == 4 && tool == null){
            ev.subNodes[4].moveTo({
                offsetPosition:[0,0,1],
                time:1000,
                complete: function () {
                    ev.subNodes[4].visible = false
                    step = 5
                    callFuncInMain("modelStep",5)
                }
            })
            ev.subNodes[4].off("dblclick")
        }
    })
    //步骤5
       ev.subNodes[2].on("dblclick",function(){
        if (step == 5 && tool == null){
            ev.subNodes[2].moveTo({
                offsetPosition:[0,0,1],
                time:1000,
                complete: function () {
                    ev.subNodes[2].visible = false
                    step = 6
                    callFuncInMain("modelStep",6)
                }
            })
            ev.subNodes[2].off("dblclick")
        }
    })
    //步骤6
    ev.subNodes[8].on("dblclick",function(){
        if (step == 6 && tool == 1){
            // ev.subNodes[8].rotateTo({
            //     angles: [0, 180, 0], // 旋转角度
            //     speed: 100,
            // })
            ev.subNodes[8].moveTo({
                offsetPosition:[0,0,1],
                time:1000,
                complete: function () {
                    ev.subNodes[8].visible = false
                    step = 0
                    callFuncInMain("modelStep",7)
                }
            })
            ev.subNodes[8].off("dblclick")
        }
    })
}

//2.1摄像头更换
function shexiangtou(){
    var sheXIangTouLuoShuan = equipment.subNodes[1761]
    var SheXiangTou01 = equipment.subNodes[1781]
    let shexiangtou_step = 1
    app.camera.flyTo({
        'position':[SheXiangTou01.center[0]-30,SheXiangTou01.center[1],SheXiangTou01.center[2]],
        'target': SheXiangTou01.center,
        "time": 1000
    })
    modelShow()
    //步骤1(平移摄像头螺栓)
    sheXIangTouLuoShuan.on("dblclick",function(){
        if (shexiangtou_step == 1 && tool == null){
            sheXIangTouLuoShuan.moveTo({
                offsetPosition:[-30,0,0],
                time:2000,
                complete: function () {
                    sheXIangTouLuoShuan.visible = false
                    shexiangtou_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            sheXIangTouLuoShuan.off("dblclick")
        } 
    })
    //步骤2(平移整个摄像头)
    SheXiangTou01.on("dblclick",function(){
        if (shexiangtou_step == 2 && tool == null){
            SheXiangTou01.moveTo({
                offsetPosition:[-20,0,0],
                time:2000,
                complete: function () {
                    SheXiangTou01.visible = false
                    shexiangtou_step = 3
                    callFuncInMain("modelStep",3)
                    setTimeout('show(1781)',2000)
                    //步骤3(还原整个摄像头)
                    SheXiangTou01.on("dblclick",function(){
                        if (shexiangtou_step == 3 && tool == null){
                            SheXiangTou01.moveTo({
                                offsetPosition:[20,0,0],
                                time:2000,
                                complete: function () {
                                    sheXIangTouLuoShuan.visible = true
                                    shexiangtou_step = 4
                                    callFuncInMain("modelStep",4)
                                    //步骤1(还原摄像头螺栓)
                                    sheXIangTouLuoShuan.on("dblclick",function(){
                                        if (shexiangtou_step == 4 && tool == null){
                                            sheXIangTouLuoShuan.moveTo({
                                                offsetPosition:[30,0,0],
                                                time:2000,
                                                complete: function () {
                                                    shexiangtou_step = 5
                                                    // callFuncInMain("modelStep",2)
                                                }
                                            })
                                            sheXIangTouLuoShuan.off("dblclick")
                                        } 
                                    })
                                }
                            })
                            SheXiangTou01.off("dblclick")
                        }
                    })
                }
            })
            SheXiangTou01.off("dblclick")
        }
    })
}

//2.2端头推落气缸检查
function DuanTouTuiLuoQiGang(){
    var DuanTouTuiLuoQiGang = equipment.subNodes[1806]
    var KuaiSuJieTou = equipment.subNodes[1811]
    var DuanTouTuiLuoQiGang_GangTi4848 = equipment.subNodes[1931]
    var ORing =  equipment.subNodes[1886]
    var DuanTouTuiLuoQiGang_BaShou =  equipment.subNodes[1921]
    var DuanTouTuiLuoQiGang_HuoSaiGan01 = equipment.subNodes[1911]
    var DuanTouTuiLuoQiGang_HuoSaiGan02 = equipment.subNodes[1916]
    var DuanTouTuiLuoQiGang_ZhiKuai = equipment.subNodes[1926]
    var DuanTouTuiLuoQiGang_ZhiJia = equipment.subNodes[1851]
    var LuoShuanBB = equipment.subNodes[1861]
    var LuoShuanAA = equipment.subNodes[1826]
    var DuanTouTuiLuoQiGang_GangGai = equipment.subNodes[1856]
    var DuanTouTuiLuoQiGang_step = 1
    
    app.camera.flyTo({
        'position':[DuanTouTuiLuoQiGang.center[0]-30,DuanTouTuiLuoQiGang.center[1]+30,DuanTouTuiLuoQiGang.center[2]],
        'target': DuanTouTuiLuoQiGang.center,
        "time": 1000
    })
    modelShow()
    //步骤1(旋转把手)
    DuanTouTuiLuoQiGang_BaShou.on("dblclick",function(ev){
        console.log(ev.object)
        if (DuanTouTuiLuoQiGang_step == 1 && tool == null
            ){
            DuanTouTuiLuoQiGang_BaShou.moveTo({
                offsetPosition:[0,0,-2],
                time:2000,
                complete: function () {
                    DuanTouTuiLuoQiGang_step = 2
                    callFuncInMain("modelStep",2)
                    DuanTouTuiLuoQiGang_BaShou.visible = false
                }
            })
            DuanTouTuiLuoQiGang_BaShou.off("dblclick")
        } 
    })
    //步骤2(拆除活塞杆1)
    DuanTouTuiLuoQiGang_HuoSaiGan01.on("dblclick",function(){
        if (DuanTouTuiLuoQiGang_step == 2 && tool == null
            ){
                DuanTouTuiLuoQiGang_HuoSaiGan01.moveTo({
                offsetPosition:[0,0,-20],
                time:2000,
                complete: function () {
                    DuanTouTuiLuoQiGang_HuoSaiGan01.visible = false
                    DuanTouTuiLuoQiGang_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            DuanTouTuiLuoQiGang_HuoSaiGan01.off("dblclick")
        } 
    })
    //步骤3(拆除活塞杆2)
    DuanTouTuiLuoQiGang_HuoSaiGan02.on("dblclick",function(){
        if (DuanTouTuiLuoQiGang_step == 3 && tool == null
            ){
                DuanTouTuiLuoQiGang_HuoSaiGan02.moveTo({
                offsetPosition:[0,0,10],
                time:2000,
                complete: function () {
                    DuanTouTuiLuoQiGang_HuoSaiGan02.visible = false
                    DuanTouTuiLuoQiGang_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            DuanTouTuiLuoQiGang_HuoSaiGan02.off("dblclick")
        } 
    })
    //步骤4(吊出推落气缸)
    DuanTouTuiLuoQiGang_GangTi4848.on("dblclick",function(){
        if (DuanTouTuiLuoQiGang_step == 4 && tool == null
            ){
                LuoShuanBB.visible = false
                DuanTouTuiLuoQiGang_ZhiKuai.visible = false
                DuanTouTuiLuoQiGang_ZhiJia.visible = false
                DuanTouTuiLuoQiGang.moveTo({
                offsetPosition:[0,100,0],
                time:2000,
                complete: function () {
                    DuanTouTuiLuoQiGang_step = 5
                    callFuncInMain("modelStep",5)
                    app.camera.flyTo({
                        'position':[DuanTouTuiLuoQiGang.center[0]-30,DuanTouTuiLuoQiGang.center[1]+30,DuanTouTuiLuoQiGang.center[2]],
                        'target': DuanTouTuiLuoQiGang.center,
                        "time": 1000
                    })
                }
            })
            DuanTouTuiLuoQiGang_GangTi4848.off("dblclick")
        } 
    })
    //步骤5(拆除螺栓A)
    LuoShuanAA.on("dblclick",function(){
        if (DuanTouTuiLuoQiGang_step == 5 && tool == null
            ){
                LuoShuanAA.moveTo({
                offsetPosition:[0,0,10],
                time:2000,
                complete: function () {
                    LuoShuanAA.visible = false
                    DuanTouTuiLuoQiGang_step = 6
                    callFuncInMain("modelStep",6)

                }
            })
            LuoShuanAA.off("dblclick")
        } 
    })
    //步骤6(拆除缸盖)
    DuanTouTuiLuoQiGang_GangGai.on("dblclick",function(){
        if (DuanTouTuiLuoQiGang_step == 6 && tool == null
            ){
                DuanTouTuiLuoQiGang_GangGai.moveTo({
                offsetPosition:[0,0,10],
                time:2000,
                complete: function () {
                    DuanTouTuiLuoQiGang_GangGai.visible = false
                    DuanTouTuiLuoQiGang_step = 7
                    callFuncInMain("modelStep",7)

                }
            })
            DuanTouTuiLuoQiGang_GangGai.off("dblclick")
        } 
    })
    //步骤7(拆除O型密封圈)
    ORing.on("dblclick",function(){
        if (DuanTouTuiLuoQiGang_step == 7 && tool == null){
            ORing.moveTo({
                offsetPosition:[0,0,10],
                time:2000,
                complete: function () {
                    ORing.visible = false
                    DuanTouTuiLuoQiGang_step = 8
                    callFuncInMain("modelStep",8)
                    setTimeout("show(1886)",2000)
                    //步骤8(安装O型密封圈)
                    ORing.on("dblclick",function(){
                        if (DuanTouTuiLuoQiGang_step == 8 && tool == null){
                            ORing.moveTo({
                                offsetPosition:[0,0,-10],
                                time:2000,
                                complete: function () {
                                    DuanTouTuiLuoQiGang_GangGai.visible = true
                                    DuanTouTuiLuoQiGang_step = 9
                                    callFuncInMain("modelStep",9)
                                }
                            })
                            ORing.off("dblclick")
                        } 
                    })
                    //步骤9(安装缸盖)
                    DuanTouTuiLuoQiGang_GangGai.on("dblclick",function(){
                        if (DuanTouTuiLuoQiGang_step == 9 && tool == null
                            ){
                                DuanTouTuiLuoQiGang_GangGai.moveTo({
                                offsetPosition:[0,0,-10],
                                time:2000,
                                complete: function () {
                                    LuoShuanAA.visible = true
                                    DuanTouTuiLuoQiGang_step = 10
                                    callFuncInMain("modelStep",10)
                                
                                }
                            })
                            DuanTouTuiLuoQiGang_GangGai.off("dblclick")
                        } 
                    })
                    //步骤10(拆除螺栓A)
                    LuoShuanAA.on("dblclick",function(){
                        if (DuanTouTuiLuoQiGang_step == 10 && tool == null
                            ){
                                LuoShuanAA.moveTo({
                                offsetPosition:[0,0,-10],
                                time:2000,
                                complete: function () {
                                    LuoShuanAA.visible = false
                                    DuanTouTuiLuoQiGang_step = 11
                                    callFuncInMain("modelStep",11)
                                
                                }
                            })
                            LuoShuanAA.off("dblclick")
                        } 
                    })
                    //步骤11(将推落气缸吊进规定位置)
                    DuanTouTuiLuoQiGang_GangTi4848.on("dblclick",function(){
                        if (DuanTouTuiLuoQiGang_step == 11 && tool == null
                            ){
                                DuanTouTuiLuoQiGang.moveTo({
                                offsetPosition:[0,-100,0],
                                time:2000,
                                complete: function () {
                                    DuanTouTuiLuoQiGang_step = 12
                                    callFuncInMain("modelStep",12)
                                    LuoShuanBB.visible = true
                                    DuanTouTuiLuoQiGang_ZhiKuai.visible = true
                                    DuanTouTuiLuoQiGang_ZhiJia.visible = true
                                    DuanTouTuiLuoQiGang_HuoSaiGan02.visible = true
                                    app.camera.flyTo({
                                        'position':[DuanTouTuiLuoQiGang.center[0]-30,DuanTouTuiLuoQiGang.center[1]+30,DuanTouTuiLuoQiGang.center[2]],
                                        'target': DuanTouTuiLuoQiGang.center,
                                        "time": 1000
                                    })
                                }
                            })
                            DuanTouTuiLuoQiGang_GangTi4848.off("dblclick")
                        } 
                    })
                    //步骤12(安装活塞杆2)
                    DuanTouTuiLuoQiGang_HuoSaiGan02.on("dblclick",function(){
                        if (DuanTouTuiLuoQiGang_step == 12 && tool == null
                            ){
                                DuanTouTuiLuoQiGang_HuoSaiGan02.moveTo({
                                offsetPosition:[0,0,-10],
                                time:2000,
                                complete: function () {
                                    DuanTouTuiLuoQiGang_HuoSaiGan01.visible = true
                                    DuanTouTuiLuoQiGang_step = 13
                                    callFuncInMain("modelStep",13)
                                }
                            })
                            DuanTouTuiLuoQiGang_HuoSaiGan02.off("dblclick")
                        } 
                    })
                    //步骤13(安装活塞杆1)
                    DuanTouTuiLuoQiGang_HuoSaiGan01.on("dblclick",function(){
                        if (DuanTouTuiLuoQiGang_step == 13 && tool == null
                            ){
                                DuanTouTuiLuoQiGang_HuoSaiGan01.moveTo({
                                offsetPosition:[0,0,20],
                                time:2000,
                                complete: function () {
                                    DuanTouTuiLuoQiGang_BaShou.visible = true
                                    DuanTouTuiLuoQiGang_step = 14
                                    callFuncInMain("modelStep",14)
                                }
                            })
                            DuanTouTuiLuoQiGang_HuoSaiGan01.off("dblclick")
                        } 
                    })
                    //步骤14(拧紧把手)
                    DuanTouTuiLuoQiGang_BaShou.on("dblclick",function(ev){
                        console.log(ev.object)
                        if (DuanTouTuiLuoQiGang_step == 14 && tool == null
                            ){
                            DuanTouTuiLuoQiGang_BaShou.moveTo({
                                offsetPosition:[0,0,2],
                                time:2000,
                                complete: function () {
                                    // DuanTouTuiLuoQiGang_step = 2
                                    // callFuncInMain("modelStep",2)
                                    // DuanTouTuiLuoQiGang_BaShou.visible = false
                                }
                            })
                            DuanTouTuiLuoQiGang_BaShou.off("dblclick")
                        } 
                    })
                }
            })
            ORing.off("dblclick")
        } 
    })
}

//2.3楔紧机构检查
function XieJinJiGou(){ 1936
    var XieJinJiGou1 = equipment.subNodes[1936]
    var XieJinJiGou1_M26FangTuoLuoShuan = equipment.subNodes[1971]
    var M8LuoShuan= equipment.subNodes[1996]
    var XieJinJiGou1_GaiBan1= equipment.subNodes[2061]
    var M6LuoShuan02= equipment.subNodes[2071]
    var XieJinJiGou1_GaiBan= equipment.subNodes[2056]
    var XieJinJiGou1_DianQuan= equipment.subNodes[1966]
    var XieJinJiGou_ZhouChengZuo= equipment.subNodes[2066]
    var XieJinJiGou_NeiBuZhouCheng= equipment.subNodes[2096]
    var XieJinJiGou_DiZuo= equipment.subNodes[1961]
    var XieJinJiGou_step = 1

    app.camera.flyTo({
        'position':[XieJinJiGou1.center[0]-50,XieJinJiGou1.center[1]+50,XieJinJiGou1.center[2]],
        'target': XieJinJiGou1.center,
        "time": 1000
    })
    modelShow()
    //步骤1(将楔紧机构吊出进行清洗去污)
    XieJinJiGou_DiZuo.on("dblclick",function(){
        if (XieJinJiGou_step == 1 && tool == null
            ){
                XieJinJiGou1.moveTo({
                offsetPosition:[0,100,0],
                time:2000,
                complete: function () {
                    XieJinJiGou_step = 2
                    callFuncInMain("modelStep",2)
                    app.camera.flyTo({
                        'position':[XieJinJiGou1.center[0]-50,XieJinJiGou1.center[1]+50,XieJinJiGou1.center[2]],
                        'target': XieJinJiGou1.center,
                        "time": 1000
                    })
                }
            })
            XieJinJiGou_DiZuo.off("dblclick")
        } 
    })
    //步骤1(用电动扳手拆卸防脱螺栓)
    XieJinJiGou1_M26FangTuoLuoShuan.on("dblclick",function(){
        if (XieJinJiGou_step == 2 && tool == "电动扳手"
            ){
                XieJinJiGou1_M26FangTuoLuoShuan.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_M26FangTuoLuoShuan.visible = false
                    XieJinJiGou_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            XieJinJiGou1_M26FangTuoLuoShuan.off("dblclick")
        } 
    })
    //步骤2(M8的呆扳手拆卸掉盖板上的6个螺栓)
    M8LuoShuan.on("dblclick",function(){
        if (XieJinJiGou_step == 3 && tool == "M8呆扳手"
            ){
                M8LuoShuan.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    M8LuoShuan.visible = false
                    XieJinJiGou_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            M8LuoShuan.off("dblclick")
        } 
    })
    //步骤3(打开盖板)
    XieJinJiGou1_GaiBan1.on("dblclick",function(){
        if (XieJinJiGou_step == 4 && tool == null){
                XieJinJiGou1_GaiBan1.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_GaiBan1.visible = false
                    XieJinJiGou_step = 5
                    callFuncInMain("modelStep",5)
                }
            })
            XieJinJiGou1_GaiBan1.off("dblclick")
        } 
    })
    //步骤4(M6的呆扳手拆卸掉盖板上的4个螺栓)
    M6LuoShuan02.on("dblclick",function(){
        if (XieJinJiGou_step == 5 && tool == "M6呆扳手"){
                M6LuoShuan02.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    M6LuoShuan02.visible = false
                    XieJinJiGou_step = 6
                    callFuncInMain("modelStep",6)
                }
            })
            M6LuoShuan02.off("dblclick")
        } 
    })
    //步骤5(打开盖板)
    XieJinJiGou1_GaiBan.on("dblclick",function(){
        if (XieJinJiGou_step == 6 && tool == null){
            XieJinJiGou1_GaiBan.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_GaiBan.visible = false
                    XieJinJiGou_step = 7
                    callFuncInMain("modelStep",7)
                }
            })
            XieJinJiGou1_GaiBan.off("dblclick")
        } 
    })
    //步骤6(打开垫圈)
    XieJinJiGou1_DianQuan.on("dblclick",function(){
        if (XieJinJiGou_step == 7 && tool == null){
            XieJinJiGou1_DianQuan.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_DianQuan.visible = false
                    XieJinJiGou_step = 8
                    callFuncInMain("modelStep",8)
                }
            })
            XieJinJiGou1_DianQuan.off("dblclick")
        } 
    })
    //步骤7(移开轴承座)
    XieJinJiGou_ZhouChengZuo.on("dblclick",function(){
        if (XieJinJiGou_step == 8 && tool == null){
            XieJinJiGou_ZhouChengZuo.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou_ZhouChengZuo.visible = false
                    XieJinJiGou_step = 9
                    callFuncInMain("modelStep",9)
                }
            })
            XieJinJiGou_ZhouChengZuo.off("dblclick")
        } 
    })
    //步骤8(拿出轴承)
    XieJinJiGou_NeiBuZhouCheng.on("dblclick",function(){
        if (XieJinJiGou_step == 9 && tool == null){
            XieJinJiGou_NeiBuZhouCheng.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou_NeiBuZhouCheng.visible = false
                    XieJinJiGou_step = 10
                    callFuncInMain("modelStep",10)
                    setTimeout('XieJinJiGouBack(9,2096)',2000)
                }
            })
            XieJinJiGou_NeiBuZhouCheng.off("dblclick")
        } 
    })
}
//楔紧机构检查回溯
function XieJinJiGouBack(ev,data){
    show(data)
    var XieJinJiGou1 = equipment.subNodes[1936]
    var XieJinJiGou1_M26FangTuoLuoShuan = equipment.subNodes[1971]
    var M8LuoShuan= equipment.subNodes[1996]
    var XieJinJiGou1_GaiBan1= equipment.subNodes[2061]
    var M6LuoShuan02= equipment.subNodes[2071]
    var XieJinJiGou1_GaiBan= equipment.subNodes[2056]
    var XieJinJiGou1_DianQuan= equipment.subNodes[1966]
    var XieJinJiGou_ZhouChengZuo= equipment.subNodes[2066]
    var XieJinJiGou_NeiBuZhouCheng= equipment.subNodes[2096]
    var XieJinJiGou_DiZuo= equipment.subNodes[1961]
    var XieJinJiGou_step = ev

    //步骤9(放回轴承)
    XieJinJiGou_NeiBuZhouCheng.on("dblclick",function(){
        if (XieJinJiGou_step == 10 && tool == null){
            XieJinJiGou_NeiBuZhouCheng.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou_ZhouChengZuo.visible = true
                    XieJinJiGou_step = 11
                    callFuncInMain("modelStep",11)
                }
            })
            XieJinJiGou_NeiBuZhouCheng.off("dblclick")
        } 
    })
    //步骤10(放回轴承座)
    XieJinJiGou_ZhouChengZuo.on("dblclick",function(){
        if (XieJinJiGou_step == 11 && tool == null){
            XieJinJiGou_ZhouChengZuo.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_DianQuan.visible = true
                    XieJinJiGou_step = 12
                    callFuncInMain("modelStep",12)
                }
            })
            XieJinJiGou_ZhouChengZuo.off("dblclick")
        } 
    })
    //步骤11(放回垫圈)
    XieJinJiGou1_DianQuan.on("dblclick",function(){
        if (XieJinJiGou_step == 12 && tool == null){
            XieJinJiGou1_DianQuan.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_GaiBan.visible = true
                    XieJinJiGou_step = 13
                    callFuncInMain("modelStep",13)
                }
            })
            XieJinJiGou1_DianQuan.off("dblclick")
        } 
    })
    //步骤12(放回盖板)
    XieJinJiGou1_GaiBan.on("dblclick",function(){
        if (XieJinJiGou_step == 13 && tool == null){
            XieJinJiGou1_GaiBan.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    M6LuoShuan02.visible = true
                    XieJinJiGou_step = 14
                    callFuncInMain("modelStep",14)
                }
            })
            XieJinJiGou1_GaiBan.off("dblclick")
        } 
    })
    //步骤13(M6的呆扳手拆卸掉盖板上的4个螺栓)
    M6LuoShuan02.on("dblclick",function(){
        if (XieJinJiGou_step == 14 && tool == "M6呆扳手"){
                M6LuoShuan02.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_GaiBan1.visible = true
                    XieJinJiGou_step = 15
                    callFuncInMain("modelStep",15)
                }
            })
            M6LuoShuan02.off("dblclick")
        } 
    })
    //步骤14(放回盖板)
    XieJinJiGou1_GaiBan1.on("dblclick",function(){
        if (XieJinJiGou_step == 15 && tool == null){
                XieJinJiGou1_GaiBan1.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    M8LuoShuan.visible = true
                    XieJinJiGou_step = 16
                    callFuncInMain("modelStep",16)
                }
            })
            XieJinJiGou1_GaiBan1.off("dblclick")
        } 
    })
    //步骤15(M8的呆扳手安装掉盖板上的6个螺栓)
    M8LuoShuan.on("dblclick",function(){
        if (XieJinJiGou_step == 16 && tool == "M8呆扳手"
            ){
                M8LuoShuan.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    XieJinJiGou1_M26FangTuoLuoShuan.visible = true
                    XieJinJiGou_step = 17
                    callFuncInMain("modelStep",17)
                }
            })
            M8LuoShuan.off("dblclick")
        } 
    })
    //步骤16(用电动扳手安装防脱螺栓)
    XieJinJiGou1_M26FangTuoLuoShuan.on("dblclick",function(){
        if (XieJinJiGou_step == 17 && tool == "电动扳手"
            ){
                XieJinJiGou1_M26FangTuoLuoShuan.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    // XieJinJiGou1_M26FangTuoLuoShuan.visible = false
                    XieJinJiGou_step = 18
                    callFuncInMain("modelStep",18)
                }
            })
            XieJinJiGou1_M26FangTuoLuoShuan.off("dblclick")
        } 
    })
    //步骤18(将楔紧机构吊出进行清洗去污)
    XieJinJiGou_DiZuo.on("dblclick",function(){
        if (XieJinJiGou_step == 18 && tool == null
            ){
                XieJinJiGou1.moveTo({
                offsetPosition:[0,-100,0],
                time:2000,
                complete: function () {
                    app.camera.flyTo({
                        'position':[XieJinJiGou1.center[0]-50,XieJinJiGou1.center[1]+50,XieJinJiGou1.center[2]],
                        'target': XieJinJiGou1.center,
                        "time": 1000
                    })
                }
            })
            XieJinJiGou_DiZuo.off("dblclick")
        } 
    })
}

//2.4固定刀检查
function GuDingDao(){
    var GuDingDao_DaoPian = equipment.subNodes[1791]
    var JianQieHuaChe = equipment.subNodes[536]
    var JIanQIeJi_XiangGai1 = equipment.subNodes[2181]
    var GuDingDao_step = 1

    app.camera.flyTo({
        'position':[GuDingDao_DaoPian.center[0]-30,GuDingDao_DaoPian.center[1]+30,GuDingDao_DaoPian.center[2]],
        'target': GuDingDao_DaoPian.center,
        "time": 1000
    })
    modelShow()
    JianQieHuaChe.visible = false
    JIanQIeJi_XiangGai1.visible = false
    //步骤1(拆除刀片)
    GuDingDao_DaoPian.on("dblclick",function(){
        if (GuDingDao_step == 1 && tool == null){
            GuDingDao_DaoPian.moveTo({
                offsetPosition:[-20,0,0],
                time:2000,
                complete: function () {
                    GuDingDao_DaoPian.visible = false
                    GuDingDao_step = 2
                    callFuncInMain("modelStep",2)
                    setTimeout('show(1791)',2000)
                    //步骤2(安装刀片)
                    GuDingDao_DaoPian.on("dblclick",function(){
                        if (GuDingDao_step == 2  && tool == null){
                            GuDingDao_DaoPian.moveTo({
                                offsetPosition:[20,0,0],
                                time:2000,
                                complete: function () {
                                    // DuanTouTuiLuoQiGang_step = 2
                                    // callFuncInMain("modelStep",2)
                                    setTimeout('show(536)',10000)
                                    setTimeout('show(2181)',10000)
                                }
                            })
                            GuDingDao_DaoPian.off("dblclick")
                        } 
                    })
                }
            })
            GuDingDao_DaoPian.off("dblclick")
        } 
    })
}

//2.4.4活动刀检查
function HuoDOngDao(){

}

//2.5剪切滑车检修
function JianQieHuaChe(){
    var JianQieHuaChe = equipment.subNodes[536]
    var JianQieHuaCheShiZiLuoShuan = equipment.subNodes[636]
    var JianQieHuaCheZhou = equipment.subNodes[591]
    var JianQieHuaCheLunZi01 = equipment.subNodes[551]
    var JianQieHuaCheLunZi02 = equipment.subNodes[556]
    var JianQieHuaCheLunZi03 = equipment.subNodes[561]
    var JianQieHuaCheLunZi04 = equipment.subNodes[566]
    var JianQieHuaCheLunZi05 = equipment.subNodes[571]
    var JianQieHuaCheLunZi06 = equipment.subNodes[576]
    var JianQieHuaCheLunZi07 = equipment.subNodes[581]
    var JianQieHuaCheLunZi08 = equipment.subNodes[586]
    var chelun1 = [JianQieHuaCheLunZi02,JianQieHuaCheLunZi03,JianQieHuaCheLunZi04,JianQieHuaCheLunZi04]
    var chelun2 = [JianQieHuaCheLunZi05,JianQieHuaCheLunZi06,JianQieHuaCheLunZi07,JianQieHuaCheLunZi08]
    var JianQieHuaChe_step = 1
    for (var i = 0; i < 4 ; i++){
        THING.Utils.convertObjectClass(chelun1[i],CheLun1)
        THING.Utils.convertObjectClass(chelun2[i],CheLun2)
        chelun1[i].type = "CheLun1"
    }
    var che1 = app.query('.CheLun1')
    var che2 = app.query('.CheLun2')
    console.log("输出",che1,che2,chelun1,chelun2)

    JianQieHuaChe.moveTo({
        offsetPosition:[0,50,0],
        time:1000,
        complete: function () {
            app.camera.flyTo({
                'position':[JianQieHuaChe.center[0]-30,JianQieHuaChe.center[1]+30,JianQieHuaChe.center[2]],
                'target': JianQieHuaChe.center,
                "time": 1000
            })
        }
    })
    modelShow()
    //步骤1(拆掉十字槽沉头螺钉)
    JianQieHuaCheShiZiLuoShuan.on("dblclick",function(){
        if (JianQieHuaChe_step == 1 && tool == "电动扳手"
            ){
                JianQieHuaCheShiZiLuoShuan.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    JianQieHuaCheShiZiLuoShuan.visible = false
                    XieJinJiGou_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            JianQieHuaCheShiZiLuoShuan.off("dblclick")
        } 
    })

    //步骤2(平移轴)
    JianQieHuaCheZhou.on("dblclick",function(){
        if (JianQieHuaChe_step == 2 && tool == null){
                JianQieHuaCheZhou.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    JianQieHuaCheZhou.visible = false
                    XieJinJiGou_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            JianQieHuaCheZhou.off("dblclick")
        } 
    })
    
}

//2.6压紧滑车检修
function YaJinHuaChe(){
    var JianQieHuaChe = equipment.subNodes[536]
    var JIanQIeJi_XiangGai1 = equipment.subNodes[2181]
    var YaJinHuaCheShangDaoGui = equipment.subNodes[826]
    var YaJinHuaChe_LuoShuan = equipment.subNodes[1651]
    var YaJinHuaChe_LuoShuan2 = equipment.subNodes[1676]
    var YaJinHuaChe_TouGai01 = equipment.subNodes[1636]
    var YaJinHuaChe_Zhou03 = equipment.subNodes[1631]
    var YaJinHuaChe_Zhou04 = equipment.subNodes[1646]
    var YaJinHuaChe = equipment.subNodes[1311]
    var YaJinHuaChe_ShiZILuoShuan01 = equipment.subNodes[1466]
    var YaJinHuaChe_ShiZILuoShuan02 = equipment.subNodes[1471]
    var YaJinHuaChe_ShiZILuoShuan03 = equipment.subNodes[1476]
    var YaJinHuaChe_ShiZILuoShuan04 = equipment.subNodes[1481]
    var YaJinHuaChe_LunZi02 = equipment.subNodes[1336]
    var a = [YaJinHuaChe_ShiZILuoShuan01,YaJinHuaChe_ShiZILuoShuan02,YaJinHuaChe_ShiZILuoShuan03,YaJinHuaChe_ShiZILuoShuan04]
    var YaJinHuaChe_step = 1
    YaJinHuaChe.moveTo({
        offsetPosition:[0,200,0],
        time:1000,
        complete:function(){
            app.camera.flyTo({
                'position':[YaJinHuaChe.center[0]-50,YaJinHuaChe.center[1]+50,YaJinHuaChe.center[2]],
                'target': YaJinHuaChe.center,
                "time": 1000
            })
        }
    })

    modelShow()
    JianQieHuaChe.visible = false
    JIanQIeJi_XiangGai1.visible = false
    YaJinHuaCheShangDaoGui.visible = false



    //步骤1(使用M8呆扳手拆掉4个螺栓)
    YaJinHuaChe_LuoShuan.on("dblclick",function(){
        if (YaJinHuaChe_step == 1 && tool == "M8呆扳手"
            ){
                YaJinHuaChe_LuoShuan.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_LuoShuan.visible = false
                    YaJinHuaChe_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            YaJinHuaChe_LuoShuan.off("dblclick")
        } 
    })

    //步骤2(拆除头盖)
    YaJinHuaChe_TouGai01.on("dblclick",function(){
        if (YaJinHuaChe_step == 2 && tool == null){
                YaJinHuaChe_TouGai01.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_TouGai01.visible = false
                    YaJinHuaChe_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            YaJinHuaChe_TouGai01.off("dblclick")
        } 
    })

    //步骤3(使用M12内六角扳手拆掉两个螺栓)
    YaJinHuaChe_LuoShuan2.on("dblclick",function(){
        if (YaJinHuaChe_step == 3 && tool == "M12内六角扳手"
            ){
                YaJinHuaChe_LuoShuan2.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_LuoShuan2.visible = false
                    YaJinHuaChe_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            YaJinHuaChe_LuoShuan2.off("dblclick")
        } 
    })

    //步骤4(拆除轴承3)
    YaJinHuaChe_Zhou03.on("dblclick",function(){
        if (YaJinHuaChe_step == 4 && tool == null){
            YaJinHuaChe_Zhou03.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_Zhou03.visible = false
                    YaJinHuaChe_step = 5
                    callFuncInMain("modelStep",5)
                }
            })
            YaJinHuaChe_Zhou03.off("dblclick")
        } 
    })

    //步骤5(拆除轴承4)
    YaJinHuaChe_Zhou04.on("dblclick",function(){
        if (YaJinHuaChe_step == 5 && tool == null){
            YaJinHuaChe_Zhou04.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_Zhou04.visible = false
                    YaJinHuaChe_step = 6
                    callFuncInMain("modelStep",6)
                }
            })
            YaJinHuaChe_Zhou04.off("dblclick")
        } 
    })

    //步骤6(使用十字螺丝刀拆除4个十字槽沉头螺钉)
    for (var i=0 ; i<4 ; i++){
        a[i].on("dblclick",function(){
            if(YaJinHuaChe_step == 6 && tool == "十字螺丝刀"
                ){
                YaJinHuaChe_ShiZILuoShuan(1)
                YaJinHuaChe_step = 7
                callFuncInMain("modelStep",7)
                // a[i].off("clcik")
            }
        })
    }
    
    //步骤7(拆除轮子)
    YaJinHuaChe_LunZi02.on("dblclick",function(){
        if (YaJinHuaChe_step == 7 && tool == null){
            YaJinHuaChe_LunZi02.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_LunZi02.visible = false

                    setTimeout("YaJinHuaCheBack(8)",2000)
                }
            })
            YaJinHuaChe_LunZi02.off("dblclick")
        } 
    })
}
function YaJinHuaChe_ShiZILuoShuan(ev){
    var YaJinHuaChe_ShiZILuoShuan01 = equipment.subNodes[1466]
    var YaJinHuaChe_ShiZILuoShuan02 = equipment.subNodes[1471]
    var YaJinHuaChe_ShiZILuoShuan03 = equipment.subNodes[1476]
    var YaJinHuaChe_ShiZILuoShuan04 = equipment.subNodes[1481]

    if (ev == 1){
        YaJinHuaChe_ShiZILuoShuan01.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                YaJinHuaChe_ShiZILuoShuan01.visible = false
            }
        })
        YaJinHuaChe_ShiZILuoShuan02.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                YaJinHuaChe_ShiZILuoShuan02.visible = false
            }
        })
        YaJinHuaChe_ShiZILuoShuan03.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                YaJinHuaChe_ShiZILuoShuan03.visible = false
            }
        })
        YaJinHuaChe_ShiZILuoShuan04.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                YaJinHuaChe_ShiZILuoShuan04.visible = false
            }
        })
    } else {
        YaJinHuaChe_ShiZILuoShuan01.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
        YaJinHuaChe_ShiZILuoShuan02.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
        YaJinHuaChe_ShiZILuoShuan03.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
        YaJinHuaChe_ShiZILuoShuan04.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
    }

}
function YaJinHuaCheBack(ev){
    var JianQieHuaChe = equipment.subNodes[536]
    var JIanQIeJi_XiangGai1 = equipment.subNodes[2181]
    var YaJinHuaCheShangDaoGui = equipment.subNodes[826]
    var YaJinHuaChe_LuoShuan = equipment.subNodes[1651]
    var YaJinHuaChe_LuoShuan2 = equipment.subNodes[1676]
    var YaJinHuaChe_TouGai01 = equipment.subNodes[1636]
    var YaJinHuaChe_Zhou03 = equipment.subNodes[1631]
    var YaJinHuaChe_Zhou04 = equipment.subNodes[1646]
    var YaJinHuaChe = equipment.subNodes[1311]
    var YaJinHuaChe_ShiZILuoShuan01 = equipment.subNodes[1466]
    var YaJinHuaChe_ShiZILuoShuan02 = equipment.subNodes[1471]
    var YaJinHuaChe_ShiZILuoShuan03 = equipment.subNodes[1476]
    var YaJinHuaChe_ShiZILuoShuan04 = equipment.subNodes[1481]
    var YaJinHuaChe_LunZi02 = equipment.subNodes[1336]
    var a = [YaJinHuaChe_ShiZILuoShuan01,YaJinHuaChe_ShiZILuoShuan02,YaJinHuaChe_ShiZILuoShuan03,YaJinHuaChe_ShiZILuoShuan04]
    var YaJinHuaChe_step = ev

    YaJinHuaChe_LunZi02.visible = true

    //步骤8(拆除轮子)
    YaJinHuaChe_LunZi02.on("dblclick",function(){
        if (YaJinHuaChe_step == 8 && tool == null){
            YaJinHuaChe_LunZi02.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_ShiZILuoShuan01.visible = true
                    YaJinHuaChe_ShiZILuoShuan02.visible = true
                    YaJinHuaChe_ShiZILuoShuan03.visible = true
                    YaJinHuaChe_ShiZILuoShuan04.visible = true
                    YaJinHuaChe_step = 9
                    callFuncInMain("modelStep",9)
                }
            })
            YaJinHuaChe_LunZi02.off("dblclick")
        } 
    })

    //步骤9(使用十字螺丝刀安装4个十字槽沉头螺钉)
    for (var i=0 ; i<4 ; i++){
        a[i].on("dblclick",function(){
            if(YaJinHuaChe_step == 9 && tool == "十字螺丝刀"
                ){
                YaJinHuaChe_ShiZILuoShuan(2)
                YaJinHuaChe_step = 10
                callFuncInMain("modelStep",10)
                // a[i].off("clcik")
                YaJinHuaChe_Zhou04.visible = true
            }
        })
    }

    //步骤10(安装轴承4)
    YaJinHuaChe_Zhou04.on("dblclick",function(){
        if (YaJinHuaChe_step == 10 && tool == null){
            YaJinHuaChe_Zhou04.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_Zhou03.visible = true
                    YaJinHuaChe_step = 11
                    callFuncInMain("modelStep",11)
                }
            })
            YaJinHuaChe_Zhou04.off("dblclick")
        } 
    })

    //步骤11(拆除轴承3)
    YaJinHuaChe_Zhou03.on("dblclick",function(){
        if (YaJinHuaChe_step == 11 && tool == null){
            YaJinHuaChe_Zhou03.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_LuoShuan2.visible = true
                    YaJinHuaChe_step = 12
                    callFuncInMain("modelStep",12)
                }
            })
            YaJinHuaChe_Zhou03.off("dblclick")
        } 
    })

    //步骤12(使用M12内六角扳手拆掉两个螺栓)
    YaJinHuaChe_LuoShuan2.on("dblclick",function(){
        if (YaJinHuaChe_step == 12 && tool == "M12内六角扳手"
            ){
                YaJinHuaChe_LuoShuan2.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_TouGai01.visible = true
                    YaJinHuaChe_step = 13
                    callFuncInMain("modelStep",13)
                }
            })
            YaJinHuaChe_LuoShuan2.off("dblclick")
        } 
    })

    //步骤13(拆除头盖)
    YaJinHuaChe_TouGai01.on("dblclick",function(){
        if (YaJinHuaChe_step == 13 && tool == null){
                YaJinHuaChe_TouGai01.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe_LuoShuan.visible = true
                    YaJinHuaChe_step = 14
                    callFuncInMain("modelStep",14)
                }
            })
            YaJinHuaChe_TouGai01.off("dblclick")
        } 
    })

    //步骤14(使用M8呆扳手拆掉4个螺栓)
    YaJinHuaChe_LuoShuan.on("dblclick",function(){
        if (YaJinHuaChe_step == 14 && tool == "M8呆扳手"
            ){
                YaJinHuaChe_LuoShuan.moveTo({
                offsetPosition:[0,-30,0],
                time:2000,
                complete: function () {
                    YaJinHuaChe.moveTo({
                        offsetPosition:[0,-200,0],
                        time:1000,
                    })
                }
            })
            YaJinHuaChe_LuoShuan.off("dblclick")
        } 
    })







    
}

//3.1气缸检查
function QiGang(){
    modelShow()
    var QiGang06 = equipment.subNodes[3731]
    var QiGangLuoShuan05 = equipment.subNodes[3681]
    var QiGangLuoShuan06 = equipment.subNodes[3686]
    var QiGangLuoShuan07 = equipment.subNodes[3691]
    var QiGangLuoShuan08 = equipment.subNodes[3696]
    var QiGang_HOuDuanGai = equipment.subNodes[3721]
    var QiGang_NeiBuGanHuoSai = equipment.subNodes[3741]
    var JIng= equipment.subNodes[366]
    var QiGang_step = 1
    var a = [QiGangLuoShuan05,QiGangLuoShuan06,QiGangLuoShuan07,QiGangLuoShuan08]


    app.camera.flyTo({
        'position':[QiGang_NeiBuGanHuoSai.center[0],QiGang_NeiBuGanHuoSai.center[1]+50,QiGang_NeiBuGanHuoSai.center[2]+50],
        'target': QiGang_NeiBuGanHuoSai.center,
        "time": 1000
    })
    modelShow()
    JIng.visible = false
    //步骤1(拆除连接头)
    QiGang06.on("dblclick",function(){
        if (QiGang_step == 1 && tool == null){
                QiGang06.moveTo({
                offsetPosition:[0,0,-30],
                time:2000,
                complete: function () {
                    QiGang06.visible = false
                    QiGang_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            QiGang06.off("dblclick")
        } 
    })

    //步骤2(拆除螺栓)
    for (var i=0 ; i<4 ; i++){
        a[i].on("dblclick",function(){
            if(QiGang_step == 2 && tool == "十字螺丝刀"
                ){
                QiGangLuoShuan(1)
                QiGang_step = 3
                callFuncInMain("modelStep",3)
                // a[i].off("clcik")
            }
        })
    }

    //步骤3(拆除后盖板)
    QiGang_HOuDuanGai.on("dblclick",function(){
        if (QiGang_step == 3 && tool == null){
            QiGang_HOuDuanGai.moveTo({
                offsetPosition:[-30,0,0],
                time:2000,
                complete: function () {
                    QiGang_HOuDuanGai.visible = false
                    QiGang_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            QiGang_HOuDuanGai.off("dblclick")
        } 
    })
    
    //步骤4(拆除活塞)
    QiGang_NeiBuGanHuoSai.on("dblclick",function(){
        if (QiGang_step == 4 && tool == null){
            QiGang_NeiBuGanHuoSai.moveTo({
                offsetPosition:[-350,0,0],
                time:2000,
                complete: function () {
                    QiGang_NeiBuGanHuoSai.visible = false
                    QiGang_step = 5
                    callFuncInMain("modelStep",5)
                    setTimeout("show(3741)",2000)
                    //步骤5(安装活塞)
                    QiGang_NeiBuGanHuoSai.on("dblclick",function(){
                        if (QiGang_step == 5 && tool == null){
                            QiGang_NeiBuGanHuoSai.moveTo({
                                offsetPosition:[350,0,0],
                                time:2000,
                                complete: function () {
                                    QiGang_HOuDuanGai.visible = true
                                    QiGang_step = 6
                                    callFuncInMain("modelStep",6)
                                    //步骤6(安装后盖板)
                                    QiGang_HOuDuanGai.on("dblclick",function(){
                                        if (QiGang_step == 6 && tool == null){
                                            QiGang_HOuDuanGai.moveTo({
                                                offsetPosition:[30,0,0],
                                                time:2000,
                                                complete: function () {
                                                    QiGangLuoShuan05.visible = true 
                                                    QiGangLuoShuan06.visible = true 
                                                    QiGangLuoShuan07.visible = true 
                                                    QiGangLuoShuan08.visible = true 
                                                    QiGang_step = 7
                                                    callFuncInMain("modelStep",7)
                                                    //步骤7(安装螺栓)
                                                    for (var i=0 ; i<4 ; i++){
                                                        a[i].on("dblclick",function(){
                                                            if(QiGang_step == 7 && tool == "十字螺丝刀"){
                                                                QiGangLuoShuan(2)
                                                                QiGang_step = 8
                                                                callFuncInMain("modelStep",8)
                                                                // a[i].off("clcik")
                                                                QiGang06.visible = true
                                                            }
                                                        })
                                                    }
                                                    //步骤8(安装连接头)
                                                    QiGang06.on("dblclick",function(){
                                                        if (QiGang_step == 8 && tool == null){
                                                                QiGang06.moveTo({
                                                                offsetPosition:[0,0,30],
                                                                time:2000,
                                                                complete: function () {
                                                                    setTimeout("show(366)",10000)
                                                                    // QiGang06.visible = false
                                                                    // QiGang_step = 2
                                                                    // callFuncInMain("modelStep",2)
                                                                }
                                                            })
                                                            QiGang06.off("dblclick")
                                                        } 
                                                    })
                                                }
                                            })
                                            QiGang_HOuDuanGai.off("dblclick")
                                        }
                                    })
                                }
                            })
                            QiGang_NeiBuGanHuoSai.off("dblclick")
                        } 
                    })
                }
            })
            QiGang_NeiBuGanHuoSai.off("dblclick")
        } 
    })
}
function QiGangLuoShuan(ev){
    var QiGangLuoShuan05 = equipment.subNodes[3681]
    var QiGangLuoShuan06 = equipment.subNodes[3686]
    var QiGangLuoShuan07 = equipment.subNodes[3691]
    var QiGangLuoShuan08 = equipment.subNodes[3696]

    if (ev == 1){
        QiGangLuoShuan05.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                QiGangLuoShuan05.visible = false
            }
        })
        QiGangLuoShuan06.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                QiGangLuoShuan06.visible = false
            }
        })
        QiGangLuoShuan07.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                QiGangLuoShuan07.visible = false
            }
        })
        QiGangLuoShuan08.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                QiGangLuoShuan08.visible = false
            }
        })
    } else {
        QiGangLuoShuan05.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
        QiGangLuoShuan06.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
        QiGangLuoShuan07.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
        QiGangLuoShuan08.moveTo({
            offsetPosition:[30,0,0],
            time:2000,
        })
    }
}

//4.1集成缸检查
function YeYaQuDongZhuangZhi(){

    var YeYaQuDongZhuangZhi_FangSongLuoMu = equipment.subNodes[5993]
    var YeYaQuDongZhuangZhi_SuoJinLuoMu = equipment.subNodes[6058]
    var YeYaQuDongZhuangZhi_YaJinYouGang = equipment.subNodes[5851]
    var YeYaQuDongZhuangZhi_WeiXiuZuJian = equipment.subNodes[5896]
    var YeYaQuDongZhuangZhi_WeiXiuZuJianBB = equipment.subNodes[5856]
    var YeYaQuDongZhuangZhi_LIanJieBan = equipment.subNodes[5846]
    var YeYaQuDongZhuangZhi_JianQieYouGang = equipment.subNodes[5841]
    var YeYaQuDongZhuangZhi_LuoShuanB = equipment.subNodes[5691]
    var YeYaQuDongZhuangZhi_LuoShuanA = equipment.subNodes[6314]
    var YeYaQuDongZhuangZhi_XingChnegKaiGuanBB = equipment.subNodes[6190]
    var YeYaQuDongZhuangZhi_XingChnegKaiGuanAA = equipment.subNodes[6207]
    var a = [YeYaQuDongZhuangZhi_WeiXiuZuJian,YeYaQuDongZhuangZhi_WeiXiuZuJianBB,YeYaQuDongZhuangZhi_YaJinYouGang,YeYaQuDongZhuangZhi_LIanJieBan,YeYaQuDongZhuangZhi_JianQieYouGang,
        YeYaQuDongZhuangZhi_LuoShuanB,YeYaQuDongZhuangZhi_LuoShuanA,YeYaQuDongZhuangZhi_XingChnegKaiGuanBB,YeYaQuDongZhuangZhi_XingChnegKaiGuanAA]
    var b = [5851,5896,5856,5846,5841,5691,6314,6190,6207]
    var YeYaQuDongZhuangZhi_step = 1

    app.camera.flyTo({
        'position':[YeYaQuDongZhuangZhi_YaJinYouGang.center[0]-200,YeYaQuDongZhuangZhi_YaJinYouGang.center[1]+200,YeYaQuDongZhuangZhi_YaJinYouGang.center[2]],
        'target': YeYaQuDongZhuangZhi_YaJinYouGang.center,
        "time": 1000
    })
    modelShow()
    //步骤1(拆除放缩螺母)
    YeYaQuDongZhuangZhi_FangSongLuoMu.on("dblclick",function(){
        if (YeYaQuDongZhuangZhi_step == 1 && tool == null){
            YeYaQuDongZhuangZhi_FangSongLuoMu.moveTo({
                offsetPosition:[0,0,-30],
                time:2000,
                complete: function () {
                    YeYaQuDongZhuangZhi_FangSongLuoMu.visible = false
                    YeYaQuDongZhuangZhi_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            YeYaQuDongZhuangZhi_FangSongLuoMu.off("dblclick")
        } 
    })

    //步骤2(拆除收紧螺母)
    YeYaQuDongZhuangZhi_SuoJinLuoMu.on("dblclick",function(){
        if (YeYaQuDongZhuangZhi_step == 2 && tool == null){
            YeYaQuDongZhuangZhi_SuoJinLuoMu.moveTo({
                offsetPosition:[0,0,-30],
                time:2000,
                complete: function () {
                    YeYaQuDongZhuangZhi_SuoJinLuoMu.visible = false
                    YeYaQuDongZhuangZhi_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            YeYaQuDongZhuangZhi_SuoJinLuoMu.off("dblclick")
        } 
    })

    //步骤3、4(平移平衡缸)
    for (var i=0; i < a.length ; i++){
        a[i].on("dblclick",function(){
            if(YeYaQuDongZhuangZhi_step == 3 && tool == null
                ){
                WeiXiuZuJian(1)
                YeYaQuDongZhuangZhi_step = 4
                callFuncInMain("modelStep",4)
                // a[i].off("clcik")
            } else if(YeYaQuDongZhuangZhi_step == 4 && tool == null){
                WeiXiuZuJian(2)
                YeYaQuDongZhuangZhi_step = 5
                callFuncInMain("modelStep",5)
                //步骤5(安装收紧螺母)
                YeYaQuDongZhuangZhi_SuoJinLuoMu.on("dblclick",function(){
                    if (YeYaQuDongZhuangZhi_step == 5 && tool == null){
                        YeYaQuDongZhuangZhi_SuoJinLuoMu.moveTo({
                            offsetPosition:[0,0,30],
                            time:2000,
                            complete: function () {
                                YeYaQuDongZhuangZhi_FangSongLuoMu.visible = true
                                YeYaQuDongZhuangZhi_step = 6
                                callFuncInMain("modelStep",6)
                            }
                        })
                        YeYaQuDongZhuangZhi_SuoJinLuoMu.off("dblclick")
                    } 
                })

                //步骤6(安装放缩螺母)
                YeYaQuDongZhuangZhi_FangSongLuoMu.on("dblclick",function(){
                    if (YeYaQuDongZhuangZhi_step == 6 && tool == null){
                        YeYaQuDongZhuangZhi_FangSongLuoMu.moveTo({
                            offsetPosition:[0,0,30],
                            time:2000,
                            complete: function () {
                                // YeYaQuDongZhuangZhi_FangSongLuoMu.visible = false
                                // YeYaQuDongZhuangZhi_step = 2
                                // callFuncInMain("modelStep",2)
                            }
                        })
                        YeYaQuDongZhuangZhi_FangSongLuoMu.off("dblclick")
                    } 
                })
            }
        })
    }
}
function WeiXiuZuJian(ev){
    var YeYaQuDongZhuangZhi_WeiXiuZuJian = equipment.subNodes[5896]
    var YeYaQuDongZhuangZhi_WeiXiuZuJianBB = equipment.subNodes[5856]
    var YeYaQuDongZhuangZhi_YaJinYouGang = equipment.subNodes[5851]
    var YeYaQuDongZhuangZhi_LIanJieBan = equipment.subNodes[5846]
    var YeYaQuDongZhuangZhi_JianQieYouGang = equipment.subNodes[5841]
    var YeYaQuDongZhuangZhi_LuoShuanB = equipment.subNodes[5691]
    var YeYaQuDongZhuangZhi_LuoShuanA = equipment.subNodes[6314]
    var YeYaQuDongZhuangZhi_XingChnegKaiGuanBB = equipment.subNodes[6190]
    var YeYaQuDongZhuangZhi_XingChnegKaiGuanAA = equipment.subNodes[6207]
    var YeYaQuDongZhuangZhi_SuoJinLuoMu = equipment.subNodes[6058]
    if( ev ==1 ){
        YeYaQuDongZhuangZhi_WeiXiuZuJian.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_WeiXiuZuJianBB.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_YaJinYouGang.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_LIanJieBan.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_JianQieYouGang.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_LuoShuanB.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_LuoShuanA.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_XingChnegKaiGuanBB.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_XingChnegKaiGuanAA.moveTo({
            offsetPosition:[0,0,-100],
            time:2000,
        })
    } else if(ev == 2){
        YeYaQuDongZhuangZhi_WeiXiuZuJian.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
            complete:function(){
                YeYaQuDongZhuangZhi_SuoJinLuoMu.visible = true
            }
        })
        YeYaQuDongZhuangZhi_WeiXiuZuJianBB.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_YaJinYouGang.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_LIanJieBan.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_JianQieYouGang.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_LuoShuanB.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_LuoShuanA.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_XingChnegKaiGuanBB.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
        YeYaQuDongZhuangZhi_XingChnegKaiGuanAA.moveTo({
            offsetPosition:[0,0,100],
            time:2000,
        })
    }
}



//接送料机检维修的操作步骤
//2.1推链动力组件检查/检修
function DianJI1(){

    var DianJi_LuoShuanC = equipment.subNodes[3856]
    var DianJI = equipment.subNodes[3911]
    var DianJi_LuoShuanA = equipment.subNodes[3806]
    var DianJi_ZhiJia1 = equipment.subNodes[3971]
    var DianJi_LuoShuanD = equipment.subNodes[3881]
    var JianSuQi = equipment.subNodes[3921]
    var Dianji_DianJiZhouTao = equipment.subNodes[3916]
    var Dianji_DianJiLianZhouQi = equipment.subNodes[3926]
    var DianJi_LuoShuan = equipment.subNodes[3941]
    var Dianji_DianJiLianZhouQi02 = equipment.subNodes[3931]
    var JianSuQiZhouTao = equipment.subNodes[3906]
    var a = [Dianji_DianJiZhouTao,Dianji_DianJiLianZhouQi,DianJi_LuoShuan,Dianji_DianJiLianZhouQi02,JianSuQiZhouTao]
    var DianJI1_step = 1

    app.camera.flyTo({
        'position':[DianJI.center[0]-100,DianJI.center[1]+100,DianJI.center[2]],
        'target': DianJI.center,
        "time": 1000
    })
    modelShow()
    //步骤1(使用M10呆扳手拆除螺母)
    DianJi_LuoShuanC.on("dblclick",function(){
        if (DianJI1_step == 1 && tool == "M10呆扳手"
            ){
            DianJi_LuoShuanC.moveTo({
                offsetPosition:[0,0,-30],
                time:2000,
                complete: function () {
                    DianJi_LuoShuanC.visible = false
                    DianJI1_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            DianJi_LuoShuanC.off("dblclick")
        } 
    })

    //步骤2(拆卸电机)
    DianJI.on("dblclick",function(){
        if (DianJI1_step == 2 && tool == null){
                DianJI.moveTo({
                offsetPosition:[0,0,-30],
                time:2000,
                complete: function () {
                    DianJI.visible = false
                    DianJI1_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            DianJI.off("dblclick")
        } 
    })

    //步骤3(拆卸螺栓)
    DianJi_LuoShuanA.on("dblclick",function(){
        if (DianJI1_step == 3 && tool == null){
                DianJi_LuoShuanA.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    DianJi_LuoShuanA.visible = false
                    DianJI1_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            DianJi_LuoShuanA.off("dblclick")
        } 
    })

    //步骤4(拆卸支架)
    DianJi_ZhiJia1.on("dblclick",function(){
        if (DianJI1_step == 4 && tool == null){
            DianJi_ZhiJia1.moveTo({
                offsetPosition:[0,0,-30],
                time:2000,
                complete: function () {
                    DianJi_ZhiJia1.visible = false
                    DianJI1_step = 5
                    callFuncInMain("modelStep",5)
                }
            })
            DianJi_ZhiJia1.off("dblclick")
        } 
    })

    //步骤5(拆卸联轴器)
    for (var i=0 ; i < a.length ; i++){
        a[i].on("dblclick",function(){
            if(DianJI1_step == 5){
                DianJiLianZhouQi(1)
                DianJI1_step = 6
                callFuncInMain("modelStep",6)
            }
        })
    }

    //步骤6(拆卸螺栓)
    DianJi_LuoShuanD.on("dblclick",function(){
        if (DianJI1_step == 6 && tool == null){
            DianJi_LuoShuanD.moveTo({
                offsetPosition:[0,0,-5],
                time:2000,
                complete: function () {
                    DianJi_LuoShuanD.visible = false
                    DianJI1_step = 7
                    callFuncInMain("modelStep",7)
                }
            })
            DianJi_LuoShuanD.off("dblclick")
        } 
    })

    //步骤7(拆卸减速器)
    JianSuQi.on("dblclick",function(){
        if (DianJI1_step == 7 && tool == null){
            JianSuQi.moveTo({
                offsetPosition:[0,0,-30],
                time:2000,
                complete: function () {
                    JianSuQi.visible = false
                    DianJI1_step = 8
                    callFuncInMain("modelStep",8)
                    setTimeout("show(3921)",2000)
                    //步骤8(安装减速器)
                    JianSuQi.on("dblclick",function(){
                        if (DianJI1_step == 8 && tool == null){
                            JianSuQi.moveTo({
                                offsetPosition:[0,0,30],
                                time:2000,
                                complete: function () {
                                    DianJi_LuoShuanD.visible = true
                                    DianJI1_step = 9
                                    callFuncInMain("modelStep",9)
                                }
                            })
                            JianSuQi.off("dblclick")
                        } 
                    })

                    //步骤9(拆卸螺栓)
                    DianJi_LuoShuanD.on("dblclick",function(){
                        if (DianJI1_step == 9 && tool == null){
                            DianJi_LuoShuanD.moveTo({
                                offsetPosition:[0,0,5],
                                time:2000,
                                complete: function () {
                                    Dianji_DianJiZhouTao.visible = true
                                    Dianji_DianJiLianZhouQi.visible = true
                                    DianJi_LuoShuan.visible = true
                                    Dianji_DianJiLianZhouQi02.visible = true
                                    JianSuQiZhouTao.visible = true
                                    DianJI1_step = 10
                                    callFuncInMain("modelStep",10)
                                }
                            })
                            DianJi_LuoShuanD.off("dblclick")
                        } 
                    })

                    //步骤10(安装联轴器)
                    for (var i=0 ; i < a.length ; i++){
                        a[i].on("dblclick",function(){
                            if(DianJI1_step == 10 && tool == null){
                                DianJiLianZhouQi(2)
                                DianJI1_step = 11
                                callFuncInMain("modelStep",11)
                            }
                        })
                    }

                    //步骤11(安装支架)
                    DianJi_ZhiJia1.on("dblclick",function(){
                        if (DianJI1_step == 11 && tool == null){
                            DianJi_ZhiJia1.moveTo({
                                offsetPosition:[0,0,30],
                                time:2000,
                                complete: function () {
                                    DianJi_LuoShuanA.visible = true
                                    DianJI1_step = 12
                                    callFuncInMain("modelStep",12)
                                }
                            })
                            DianJi_ZhiJia1.off("dblclick")
                        } 
                    })

                    //步骤12(安装螺栓)
                    DianJi_LuoShuanA.on("dblclick",function(){
                        if (DianJI1_step == 12 && tool == null){
                                DianJi_LuoShuanA.moveTo({
                                offsetPosition:[0,-30,0],
                                time:2000,
                                complete: function () {
                                    DianJI.visible = true
                                    DianJI1_step = 13
                                    callFuncInMain("modelStep",13)
                                }
                            })
                            DianJi_LuoShuanA.off("dblclick")
                        } 
                    })

                    //步骤13(安装电机)
                    DianJI.on("dblclick",function(){
                        if (DianJI1_step == 13 && tool == null){
                                DianJI.moveTo({
                                offsetPosition:[0,0,30],
                                time:2000,
                                complete: function () {
                                    DianJi_LuoShuanC.visible = true
                                    DianJI1_step = 14
                                    callFuncInMain("modelStep",14)
                                }
                            })
                            DianJI.off("dblclick")
                        } 
                    })

                    //步骤14(使用M10呆扳手拆除螺母)
                    DianJi_LuoShuanC.on("dblclick",function(){
                        if (DianJI1_step == 14 && tool == "M10呆扳手"
                            ){
                            DianJi_LuoShuanC.moveTo({
                                offsetPosition:[0,0,30],
                                time:2000,
                                complete: function () {
                                    // DianJi_LuoShuanC.visible = false
                                    // DianJI1_step = 2
                                    // callFuncInMain("modelStep",2)
                                }
                            })
                            DianJi_LuoShuanC.off("dblclick")
                        } 
                    })
                                }
                            })
                            JianSuQi.off("dblclick")
                        } 
                    })
}
function DianJiLianZhouQi(ev){
    var DianJi_ZhiJia1 = equipment.subNodes[3971]
    var Dianji_DianJiZhouTao = equipment.subNodes[3916]
    var Dianji_DianJiLianZhouQi = equipment.subNodes[3926]
    var DianJi_LuoShuan = equipment.subNodes[3941]
    var Dianji_DianJiLianZhouQi02 = equipment.subNodes[3931]
    var JianSuQiZhouTao = equipment.subNodes[3906]
    if( ev ==1 ){
        Dianji_DianJiZhouTao.moveTo({
            offsetPosition:[0,0,-30],
            time:2000,
            complete:function(){
                Dianji_DianJiZhouTao.visible = false
            }
        })
        Dianji_DianJiLianZhouQi.moveTo({
            offsetPosition:[0,0,-30],
            time:2000,
            complete:function(){
                Dianji_DianJiLianZhouQi.visible = false
            }
        })
        DianJi_LuoShuan.moveTo({
            offsetPosition:[0,0,-30],
            time:2000,
            complete:function(){
                DianJi_LuoShuan.visible = false
            }
        })
        Dianji_DianJiLianZhouQi02.moveTo({
            offsetPosition:[0,0,-30],
            time:2000,
            complete:function(){
                Dianji_DianJiLianZhouQi02.visible = false
            }
        })
        JianSuQiZhouTao.moveTo({
            offsetPosition:[0,0,-30],
            time:2000,
            complete:function(){
                JianSuQiZhouTao.visible = false
            }
        })
    } else if(ev == 2){
        Dianji_DianJiZhouTao.moveTo({
            offsetPosition:[0,0,30],
            time:2000,
            complete:function(){
                DianJi_ZhiJia1.visible = true
            }
        })
        Dianji_DianJiLianZhouQi.moveTo({
            offsetPosition:[0,0,30],
            time:2000,
        })
        DianJi_LuoShuan.moveTo({
            offsetPosition:[0,0,30],
            time:2000,
        })
        Dianji_DianJiLianZhouQi02.moveTo({
            offsetPosition:[0,0,30],
            time:2000,
        })
        JianSuQiZhouTao.moveTo({
            offsetPosition:[0,0,30],
            time:2000,
        })
    }
}

//2.2穿墙轴组件
function ChuanQIangZuJian02(){

}

//2.3推送料仓检查
//快拆机构
function KuaiChaiJiGou(){
    var KuaiChaiJIeGou_ZhiJinLuoDing = equipment.subNodes[4886]
    var KuaiChaiJIeGou_ShouBing = equipment.subNodes[4861]
    var KuaiChaiJIeGou_XiaoTao = equipment.subNodes[4866]
    var KuaiChaiJIeGou_TanHuang = equipment.subNodes[4871]
    var KuaiChaiJiGou_step = 1

    app.camera.flyTo({
        'position':[KuaiChaiJIeGou_ShouBing.center[0]-50,KuaiChaiJIeGou_ShouBing.center[1]+50,KuaiChaiJIeGou_ShouBing.center[2]],
        'target': KuaiChaiJIeGou_ShouBing.center,
        "time": 1000
    })
    modelShow()
    //步骤1(螺丝刀拆除螺钉)
    KuaiChaiJIeGou_ZhiJinLuoDing.on("dblclick",function(){
        if (KuaiChaiJiGou_step == 1 && tool == "螺丝刀"
            ){
                KuaiChaiJIeGou_ZhiJinLuoDing.moveTo({
                offsetPosition:[0,0,10],
                time:2000,
                complete: function () {
                    KuaiChaiJIeGou_ZhiJinLuoDing.visible = false
                    KuaiChaiJiGou_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            KuaiChaiJIeGou_ZhiJinLuoDing.off("dblclick")
        } 
    })

    //步骤2(取下手柄)
    KuaiChaiJIeGou_ShouBing.on("dblclick",function(){
        if (KuaiChaiJiGou_step == 2 && tool == null){
            KuaiChaiJIeGou_ShouBing.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    KuaiChaiJIeGou_ShouBing.visible = false
                    KuaiChaiJiGou_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            KuaiChaiJIeGou_ShouBing.off("dblclick")
        } 
    })

    //步骤3()
    KuaiChaiJIeGou_XiaoTao.on("dblclick",function(){
        if (KuaiChaiJiGou_step == 3 && tool == null){
            KuaiChaiJIeGou_XiaoTao.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    KuaiChaiJIeGou_XiaoTao.visible = false
                    KuaiChaiJiGou_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            KuaiChaiJIeGou_XiaoTao.off("dblclick")
        } 
    })

    //步骤4(取下弹簧)
    KuaiChaiJIeGou_TanHuang.on("dblclick",function(){
        if (KuaiChaiJiGou_step == 4 && tool == null){
            KuaiChaiJIeGou_TanHuang.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    KuaiChaiJIeGou_TanHuang.visible = false
                    KuaiChaiJiGou_step = 5
                    callFuncInMain("modelStep",5)
                    setTimeout("show(4871)",2000)
                    //步骤5(安装弹簧)
                    KuaiChaiJIeGou_TanHuang.on("dblclick",function(){
                        if (KuaiChaiJiGou_step == 5 && tool == null){
                            KuaiChaiJIeGou_TanHuang.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    KuaiChaiJIeGou_XiaoTao.visible = true
                                    KuaiChaiJiGou_step = 6
                                    callFuncInMain("modelStep",6)
                                }
                            })
                            KuaiChaiJIeGou_TanHuang.off("dblclick")
                        } 
                    })
                
                    //步骤6()
                    KuaiChaiJIeGou_XiaoTao.on("dblclick",function(){
                        if (KuaiChaiJiGou_step == 6 && tool == null){
                            KuaiChaiJIeGou_XiaoTao.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    KuaiChaiJIeGou_ShouBing.visible = true
                                    KuaiChaiJiGou_step = 7
                                    callFuncInMain("modelStep",7)
                                }
                            })
                            KuaiChaiJIeGou_XiaoTao.off("dblclick")
                        } 
                    })

                    //步骤7(取下手柄)
                    KuaiChaiJIeGou_ShouBing.on("dblclick",function(){
                        if (KuaiChaiJiGou_step == 7 && tool == null){
                            KuaiChaiJIeGou_ShouBing.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    KuaiChaiJIeGou_ZhiJinLuoDing.visible = true
                                    KuaiChaiJiGou_step = 8
                                    callFuncInMain("modelStep",8)
                                }
                            })
                            KuaiChaiJIeGou_ShouBing.off("dblclick")
                        } 
                    })
                
                    //步骤8(螺丝刀拆除螺钉)
                    KuaiChaiJIeGou_ZhiJinLuoDing.on("dblclick",function(){
                        if (KuaiChaiJiGou_step == 8 && tool == "螺丝刀"
                            ){
                                KuaiChaiJIeGou_ZhiJinLuoDing.moveTo({
                                offsetPosition:[0,0,-10],
                                time:2000,
                                complete: function () {
                                    // KuaiChaiJIeGou_ZhiJinLuoDing.visible = false
                                    KuaiChaiJiGou_step = 9
                                    callFuncInMain("modelStep",9)
                                    TuiSongLiaoCang(KuaiChaiJiGou_step)
                                }
                            })
                            KuaiChaiJIeGou_ZhiJinLuoDing.off("dblclick")
                        } 
                    })
                }
            })
            KuaiChaiJIeGou_TanHuang.off("dblclick")
        } 
    })
}
//推送料仓 
function TuiSongLiaoCang(ev){
    var TuiSongLiaoCang_GengHuanGaiBan = equipment.subNodes[4551]
    var TuiTouZuJian01 = equipment.subNodes[4651]
    var ZuJianTuiTou_LunZi = equipment.subNodes[4731]
    var ZuJianTuiTou_Zhou = equipment.subNodes[4766]
    var a = [TuiTouZuJian01,ZuJianTuiTou_LunZi,ZuJianTuiTou_Zhou]
    var TuiTouZuJian02 = equipment.subNodes[4656]
    var TuiTouXiaoChe_LunZi = equipment.subNodes[4661]
    var TuiTouXiaoChe_Zhou = equipment.subNodes[4706]
    var b = [TuiTouZuJian02,TuiTouXiaoChe_LunZi,TuiTouXiaoChe_Zhou]
    var KuaiChaiJiGou_step = ev

    app.camera.flyTo({
        'position':[TuiSongLiaoCang_GengHuanGaiBan.center[0],TuiSongLiaoCang_GengHuanGaiBan.center[1]+50,TuiSongLiaoCang_GengHuanGaiBan.center[2]-50],
        'target': TuiSongLiaoCang_GengHuanGaiBan.center,
        "time": 1000
    })

    //步骤1(移走盖板)
    TuiSongLiaoCang_GengHuanGaiBan.on("dblclick",function(){
        if (KuaiChaiJiGou_step == 9 && tool == "螺丝刀"
            ){
                TuiSongLiaoCang_GengHuanGaiBan.moveTo({
                offsetPosition:[0,30,0],
                time:2000,
                complete: function () {
                    TuiSongLiaoCang_GengHuanGaiBan.visible = false
                    KuaiChaiJiGou_step = 10
                    callFuncInMain("modelStep",10)
                }
            })
            TuiSongLiaoCang_GengHuanGaiBan.off("dblclick")
        } 
    })

    //第二步 移动推头组件
    for(var i=0 ; i<a.length ; i++){
        a[i].on("dblclick",function(){
            if(KuaiChaiJiGou_step == 10 && tool == null){
                KuaiChaiJiGou_step = 11
                callFuncInMain("modelStep",11)
                TuiTouZuJian(1)
            }
        })
    }
    //步骤3 移动小车
    for(var i=0 ; i<b.length ; i++){
        b[i].on("dblclick",function(){
            if(KuaiChaiJiGou_step == 11 && tool == null){
                setTimeout(function(){
                    KuaiChaiJiGou_step = 12
                },2000)
                callFuncInMain("modelStep",12)
                TuiTouZuJian(3)
            }
        })
    }
    
    //步骤4 移动小车
    for(var i=0 ; i<b.length ; i++){
        b[i].on("dblclick",function(){
            if(KuaiChaiJiGou_step == 12 && tool == null){
                KuaiChaiJiGou_step = 13
                callFuncInMain("modelStep",13)
                TuiTouZuJian(4)
            }
        })
    }
    //步骤5 移动推头组件
    for(var i=0 ; i<a.length ; i++){
        a[i].on("dblclick",function(){
            if(KuaiChaiJiGou_step == 13 && tool == null){
                KuaiChaiJiGou_step = 14
                callFuncInMain("modelStep",14)
                TuiTouZuJian(2)
            }
        })
    }


}     
function TuiTouZuJian(ev){
    var TuiTouZuJian01 = equipment.subNodes[4651]
    var ZuJianTuiTou_LunZi = equipment.subNodes[4731]
    var ZuJianTuiTou_Zhou = equipment.subNodes[4766]
    var TuiTouZuJian02 = equipment.subNodes[4656]
    var TuiTouXiaoChe_LunZi = equipment.subNodes[4661]
    var TuiTouXiaoChe_Zhou = equipment.subNodes[4706]
    var TuiSongLiaoCang_GengHuanGaiBan = equipment.subNodes[4551]
    if(ev == 1){
        TuiTouZuJian01.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                TuiTouZuJian01.moveTo({
                    offsetPosition:[0,50,0],
                    time:2000,
                    complete:function(){
                        TuiTouZuJian01.visible = false
                    }
                })
            }
        })
        ZuJianTuiTou_LunZi.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                ZuJianTuiTou_LunZi.moveTo({
                    offsetPosition:[0,50,0],
                    time:2000,
                    complete:function(){
                        ZuJianTuiTou_LunZi.visible = false
                    }
                })
            }
        })
        ZuJianTuiTou_Zhou.moveTo({
            offsetPosition:[-30,0,0],
            time:2000,
            complete:function(){
                ZuJianTuiTou_Zhou.moveTo({
                    offsetPosition:[0,50,0],
                    time:2000,
                    complete:function(){
                        ZuJianTuiTou_Zhou.visible = false
                    }
                })
            }
        })
    } else if(ev == 2){
        TuiTouZuJian01.moveTo({
            offsetPosition:[0,-50,0],
            time:2000,
            complete:function(){
                TuiTouZuJian01.moveTo({
                    offsetPosition:[30,0,0],
                    time:2000,
                    complete:function(){
                        show(4551)
                        //步骤6(移回盖板)
                        TuiSongLiaoCang_GengHuanGaiBan.on("dblclick",function(){
                                    TuiSongLiaoCang_GengHuanGaiBan.moveTo({
                                    offsetPosition:[0,-30,0],
                                    time:2000,
                                    complete: function () {
                                        // TuiSongLiaoCang_GengHuanGaiBan.visible = false
                                        // KuaiChaiJiGou_step = 10
                                        // callFuncInMain("modelStep",10)
                                    }
                                })
                                TuiSongLiaoCang_GengHuanGaiBan.off("dblclick")
                        })
                    }
                })
            }
        })
        ZuJianTuiTou_LunZi.moveTo({
            offsetPosition:[0,-50,0],
            time:2000,
            complete:function(){
                ZuJianTuiTou_LunZi.moveTo({
                    offsetPosition:[30,0,0],
                    time:2000,
                    complete:function(){

                    }
                })
            }
        })
        ZuJianTuiTou_Zhou.moveTo({
            offsetPosition:[0,-50,0],
            time:2000,
            complete:function(){
                ZuJianTuiTou_Zhou.moveTo({
                    offsetPosition:[30,0,0],
                    time:2000,
                    complete:function(){

                    }
                })
            }
        })
    } else if(ev == 3){
        TuiTouZuJian02.moveTo({
            offsetPosition:[-60,0,0],
            time:2000,
            complete:function(){
                TuiTouZuJian02.moveTo({
                    offsetPosition:[0,50,0],
                    time:2000,
                    complete:function(){
                        TuiTouZuJian02.visible = false
                        setTimeout("show(4656)",2000)
                    }
                })
            }
        })
        TuiTouXiaoChe_LunZi.moveTo({
            offsetPosition:[-60,0,0],
            time:2000,
            complete:function(){
                TuiTouXiaoChe_LunZi.moveTo({
                    offsetPosition:[0,50,0],
                    time:2000,
                    complete:function(){
                        TuiTouXiaoChe_LunZi.visible = false
                        setTimeout("show(4661)",2000)
                    }
                })
            }
        })
        TuiTouXiaoChe_Zhou.moveTo({
            offsetPosition:[-60,0,0],
            time:2000,
            complete:function(){
                TuiTouXiaoChe_Zhou.moveTo({
                    offsetPosition:[0,50,0],
                    time:2000,
                    complete:function(){
                        TuiTouXiaoChe_Zhou.visible = false
                        setTimeout("show(4706)",2000)
                    }
                })
            }
        })
    } else if(ev == 4){
        TuiTouZuJian02.moveTo({
            offsetPosition:[0,-50,0],
            time:2000,
            complete:function(){
                TuiTouZuJian02.moveTo({
                    offsetPosition:[60,0,0],
                    time:2000,
                    complete:function(){
                        show(4651)
                    }
                })
            }
        })
        TuiTouXiaoChe_LunZi.moveTo({
            offsetPosition:[0,-50,0],
            time:2000,
            complete:function(){
                TuiTouXiaoChe_LunZi.moveTo({
                    offsetPosition:[60,0,0],
                    time:2000,
                    complete:function(){
                        show(4731)
                    }
                })
            }
        })
        TuiTouXiaoChe_Zhou.moveTo({
            offsetPosition:[0,-50,0],
            time:2000,
            complete:function(){
                TuiTouXiaoChe_Zhou.moveTo({
                    offsetPosition:[60,0,0],
                    time:2000,
                    complete:function(){
                        show(4766)
                    }
                })
            }
        })
    } else {
        return
    }
}
//链轮轴组件
function LianLunZhouZuJian(){
    var TuiSongLiaoCang_ShangXiangTi = equipment.subNodes[4546]
    var LianLunZhouZuJian_LuoShuan1 = equipment.subNodes[331]
    var LianLunZhouZuJian_Gai02 = equipment.subNodes[271]
    var LianLunZhouZuJian_Zhou = equipment.subNodes[276]
    var LianLunZhouZuJian_step = 1

    TuiSongLiaoCang_ShangXiangTi.visible = false
    app.camera.flyTo({
        'position':[LianLunZhouZuJian_Zhou.center[0]-50,LianLunZhouZuJian_Zhou.center[1]+50,LianLunZhouZuJian_Zhou.center[2]],
        'target': LianLunZhouZuJian_Zhou.center,
        "time": 1000
    })

    //步骤1(6个螺栓使用M8的扳手拆掉)
    LianLunZhouZuJian_LuoShuan1.on("dblclick",function(){
        if (LianLunZhouZuJian_step == 1 && tool == "M8扳手"
            ){
                LianLunZhouZuJian_LuoShuan1.moveTo({
                offsetPosition:[0,0,10],
                time:2000,
                complete: function () {
                    LianLunZhouZuJian_LuoShuan1.visible = false
                    LianLunZhouZuJian_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            LianLunZhouZuJian_LuoShuan1.off("dblclick")
        }
    })
    //步骤2(去掉轴承盖)
    LianLunZhouZuJian_Gai02.on("dblclick",function(){
        if (LianLunZhouZuJian_step == 2 && tool == null){
                LianLunZhouZuJian_Gai02.moveTo({
                offsetPosition:[0,0,10],
                time:2000,
                complete: function () {
                    LianLunZhouZuJian_Gai02.visible = false
                    LianLunZhouZuJian_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            LianLunZhouZuJian_Gai02.off("dblclick")
        } 
    })
    //步骤3(取出轴承)
    LianLunZhouZuJian_Zhou.on("dblclick",function(){
        if (LianLunZhouZuJian_step == 3 && tool == null){
                LianLunZhouZuJian_Zhou.moveTo({
                offsetPosition:[0,0,30],
                time:2000,
                complete: function () {
                    LianLunZhouZuJian_Zhou.visible = false
                    LianLunZhouZuJian_step = 4
                    callFuncInMain("modelStep",4)
                    setTimeout("show(276)",2000)
                    //步骤4(放回轴承)
                    LianLunZhouZuJian_Zhou.on("dblclick",function(){
                        if (LianLunZhouZuJian_step == 4 && tool == null){
                                LianLunZhouZuJian_Zhou.moveTo({
                                offsetPosition:[0,0,-30],
                                time:2000,
                                complete: function () {
                                    LianLunZhouZuJian_Gai02.visible = true
                                    LianLunZhouZuJian_step = 5
                                    callFuncInMain("modelStep",5)
                                }
                            })
                            LianLunZhouZuJian_Zhou.off("dblclick")
                        } 
                    })
                    //步骤5(放回轴承盖)
                    LianLunZhouZuJian_Gai02.on("dblclick",function(){
                        if (LianLunZhouZuJian_step == 5 && tool == null){
                                LianLunZhouZuJian_Gai02.moveTo({
                                offsetPosition:[0,0,-10],
                                time:2000,
                                complete: function () {
                                    LianLunZhouZuJian_LuoShuan1.visible = true
                                    LianLunZhouZuJian_step = 6
                                    callFuncInMain("modelStep",6)
                                }
                            })
                            LianLunZhouZuJian_Gai02.off("dblclick")
                        } 
                    })
                    //步骤6(6个螺栓使用M8的扳手拆掉)
                    LianLunZhouZuJian_LuoShuan1.on("dblclick",function(){
                        if (LianLunZhouZuJian_step == 6 && tool == "M8扳手"
                            ){
                                LianLunZhouZuJian_LuoShuan1.moveTo({
                                offsetPosition:[0,0,-10],
                                time:2000,
                                complete: function () {
                                    // LianLunZhouZuJian_LuoShuan1.visible = false
                                    // LianLunZhouZuJian_step = 6
                                    // callFuncInMain("modelStep",10)
                                    setTimeout("show(4546)",10000)
                                }
                            })
                            LianLunZhouZuJian_LuoShuan1.off("dblclick")
                        }
                    })
                }
            })
            LianLunZhouZuJian_Zhou.off("dblclick")
        } 
    })
}

//2.5斜面充气密封组件检查
function ChongQiMiFengCC(){

    var XuanZhuanLiaoCang = equipment.subNodes[16]
    var ChongQiMiFeng_MiFengQuan1 = equipment.subNodes[5016]
    var ChongQiMiFengCC_step = 1


    app.camera.flyTo({
        'position':[ChongQiMiFeng_MiFengQuan1.center[0]-50,ChongQiMiFeng_MiFengQuan1.center[1],ChongQiMiFeng_MiFengQuan1.center[2]],
        'target': ChongQiMiFeng_MiFengQuan1.center,
        "time": 1000
    })
    modelShow()
    XuanZhuanLiaoCang.visible = false
    //步骤1(拆卸垫圈)
    ChongQiMiFeng_MiFengQuan1.on("dblclick",function(){
        if (ChongQiMiFengCC_step == 1 && tool == null){
            ChongQiMiFeng_MiFengQuan1.moveTo({
                offsetPosition:[-30,0,0],
                time:2000,
                complete: function () {
                    ChongQiMiFeng_MiFengQuan1.visible = false
                    ChongQiMiFengCC_step = 2
                    callFuncInMain("modelStep",2)
                    setTimeout("show(5016)",2000)
                    //步骤1(拆卸垫圈)
                    ChongQiMiFeng_MiFengQuan1.on("dblclick",function(){
                        if (ChongQiMiFengCC_step == 2 && tool == null){
                            ChongQiMiFeng_MiFengQuan1.moveTo({
                                offsetPosition:[30,0,0],
                                time:2000,
                                complete: function () {
                                    setTimeout("show(16)",10000)
                                }
                            })
                            ChongQiMiFeng_MiFengQuan1.off("dblclick")
                        } 
                    })
                }
            })
            ChongQiMiFeng_MiFengQuan1.off("dblclick")
        } 
    })
}

//2.6定位气缸
function DingWeiQiGang(){
    var M6LuoShuan = equipment.subNodes[5116]
    var DingWeiQiGang_QiGangZhiZuo = equipment.subNodes[5111]
    var DingWeiQiGang015 = equipment.subNodes[5096]
    var DingWeiQiGang01 = equipment.subNodes[5061]
    var DingWeiQiGang_ChaXiao = equipment.subNodes[5056]
    var DingWeiQiGang012 = equipment.subNodes[5071]
    var DingWeiQiGang_HuoSai = equipment.subNodes[5106]
    var DingWeiQiGang_ZhiZhen =  equipment.subNodes[5066]
    var Oring04 =  equipment.subNodes[5161]
    var DingWeiQiGang_step = 1


    app.camera.flyTo({
        'position':[DingWeiQiGang015.center[0],DingWeiQiGang015.center[1]+30,DingWeiQiGang015.center[2]+30],
        'target': DingWeiQiGang015.center,
        "time": 1000
    })
    modelShow()
    Oring04.visible = false
    //步骤1(M6的呆扳手拆掉气缸前段的4个螺栓)
    M6LuoShuan.on("dblclick",function(){
        if (DingWeiQiGang_step == 1 && tool == "M6呆扳手"
            ){
                M6LuoShuan.moveTo({
                offsetPosition:[10,0,0],
                time:2000,
                complete: function () {
                    M6LuoShuan.visible = false
                    DingWeiQiGang_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            M6LuoShuan.off("dblclick")
        }
    })

    //步骤2()
    DingWeiQiGang01.on("dblclick",function(){
        if (DingWeiQiGang_step == 2 && tool == null){
            DingWeiQiGang01.moveTo({
                offsetPosition:[0,0,-2],
                time:2000,
                complete: function () {
                    DingWeiQiGang01.visible = false
                    DingWeiQiGang_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            DingWeiQiGang01.off("dblclick")
        }
    })

    //步骤3()
    DingWeiQiGang_ChaXiao.on("dblclick",function(){
        if (DingWeiQiGang_step == 3 && tool == null){
            DingWeiQiGang_ChaXiao.moveTo({
                offsetPosition:[10,0,0],
                time:2000,
                complete: function () {
                    DingWeiQiGang_ChaXiao.visible = false
                    DingWeiQiGang_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            DingWeiQiGang_ChaXiao.off("dblclick")
        }
    })

    //步骤4()
    DingWeiQiGang012.on("dblclick",function(){
        if (DingWeiQiGang_step == 4 && tool == null){
            DingWeiQiGang012.moveTo({
                offsetPosition:[10,0,0],
                time:2000,
                complete: function () {
                    DingWeiQiGang012.visible = false
                    DingWeiQiGang_step = 5
                    callFuncInMain("modelStep",5)
                }
            })
            DingWeiQiGang012.off("dblclick")
        }
    })
    
    //步骤5()
    DingWeiQiGang_ZhiZhen.on("dblclick",function(){
        if (DingWeiQiGang_step == 5 && tool == null){
            DingWeiQiGang_ZhiZhen.moveTo({
                offsetPosition:[0,10,0],
                time:2000,
                complete: function () {
                    DingWeiQiGang_ZhiZhen.visible = false
                    DingWeiQiGang_step = 6
                    callFuncInMain("modelStep",6)
                }
            })
            DingWeiQiGang_ZhiZhen.off("dblclick")
        }
    })
    
    //步骤6()
    DingWeiQiGang_QiGangZhiZuo.on("dblclick",function(){
        if (DingWeiQiGang_step == 6 && tool == null){
            DingWeiQiGang_QiGangZhiZuo.moveTo({
                offsetPosition:[0,10,0],
                time:2000,
                complete: function () {
                    DingWeiQiGang_QiGangZhiZuo.visible = false
                    DingWeiQiGang_step = 7
                    callFuncInMain("modelStep",7)
                    
                }
            })
            DingWeiQiGang_QiGangZhiZuo.off("dblclick")
        }
    })

    //步骤7()
    DingWeiQiGang015.on("dblclick",function(){
        if (DingWeiQiGang_step == 7 && tool == null){
            DingWeiQiGang015.moveTo({
                offsetPosition:[0,10,0],
                time:2000,
                complete: function () {
                    DingWeiQiGang015.visible = false
                    DingWeiQiGang_step = 8
                    callFuncInMain("modelStep",8)
                }
            })
            DingWeiQiGang015.off("dblclick")
        }
    })

    //步骤8()
    DingWeiQiGang_HuoSai.on("dblclick",function(){
        if (DingWeiQiGang_step == 8 && tool == null){
            DingWeiQiGang_HuoSai.moveTo({
                offsetPosition:[20,0,0],
                time:2000,
                complete: function () {
                    DingWeiQiGang_HuoSai.visible = false
                    DingWeiQiGang_step = 9
                    callFuncInMain("modelStep",9)
                    setTimeout("show(5106)",2000)
                    //步骤9()
                    DingWeiQiGang_HuoSai.on("dblclick",function(){
                        if (DingWeiQiGang_step == 9 && tool == null){
                            DingWeiQiGang_HuoSai.moveTo({
                                offsetPosition:[-20,0,0],
                                time:2000,
                                complete: function () {
                                    DingWeiQiGang015.visible = true
                                    DingWeiQiGang_step = 10
                                    callFuncInMain("modelStep",10)
                                }
                            })
                            DingWeiQiGang_HuoSai.off("dblclick")
                        }
                    })
                
                    //步骤10()
                    DingWeiQiGang015.on("dblclick",function(){
                        if (DingWeiQiGang_step == 10 && tool == null){
                            DingWeiQiGang015.moveTo({
                                offsetPosition:[0,-10,0],
                                time:2000,
                                complete: function () {
                                    DingWeiQiGang_QiGangZhiZuo.visible = true
                                    DingWeiQiGang_step = 11
                                    callFuncInMain("modelStep",11)
                                }
                            })
                            DingWeiQiGang015.off("dblclick")
                        }
                    })
                
                    //步骤11()
                    DingWeiQiGang_QiGangZhiZuo.on("dblclick",function(){
                        if (DingWeiQiGang_step == 11 && tool == null){
                            DingWeiQiGang_QiGangZhiZuo.moveTo({
                                offsetPosition:[0,-10,0],
                                time:2000,
                                complete: function () {
                                    DingWeiQiGang_ZhiZhen.visible = true
                                    DingWeiQiGang_step = 12
                                    callFuncInMain("modelStep",12)

                                }
                            })
                            DingWeiQiGang_QiGangZhiZuo.off("dblclick")
                        }
                    })
                
                    //步骤12()
                    DingWeiQiGang_ZhiZhen.on("dblclick",function(){
                        if (DingWeiQiGang_step == 12 && tool == null){
                            DingWeiQiGang_ZhiZhen.moveTo({
                                offsetPosition:[0,-10,0],
                                time:2000,
                                complete: function () {
                                    DingWeiQiGang012.visible = true
                                    DingWeiQiGang_step = 13
                                    callFuncInMain("modelStep",13)
                                }
                            })
                            DingWeiQiGang_ZhiZhen.off("dblclick")
                        }
                    })
                
                    //步骤13()
                    DingWeiQiGang012.on("dblclick",function(){
                        if (DingWeiQiGang_step == 13 && tool == null){
                            DingWeiQiGang012.moveTo({
                                offsetPosition:[-10,0,0],
                                time:2000,
                                complete: function () {
                                    DingWeiQiGang_ChaXiao.visible = true
                                    DingWeiQiGang_step = 14
                                    callFuncInMain("modelStep",14)
                                }
                            })
                            DingWeiQiGang012.off("dblclick")
                        }
                    })
                
                    //步骤14()
                    DingWeiQiGang_ChaXiao.on("dblclick",function(){
                        if (DingWeiQiGang_step == 14 && tool == null){
                            DingWeiQiGang_ChaXiao.moveTo({
                                offsetPosition:[-10,0,0],
                                time:2000,
                                complete: function () {
                                    DingWeiQiGang01.visible = true
                                    DingWeiQiGang_step = 15
                                    callFuncInMain("modelStep",15)
                                }
                            })
                            DingWeiQiGang_ChaXiao.off("dblclick")
                        }
                    })
                
                    //步骤15()
                    DingWeiQiGang01.on("dblclick",function(){
                        if (DingWeiQiGang_step == 15 && tool == null){
                            DingWeiQiGang01.moveTo({
                                offsetPosition:[0,0,2],
                                time:2000,
                                complete: function () {
                                    M6LuoShuan.visible = true
                                    DingWeiQiGang_step = 16
                                    callFuncInMain("modelStep",16)
                                }
                            })
                            DingWeiQiGang01.off("dblclick")
                        }
                    })
                
                    //步骤16(M6的呆扳手拆掉气缸前段的4个螺栓)
                    M6LuoShuan.on("dblclick",function(){
                        if (DingWeiQiGang_step == 16 && tool == "M6呆扳手"
                            ){
                                M6LuoShuan.moveTo({
                                offsetPosition:[-10,0,0],
                                time:2000,
                                complete: function () {
                                    Oring04.visible = true
                                    // M6LuoShuan.visible = false
                                    // DingWeiQiGang_step = 2
                                    // callFuncInMain("modelStep",2)
                                }
                            })
                            M6LuoShuan.off("dblclick")
                        }
                    })
                }
            })
            DingWeiQiGang_HuoSai.off("dblclick")
        }
    })


}

//3.4旋转平台检查 
function YaKouZhuangZhi(){
    var M8LuoShuan = equipment.subNodes[5491]
    var M6LuoShuan = equipment.subNodes[5466]
    var YaKouZhuangZhi_HouChuGanZhiZhen = equipment.subNodes[5526]
    var ORing4 = equipment.subNodes[5601]
    var ORing1 = equipment.subNodes[5611]
    var YaKouZhuangZhi15_DingWeiQiGang = equipment.subNodes[5616]
    var YaKouZhuangZhi_Brep_1 = equipment.subNodes[5621]
    var YaKouZhuangZhi_LuoShuan = equipment.subNodes[5626]
    var YaKouZhuangZhi_step = 1
    
    app.camera.flyTo({
        'position':[YaKouZhuangZhi15_DingWeiQiGang.center[0]-80,YaKouZhuangZhi15_DingWeiQiGang.center[1],YaKouZhuangZhi15_DingWeiQiGang.center[2]],
        'target': YaKouZhuangZhi15_DingWeiQiGang.center,
        "time": 1000
    })
    modelShow()
    //步骤1(M8的呆扳手拆掉气缸前段的4个螺栓)
    M8LuoShuan.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 1 && tool == "M8呆扳手"
            ){
                M8LuoShuan.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    M8LuoShuan.visible = false
                    YaKouZhuangZhi_step = 2
                    callFuncInMain("modelStep",2)
                }
            })
            M8LuoShuan.off("dblclick")
        }
    })

    //步骤2(M6的呆扳手拆掉气缸前段的4个螺栓)
    M6LuoShuan.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 2 && tool == "M6呆扳手"
            ){
                M6LuoShuan.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    M6LuoShuan.visible = false
                    YaKouZhuangZhi_step = 3
                    callFuncInMain("modelStep",3)
                }
            })
            M6LuoShuan.off("dblclick")
        }
    })

    //步骤3()
    YaKouZhuangZhi_LuoShuan.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 3 && tool == null){
                YaKouZhuangZhi_LuoShuan.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    YaKouZhuangZhi_LuoShuan.visible = false
                    YaKouZhuangZhi_step = 4
                    callFuncInMain("modelStep",4)
                }
            })
            YaKouZhuangZhi_LuoShuan.off("dblclick")
        }
    })

    //步骤4
    YaKouZhuangZhi_HouChuGanZhiZhen.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 4 && tool == null){
            YaKouZhuangZhi_HouChuGanZhiZhen.moveTo({
                offsetPosition:[0,5,0],
                time:2000,
                complete: function () {
                    YaKouZhuangZhi_HouChuGanZhiZhen.visible = false
                    YaKouZhuangZhi_step = 5
                    callFuncInMain("modelStep",5)
                }
            })
            YaKouZhuangZhi_HouChuGanZhiZhen.off("dblclick")
        }
    })

    //步骤5
    YaKouZhuangZhi_Brep_1.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 5 && tool == null){
            YaKouZhuangZhi_Brep_1.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    YaKouZhuangZhi_Brep_1.visible = false
                    YaKouZhuangZhi_step = 6
                    callFuncInMain("modelStep",6)
                }
            })
            YaKouZhuangZhi_Brep_1.off("dblclick")
        }
    })

    //步骤6
    ORing1.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 6 && tool == null){
            ORing1.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    ORing1.visible = false
                    YaKouZhuangZhi_step = 7
                    callFuncInMain("modelStep",7)
                }
            })
            ORing1.off("dblclick")
        }
    })

    //步骤7
    YaKouZhuangZhi15_DingWeiQiGang.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 7 && tool == null){
            YaKouZhuangZhi15_DingWeiQiGang.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    YaKouZhuangZhi15_DingWeiQiGang.visible = false
                    YaKouZhuangZhi_step = 8
                    callFuncInMain("modelStep",8)
                }
            })
            YaKouZhuangZhi15_DingWeiQiGang.off("dblclick")
        }
    })
    
    //步骤8
    ORing4.on("dblclick",function(){
        if (YaKouZhuangZhi_step == 8 && tool == null){
            ORing4.moveTo({
                offsetPosition:[0,20,0],
                time:2000,
                complete: function () {
                    ORing4.visible = false
                    YaKouZhuangZhi_step = 9
                    callFuncInMain("modelStep",9)
                    setTimeout("show(5601)",2000)
                    //步骤9
                    ORing4.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 9 && tool == null){
                            ORing4.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    YaKouZhuangZhi15_DingWeiQiGang.visible = true
                                    YaKouZhuangZhi_step = 10
                                    callFuncInMain("modelStep",10)
                                }
                            })
                            ORing4.off("dblclick")
                        }
                    })
                
                    //步骤10
                    YaKouZhuangZhi15_DingWeiQiGang.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 10 && tool == null){
                            YaKouZhuangZhi15_DingWeiQiGang.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    ORing1.visible = true
                                    YaKouZhuangZhi_step = 11
                                    callFuncInMain("modelStep",11)
                                }
                            })
                            YaKouZhuangZhi15_DingWeiQiGang.off("dblclick")
                        }
                    })
                
                    //步骤11
                    ORing1.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 11 && tool == null){
                            ORing1.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    YaKouZhuangZhi_Brep_1.visible = true
                                    YaKouZhuangZhi_step =12
                                    callFuncInMain("modelStep",12)
                                }
                            })
                            ORing1.off("dblclick")
                        }
                    })
                
                    //步骤12
                    YaKouZhuangZhi_Brep_1.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 12 && tool == null){
                            YaKouZhuangZhi_Brep_1.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    YaKouZhuangZhi_HouChuGanZhiZhen.visible = true
                                    YaKouZhuangZhi_step = 13
                                    callFuncInMain("modelStep",13)
                                }
                            })
                            YaKouZhuangZhi_Brep_1.off("dblclick")
                        }
                    })
                
                    //步骤13
                    YaKouZhuangZhi_HouChuGanZhiZhen.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 13 && tool == null){
                            YaKouZhuangZhi_HouChuGanZhiZhen.moveTo({
                                offsetPosition:[0,-5,0],
                                time:2000,
                                complete: function () {
                                    YaKouZhuangZhi_LuoShuan.visible = true
                                    YaKouZhuangZhi_step = 14
                                    callFuncInMain("modelStep",14)
                                }
                            })
                            YaKouZhuangZhi_HouChuGanZhiZhen.off("dblclick")
                        }
                    })
                
                    //步骤14
                    YaKouZhuangZhi_LuoShuan.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 14 && tool == null){
                                YaKouZhuangZhi_LuoShuan.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    M6LuoShuan.visible = true
                                    YaKouZhuangZhi_step = 15
                                    callFuncInMain("modelStep",15)
                                }
                            })
                            YaKouZhuangZhi_LuoShuan.off("dblclick")
                        }
                    })
                
                    //步骤15(M6的呆扳手拆掉气缸前段的4个螺栓)
                    M6LuoShuan.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 15 && tool == "M6呆扳手"
                            ){
                                M6LuoShuan.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    M8LuoShuan.visible = true
                                    YaKouZhuangZhi_step = 16
                                    callFuncInMain("modelStep",16)
                                }
                            })
                            M6LuoShuan.off("dblclick")
                        }
                    })
                
                    //步骤16(M8的呆扳手拆掉气缸前段的4个螺栓)
                    M8LuoShuan.on("dblclick",function(){
                        if (YaKouZhuangZhi_step == 16 && tool == "M8呆扳手"
                            ){
                                M8LuoShuan.moveTo({
                                offsetPosition:[0,-20,0],
                                time:2000,
                                complete: function () {
                                    // M8LuoShuan.visible = false
                                    // YaKouZhuangZhi_step = 2
                                    // callFuncInMain("modelStep",2)
                                }
                            })
                            M8LuoShuan.off("dblclick")
                        }
                    })
                }
            })
            ORing4.off("dblclick")
        }
    })



}