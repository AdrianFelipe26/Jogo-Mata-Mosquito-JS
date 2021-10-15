var boss = document.createElement('img');
var vidas = 1;
var tempo = 30;
var criaMosquitoTempo = 900;
var tiralife = 30;





function lifeboss(){

	var lifeboss = document.getElementById('lifeboss');

	lifeboss.style.backgroundColor = "green";
	var width = lifeboss.style.width = 1200+"px";
	lifeboss.style.height = 20+"px";

	console.log("funcao1"+width);
	
}




function createBoss()
{

	


	// console.log(lifeboss);


	if(document.getElementById('boss'))
	{

		document.getElementById('boss').remove();


			if(vidas <=3)
			{

				// document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png";
				// vidas++;


			}
			else
			{

				window.location.href="derrota.html";
			}


	}
	


				posicaoX = Math.floor(Math.random()*750)-150;
				posicaoY = Math.floor(Math.random()*750)-150;

				posicaoX  = posicaoX < 0 ? 0 : posicaoX;
				posicaoY  = posicaoY < 0 ? 0 : posicaoY;

				
				
				boss.src = 'imagens/mosquito.png';
				boss.className =  'boss' + ' ' + ladoAleatorio();
				boss.style.left = posicaoX+'px';
				boss.style.top = posicaoY+'px';
				boss.style.position = 'absolute';
				boss.id = 'boss';
				

				boss.onclick = function(e){				


						
					let lifeboss = document.getElementById('lifeboss');

					 lifeboss.style.width  =  1200 - tiralife+"px";
					 lifeboss.style.backgroundColor = "green";
					

					// var width = document.getElementById('lifeboss').style.width ;

					// console.log(lifeboss);

					tiralife += 30;
					// console.log(tiralife);
					console.log("priva"+lifeboss.style.width)

					if(lifeboss.style.width >= 601+ "px")
					{
						 lifeboss.style.backgroundColor = 'green';

					}

					if(lifeboss.style.width <= 0+ "px")
					{
						window.location.href='vitoria.html';
					}


					if(lifeboss.style.width <= 600+ "px")
					{
						lifeboss.style.backgroundColor = 'yellow';
					}
					

					if(lifeboss.style.width <= 400+ "px")
					{
						lifeboss.style.backgroundColor = 'red';
					}

					








			
					


					
				}

				
	
	



	document.getElementById('pai-boss').appendChild(boss);

}








//////////////////////////////////////////////////////////

function ladoAleatorio()
{

	var lado = Math.floor(Math.random()*2);

	switch(lado)
	{

	
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB';

	}		

}





var cronometro = setInterval(function(){

	tempo -=1;

	if(tempo <= 0)
	{
		clearInterval(cronometro);
		clearInterval(criaMosca);

		window.location.href="derrota.html";
	}
	else{

		document.getElementById('cronometro').innerHTML = "Tempo Restante: "+tempo;

	}

	

},1000)




		


	





window.addEventListener("load",createBoss);
window.addEventListener("load",lifeboss);

