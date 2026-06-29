// const loadLessons = () => {
//     fetch('https://openapi.programming-hero.com/api/levels/all')
//         .then(res => res.json())
//         .then(data => {
//             displayLessons(data.data);
//         })
// }

// const loadLevelWord = (id) => {
//     fetch(`https://openapi.programming-hero.com/api/level/${id}`)
//         .then(res => res.json())
//         .then(data => displayLevelWord(data.data))
// }

// const removeActive = () => {

// }


// const displayLessons = (lessons) => {
//     const container = document.getElementById('level-container');

//     lessons.forEach((lesson) => {
//         const div = document.createElement('div');

//         div.innerHTML = `
//              <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-primary btn-outline"> <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
//         `;

//         container.append(div);

//     })
// }

// const displayLevelWord = (words) => {
//     const wordContaier = document.getElementById("word-container");
//     wordContaier.innerHTML = "";
//     wordContaier.classList.remove('hidden');

//     if (words.length === 0) {
//         wordContaier.innerHTML = `
//             <div class= "text-center col-span-full space-y-2">
//             <img class = "mx-auto" src="./assets/alert-error.png" alt="">
//             <p class="text-sm opacity-50">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
//             <h2 class="font-medium text-4xl">নেক্সট Lesson এ যান</h2>
//         </div>
//         `
//         return;
//     }

//     words.forEach((word) => {
//         const div = document.createElement('div');
//         div.innerHTML = `
        // <div class="text-center flex flex-col bg-white space-y-5 py-20 px-5 rounded-lg">
        //         <h2 class="font-bold text-4xl "> ${word.word ? word.word : "এই শব্দ পাওয়া যায় নি"} </h2>
        //         <p class="font-medium text-xl">Meaning / Pronounciation</p>
        //         <h2 class="font-bangla font-semibold text-3xl"> ${word.meaning ? word.meaning : "অর্থ পাওয়া যায় নি"} / ${word.pronunciation ? word.pronunciation : "Pronounciation এই শব্দ পাওয়া যায় নি" } </h2>

        //         <div class="flex justify-between">
        //             <button onclick = "my_modal_6()" class="btn"> <i class="fa-solid fa-circle-info"></i> </button>
        //             <button class="btn"> <i class="fa-solid fa-volume-low"></i> </button>
        //         </div>
        //     </div>
//         `

//         wordContaier.append(div);
//     })
// }
// loadLessons();




