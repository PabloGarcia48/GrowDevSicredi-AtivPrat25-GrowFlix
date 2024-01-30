const card = document.getElementById('videos')

// for (let i = 0; i < movies.length; i++) {
//     const movie = movies[i];
//     card.innerHTML += `
//     <div class="col-12 col-md-3">
//         <iframe src="${movies[i].link}" title="${movies[i].title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//     </div>
// `    
// }


for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    card.innerHTML += `
    <div class="col-12 col-md-3 mb-3">
        <img class='col-12' src="${movies[i].img}" alt="Thumbnail">
        <div class="bg-primary p-3"></div>
    </div>
`    
}