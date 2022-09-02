
let output = document.querySelector("#output");
let input_vm = document.querySelector("#input");
let input_tm = document.querySelector("#input2");
let input_consumo = document.querySelector("#input3")
let input_custo = document.querySelector("#input4")

let button = document.querySelector("#button");
button.addEventListener("click", calcularLitro, false);

let litros_consumido = 0;
let distancia = 0;
let valor_total = 0;


function calcularLitro(){
	let velocidade_media = parseInt(input_vm.value);
	let tempo_medio = parseInt(input_tm.value);
	let km_litro = parseInt(input_consumo.value);
	let valor_digitado = input_custo.value;
	let custo = parseFloat(valor_digitado.replace(",", "."));


	distancia = velocidade_media * tempo_medio;
	litros_consumido = distancia / km_litro;

	
	custo_total = litros_consumido * custo;
	custo_total = custo_total.toFixed(2)
	custo_formatado = custo_total.toString();
	custo_formatado = custo_formatado.replace(".", ",");

	litros_consumido = litros_consumido.toFixed(2)
	
	
	output.innerHTML = `velocidade média: ${velocidade_media} km<br>
	tempo de viajem: ${tempo_medio} horas<br>Litros consumidos: ${litros_consumido}<br> 
	Custo total: ${custo_formatado} reais`;
	
}
