const getById = (id, callback) => {
    const usuario = {
        id,
        nombre: "Mauroo"
    };
    setTimeout(() => {
        callback(usuario);
    }, 1000);
};


getById(10, (usuario) => {
    console.log(`Hola ${usuario.nombre}`);
});