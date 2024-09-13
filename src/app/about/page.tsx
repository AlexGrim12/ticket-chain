'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Users } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <header className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-4">About TicketChain</h1>
        <p className="text-xl">
          Revolutionizing the event industry with blockchain technology
        </p>
      </header>

      <main className="container mx-auto mt-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            At TicketChain, we&apos;re on a mission to transform the way people
            experience and collect memories from live events. By leveraging
            blockchain technology and NFTs, we&apos;re creating a secure,
            transparent, and exciting platform for event-goers and collectors
            alike.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose TicketChain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12 mb-4 text-green-400" />}
              title="Secure & Authentic"
              description="Blockchain-verified tickets eliminate fraud and ensure authenticity"
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 mb-4 text-yellow-400" />}
              title="Instant Transfers"
              description="Seamlessly transfer or resell your tickets with smart contracts"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 mb-4 text-blue-400" />}
              title="Community-Driven"
              description="Join a vibrant community of event enthusiasts and collectors"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
          <p className="text-lg mb-8">
            Be part of the future of event ticketing. Start collecting, trading,
            and experiencing with TicketChain today!
          </p>
          <Link href="/events">
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </section>
      </main>
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

export default AboutPage
