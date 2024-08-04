import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"

function IntroductionPanel() {
    return (
        <div className="main-content flex justify-center">
            <Card className="flex flex-col md:flex-row items-center p-4">
                <div className="flex-1">
                    <CardTitle>Hello and Welcome...</CardTitle>
                    <CardContent>
                        <p>Hello, My name is K. 
                            This little corner contains the various projects I am working on. 
                            Most of them are probably incomplete, but feel free to give me some feedback!</p>
                    </CardContent>
                </div>
                <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                    <img
                        src="https://images.ygoprodeck.com/images/cards_cropped/69522668.jpg"
                        alt="Profile Photo"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </div>
            </Card>
        </div>
    );
}

export default IntroductionPanel;