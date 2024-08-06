import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface BlogPageTemplateProps {
  title: string;
  date: string;
  authorName: string;
  authorPhoto: string;
  content: React.ReactNode;
}

function BlogPageTemplate({ title, date, authorName, authorPhoto, content }: BlogPageTemplateProps) {
  return (
    <div className="main-content flex justify-center items-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2">{title}</CardTitle>
          <div className="flex items-center">
            <Avatar className="w-10 h-10 rounded-full mr-3">
              <AvatarImage src={authorPhoto} alt={authorName} />
              <AvatarFallback>{authorName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{authorName}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="mt-4">
          {content}
        </CardContent>
      </Card>
    </div>
  );
}

export default BlogPageTemplate;

