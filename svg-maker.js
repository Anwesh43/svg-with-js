document.createSVGElement = (tag) => {
    return document.createElementNS('http://www.w3.org/2000/svg',tag)
}
class SVGStageUtil {
    static createAttributes(elem,map) {
        for(var key in map) {
            elem.setAttributeNS(null,key,map[key])
        }
    }
}
class SVGStage {
    constructor(w,h) {
        this.svg = document.createSVGElement('svg')
        this.createStage(w,h)
        this.fillColor = 'black'
        this.strokeColor = 'black'
    }
    createStage(w,h) {
        const dimensionsMap = {"width":w,"height":h}
        SVGStageUtil.createAttributes(this.svg,dimensionsMap)
        document.body.appendChild(this.svg)
    }
    setFillStyle(color) {
        this.fillColor = color
    }
    setStrokeStyle(color) {
        this.strokeColor = color
    }
    fillCircle(cx,cy,r) {
        const fill = this.fillColor
        const circleMap = {cx,cy,r,fill}
        const circle = document.createSVGElement('circle')
        SVGStageUtil.createAttributes(circle,circleMap)
        this.svg.appendChild(circle)
    }
    strokeCircle(cx,cy,r) {
        const stroke = this.strokeColor
        const fill = 'none'
        const circleMap = {cx,cy,r,stroke,fill}
        const circle = document.createSVGElement('circle')
        SVGStageUtil.createAttributes(circle,circleMap)
        this.svg.appendChild(circle)
    }
}
