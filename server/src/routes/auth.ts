import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User'

const router = express.Router()

// Register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Please provide all fields' })
    }

    // Check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create user
    const user = new User({ email, password, name })
    await user.save()

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    res.status(201).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        subscription: user.subscription,
      },
    })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
})

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' })
    }

    // Find user
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Check password
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        subscription: user.subscription,
      },
    })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
})

// Google OAuth (placeholder - implement OAuth flow)
router.post('/google', async (req: Request, res: Response) => {
  try {
    // In a real app, verify Google token and create/find user
    // For now, return a placeholder response
    res.status(501).json({ message: 'Google OAuth not implemented yet' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
})

export default router

