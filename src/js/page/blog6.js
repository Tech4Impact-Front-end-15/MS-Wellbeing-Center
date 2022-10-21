async function getBlog(){

    let url = "https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing"
    let response = await fetch (url)
    let result = await response.json()

    const headerBlog = document.querySelector("#header")
    const mainBlog = document.querySelector("#main")

    headerBlog.innerHTML += `
        <div class="text-center mt-12">
            <h1 class="text-4xl text-textPrimary font-bold">${result[5].tittle}</h1>
            <h5 class="font-semibold text-sm mt-2">${result[5].author} <span class="font-normal">| ${result[5].releaseDate}</span></h5>
            <div class="flex justify-center">
            <img class="mt-8 shadow-lg" src="${result[5].img}" alt="${result[5].tittle}">
            </div>
        </div>
    `
    for(let i = 0; i < result[5].subtittle.length; i++ ){
        mainBlog.innerHTML += `
            <div class="mt-8">
                <h3 class="text-2xl font-semibold text-textSecondary">${result[5].subtittle[i]}</h3>
                <p class="text-md text-justify lg:text-left lg:text-lg mt-4">${result[5].descContent[i]}</p>
            </div>
        `
    };
}
getBlog()