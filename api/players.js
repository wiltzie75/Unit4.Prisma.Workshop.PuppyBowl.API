const router = require("express").Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
    try {
        const players = await prisma.players.findMany();
        res.json(players);
    } catch {
        next();
    }
});

router.post("/", async ( req, res, next) => {
    try {
        const { name, breed, status, imageUrl, teamId } = req.body;
        if (!name || !breed || !status || !imageUrl || !teamId) {
            const error = {
                status: 400,
                message: "Player must have a name.",
            };
            return next(error);
        }

        const player = await prisma.players.create({ data: { name, breed, status, imageUrl, teamId } });
        res.status(201).json(player);
    } catch {
        next();
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;

        const player = await prisma.players.findUnique({ where: { id } });

        if (!player) {
            return next({
                status: 404,
                message: `Could not find player with id ${id}.`,    
            });
        }

        res.json(player);
    } catch {
        next();
    }  
});

router.put("/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;

        const playerExists = await prisma.players.findUnique({ where: { id } });
        if (!playerExists) {
            return next({
                status: 404,
                message: `Could not find player with id ${id}.`,
            });
        }

        const { name, breed, status, imageUrl, teamId } = req.body;
        if (!name || !breed || !status || !imageUrl || !teamId) {
            return next({
                status: 400,
                message: "Player must have a name.",
            });
        }

        const player = await prisma.players.update({
            where: { id },
            data: { name, breed, status, imageUrl, teamId },
        });

        res.json(player);
    } catch {
        next();
    }    
});

router.delete("/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;

        const playerExists = await prisma.players.findUnique({ where: { id } });
        if (!playerExists) {
            return next({
                status: 404,
                message: `Could not find player with id ${id}.`,
            });
        }

        await prisma.players.delete({ where: { id } });

        res.sendStatus(204);
    } catch {
        next();
    }
});