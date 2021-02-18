let url = 'https://www.reddit.com/r/AimHero/hot.json';

const container= document.getElementById('reddit-post');


fetch(url)
    .then((Response)=>Response.json())
    .then(function(data){
        let post = ``;
        const postArray = data.data.children;
        for (var i=0; i<postArray.length; i++){
            currentPost = postArray[i].data;
            post += `
                <div class="post col-6 text-center" style="border: 1px solid black; height: 180px; padding: 10px;"> 
                    <h3 class="title">${currentPost.title}</h3>
                    <p class="publisher">By : ${currentPost.author}</p>
                    <a href = ${currentPost.url}>Click to view reddit post</a>
                </div>    
            `;
        }
        container.insertAdjacentHTML('afterbegin',post);
    });