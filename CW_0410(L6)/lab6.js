var rect = {
    X: {
        x: 2, y: 2,
    },
    Y: {
        x: 10, y: 15,
    }
}
// T1
function viewRect(rect){
    let pr = `X:(${rect.X.x}, ${rect.X.y}); Y:(${rect.Y.x}, ${rect.Y.y}); `;
    document.write(`<p>${pr}</p>`)
    document.write("<span>////////////</span><br>")
};
viewRect(rect);

// T2
function widthRect(rect){
    document.write(`<p>rectangle width: ${rect.Y.x- rect.X.x}</p>`)
    document.write("<span>////////////</span><br>")
};
widthRect(rect);

// T3
function heightRect(rect){
    document.write(`<p>rectangle height: ${rect.Y.y- rect.X.y}</p>`)
    document.write("<span>////////////</span><br>")
};
heightRect(rect);

// T4
function squareRect(rect){
    document.write(`<p>rectangle square: ${(rect.Y.y- rect.X.y)*(rect.Y.x- rect.X.x)}</p>`)
    document.write("<span>////////////</span><br>")
};
squareRect(rect);

// T5
function perimRect(rect){
    document.write(`<p>rectangle perimeter: ${((rect.Y.y- rect.X.y)+(rect.Y.x- rect.X.x))*2}</p>`)
    document.write("<span>////////////</span><br>")
};
perimRect(rect);

// T6
function changeWidthRect(rect, changeX){
    rect.Y.x +=changeX;
    document.write(`<span>change width in ${changeX}. Resault: </span>`)
    widthRect(rect);
    document.write("<span>////////////</span><br>")
};
changeWidthRect(rect, 10);
 

// T7
function changeHeightRect(rect, changeY){
    rect.Y.y +=changeY;
    document.write(`<span>change height in ${changeY}. Resault: </span>`)
    heightRect(rect);
    document.write("<span>////////////</span><br>")
};
changeHeightRect(rect, 7);

// T8
function changeWidthHeightRect(rect, changeX, changeY){
    rect.Y.y +=changeY;
    rect.Y.x +=changeX;
    document.write(`<span>change weidth in ${changeX}, change height in ${changeY} . Resault: </span>`)
    widthRect(rect);
    heightRect(rect);
    document.write("<span>////////////</span><br>")
};
changeWidthHeightRect(rect, -10, -7);

// T9
function moveXRect(rect, moveX){
    rect.X.x +=moveX;
    rect.Y.x +=moveX;
    document.write(`<span>move rect by X in ${moveX}. Resault: </span>`)
    viewRect(rect);
    document.write("<span>////////////</span><br>")
}
moveXRect(rect, 10);

// T10
function moveYRect(rect, moveY){
    rect.X.y +=moveY;
    rect.Y.y +=moveY;
    document.write(`<span>move rect by Y in ${moveY}. Resault: </span>`)
    viewRect(rect);
    document.write("<span>////////////</span><br>")
}
moveYRect(rect, 10);

// T11
function moveXYRect(rect, moveX, moveY){
    rect.X.x +=moveX;
    rect.Y.x +=moveX;
    rect.X.y +=moveY;
    rect.Y.y +=moveY;
    document.write(`<span>move rect by X in ${moveX}, by Y in ${moveY}. Resault: </span>`)
    viewRect(rect);
    document.write("<span>////////////</span><br>")
}
moveXYRect(rect,-10, -10);

// T12
function isPointInRect(rect, pointX, pointY){
    let pr=`<p>Point (${pointX},${pointY}) `;
    if(
        (pointX>rect.X.x&&pointX<rect.Y.x)&&
        (pointY>rect.X.y&&pointY<rect.Y.y)
        ) pr+="in";
        else pr+="out";
        pr+=` rectangle`;
        document.write(`<p>${pr}</p>`)
        viewRect(rect);
        document.write("<span>////////////</span><br>")
}
isPointInRect(rect, 3,10)
isPointInRect(rect, 3,17)