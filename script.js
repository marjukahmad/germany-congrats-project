
/* basic styles for black background and crosshair cursor */
body {
	background: #000;
	margin: 0;
	padding: 0;
	background: url(http://jackrugile.com/lab/fireworks-v1/bg.jpg) no-repeat center bottom fixed;
	background-size: cover;
}

canvas {
	cursor: crosshair;
	display: block;
}

#resolutions {
    color: #eee;
    font-family: "Helvetica Neue";
    background: #1a1a1a;
    margin: 60px;
    position: relative;
    max-width: 400px;
    z-index: 3;
    padding: 20px 20px 20px 20px;
    border: #222 1px solid;
}

#resolutions h1 {
    color: #fff;
    font-size: 24px;
    line-height: 24px;
    margin: 0 0 10px;
    font-weight: bold;
}

#resolutions p {
    font-size: 16px;
    margin: 0 0 15px;
    color: #999;
}

#mountains2 {
    background: url(http://jackrugile.com/lab/fireworks-v1/mountains2.png) repeat-x 30% 0;
    bottom: 0;
    height: 250px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
}

#mountains1 {
    background: url(http://jackrugile.com/lab/fireworks-v1/mountains1.png) repeat-x 40% 0;
    bottom: 0;
    height: 200px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
}

#skyline {
    background: url(http://jackrugile.com/lab/fireworks-v1/skyline.png) repeat-x 50% 0;
    bottom: 0;
    height: 135px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
}