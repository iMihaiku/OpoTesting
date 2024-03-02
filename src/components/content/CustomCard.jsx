'use client'

import React from 'react'
import { Card, Badge } from 'antd'
import Image from 'next/image'
import TestImagen from '@/../public/TestImagen.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const { Meta } = Card

export default function CustomCard({ testInfo }) {
  const router = useRouter()
  const handleClick = () => {
    router.push('/test/' + testInfo.id)
  }
  return (
    <Card
      hoverable
      cover={<Image alt="example" src={TestImagen} width={250} height={150} onClick={handleClick} />}
      actions={[
        <Badge
          color="gold"
          text={<Link href={'/user/' + testInfo.user_id}>Creado por: {testInfo.user_name}</Link>}
          key="creadoPor"
          className="badge"
        />
      ]}
    >
      <Meta title={testInfo.name} description={testInfo.description} />
    </Card>
  )
}
