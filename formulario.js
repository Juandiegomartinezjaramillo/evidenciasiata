

function consola(){
	x=Number(datos.value)
	y=Number(precio.value)
	a=producto.value
	e=Number(dinero.value)
	multi=x*y

	fin=e-multi
	
	resulito.innerHTML="compraste " +x + a + " de " +y + " lo cual cuesta " + multi + " tu para fue " + e+ " y tu regreso es " + fin;

}