import RoomDetails from '@/components/tour/RoomDetails'
import React from 'react'

const RoomPage = async ({ params }: { params: Promise<{ slug: string, room: string }> }) => {
  const { slug, room } = await params
  
  return (
    <RoomDetails resort={slug} room={room} />
  )
}

export default RoomPage