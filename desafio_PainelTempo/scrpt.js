fetch('./data.json').then((request)=>{
    if(!request.ok) {
        console.log('Algo deu errado')
        return null
    }
    return request.json()
}).then((data)=>{
    console.log(data);
    return data.forEach((el)=>{
        console.log(el)
    })
})