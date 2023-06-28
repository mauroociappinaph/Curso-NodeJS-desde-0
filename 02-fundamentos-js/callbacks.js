const getById = (id) => {
    const usuario = {
        id,
        nombre: "Mauroo"

    };

    setTimeout(() => {
        console.log(usuario);
    }, 1000)
}

getById(1);