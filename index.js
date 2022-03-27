const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function postUser(email, name=null, password=null) {
  const allUsers = await prisma.users.create({
      data: {
          email: email,
          name: name,
          password: password
      }
  })
  return allUsers
}

async function postChallenge(id, name=null, description=null, time_commit=null) {
  const allUsers = await prisma.challenges.create({
      data: {
          id: id,
          name: name,
          description: description,
          time_commit: time_commit
      }
  })
  return allUsers
}

async function getUser(email) {
    const allUsers = await prisma.users.findMany()
    return allUsers
  }

  postChallenge(1223, "test", "test", 123)
  .then((resp)=>{
    console.log(resp)
  })
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })