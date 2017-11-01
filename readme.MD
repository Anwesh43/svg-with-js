## svg-with-js

### A javascript library create svg with js code.

### Usage

#### Using in your html file

```
    <script src="svg-maker.js">
    </script>
```

### Creating a stage

```
    const stage = new SVGStage(400,400)
```

#### Creating a circle

```
    stage.fillColor = 'red'
    stage.strokeColor = 'green'
    stage.fillCircle(200,200,100)
    stage.strokeCircle(200,200,100)
```
#### Creating a line

```
    stage.strokeWidth = 5
    stage.strokeLine(100,100,200,200)
```
