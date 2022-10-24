// API DUMMY
const API_URL = 'https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing'

let keySearch = document.getElementById("list")
let keyNoresult = document.getElementById("alert")

let getDataBlog = async () => {
    let search = new URL (document.location).searchParams
    let find = search.get("search")
    let response = await fetch(`https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing?search=${find}`)
    
    let searching = await response.json()
    
    if (Array.isArray(searching)&&searching.length) {
            searching.forEach(item => {
            keySearch.innerHTML += 
            `
            <div class="p-4 bg-textWhite rounded-lg shadow-xl outline-textPrimary outline outline-offset-2 opacity-[95%]">
                <div class="flex flex-wrap items-center">
                    <img src="${item.img}" alt="dummyBg" class="w-full rounded-t-lg h-full sm:h-[200px] lg:h-[300px]">
                    <h3 class="font-semibold text-2xl mt-4 text-center lg:text-left w-full truncate">${item.tittle}<span class="lg:text-left block font-semibold text-[12px] text-center lg:text-left">${item.author}<span class="font-normal"> | ${item.releaseDate}</span></span></h3>
                    <p class="mt-2 truncate-overflow text-left sm:text-justify w-full">
                    ${item.descContent[0]}
                    </p>
                    <a href="page/${item.link}" target="_blank" class="text-center lg:text-right mt-6 lg:mt-12 lg:mr-4 w-full lg:hidden bg-bgPrimary py-2 rounded-lg lg:bg-textWhite lg:py-0 lg:rounded-none hover:opacity-[90%] shadow-lg lg:shadow-none">
                        <button class="font-semibold text-[#fff] lg:text-textBlack">
                            Readmore<span class="hidden lg:inline">...</span>
                        </button>
                    </a>
                    <div class="hidden lg:block w-full text-right mt-12 mr-4">
                        <a href="page/${item.link}" target="_blank" class="hover:opacity-[90%] font-semibold text-textBlack">Readmore...</a>
                    </div>
                </div>
            </div>
            
          `
        })} else{
            keyNoresult.innerHTML =
            `
            <h1 class="font-bold text-2xl text-center text-textSecondary">${find} is Not Found!</h1>
            `
            alert("Blog dengan judul "+find+" tidak ditemukan atau belum tersedia!");
        }

    }

getDataBlog()