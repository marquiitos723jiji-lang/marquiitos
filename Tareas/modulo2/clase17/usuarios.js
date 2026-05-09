//Van a tener que consumir la lista de usuarios:
let div = document.createElement("div")
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.gap = "15px"
document.body.appendChild(div)

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((elemento) => {
            let articulo = document.createElement("article")

            articulo.style.border = "5px solid green"
            articulo.style.borderRadius = "10px"
            articulo.style.display = "flex"
            articulo.style.flexDirection = "column"
            articulo.style.padding = "10px"
            articulo.style.background = "yellow"
            articulo.style.boxShadow = "10px 10px red"
            articulo.style.textAlign = "center"

            let id = document.createElement("h2")
            id.textContent = "ID: " + elemento.id
            let nombre = document.createElement("h2")
            nombre.textContent = "Nombre: " + elemento.name
            let nombreDeUsuario = document.createElement("h2")
            nombreDeUsuario.textContent = "Nombre de Usuario: " + elemento.username
            let correoElectronico = document.createElement("h2")
            correoElectronico.textContent = "Correo Electronico: " + elemento.email
            let direccion = document.createElement("h2")
            direccion.textContent = "Direccion: "
            let calle = document.createElement("h2")
            calle.textContent = "Calle: " + elemento.address.street
            let suite = document.createElement("h3")
            suite.textContent = "Suite: " + elemento.address.suite
            let ciudad = document.createElement("h3")
            ciudad.textContent = "Ciudad: " + elemento.address.city
            let codigoPostal = document.createElement("h3")
            codigoPostal.textContent = "codigo: " + elemento.address.zipcode
            let geo = document.createElement("h2")
            geo.textContent = "Geo: "
            let lat = document.createElement("h3")
            lat.textContent = "Lat: " + elemento.address.geo.lat
            let ing = document.createElement("h3")
            ing.textContent = "Ing: " + elemento.address.geo.lng
            let telefono = document.createElement("h2")
            telefono.textContent = "Telefono: " + elemento.phone
            let sitioWeb = document.createElement("h2")
            sitioWeb.textContent = "Sitio Web: " + elemento.website
            let compañia = document.createElement("h2")
            compañia.textContent = "Compania: "
            let cNombre = document.createElement("h3")
            cNombre.textContent = "Nombre: " + elemento.company.name
            let catchPhrase = document.createElement("h3")
            catchPhrase.textContent = "CathcPhrase: " + elemento.company.catchPhrase
            let bs = document.createElement("h3")
            bs.textContent = "Bs: " + elemento.company.bs

            articulo.appendChild(id)
            articulo.appendChild(nombre)
            articulo.appendChild(nombreDeUsuario)
            articulo.appendChild(correoElectronico)
            articulo.appendChild(direccion)
            articulo.appendChild(calle)
            articulo.appendChild(suite)
            articulo.appendChild(ciudad)
            articulo.appendChild(codigoPostal)
            articulo.appendChild(geo)
            articulo.appendChild(lat)
            articulo.appendChild(ing)
            articulo.appendChild(telefono)
            articulo.appendChild(sitioWeb)
            articulo.appendChild(compañia)
            articulo.appendChild(cNombre)
            articulo.appendChild(catchPhrase)
            articulo.appendChild(bs)
            div.appendChild(articulo)
    })
})

//y por cada uno de los usuarios, crear 1 tarjeta, mostrando cada una de las propiedades del usuario