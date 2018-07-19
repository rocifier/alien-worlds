
let angle = 0
let pathLength = 10
let currPoint = view.size / 3

let kochcurve = new LSystem({
    axiom: [{symbol: 'F'}, {symbol: '+'}, {symbol: '+'}, {symbol: 'F'}, {symbol: '+'}, {symbol: '+'},{symbol: 'F'}],
    productions: {
        'F': () => {
            return [{symbol: 'F'}, {symbol: '-'}, {symbol: 'F'}, {symbol: '+'}, {symbol: '+'}, {symbol: 'F'}, {symbol: '-'}, {symbol: 'F'}]
        }
    },
    finals: {
        '+': () => { angle += 60 },
        '-': () => { angle -= 60 },
        'F': () => {
            let trans = new Point(1, 0)
            trans.length = pathLength
            trans.angle = angle
            let newPoint = currPoint + trans;
            let line = new Path.Line(currPoint, newPoint)
            line.strokeColor = 'black';
            currPoint = new Point(newPoint);
        }
    }
})

// Iterate the L-System two times and log the result.
let result = kochcurve.iterate(3)
kochcurve.final()
console.log(result)