
// 2) Написать XMLHttpRequest запрос на json файл созданный вами (данные в json могут быть абсолютно любыми,
// главное напишите его сами) и вывести всё это просто в консоли в виде JS объекта

const request = new XMLHttpRequest()
request.open('GET','data.json')
request.setRequestHeader('Content-type','application/json')
request.send()
request.addEventListener('load',()=>{
    console.log(JSON.parse(request.response))
})
// request.onload = () =>{
//         console.log(JSON.parse(request.response))
// }

