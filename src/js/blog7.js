tailwind.config = {
  darkMode: "class",
  theme: {
    colors: {
      textPrimary: "#006969",
      textSecondary: "#008783",
      textBlack: "#131313",
      textWhite: "#E6E6E6",
      bgPrimary: "#01A29D",
      bgSekunder: "#DADADA",
    },
  },
};

//API
let API_URL = "https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing";

let dummyContainer = document.getElementById("main");
let contentContainer = document.getElementById("content");

let getDataDummy = async () => {
  let response = await fetch(
    "https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing"
  );

  let dummy = await response.json();
  console.log(dummy);

  for (let y = 0; y < 1; y++) {
    dummyContainer.innerHTML += `
      <div
        class="font-serif px-5 pt-5 text-lg sm:text-4xl font-bold text-textPrimary text-center"
      >${dummy[6].tittle}
      </div>
      <div>
        <div class="font-serif px-5 font-semibold text-sm text-[#71717a] text-center mt-2">
          ${dummy[6].releaseDate}
        </div>
        <div class="font-serif px-5 italic text-center">Author by : ${dummy[6].author}</div>
        <div class="flex flex-wrap justify-center w-full">
        <img src="${dummy[6].img}" alt="" srcset=""/>
        </div>
        
      </div>
    `;
  }

  for (let i = 0; i < dummy[0].subtittle.length; i++) {
    contentContainer.innerHTML += `
    <div class="font-serif px-5 pt-5 text-xl font-bold text-textPrimary">${dummy[6].subtittle[i]}
          </div>
          <div class="font-serif px-5 text-justify">
        <p class="pt-5 indent-8">
          ${dummy[6].descContent[i]}
        </p>
    </div>`;
  }


  
}

getDataDummy();
