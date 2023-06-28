const crearArchivo = (base = 5) => {
    let salida= "";
    for (let i = 1; i <= 10; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
        console.log(`${base} * ${i} = ${base * i}`);
    }
    console.log(salida);
    try {
        fs.writeFileSync("tabla.txt", salida);
        console.log("tabla.txt creado");
    } catch (err) {
        console.error("Error al escribir en tabla.txt:", err);
    }

    }
    crearArchivo();



