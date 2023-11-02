const express = require("express");
const router = express.Router();
const User = require("./User");

router.post("/cadastrar", async (req, res) => {
    try {
        const { email } = req.body;
        await User.create({
            email,
        });
        console.log("200 OK");
    } catch {
        console.log("Erro");
    }
});

module.exports = router;
