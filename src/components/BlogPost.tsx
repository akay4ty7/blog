import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"

function CardPost({ title, desc, imageURL }: { title: string; desc: string; imageURL: string }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
      <Card>
        <CardHeader>
          <img src={imageURL} alt={title} className="w-full h-48 object-cover mb-4"/>
          <CardTitle> Project 1</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
      </Card>
    </div>
      

  )
}

export default CardPost