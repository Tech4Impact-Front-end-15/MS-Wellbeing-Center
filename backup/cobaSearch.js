// API DUMMY
const API_URL = 'https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing'

const listBlog = document.querySelector("[data-blog]")
const dataBlog = document.querySelector("#main")
const searchInput = document.querySelector("#search")

let users = []

searchInput.addEventListener("input", (e)=>{
    const value = e.target.value.toLowerCase()
    users.forEach(user =>{
        const isVisible = 
        item.tittle/toLowerCase().includes(value) || item.author.toLowerCase.includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })

})

fetch("https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing")
.then(res => res.json())
.then(data => {
    user = data.map(item => {
        const card = listBlog.content.cloneNode(true).children[0]
        const foto = card.querySelector(".img")
        const judul = card.querySelector(".title")
        const penulis = card.querySelector(".author")
        const isi = card.querySelector(".desc")

        foto.textContent = item.img
        judul.textContent = item.tittle
        penulis.textContent = item.author
        isi.textContent = item.descContent

        dataBlog.append(card)
        return { 
            img : item.img, 
            title : item.tittle, 
            author : item.author,
            descContent : item.descContent,
            element : card
        }

        // console.log(item);
        
    });
})


// let getDataBlog = async () => {
//     let search = new URL (document.location).searchParams
//     let find = search.get("search")
//     let response = await fetch(`https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing`) //&query=${find}
    
//     let searching = await response.json()
// }
//     console.log(getDataBlog());

// function searching() {
//     const blogList = API_URL.match((item) =>{

//     })
// }