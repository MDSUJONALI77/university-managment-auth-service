// let lastUserId = 1

import { User } from './user.model'

export const findUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findUserId()) || (0).toString().padStart(5, '0')

  const increamentId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return increamentId

  //   lastUserId++
  //   return String(lastUserId).padStart(5, '0')
}
