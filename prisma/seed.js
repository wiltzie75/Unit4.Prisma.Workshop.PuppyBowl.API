const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create 10 players
  const createPlayers = async () => {
    const players = [
        { name: "George", breed: "French Bulldog", status: "BENCH", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 1},
        { name: "Okie", breed: "Poodle", status: "FIELD", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 1 },
        { name: "Oscar", breed: "Mutt", status: "BENCH", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 3 },
        { name: "Max", breed: "Doberman", status: "BENCH", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 2 },
        { name: "Mitzi", breed: "Poodle", status: "BENCH", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 4 },
        { name: "Levithan", breed: "Mutt", status: "FIELD", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 4 },
        { name: "Dottie", breed: "Pit Bull mix", status: "FIELD", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 3 },
        { name: "Elwood", breed: "Mutt", status: "BENCH", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 2 },
        { name: "Jake", breed: "Mutt", status: "BENCH", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 1 },
        { name: "Stella", breed: "Labrador", status: "BENCH", imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png", teamId: 3 },
    ];
    await prisma.players.createMany({ data: players });
  };

  await createPlayers();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });