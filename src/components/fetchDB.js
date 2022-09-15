const ok = true
let fetchDB = (tiempo,productos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ok){
                resolve(productos)
            } else {
                reject("error")
            }
        },tiempo)
    })
    
}

export default fetchDB