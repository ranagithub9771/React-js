import Card from "./Card";

const Parent = ()=>{
  const player1 ={
    username:"Rohit Sharma",
    age:38,
    Team:"MI",
    Skill:["Batting","Captaincy"],
    Jersy:45
  }
  const player2 ={
    username:"M S Dhoni",
    age:42,
    Team:"csk",
    Skill:["Batting","Captaincy"],
    Jersy:7
  }
  const player3 ={
    username:"Virat",
    age:36,
    Team:"MI",
    Skill:["Batting"],
    Jersy:45
  }

    return <div className="Parent-component">
   <Card {...player1}/>
   <Card {...player2}/>
   <Card {...player3}/>
    </div>
}

export default Parent;


//optional chaining