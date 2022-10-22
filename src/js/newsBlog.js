// News Blog Function
async function getBlog(){

    let url = "https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing"
    let response = await fetch (url)
    let result = await response.json()

    // console.log(result)

    const viewNewsBlog = document.querySelector("#viewNewsblog")
    // let i = result.length-3
    console.log()

    for(let i = result.length-4; i < result.length; i++ ){
        viewNewsBlog.innerHTML += `
            <div class="p-4 bg-bgSekunder rounded-lg shadow-xl outline-textPrimary outline outline-offset-2 opacity-[95%]">
                <div class="flex flex-wrap items-center">
                    <img src="${result[i].img}" alt="dummyBg" class="w-full rounded-t-lg h-full sm:h-[200px] lg:h-[300px]">
                    <h3 class="font-semibold text-2xl mt-4 text-center lg:text-left w-full truncate">${result[i].tittle}<span class="lg:text-left block font-semibold text-[12px] text-center lg:text-left">${result[i].author}<span class="font-normal"> | ${result[i].releaseDate}</span></span></h3>
                    <p class="mt-2 truncate-overflow text-left sm:text-justify w-full">
                    ${result[i].descContent[0]}
                    </p>
                    <a href="${result[i].link}" target="_blank" class="text-center lg:text-right mt-6 lg:mt-12 lg:mr-4 w-full lg:hidden bg-bgPrimary py-2 rounded-lg lg:bg-textWhite lg:py-0 lg:rounded-none hover:opacity-[90%] shadow-lg lg:shadow-none">
                    <button class="font-semibold text-[#fff] lg:text-textBlack">
                        Readmore<span class="hidden lg:inline">...</span>
                    </button>
                    </a>
                    <div class="hidden lg:block w-full text-right mt-12 mr-4">
                        <a href="${result[i].link}" target="_blank" class="hover:opacity-[90%] font-semibold text-textBlack">Readmore...</a>
                    </div>
                </div>
            </div>
        `
    };
};
getBlog()