const Card =()=>{
    const user ={
        name:"sunny",
        age:23,
        email:"sunny234@gmail.com",
        city:"patna",
        pic:"https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_1280.jpg"
    }
    return <>
       <h2>Hello Developers </h2>
       <h3>Username : {user.name}</h3>
       <h3>age : {user.age}</h3>
       <h3>age : {user.email}</h3>
       <h3>age : {user.city}</h3>
       <img src={user.pic} alt="" />
     
    </>

}

export default Card;