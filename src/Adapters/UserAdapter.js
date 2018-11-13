class UserAdapter{
  static login(data){
    return fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({user: data})
    })
    .then(res => res.json())
  }
}

export default UserAdapter
