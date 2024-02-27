"use client";
import Card from "./Card";
import BarChart from "./BarChart";
import CurvedLineChart from "./CurvedLineChart";

export default function DashboardMetrics() {
  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 flex flex-col p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Real-time Analytics
              </h3>
              <p className="text-sm text-muted-foreground">Live updates</p>
            </div>
            <div className="flex items-center justify-center p-8">
              <div className="grid w-full gap-2 text-center">
                <div className="text-4xl font-bold">1,234</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Live Users on site
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Monthly active servers
              </h3>
              <p className="text-sm text-muted-foreground">Monthly analysis</p>
            </div>
            <div className="flex items-center justify-center p-8">
              <div className="grid w-full gap-2 text-center">
                <div className="text-4xl font-bold">25%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Increase in conversions
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Engagement
              </h3>
              <p className="text-sm text-muted-foreground">Weekly engagement</p>
            </div>
            <div className="flex items-center justify-center p-8">
              <BarChart className="w-full aspect-[2/1]" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Revenue
              </h3>
              <p className="text-sm text-muted-foreground">Monthly revenue</p>
            </div>
            <div className="flex items-center justify-center p-8">
              <CurvedLineChart className="w-full aspect-[3/2]" />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
