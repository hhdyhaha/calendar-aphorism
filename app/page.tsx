import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">欢迎来到 MySite</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>功能 1</CardTitle>
          </CardHeader>
          <CardContent>这里是一些介绍。</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>功能 2</CardTitle>
          </CardHeader>
          <CardContent>这里是一些介绍。</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>功能 3</CardTitle>
          </CardHeader>
          <CardContent>这里是一些介绍。</CardContent>
        </Card>
      </div>
    </div>
  );
}
