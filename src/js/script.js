// API DUMMY
const API_URL = 'https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing'

let dummyContainer = document.querySelector("#main")

let getDataBlog = async () => {
    let response = await fetch("https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing")
    let dummy = await response.json()

    for(let i = dummy.length-9; i < dummy.length; i++ ){
        dummyContainer.innerHTML += 
        `
        <div class="py-4 px-6 bg-[#f1f5f9] rounded-lg shadow-xl outline-[#000] outline outline-offset-2 opacity-[95%]">
        <div class="flex-wrap items-center">
          <img class="w-full rounded-lg" src="${dummy[i].img}" alt="MSWC">
            <h1 class="font-bold truncate pt-[2rem]">${dummy[i].tittle}</h1>
            <h3 class="font-semibold">${dummy[i].author} - <span class="font-normal">${dummy[i].releaseDate}</span></h3>
            <p class="mt-2 font-normal truncate-overflow text-left sm:text-justify w-full">${dummy[i].descContent}</p>
            <div class="flex justify-end pt-[2rem]">
              <a href="${dummy[i].link}" class="mt-4 sm:mt-0 sm:mr-6 hover:font-semibold text-blue-800">Read more</a>
            </div>
        </div>
      </div>
        `
    }
}

getDataBlog()