let ul=document.querySelector(".my-ul")
let btn=document.querySelector("button")
let input = document.querySelector(".my-input")
btn.addEventListener("click",()=>{
    let li = document.createElement("li")
    let span=document.createElement("span")
    span.innerText=input.value
    li.appendChild(span)
    ul.appendChild(li)

    span.addEventListener("click",()=>{
        let inputChange=document.createElement("input")
        inputChange.value=span.innerText
        span.style.display="none"
        li.appendChild(inputChange)

        inputChange.addEventListener("blur",()=>{
            span.innerText=inputChange.value
            inputChange.remove()
            span.style.display="block"
        })
    })
})