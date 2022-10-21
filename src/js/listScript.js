// API DUMMY
const API_URL = 'https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing'

let dummyContainer = document.querySelector("#list")

let getDataBlog = async () => {
    let response = await fetch("https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing")
    let dummy = await response.json()

    for(let i = dummy.length-9; i < dummy.length; i++ ){
        dummyContainer.innerHTML += 
        `
        <div class="p-4 bg-textWhite rounded-lg shadow-xl outline-textPrimary outline outline-offset-2 opacity-[95%]">
                <div class="flex flex-wrap items-center">
                    <img src="${dummy[i].img}" alt="dummyBg" class="w-full rounded-t-lg h-full sm:h-[200px] lg:h-[300px]">
                    <h3 class="font-semibold text-2xl mt-4 text-center lg:text-left w-full truncate">${dummy[i].tittle}<span class="lg:text-left block font-semibold text-[12px] text-center lg:text-left">${dummy[i].author}<span class="font-normal"> | ${dummy[i].releaseDate}</span></span></h3>
                    <p class="mt-2 truncate-overflow text-left sm:text-justify w-full">
                    ${dummy[1].descContent[0]}
                    </p>
                    <div class="text-center lg:text-right mt-6 lg:mt-12 lg:mr-4 w-full bg-bgPrimary py-2 rounded-lg lg:bg-textWhite lg:py-0 lg:rounded-none hover:opacity-[90%] shadow-lg lg:shadow-none">
                        <a href="${dummy[i].link}" target="_blank" class="font-semibold text-textWhite lg:text-textBlack">Readmore<span class="hidden lg:inline">...</span></a>
                    </div>
                </div>
            </div>
        `
    }
}

getDataBlog()