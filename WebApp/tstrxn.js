var start = new Date().getTime();
var highscore=1000000000000;
function randomColor()
{
	var l = "0123456789ABCDEF".split("");
	var c = "#";
	for(var i=0;i<6;i++)
	{
		c+=l[Math.floor(Math.random() * 16)];
	}
	if(c=="#e9ebee")
	{
		return randomColor();
	}
	else
	{
		return c;
	}	
}
	
function shapeReappear()
{
	var top1 = Math.random() * 200;
	var left1 = Math.random() * 1000;
	var wdt = 100+(Math.random() * 200);
	if(Math.random()>0.5)
	{
		document.getElementById("shape").style.borderRadius="50%";
	}
	else
	{
		document.getElementById("shape").style.borderRadius="0%";
	}
	document.getElementById("shape").style.display="block";
	document.getElementById("shape").style.marginTop= top1 +"px";
	document.getElementById("shape").style.marginLeft= left1 +"px";
	document.getElementById("shape").style.width=wdt + "px";
	document.getElementById("shape").style.backgroundColor = randomColor();
	start = new Date().getTime();
}	
	setTimeout(shapeReappear,1000);
function shapeReappearDelay()
{
	setTimeout(shapeReappear,Math.random()* 1000);
}	
	
document.getElementById("shape").onclick = function()
{
	var end = new Date().getTime();
	var timeTaken = (end - start)/1000;
	
	document.getElementById("shape").style.display="none";
	document.getElementById("timeTaken").innerHTML = timeTaken + "s";
	if(timeTaken<highscore)
	{
		highscore=timeTaken;
		document.getElementById("highscore").innerHTML = highscore + "s";
		document.getElementById("yourtime").style.color="#ec4669";
		document.getElementById("timeTaken").style.color="#ec4669";
	
	}
	else
	{
		document.getElementById("yourtime").style.color="white";
		document.getElementById("timeTaken").style.color="white";
	}
		
	
	shapeReappearDelay();
}

	
