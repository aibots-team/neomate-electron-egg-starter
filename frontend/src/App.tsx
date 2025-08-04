import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, XCircle, Package, Palette, MousePointer, Layout, Type } from "lucide-react"

function App() {
  const [progress, setProgress] = useState(13)
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Electron App</h1>
              <p className="text-muted-foreground mt-1">
                shadcn/ui 组件库展示
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">React + Vite</Badge>
              <Badge variant="outline">Electron</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  组件分类
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Palette className="h-4 w-4 mr-2" />
                  基础组件
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MousePointer className="h-4 w-4 mr-2" />
                  交互组件
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Layout className="h-4 w-4 mr-2" />
                  布局组件
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Type className="h-4 w-4 mr-2" />
                  数据展示
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* 基础组件 */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Palette className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">基础组件</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Button */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Button 按钮</CardTitle>
                    <CardDescription>各种样式的按钮组件</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm">Default</Button>
                      <Button variant="secondary" size="sm">Secondary</Button>
                      <Button variant="destructive" size="sm">Destructive</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">Outline</Button>
                      <Button variant="ghost" size="sm">Ghost</Button>
                      <Button variant="link" size="sm">Link</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Input */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Input 输入框</CardTitle>
                    <CardDescription>文本输入组件</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱</Label>
                      <Input id="email" placeholder="请输入邮箱地址" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">用户名</Label>
                      <Input id="username" placeholder="请输入用户名" />
                    </div>
                  </CardContent>
                </Card>

                {/* Badge */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Badge 徽章</CardTitle>
                    <CardDescription>状态标识组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Error</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Avatar */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Avatar 头像</CardTitle>
                    <CardDescription>用户头像组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 交互组件 */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <MousePointer className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">交互组件</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Switch */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Switch 开关</CardTitle>
                    <CardDescription>切换开关组件</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="airplane-mode">飞行模式</Label>
                      <Switch id="airplane-mode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="wifi">Wi-Fi</Label>
                      <Switch id="wifi" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                {/* Checkbox */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Checkbox 复选框</CardTitle>
                    <CardDescription>多选组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={checked} 
                        onCheckedChange={(value) => setChecked(value === true)} 
                      />
                      <Label htmlFor="terms">同意服务条款</Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Radio Group */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Radio Group 单选</CardTitle>
                    <CardDescription>单选组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">选项一</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">选项二</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Select */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Select 选择器</CardTitle>
                    <CardDescription>下拉选择组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择水果" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">苹果</SelectItem>
                        <SelectItem value="banana">香蕉</SelectItem>
                        <SelectItem value="orange">橙子</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 布局组件 */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Layout className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">布局组件</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tabs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tabs 标签页</CardTitle>
                    <CardDescription>内容分页组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="account" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">账户</TabsTrigger>
                        <TabsTrigger value="password">密码</TabsTrigger>
                      </TabsList>
                      <TabsContent value="account" className="mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">姓名</Label>
                          <Input id="name" defaultValue="张三" />
                        </div>
                      </TabsContent>
                      <TabsContent value="password" className="mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="current">当前密码</Label>
                          <Input id="current" type="password" />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Accordion */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Accordion 手风琴</CardTitle>
                    <CardDescription>可折叠内容组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>是否支持无障碍？</AccordionTrigger>
                        <AccordionContent>
                          是的，它遵循 WAI-ARIA 设计模式。
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>是否有样式？</AccordionTrigger>
                        <AccordionContent>
                          是的，它带有与其他组件美学匹配的默认样式。
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 数据展示 */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Type className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">数据展示</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Progress 进度条</CardTitle>
                    <CardDescription>进度指示组件</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Progress value={progress} className="w-full" />
                    <Button 
                      size="sm" 
                      onClick={() => setProgress(Math.random() * 100)}
                    >
                      更新进度
                    </Button>
                  </CardContent>
                </Card>

                {/* Alert */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Alert 警告</CardTitle>
                    <CardDescription>提示信息组件</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        您的会话已过期，请重新登录。
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <XCircle className="h-4 w-4" />
                      <AlertDescription>
                        请求处理时出现问题。
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                {/* Table */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Table 表格</CardTitle>
                    <CardDescription>数据表格组件</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>姓名</TableHead>
                          <TableHead>邮箱</TableHead>
                          <TableHead>角色</TableHead>
                          <TableHead>状态</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>张三</TableCell>
                          <TableCell>zhang@example.com</TableCell>
                          <TableCell>管理员</TableCell>
                          <TableCell>
                            <Badge variant="secondary">活跃</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>李四</TableCell>
                          <TableCell>li@example.com</TableCell>
                          <TableCell>用户</TableCell>
                          <TableCell>
                            <Badge variant="outline">非活跃</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
