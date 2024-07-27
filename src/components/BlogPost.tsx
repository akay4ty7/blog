import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"

function CardPost({ title, desc, imageURL }: { title: string; desc: string; imageURL: string }) {
  return (
    <Card>
      <CardHeader>
        <img src={imageURL} alt={title} className="w-full h-48 object-cover mb-4"/>
        <CardTitle> Project 1</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>

  )
}

export default CardPost