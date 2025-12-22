const router = require("express").Router();
const PlayerController = require("./../controllers/player.controller");
const playerValidator = require("./../validators/player.validator");

router.post(
    "/api/create",
    playerValidator,
    PlayerController.createPlayer
)

router.get(
    "/api/players",
    PlayerController.getAllPlayers
)

router.get(
    "/api/player/:id",
    PlayerController.getPlayer
)

module.exports = router;