import { KPICards } from "@/components/dashboard/kpi-cards"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { TransactionsTable } from "@/components/dashboard/transactions-table"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <KPICards />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <SalesChart />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <TransactionsTable />
      </div>
    </div>
  )
}
