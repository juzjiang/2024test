var prevposition = []
var lastDevice

//设备(切换设备)
function selectDevice(data){
    var name = data.name
    
    console.log(data,"AAAA")
    // _destroy(0)
    campusModel[0].things.forEach((item,i) =>{ 
        if(item.name==name){
            // outline = item
            // outline.style.outlineColor = '#0000ff'
            // outline_number = 1
            // if( prevposition == '' ){
                app.camera.flyTo({
                    'position':[item.position[0],item.position[1]+20,item.position[2]+20],
                    'target': item.position,
                    "time": 1000
                })
            // } else if(lastDevice == name){
            //     var cameraPosition = [(app.camera.position[0]-prevposition[0]) + item.position[0],(app.camera.position[1]-prevposition[1]) + item.position[1],(app.camera.position[2]-prevposition[2]) + item.position[2]] 
            //     var targetPosition = [(app.came ra.target[0]-prevposition[0]) + item.position[0],(app.camera.target[1]-prevposition[1]) + item.position[1],(app.camera.target[2]-prevposition[2]) + item.position[2]]
            //     app.camera.flyTo({
            //         'position':cameraPosition,
            //         'target': targetPosition,
            //         "time": 1000
            //     })
            // } else {
            //     var cameraPosition = [(app.camera.position[0]-prevposition[0]) + item.position[0],(app.camera.position[1]-prevposition[1]) + item.position[1],(app.camera.position[2]-prevposition[2]) + item.position[2]] 
            //     var targetPosition = [(app.camera.target[0]-prevposition[0]) + item.position[0],(app.camera.target[1]-prevposition[1]) + item.position[1],(app.camera.target[2]-prevposition[2]) + item.position[2]]
            //     app.camera.flyTo({
            //         'position':cameraPosition,
            //         'target': targetPosition,
            //         "time": 1000
            //     })
            // }
            prevposition = item.position
            lastDevice = name
        }
    })
}

// 这里是高亮一个物体的方法
function openHighLight(ev){
    if(data_number == 1) {
        data.style.outlineColor = null
        data_number = 0
    }
        
    // for (var i=0; i<ev.length; i++){
        // var data = app.query('#' + ev[i].id)[0]
        // var data = app.query(ev[i].name)[0]
        data = app.query(ev.name)[0]
        data.style.outlineColor = "#FF0000"
    // }
    data_number=1
}

// 这里是取消高亮一个物体的方法
function closeHighLight(ev) {
    // for (var i=0; i<ev.length; i++){
        // var data = app.query(ev[i].name)[0]
        data = app.query(ev.name)[0]
        data.style.outlineColor = null
    // }
}

//隐藏设备
function hideDevice(ev){
    // for(let i=0; i<ev.length; i++){
        var a = app.query(ev.name)[0]
        a.visible = false
    // }
}

//显示设备
function showDevice(ev){
    // for(let i=0; i<ev.length; i++){
        var a = app.query(ev.name)[0]
        a.visible = true
    // }
}

//初始化地图时对模型操作的初始化
function test(){
        var a = campus.things[0]
        for (var i=0 ; i<campus.things[0].subNodes.length ; i++){
            a.subNodes[i].on("click",function(){
                console.log(i)
                console.log(campus.things[0].subNodes)
            })
        }  
}

//创建标签
function objectLabels(ev){
    let name = ev.name
    let add=[]
    var sel=app.query('.Thing')
    sel.forEach(item=>{
    if(item.id.indexOf('A')!=-1 || item.id.indexOf('B')!=-1 || item.id.indexOf('C')!=-1){
    }else{
        thingArrs.push(item)
    }
    })
    thingArrs.forEach(item => {
        if(item.name == name){
            add = item
        }
    })

        // 创建标注
        ui = app.create({
            type: 'UIAnchor',
            parent: add,
            element: createElement(add), // 此参数填写要添加的Dom元素
            localPosition: [0, 1, 0],
            pivot: [0.5, 1], //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
            pivotPixel: [parseFloat($(".textAndPictureMarker").css("width")) / 2, parseFloat($(".textAndPictureMarker").css("height"))]
        });
        $('#' + add.id + ' .text').text("id：" + add.id);
        $('#' + add.id + ' .text1').text("name：" + add.name);
        ui_number = 1
        pointArr.push(ui)

        var startAlarm = document.getElementById("Start_Alarm")
        var alarmPic = document.getElementById("alarm_pic")
        startAlarm.addEventListener('click',function(){
            if (alarmPic.style.visibility == "hidden") {
                alarmPic.style.visibility = "visible"
            } else {
                alarmPic.style.visibility = "hidden"
            }
        })
}
