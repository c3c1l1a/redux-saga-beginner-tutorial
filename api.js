const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET", 
        headers: {
            "content-type": "application/json"
        }
    });
    return response.json();
}

export default { getAllPosts }