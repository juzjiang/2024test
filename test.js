// 创建APP对象
var app = new THING.App();
// 引用拓扑组件脚本
THING.Utils.dynamicLoad(['/static/js/thing.diagram.min.js'], function () {
    // 初始化拓扑场景
    const graph = new THING.DIAGRAM.Graph({
        container: 'div2d', // 容器元素 id
        url: './diagrams/3727d405ad9ee194/topo.json', // 拓扑场景资源路径
        resourceRootPath: '/Resources/topo/admin/3727d405ad9ee194'
    });
    // 视图加载完成
    graph.on('load', () => {
        console.log('加载完成');
    });
})