import { Request, Response } from 'express'
import userService from './user.service'

const creatUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'faild to create user',
    })
  }
}

export default {
  creatUser,
}
