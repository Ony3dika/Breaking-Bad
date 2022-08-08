// https://www.breakingbadapi.com/api/characters

let display = document.querySelector('.red');

document.addEventListener('DOMContentLoaded', call)

function call(){
    fetch("https://www.breakingbadapi.com/api/characters")
        .then((data)=>{
            return data.json()
        })

        .then((character)=>{
            console.log(character)

            character.forEach((person)=>{
                let div = document.createElement('div')

                div.style.backgroundColor="rgb(20, 20, 20)"
                div.style.boxShadow="0px 0px 9px 4px rgba(255, 255, 255, 0.297)"

                div.classList.add("card","py-2","m-3","col-xl-5","col-10","text-center","ms-xl-5","ms-4")

                div.innerHTML=`
                    <h4>${person.name} (${person.nickname})</h4>
                   <div><img class="h-100 w-75 rounded-1" src="${person.img}"></div>

                   <p class="mt-3">${person.name} also known as ${person.nickname}, born on ${person.birthday} and is a ${person.occupation}</p>
                `
                display.append(div)
            })
        })
}

