
function User(){
    let user ={name:"Blank"};
    const sayMyName = (name)=>{
        alert(user.name)
        user = {name:name}
        alert(user.name)
    }
    return  (
        <div>
        <h3>{user.name}</h3>
        <button onClick={()=>{sayMyName('Test')}}>Click Me</button>
        </div>
    )
}

export default User;