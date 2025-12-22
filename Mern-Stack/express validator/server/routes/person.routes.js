const router = require("express").Router();
const PersonController = require("./../controllers/person.controller");
const {check} = require("express-validator");

router.post(
    "/api/create",
    [
        check("name").not().isEmpty(),
        check("name").isLength({min:2})
    ],
    PersonController.createPerson
);
// router.put("/api/edit", PersonController.updatePerson);


module.exports = router;