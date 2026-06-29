const loadUser = () => {
    const url = ("https://jsonplaceholder.typicode.com/users/#")
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayUserData(data))
}

const displayUserData = (users) => {
    const loadUserData = document.getElementById('user-data');
    loadUserData.innerHTML = "";

    users.forEach((user) => {
        const postUser = document.createElement("div");
        postUser.innerHTML = `
        <div class="user-card">
        <h2>Name: ${user.name}</h2>
        <h3>Username: ${user.username}</h3>
        <h3>Email: ${user.email}</h3>
        <h3>Address:   ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}</h3>
        <p>phone: ${user.phone}</p>
        <p>website: ${user.website}</p>
        <p>company name: ${user.company.name}</p>
        <p>catchPhrase: ${user.company.catchPhrase}</p>
        <p>bs: ${user.company.bs}</p>
        
      </div>
        `
         loadUserData.append(postUser);
        // console.log(user.name);
    })

   
}



const loadComment = () => {
    const url = ("https://jsonplaceholder.typicode.com/comments")
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayUserComment(data))
}



const displayUserComment = (comnts) => {
    const userCommentContainer = document.getElementById('user-comment');
    // userCommentContainer.innerHTML = "";

    comnts.forEach((comnt) => {
        const commentData = document.createElement('div');
        commentData.innerHTML = `
        <div class="user-card">
            <h2>postId: ${comnt.postId}</h2>
            <h2>Id: ${comnt.id}</h2>
            <p>name: ${comnt.name}</p>
            <p>email: ${comnt.email}</p>
            <p>body: ${comnt.body}</p>
        </div>
        `
        userCommentContainer.append(commentData);
    })
}


// document.getElementById('load-user').addEventListener('click', () => {
//     const userComment = document.getElementById('user-comment');
//     const userData = document.getElementById("user-data");
//     userComment.style.display = 'none';
//     userData.style.display = 'block'

// })
// document.getElementById('load-comments').addEventListener('click', () => {
//     const userComment = document.getElementById('user-comment');
//     const userData = document.getElementById("user-data");
//     userComment.style.display = 'block';
//     userData.style.display = 'none'

// })




    