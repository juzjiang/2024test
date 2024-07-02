//用于判断此时是否存在被创建的模型，默认为未创建
let model_number = 0
//上一个创建的模型的名字
let lastModelName

//创建一个模型，传递参数为
//url:每个模型的唯一地址 name:传入模型的名称
function loadModel(param){
    console.log("CS")
    lastModelName = param.name
    //若已经存在一个模型，则删除它
    if(model_number == 1) {
        return
    }
    // 创建Thing
    var model = app.create({
        type: 'Thing',
        id:'001',
        name:param.name, 
        url:param.url, 
        position: [0, 0, 0],
        angle: 0,   
        complete: function () {
            afterLoadModel(model)
            // callFuncInMain("modelStep",1)
            console.log("测试")
        }
    });
    model_number = 1
}

function afterLoadModel(model){
    
    let a = app.query("ZH厂房")[0]
    let b = app.query("机械臂")[0]
    console.log(a,b)
    a.visible = false
    b.visible = false
    app.camera.flyTo({
        'position':[model.position[0],model.position[1]+2,model.position[2]+2],
        'target': model.position,
        "time": 1000
    })
    //开启模型每个部件的触碰事件
    for (let i=0 ; i<model.subNodes.length ; i++){
        model.subNodes[i].on("mouseenter",function(ev){
            model.subNodes[i].style.outlineColor = '#FF00FF'
        })
        model.subNodes[i].on("mouseleave",function(ev){
            model.subNodes[i].style.outlineColor = null
        })
        model.subNodes[i].on("click",function(ev){
            console.log(model.subNodes[i])
        })
    }
    test(model)
}

//删除模型的方法
function deleteModel(){
    let a = app.query(lastModelName)[0]
    a.destroy()
    model_number = 0
}

//回归初始化的方法
function reset(){
    let a = app.query("厂房")[0]
    let b = app.query("机械臂")[0]
    a.visible = true
    b.visible = true
    app.on('dblclick',function(){
        
    })
}

