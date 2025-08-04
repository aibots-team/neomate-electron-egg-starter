import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Electron App</CardTitle>
            <CardDescription>
              Welcome to your Electron application built with React, Vite, and shadcn/ui!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <Button className="w-full">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
