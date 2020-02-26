// fetch('products.hbs')
//     .then()


fetch('products.json')
.then((jsonData)=> {
    return jsonData.json()
}).then((productData)=> {
    fetch('products.hbs')
        .then((templateData)=>{
            return templateData.text()
        }).then((productTemplate)=> {
            let hbsTemplate = Handlebars.compile(productTemplate)
            let products = hbsTemplate(productData)
            document.querySelector('.products').innerHTML = products
        })
})