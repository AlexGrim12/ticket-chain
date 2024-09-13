import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const eventsFilePath = path.join(process.cwd(), 'data', 'events.json')

interface Event {
  id: number
  [key: string]: unknown
}

interface ErrorResponse {
  message: string
  error: string
}

export async function GET() {
  try {
    if (fs.existsSync(eventsFilePath)) {
      const fileContents = fs.readFileSync(eventsFilePath, 'utf8')
      const events: Event[] = JSON.parse(fileContents)
      return NextResponse.json(events)
    } else {
      return NextResponse.json([] as Event[])
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Error reading events', error: (error as Error).message } as ErrorResponse,
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  console.log(request)

  try {
    const newEvent: Event = await request.json()
    let events: Event[] = []

    if (fs.existsSync(eventsFilePath)) {
      const fileContents = fs.readFileSync(eventsFilePath, 'utf8')
      if (fileContents.trim()) {
        events = JSON.parse(fileContents)
      }
    } else {
      fs.writeFileSync(eventsFilePath, JSON.stringify([]))
    }

    newEvent.id = events.length + 1
    console.log(newEvent)

    events.push(newEvent)

    try {
      fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2))
    } catch (writeError) {
      console.error('Error writing to file:', writeError)
      return NextResponse.json(
        {
          message: 'Error writing to file',
          error: (writeError as Error).message,
        } as ErrorResponse,
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Event created successfully', event: newEvent },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { message: 'Error creating event', error: (error as Error).message } as ErrorResponse,
      { status: 500 }
    )
  }
}