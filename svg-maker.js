document.createSVGElement = (tag) => {
    return document.createElementNS('http://www.w3.org/2000/svg',tag)
}
const svg = document.createSVGElement('svg')
svg.setAttributeNS(null,"width","400")
svg.setAttributeNS(null,"height","400")
const text = document.createSVGElement('text')
text.innerHTML = 'hello world'
svg.appendChild(text)
const circle = document.createSVGElement('circle')
circle.setAttributeNS(null,'cx',200)
circle.setAttributeNS(null,'cy',200)
circle.setAttributeNS(null,'r',150)
circle.setAttributeNS(null,'fill','red')
svg.appendChild(circle)
document.body.appendChild(svg)
