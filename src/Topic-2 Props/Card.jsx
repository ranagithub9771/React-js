const Card = ({username="chomu",age=30,Team,Jersy,Skill})=>{
//  const user={
//     username:"sunny",
//     Age:22,
//     City:"Patna",
//     Skill:"mern stack"
//  }

//  const {username, age,Skill,Team,Jersy} = props?.player;


 return <div style={{border: "2px dotted darkblue" , marginBottom:"20px",width: "300px",padding:"5px", backgroundColor:"lightblue",fontSize:"15px"}}>
     <h4>Username : {username}</h4>    
     <h4>Age : {age}</h4>    
     <h4>Skill : {Skill}</h4>    
     <h4>Team : {Team}</h4>    
     <h4>Team : {Jersy}</h4>    
 </div>

}

export default Card;