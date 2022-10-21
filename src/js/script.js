// Dark Mode Function
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

// News Blog Function
async function getBlog(){

    let url = "https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing"
    let response = await fetch (url)
    let result = await response.json()

    // console.log(result)

    const newsBlog = document.querySelector("#newsblog")
    // let i = result.length-3
    console.log()

    for(let i = result.length-4; i < result.length; i++ ){
        newsBlog.innerHTML += `
            <div class="p-4 bg-bgSekunder rounded-lg shadow-xl outline-textPrimary outline outline-offset-2 opacity-[95%]">
                <div class="flex flex-wrap items-center">
                    <img src="${result[i].img}" alt="dummyBg" class="w-full rounded-t-lg h-full sm:h-[200px] lg:h-[300px]">
                    <h3 class="font-semibold text-2xl mt-4 text-center lg:text-left w-full truncate">${result[i].tittle}<span class="lg:text-left block font-semibold text-[12px] text-center lg:text-left">${result[i].author}<span class="font-normal"> | ${result[i].releaseDate}</span></span></h3>
                    <p class="mt-2 truncate-overflow text-left sm:text-justify w-full">
                    ${result[i].descContent[0]}
                    </p>
                    <div class="text-center lg:text-right mt-6 lg:mt-12 lg:mr-4 w-full bg-bgPrimary py-2 rounded-lg lg:bg-bgSekunder lg:py-0 lg:rounded-none hover:opacity-[90%] shadow-lg lg:shadow-none">
                        <a href="${result[i].link}" target="_blank" class="font-semibold text-textWhite lg:text-textBlack">Readmore<span class="hidden lg:inline">...</span></a>
                    </div>
                </div>
            </div>
        `
    };
};
getBlog()

// Carousel Function
let currentSlideID = 0;


let sliderElement = document.getElementById('slider');
let totalSlide = sliderElement.childElementCount;
console.log(totalSlide)

document.getElementById("next").addEventListener("click", next)
function next(){
    if(currentSlideID < totalSlide-1){
        currentSlideID++;
        showSlide()
    } else {
        currentSlideID = 0;
        showSlide()
    }
}

document.getElementById("prev").addEventListener("click", prev)
function prev(){
    if(currentSlideID > 0){
        currentSlideID--;
        showSlide()
    } else {
        currentSlideID = totalSlide-1;
        showSlide()
    }
}

function showSlide(){
    let slide = document.getElementById('slider').getElementsByTagName('li')
    for (let i = 0; i < totalSlide; i+1){
        const n = slide[i];
        if(currentSlideID===i++){
            n.classList.remove('hidden')
        }else{
            n.classList.add('hidden')
        }
    }
}
