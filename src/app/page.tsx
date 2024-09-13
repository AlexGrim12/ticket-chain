'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Ticket, Music, SquareLibrary } from 'lucide-react'
import Link from 'next/link'

const LandingPage = () => {
  return (

<div>
      <main className="container mx-auto mt-20 text-center">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Future of Event Ticketing
        </motion.h2>
        <motion.p
          className="text-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Collect, trade, and experience with NFT tickets
        </motion.p>
        <Link href="/events">
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Events
          </motion.button>
        </Link>
      </main>

      <section className="container mx-auto mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Ticket className="w-12 h-12 mb-4" />}
            title="NFT Tickets"
            description="Secure, unique, and collectible digital tickets for your favorite events"
          />
          <FeatureCard
            icon={<Music className="w-12 h-12 mb-4" />}
            title="Exclusive Experiences"
            description="Unlock VIP access and special perks with your NFT tickets"
          />
          <FeatureCard
            icon={<SquareLibrary className="w-12 h-12 mb-4" />}
            title="Build Your Collection"
            description="Grow your digital memorabilia collection with every event you attend"
          />
        </div>
      </section>

      
    </div>
  )
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <motion.div
    className="bg-indigo-800 p-6 rounded-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {icon}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
)

export default LandingPage
