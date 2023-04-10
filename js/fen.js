

window.onload = function(){
	var oDiv = document.getElementById('secondRight');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var aImg = oUl.getElementsByTagName('img');
	var oBtn = document.getElementById('btn');
	var aA = oBtn.getElementsByTagName('a');
	
	var oLeftDiv = document.getElementById('secondLeft');
	var leftLi=	oLeftDiv.getElementsByTagName('li');
	
	var imgWidth =oDiv.offsetWidth;
	for(var i=0;i<aImg.length;i++)
{aImg[i].style.width=imgWidth+ 'px' }
	var iNow=0;
	oUl.style.width = aImg.length * imgWidth + "px";



/*ÒÆ¶¯º¯Êý*/

	function startMove(An){
		oUl.style.left= An -40+ 'px';
	
}

	for(var i=0;i<aA.length;i++)
	{
		aA[i].index=i;
		aA[i].onclick=function(){
		iNow=this.index;
			for(var i=0;i<aA.length;i++){aA[i].className='';leftLi[i].className='';}
	this.className="active";
	leftLi[this.index].className='active';
	startMove(- this.index * imgWidth);
		}
	}

	setInterval(toRun,4000);
	function toRun(){
		if(iNow==(aA.length-1))
		iNow=0;
		else
		iNow++;
		for(var i=0;i<aA.length;i++){aA[i].className='';leftLi[i].className='';}
	aA[iNow].className="active";
	leftLi[iNow].className="active";
	startMove(-  iNow* imgWidth);
	}

};

