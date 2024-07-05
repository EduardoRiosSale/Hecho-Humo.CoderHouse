

export const getAllPosts = async () =>  {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data;
}

export const getPostbyID = async (postId) =>  {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json()
    return data;
}


// esto iria en app.jsx

  //variables de estado

//   const [postPorID, setPostPorId] = useState(null)
//   const [postArray, setPostArray] = useState(null)
  

//   useEffect(() => {
//     const getPosts = async ()  => {
//       const posts = await getAllPosts()
//       setPostArray(posts)
      
      
//     } 
//     getPosts()
    
// }, []);
// console.log(postArray)
  
// useEffect(() => {
//   const getPost = async ()  => {
//     const post = await getPostbyID(5)
//     setPostPorId(post)
    
    
//   } 
//   getPost()
  
// }, []);
// console.log(postPorID)


// // forma de obtener un post por un ID en particular

// const postIdDos = postArray ? postArray.filter(x => x.id === 2):null;
// console.log(postIdDos)
    
// // forma de obtener un post por un Titulo en particular

// const postTitulo = postArray ? postArray.filter(x => x.title === "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"):null;
// console.log(postTitulo)

// // forma de obtener un post que ID sea mayor a 90

// const postIdMayor = postArray ? postArray.filter(x => x.id > 90 ):null;
// console.log(postIdMayor)
// return (

//     <>
//     <div>
//       {postPorID ? <h3>{postPorID.title}</h3>:null}
//     </div>
//   <ul>
//     {postIdMayor ? postIdMayor.map(
//       post => (
//         <li key={post.id}>
//           {post.id} 
//           - {post.title}
          
//         </li>
        
//       )
//     ):null}
//   </ul>

