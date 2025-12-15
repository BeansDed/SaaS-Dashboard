"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
    online: Math.floor(Math.random() * 3000) + 500,
    store: Math.floor(Math.random() * 2000) + 500,
  },
]

export function SalesChart() {
  return (
    <Card className="col-span-4 border-none shadow-sm">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>
          Monthly sales breakdown for the current year.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              <Bar 
                dataKey="online" 
                name="Online Sales" 
                stackId="a" 
                fill="var(--chart-1)" 
                radius={[0, 0, 4, 4]} 
              />
              <Bar 
                dataKey="store" 
                name="Store Sales" 
                stackId="a" 
                fill="var(--chart-2)" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
