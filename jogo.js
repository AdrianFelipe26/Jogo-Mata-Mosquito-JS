var altura = 0;
var largura = 0;
var mosquito = document.createElement('img');
var tempoCriaMosquito = 1500
var tempo =15;
var criarMosquito;
var vidas = 1;

//capturando a dificuldade que foi passada como parametros
var nivel = window.location.search;
nivel = nivel.replace('?','');

//dificuldade do jogo

//colocando a dificuldade no jogo
if(nivel == 'normal')
{	

	tempoCriaMosquito = 1500;


}else if(nivel == 'dificil')
{
	tempoCriaMosquito = 1000;

}else if(nivel == 'chucknorris'){

	tempoCriaMosquito = 750;

}





function ajustaTamanhoPalcoJogo()
{


	altura = window.screen.availHeight;
	largura = window.screen.availWidth;


	console.log(altura,largura);
}


ajustaTamanhoPalcoJogo();



function TamanhoRandomico()
{

	var classe = Math.floor(Math.random()*3);

	switch(classe){

		case 0:
			return 'mosquito-pequeno';
		case 1:
			return 'mosquito-medio';
		case 2:
			return 'mosquito-grande';

	}
}



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
		clearInterval(criarMosca);

		window.location.href="boss.html";
	}
	else{

		document.getElementById('cronometro').innerHTML = "Tempo Restante: "+tempo;

	}

	

},1000)




function criarMosquito()
{	
	
	if(document.getElementById('mosquito'))
	{

		document.getElementById('mosquito').remove();


			if(vidas <=3)
			{

				document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png";
				vidas++;


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

				
				
				mosquito.src = 'imagens/mosquito.png';
				mosquito.className = TamanhoRandomico() + ' ' + ladoAleatorio();
				mosquito.style.left = posicaoX+'px';
				mosquito.style.top = posicaoY+'px';
				mosquito.style.position = 'absolute';
				mosquito.id = 'mosquito';
				

				mosquito.onclick = function(){

					this.remove();
				}

				document.getElementById('pai').appendChild(mosquito);


	


}

