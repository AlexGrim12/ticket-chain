'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Ticket, Star, Zap } from 'lucide-react'

const CollectPage = () => {
  const collections = [
    {
      id: 1,
      name: 'Neon Nights',
      rarity: 'Legendary',
      power: 95,
      image: '/api/placeholder/400/400',
    },
    {
      id: 2,
      name: 'Quantum Beats',
      rarity: 'Epic',
      power: 85,
      image: '/api/placeholder/400/400',
    },
    {
      id: 3,
      name: 'Hologram Dreams',
      rarity: 'Rare',
      power: 75,
      image: '/api/placeholder/400/400',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <header className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-4">Your NFT Collection</h1>
        <p className="text-xl">
          Showcase your digital memories and unlock exclusive perks
        </p>
      </header>

      <main className="container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <motion.div
              key={item.id}
              className="bg-indigo-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>{item.rarity}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Zap className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Power: {item.power}</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default CollectPage
