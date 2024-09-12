'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock } from 'lucide-react'

const EventsPage = () => {
  const events = [
    {
      id: 1,
      name: 'Cyberpunk Night',
      date: '2024-10-15',
      location: 'Neo Tokyo Arena',
      image: '/api/placeholder/800/400',
    },
    {
      id: 2,
      name: 'Future Bass Festival',
      date: '2024-11-20',
      location: 'Quantum Field',
      image: '/api/placeholder/800/400',
    },
    {
      id: 3,
      name: 'AI Symphony',
      date: '2024-12-05',
      location: 'Digital Dome',
      image: '/api/placeholder/800/400',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <header className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-xl">
          Secure your NFT tickets for these futuristic experiences
        </p>
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
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
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
