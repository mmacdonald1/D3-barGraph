//d3 random library
var data=[];

for(var i=0; i< 20; i++){
    var num= Math.floor(Math.random()*50);
    data.push(num);
}

console.log(data);

d3.select('#chart')
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .attr('class','bar')
    .style('height', function(d){
    var height = d*3;
    return height + 'px'
})
;
