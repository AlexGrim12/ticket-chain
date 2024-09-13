# TicketChain

TicketChain is a futuristic platform for selling and collecting event tickets as NFTs. This application combines blockchain technology with the excitement of live events, creating a unique experience for event-goers and collectors alike.

## Features

- Browse upcoming events with NFT tickets
- Create new events (admin functionality)
- Collect and showcase NFT tickets
- Integration with AI-generated event images

## Tech Stack

- Frontend: Next.js with TypeScript
- Styling: Tailwind CSS
- Authentication: Firebase
- Backend API: Next.js API Routes
- Image Generation: Separate Flask backend with OpenAI integration

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase account
- Access to the separate image generation backend

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ticketchain.git
   cd ticketchain
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up your environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_IMAGE_GEN_API_URL=url_of_your_image_generation_api
   ```

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Contains the main application pages and API routes (Next.js 13+ App Router)
- `components/`: Reusable React components
- `data/`: JSON file for storing events data
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration

## API Routes

- `GET /api/events`: Fetch all events
- `POST /api/events`: Create a new event

## Image Generation Backend

The AI-powered image generation for event thumbnails is handled by a separate backend service. This service is built with Flask and utilizes OpenAI's API for image generation.

Repository: [https://github.com/ruyca/nft_creator](https://github.com/ruyca/nft_creator)

To use the image generation feature:
1. Set up and run the image generation backend separately.
2. Ensure the `NEXT_PUBLIC_IMAGE_GEN_API_URL` in your `.env.local` file points to the correct URL of your running image generation service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.