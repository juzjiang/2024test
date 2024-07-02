let rianleyDom
//这是移动模型的方法
function aaa(){
    createHtml()
    rianleyDom = $('#marker');
    console.log("aaa")
    //模型上方显示当前模型坐标
    for (let i=0 ; i<plant.subNodes.length ; i++){
        plant.subNodes[i].off("click")
        plant.subNodes[i].on("click",function(){
        
        })
    }
}

//创建标签的方法
function createHtml(){
    let marker =
            `<div id="marker" class="card" style="display: none;">
                <span class="text">总长 ： <span class="value" style ='color:#cf1b1b'>0</span>  米 <br>  单击继续,双击或右键结束</span>
            </div>`;
    $('#div3d').append(marker);
}