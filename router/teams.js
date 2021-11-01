const Router = require("express");
const teamsRouter = require("../models").team;
const router = new Router();

//find the user  ✗ http -v GET :4000/users/3
router.get("/teams/:teamId", async (req, res) => {
  // const params = req.params;
  // console.log("the params", params); ***this way you can se from where it comming**

  //   const userId = parseInt(req.params.userId);
  const team = await teamsRouter.findall();
  if (!team) {
    res.status(404).send("team not found");
  } else {
    res.send(team);
  }
});

module.exports = router;
