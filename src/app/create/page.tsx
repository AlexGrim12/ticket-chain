'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CreateEventPage = () => {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    image: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      })
      if (response.ok) {
        await response.json() // Eliminar la asignación a `data`
        alert('Event created successfully!')
        setEvent({ name: '', date: '', time: '', location: '', image: '' })
      } else {
        throw new Error('Failed to create event')
      }
    } catch (error) {
      console.error('Error creating event:', error)
      alert('Failed to create event. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <header className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-4">Create New Event</h1>
        <p className="text-xl">
          Add a new futuristic experience to TicketChain
        </p>
      </header>

      <main className="container mx-auto mt-12">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-indigo-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Event Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={event.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="date" className="block text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="time" className="block text-sm font-medium mb-2">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={event.time}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-sm font-medium mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={event.location}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block text-sm font-medium mb-2">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={event.image}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-full transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create Event
          </motion.button>
        </motion.form>
      </main>
    </div>
  )
}

export default CreateEventPage
