import express, { Response } from 'express'
import { authenticate, AuthRequest } from '../middleware/auth'
import User from '../models/User'

const router = express.Router()

// Get current user
router.get('/me', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' })
    }

    const user = await User.findById(req.user._id).select('-password')

    res.json({
      user: {
        id: user?._id,
        email: user?.email,
        name: user?.name,
        subscription: user?.subscription,
      },
    })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
})

export default router

