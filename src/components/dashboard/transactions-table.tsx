import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const transactions = [
  {
    id: "TRX-9871",
    user: {
      name: "Liam Johnson",
      email: "liam@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
      fallback: "LJ"
    },
    amount: "$450.00",
    status: "Paid",
    date: "2024-03-12",
  },
  {
    id: "TRX-9872",
    user: {
      name: "Olivia Smith",
      email: "olivia@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
      fallback: "OS"
    },
    amount: "$120.50",
    status: "Pending",
    date: "2024-03-12",
  },
  {
    id: "TRX-9873",
    user: {
      name: "Noah Williams",
      email: "noah@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
      fallback: "NW"
    },
    amount: "$850.00",
    status: "Paid",
    date: "2024-03-11",
  },
  {
    id: "TRX-9874",
    user: {
      name: "Emma Brown",
      email: "emma@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      fallback: "EB"
    },
    amount: "$299.99",
    status: "Failed",
    date: "2024-03-11",
  },
  {
    id: "TRX-9875",
    user: {
      name: "James Jones",
      email: "james@example.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      fallback: "JJ"
    },
    amount: "$50.00",
    status: "Paid",
    date: "2024-03-10",
  },
]

export function TransactionsTable() {
  return (
    <Card className="col-span-4 border-none shadow-sm">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          Latest financial activity from your users.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Transaction</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={transaction.user.image} alt={transaction.user.name} />
                      <AvatarFallback>{transaction.user.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{transaction.user.name}</span>
                      <span className="text-xs text-muted-foreground">{transaction.user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      transaction.status === "Paid" ? "default" : 
                      transaction.status === "Pending" ? "outline" : 
                      "destructive"
                    }
                    className={
                      transaction.status === "Paid" ? "bg-green-500/15 text-green-700 hover:bg-green-500/25 border-none shadow-none" :
                      transaction.status === "Pending" ? "bg-yellow-500/15 text-yellow-700 hover:bg-yellow-500/25 border-none shadow-none" :
                      "bg-red-500/15 text-red-700 hover:bg-red-500/25 border-none shadow-none"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
