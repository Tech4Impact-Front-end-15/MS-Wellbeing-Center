// API DUMMY
const API_URL = 'https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing'

let keySearch = document.getElementById("main")

let getDataBlog = async () => {
    let search = new URL (document.location).searchParams
    let find = search.get("search")
    let response = await fetch(`https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing?search=${find}`)
    
    let searching = await response.json()
    
    searching.forEach(item => {
        keySearch.innerHTML += 
        `
        <div class="py-4 px-6 bg-[#f1f5f9] rounded-lg shadow-xl outline-[#000] outline outline-offset-2 opacity-[95%]">
        <div class="flex-wrap items-center">
          <img class="w-full rounded-lg" src="${item.img}" alt="MSWC">
            <h1 class="font-bold truncate pt-[2rem]">${item.tittle}</h1>
            <h3 class="font-semibold">${item.author} - <span class="font-normal">${item.releaseDate}</span></h3>
            <p class="mt-2 font-normal truncate-overflow text-left sm:text-justify w-full">${item.descContent}</p>
            <div class="flex justify-end pt-[2rem]">
              <a href="${item.link}" class="mt-4 sm:mt-0 sm:mr-6 hover:font-semibold text-blue-800">Read more</a>
            </div>
        </div>
      </div>
      `
    })
}

getDataBlog()