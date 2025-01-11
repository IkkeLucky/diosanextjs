'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [status, setStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({})

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      )

      if (result.text === 'OK') {
        setStatus({
          success: true,
          message: 'Thank you for your message. We will get back to you soon!'
        })
        form.reset()
      }
    } catch (error) {
      setStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      })
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light mb-2 text-white">LEAVE A MESSAGE</h2>
        <p className="text-gray-300">We love to hear from you</p>
      </div>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="user_name" className="text-white">Your Name</Label>
            <Input
              id="user_name"
              name="user_name"
              placeholder="Your Name"
              required
              className="placeholder-dark"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="user_email" className="text-white">Your E-mail</Label>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Your E-mail"
              required
              className="placeholder-dark"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="placeholder-dark"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="placeholder-dark"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="bg-[#c17f82] hover:bg-[#a66d70] text-white">
              Submit
            </Button>
          </div>
          {status.message && (
            <p className={`text-center ${status.success ? 'text-green-400' : 'text-red-400'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

