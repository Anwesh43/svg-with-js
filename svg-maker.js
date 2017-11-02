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
        this.strokeWidth = 1
        this.childrens = []
    }
    setStrokeWidth(width) {
        this.strokeWidth = width
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
        this.childrens.push(circle)
    }
    strokeCircle(cx,cy,r) {
        const stroke = this.strokeColor
        const fill = 'none'
        const circleMap = {cx,cy,r,stroke,fill}
        const circle = document.createSVGElement('circle')
        SVGStageUtil.createAttributes(circle,circleMap)
        this.svg.appendChild(circle)
        this.childrens.push(circle)
    }
    strokeLine(x1,y1,x2,y2) {
        const style = `stroke:${this.strokeColor};stroke-width:${this.strokeWidth}`
        const line = document.createSVGElement('line')
        const lineMap = {x1,y1,x2,y2,style}
        SVGStageUtil.createAttributes(line,lineMap)
        this.svg.appendChild(line)
        this.childrens.push(line)
    }
    redraw() {
        for(var i=0;i<this.childrens.length;i++) {
            const child = this.childrens[i]
            this.svg.removeChild(child)
        }
    }
}
