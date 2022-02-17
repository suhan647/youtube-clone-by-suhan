let div = document.getElementById("videodiv");




async function display(){

    //  Popular Videos --> Popular%20Videos (%20 -> Space)

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyCEbhZ8SLZrJSJtvWR8Oe2ee8-80-mRIB0&maxResults=25`);

    let data = await res.json();
    
    for({id:{videoId}}of data.items)
    {
    let videodiv= document.createElement("iframe")
    videodiv.setAttribute("class","mons")
    videodiv.src = `https://www.youtube.com/embed/${videoId}`;
    videodiv.allow = 'fullscreen'
    div.append(videodiv)
    }

}

display();




// (2) Search When Something is typed in the search-box

async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; 
    let query = document.getElementById("video").value; 

//search for videos
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyCEbhZ8SLZrJSJtvWR8Oe2ee8-80-mRIB0&maxResults=25`);
let data = await res.json();


for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}

}
