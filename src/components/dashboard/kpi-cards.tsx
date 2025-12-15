import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, Activity, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react"

const kpiData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
    trend: "up",
    gradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    title: "Active Users",
    value: "+2350",
    change: "+180.1% from last month",
    icon: Users,
    trend: "up",
    gradient: "from-teal-500/10 to-teal-500/5",
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    change: "+4.1% from last month",
    icon: Activity,
    trend: "up",
    gradient: "from-green-500/10 to-green-500/5",
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "-2.5% from last month",
    icon: CreditCard,
    trend: "down",
    gradient: "from-orange-500/10 to-orange-500/5",
  },
]

export function KPICards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((item, index) => (
        <Card key={index} className={`overflow-hidden border-none shadow-sm bg-gradient-to-br ${item.gradient}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              {item.trend === "up" ? (
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              )}
              <span className={item.trend === "up" ? "text-green-600" : "text-red-600"}>
                {item.change}
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
