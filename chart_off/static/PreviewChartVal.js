class preChartCommon {
    static id = null;
    static getChartId() {
        return this.id
    }
    static setChartId(id) {
        this.id = id;
    }
    static definition = null;
    static getChartDefinition() {
        return this.definition
    }
	static getsceneObjInfo() {
		return this.sceneObj;
	}
    static setChartDefinition(definition) {
        this.definition = definition;
    }
	static setsceneObjInfo(sceneObj) {
		this.sceneObj = sceneObj;
	}
    static chartObj = null;
    static getChartObj() {
        return this.chartObj;
    }
    static setChartObj(chartObj) {
        this.chartObj = chartObj;
    }
}