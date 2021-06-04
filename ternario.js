let edad = prompt("Ingresa tu edad:");

edad > 18 ?  (
    alert("Adelante"),
    location.assign("socio.html")
) : (
    alert("Lo siento no puedes seguir"),
    location.assign("error.html")
);
