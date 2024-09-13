'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const EventsPage = () => {
  interface Event {
    id: string
    image?: string
    name: string
    date: string
    time: string
    location: string
  }

  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events')
        if (response.ok) {
          const data = await response.json()
          setEvents(data)
        } else {
          throw new Error('Failed to fetch events')
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <header className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <div
          className="
          flex flex-row justify-between items-center
        "
        >
          <p className="text-xl">
            Secure your NFT tickets for these futuristic experiences
          </p>
          <Link href="/login">
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              New Event
            </motion.button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-indigo-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={event.image || '/api/placeholder/800/400'}
                alt={event.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition">
                  Get NFT Ticket
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default EventsPage
