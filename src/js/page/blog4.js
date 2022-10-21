async function getBlog(){

    let url = "https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing"
    let response = await fetch (url)
    let result = await response.json()

    const headerBlog = document.querySelector("#header")
    const mainBlog = document.querySelector("#main")

    headerBlog.innerHTML += `
        <div class="text-center mt-12">
            <h1 class="text-2xl lg:text-4xl text-textPrimary font-bold">${result[3].tittle}</h1>
            <h5 class="font-semibold text-sm mt-2">${result[3].author} <span class="font-normal">| ${result[3].releaseDate}</span></h5>
            <div class="flex justify-center">
            <img class="mt-8 shadow-lg" src="${result[3].img}" alt="${result[3].tittle}">
            </div>
        </div>
    `
    for(let i = 0; i < result[3].subtittle.length; i++ ){
        mainBlog.innerHTML += `
            <div class="mt-8">
                <h3 class="text-xl lg:text-2xl font-semibold text-textSecondary">${result[3].subtittle[i]}</h3>
                <p class="text-md text-justify lg:text-left lg:text-lg mt-4">${result[3].descContent[i]}</p>
            </div>
        `
    };
}
getBlog()