class Graph {
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}
    addVertex(v)
    {
        this.AdjList.set(v, []);
    }
    addEdge(v, w)
    {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    printGraph()
    {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys)
        {
            var get_values = this.AdjList.get(i);
            var conc = "";
            for (var j of get_values)
                conc += j + " ";

            console.log(i + " -> " + conc);
        }
    }

}

var g = new Graph(10);
var vertices = [ 'Hi', 'in', 'Dehuroad', 'Dilip', 'Parandwal', 'Pune', 'live', 'I am', 'Vishal', 'Capgemini' ];

for (var i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}

for(var i = 0;i < 50;i ++){
    let random_number1 = Math.floor(Math.random() * 10);
    let random_number2 = Math.floor(Math.random() * 10);
    if(random_number1 != random_number2){
        g.addEdge(vertices[random_number1], vertices[random_number2]);
    }
}

g.printGraph();