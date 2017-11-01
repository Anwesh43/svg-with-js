## svg-with-js

### A javascript library create svg with js code.

### Usage

#### Using in your html file

```
    <script src="svg-maker.js">
    </script>
```

#### Creating a circle

```
    const stage = new SVGStage(400,400)
    stage.fillColor = 'red'
    stage.strokeColor = 'green'
    stage.fillCircle(200,200,100)
    stage.strokeCircle(200,200,100)
```

##### Result

<svg width="400" height="400"><circle cx="200" cy="200" r="100" fill="red"></circle>
<circle cx="200" cy="200" r="100" stroke="green" fill="none">
</circle>
</svg>
