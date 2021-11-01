const express = require("express");
const app = express();
const port = 3004;
const teamsRouter = require("./router/teams");
// const User = require("./models").user;

const userRoute = require("./router/user");
const jsonParser = express.json();
// //find the user  ✗ http -v GET :4000/users/3
// app.get("/users/:userId", async (req, res) => {
//   // const params = req.params;
//   // console.log("the params", params); ***this way you can se from where it comming**

//   const userId = parseInt(req.params.userId);
//   const user = await User.findByPk(userId);
//   if (!user) {
//     res.status(404).send("User not found");
//   } else {
//     res.send(user);
//   }
// });

app.use(jsonParser);
app.use(teamsRouter);
app.use(userRoute);
app.listen(port, () => console.log(`I am listening the por ${port}`));
