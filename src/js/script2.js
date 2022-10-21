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

let dummyContainer = document.getElementById("main2");
let contentContainer = document.getElementById("content2");
let cardContainer = document.getElementById("card");
console.log(cardContainer);

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
      >${dummy[1].tittle}
      </div>
      <div>
        <div class="font-serif px-5 font-semibold text-sm text-[#71717a] text-center mt-2">
          ${dummy[1].releaseDate}
        </div>
        <div class="font-serif px-5 italic text-center">Author by : ${dummy[1].author}</div>
        <div class="flex flex-wrap justify-center w-full">
        <img src="${dummy[1].img}" alt="" srcset=""/>
        </div>
        
      </div>
    `;
  }

  for (let i = 0; i < dummy[0].subtittle.length; i++) {
    contentContainer.innerHTML += `
    <div class="font-serif px-5 pt-5 text-xl font-bold text-textPrimary">${dummy[1].subtittle[i]}
          </div>
          <div class="font-serif px-5 text-justify">
        <p class="pt-5 indent-8">
          ${dummy[1].descContent[i]}
        </p>
    </div>`;
  }

  for (let i = dummy.length - 4; i < dummy.length; i++) {
    cardContainer.innerHTML += `
    <div class="flex flex-wrap justify-center">
        <div class="bg-textSecondary hover:bg-textPrimary rounded-lg shadow-xl outline-[#000] sm:mx-4 md: sm:6 w-[300px] sm:w-[300px] md:w-[300px] text-textWhite">
            <div class="flex-wrap items-center">
            <img class="w-[300px] h-[200px] rounded-t-lg" src="${dummy[i].img}" alt="MSWC">
            <div class="m-3">
                <h1 class="font-bold text-textWhite text-xl truncate">
                  ${dummy[i].tittle}
                </h1>
                <p class="text-bgSekunder text-sm mb-2">${dummy[i].releaseDate}</p>
                <button
                  class="w-[275px] rounded-lg bg-textWhite text-textSecondary font-bold"
                >
                  Read More
                </button>
              </div>
        </div>
      </div>
    </div>
        
        `;
  }
  // dummy.forEach((item) => {
  //   console.log(item);
  //   cardContainer.innerHTML += `
  //   <div class="container w-full mx-auto mt-10 text-[#000]">
  //       <div class="flex flex-wrap">
  //       <div
  //           class="flex flex-wrap mb-6 w-full md:w-1/3 lg:w-1/3 justify-center"
  //         >
  //           <div
  //             class="mx-2 sm:mx-4 md: sm:6 w-[100px] sm:w-[200px] md:w-[300px] rounded-lg shadow-xl outline-[#000] bg-textSecondary hover:bg-textPrimary"
  //           >
  //             <img class="w-full rounded-t-lg" src="${item.img}" alt="" />
  //             <div class="m-3">
  //               <h1 class="font-bold text-textWhite text-xl">
  //                 ${item.tittle}
  //               </h1>
  //               <p class="text-bgSekunder text-sm">${item.releaseDate}</p>
  //               <button
  //                 class="w-[75] sm:w-[175px] md:w-[275px] rounded-lg bg-textWhite text-textSecondary font-bold mt-2"
  //               >
  //                 Read More
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
//    </div>
  //     </div>
  //   `;
  // });

  //card
  //title & gambar itu api tapi manggil sesuai index
  //bikin file html, bikin script, dg beda judul blog
};

getDataDummy();
