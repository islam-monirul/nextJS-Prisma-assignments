async function insertData() {
  let data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  let res = await axios.post("https://api.example.com/submit", data);

  if (res.status == 200) console.log(res.data);
  else console.log("Error!");
}

insertData();
