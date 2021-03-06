const string = `.skin *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.skin *::after,.skin *::before{
    box-sizing: border-box;
}

.skin{
    background: #ffe600;
    min-height: 60vh;
    position: relative;
}
.nose{
   border: 7px solid black;
   border-color: #2e2e2e transparent transparent transparent;
   border-bottom: none;
   width: 0;
   height: 0;
   position: absolute;
    left: 50%;
    top: 250px;
    margin-left: -10px;
    z-index: 10;

}

.nose .circle{
    position: absolute;
    left: 50%;
    width:14px;
    height: 6px;
    background: #2e2e2e;
    top: -13px;
    border-radius:15px 15px 0 0 ;
    margin-left: -7px;
}
/* 声明一个动画 四个动作分三段 */
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(8deg);
    }
    66%{
        transform: rotate(-8deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.nose:hover {
    /* 改变圆点 以底部为原点 */
    transform-origin:bottom;
    animation: wave 200ms infinite linear;
}

.eye{
    position: absolute;
    width: 64px;
    height: 64px;
    border: 2px solid #000;
    left: 50%;
    top: 180px;
    margin-left: -32px;
    border-radius: 50%;
    background: #2e2e2e
}

.eye.left{
    transform: translateX(-100px);
}

.eye.right{
    transform: translateX(100px);
}

.eye::before{
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    border: 3px solid #000;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 1px;
}

.mouth{
    width: 200px;
    height: 200px;
    /* border:1px solid red; */
    position: absolute;
    left: 50%;
    top: 280px;
    margin-left: -100px;
}

.mouth .up{
    position: absolute;
    top: -10px;
}

.mouth .up .lip{
    background: #ffe600;
    z-index: 1;
}

.mouth .up .lip.left{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    border-right-color:transparent;
    position: absolute;
    left: 50%;
    transform: rotate(-15deg) translateX(-1px);

}

.mouth .up .lip.right{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    border-left-color:transparent;
    position: absolute;
    left: 50%;
    transform: rotate(15deg)  translateX(105px);
    top: -27px;

}

.mouth .up .lip.left::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    /* border: 1px solid green; */
    position: absolute;
    right: -6px;
    bottom: 0px;
    background: #ffe600;
}

.mouth .up .lip.right::before{
    content: '';
    display: block;
    width: 10px;
    height: 30px;
    /* border: 1px solid green; */
    position: absolute;
    right: 89px;
    bottom: 0;
    background: #ffe600;
}

/* 使用两个div遮住旋转嘴唇时的黑线 */
.yellow{
    width: 10px;
    height: 90px;
    /* border: 1px solid green; */
    position: absolute;
    left: 50%;
    background: #ffe600;
}
.yellow.left{
    transform: rotate(-90deg);
    top: -47px;
    margin-left: -5px;

}

.mouth .down{
width: 200px;
height: 160px;
/* border: 1px solid red; */
position: relative;
left: 50%;
top: 0;
margin-left: -100px;
overflow: hidden;
}

.mouth .down .yuan1{
    width: 150px;
    height: 1000px;
    border: 3px solid black;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px / 300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    /* border: 2px solid black; */
    width:200px;
    height: 210px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: -85px;
    border-radius: 110px;
    background: #ff485f;
}

.face{
    width: 88px;
    height: 88px;
    border: 3px solid black;
    position: absolute;
    left: 50%;
    top: 300px;
    z-index: 2;
    margin-left: -44px;
    border-radius: 50%;
    background: #ff0000;
}
.face.left{
    transform: translateX(-200px);
}
.face.right{
    transform: translateX(200px);
}
`
//导出
export default string;