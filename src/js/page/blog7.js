async function getBlog(){

    let url = "https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing"
    let response = await fetch (url)
    let result = await response.json()

    const headerBlog = document.querySelector("#header")
    const mainBlog = document.querySelector("#main")

    headerBlog.innerHTML += `
        <div class="text-center mt-12">
            <h1 class="text-4xl text-textPrimary font-bold">${result[6].tittle}</h1>
            <h5 class="font-semibold text-sm mt-2">${result[6].author} <span class="font-normal">| ${result[6].releaseDate}</span></h5>
            <div class="flex justify-center">
            <img class="mt-8 shadow-lg" src="${result[6].img}" alt="${result[6].tittle}">
            </div>
        </div>
    `
    for(let i = 0; i < result[6].subtittle.length; i++ ){
        mainBlog.innerHTML += `
            <div class="mt-8">
                <h3 class="text-2xl font-semibold text-textSecondary">${result[6].subtittle[i]}</h3>
                <p class="text-md text-justify lg:text-left lg:text-lg mt-4">${result[6].descContent[i]}</p>
            </div>
        `
    };
}
getBlog()