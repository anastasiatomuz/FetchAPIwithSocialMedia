function load(){
    getData()
}
async function getData(){
    /*
    https://jsonplaceholder.typicode.com is the base url and /users, /posts, /comments 
    are the options you add to specifiy which type of data you are accessing
    */
    //users info
  try{
    //fetches the JSON for the users information
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    displayUsers(data);
  } catch (err){
    console.log(err);
  }

  //posts
  try{
    //fetches the JSON for the posts information
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    displayPosts(data);
  } catch (err){
    console.log(err);
  }

  //comments
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    console.log(data);
    displayComments(data);
  } catch (err){
    console.log(err);
  }
}


function displayUsers(data){
    const userDiv = document.getElementById("userDiv");
    //iterate through each person object in the collection of data 
    for (let i = 0; i < data.length; i ++){
        const myArticle = document.createElement("article");
        const myh3 = document.createElement("h3");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myPara4 = document.createElement("p");
        const myPara5 = document.createElement("p");

        const person = data[i];//extract the data for each person you are iterating through

        //updates the information inside the tags with data fetched from the api
        myh3.textContent = `Name: ${person.name}`;
        myPara1.textContent = `Username: ${person.username}`;
        myPara2.textContent = `Email: ${person.email}`;
        myPara3.textContent = `Phone: ${person.phone}`;
        myPara4.textContent = `Website: ${person.website}`;
        myPara5.textContent = `Company: ${person.company.name}`;

        //appends all the tags with users info on the page
        myArticle.appendChild(myh3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        userDiv.appendChild(myArticle);

    }
  }

function displayPosts(data){
    const postDiv = document.getElementById("postDiv");
    //iterate through the first 20 posts
    for (let i = 0; i < 20; i ++){
        const myArticle = document.createElement("article");
        const myh3 = document.createElement("h3");
        const myPara1 = document.createElement("p");

        const post = data[i];//extract the data for each post you are iterating through

        //updates the information inside the tags with data fetched from the api
        myh3.textContent = `${post.title}`;
        myPara1.textContent = `${post.body}`;

        //appends all the tags with users info on the article, then on the page
        myArticle.appendChild(myh3);
        myArticle.appendChild(myPara1);
        postDiv.appendChild(myArticle);
    }
}


function displayComments(data){
    const commentsDiv = document.getElementById("commentsDiv");
    //iterate through the first 50 comments
    for (let i = 0; i < 50; i ++){
        const myArticle = document.createElement("article");
        const myh3 = document.createElement("h3");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");

        const comment = data[i];//extract the data for each comment you are iterating through

        //updates the information inside the tags with data fetched from the api
        myh3.textContent = `Name: ${comment.name}`;
        myPara1.textContent = `Email: ${comment.email}`;
        myPara2.textContent = `Comment: ${comment.body}`;

        //appends all the tags with users info on the article, then on the page
        myArticle.appendChild(myh3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        commentsDiv.appendChild(myArticle);
    }
}


getData();

