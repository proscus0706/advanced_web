var dataArray = [2, 13, 15, 20, 24, 12, 17];

var svg = d3.select('body')
.append('svg')
    .attr('height', '100%')
    .attr('width', '100%');
//=> 바디의 100%를 채우는 svg라는 child element를 생성했다.
//그리고 난 후에 svg라는 변수에 저장했다.

//create rectangle
svg.selectAll('rect')    //아직은 존재하지 않는 태그다.
.data(dataArray).enter() //데이터와 binding.
.append('rect')          //데이터를 참고하여 rect를 추가해준다.
    .attr('height', function(data, index){
        return data * 10;
    }) //크기
    .attr('width', '70')   //크기
    .attr('x', function(data, index){
        return 80 * index;
    }) //x, y 는 좌표
    .attr('y', function(data, index){
        return 350 - (data * 10);
    })
    .attr('fill', 'darkred');
//아직까지는 보이진 않지만, document에 rect 3개가 추가됬다.

//*second tutorial point starts here!!! ignore the above codes.
var fixedX = 600; //이 variable이 아래의 circle이 있을 x좌표에 영향을 준다.
//원 추가하기
svg.selectAll('circle.groupa')
    .data(dataArray)
    .enter().append('circle')
    .attr('class', 'groupa')
    .attr('cx',function(data, index){
        fixedX += (data * 4) + (index * 30);
        return fixedX;
    }) //x축 크기
    .attr('cy','150') //y축 크기
    .attr('r',function(data, index){
        return data * 3;
    });  //radius

//아래 코드를 추가한다고 원이 더 추가될까? 안된다. dataArray의 크기만큼 만들기 때문이다.
var fixedX = 1200; //이 variable이 아래의 circle이 있을 x좌표에 영향을 준다.
//원 추가하기
svg.selectAll('circle.groupy')
    .data(dataArray)
    .enter().append('circle')
    .attr('class', 'groupy')
    .attr('cx',function(data, index){
        fixedX += (data * 4) + (index * 30);
        return fixedX;
    }) //x축 크기
    .attr('cy','150') //y축 크기
    .attr('r',function(data, index){
        return data * 3;
    });  //radius

/*
위에 코드를 자세히 보자.
.attr('class', 'className')이 추가되기 전까지는
dataArray의 크기만큼 원을 만들었지만,
저 attr을 추가한 후,
d3.selectAll('circle.className')식으로 하면
더 많은 원이 생성된다 !
 */


//Part3
var fixedX = 1200;
svg.selectAll('ellipse')
    .data(dataArray)
    .enter().append('ellipse')
    .attr('cx',function(data, index){
        fixedX += (data * 2) + 30;
        return fixedX;
    }) //x축 크기
    .attr('cy','150') //y축 크기
    .attr('rx',function(data, index){
        return data * 1.5;
    })
    .attr('ry', 70);


//part4 - line
var fixedX = 0;
svg.selectAll('line')
    .data(dataArray)
    .enter().append('line')
    .attr('x1', fixedX)
    .style('stroke', 'orange')
    .attr('stroke-width', '3')
    .attr('y1', function(data, index){
        return 400 + (index * 20);
    }) //y축 크기
    .attr('x2', function(data){
        return fixedX + (data * 20);
    })
    .attr('y2', function(data, index){
        return 400 + (index * 20);
    });
