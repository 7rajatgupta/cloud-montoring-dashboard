import React from "react";
import CpuIcon from "@/drawables/CPUIcon";
import ServerIcon from "@/drawables/ServerIcon";
import Card from "./Card";

const StatusMetrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 max-w-6xl w-full mx-auto mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <ServerIcon className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Server Status</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Check the status of your servers.
            </p>
          </div>
        </div>
        <Card>
          <div className="flex items-center justify-center gap-4 p-8">
            <div className="grid gap-1 text-center">
              <ServerIcon className="w-8 h-8" />
              <h3 className="text-xl font-bold">12</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
            </div>
            <div className="w-px h-[80px] bg-gray-200 dark:bg-gray-800/50" />
            <div className="grid gap-1 text-center">
              <ServerIcon className="w-8 h-8" />
              <h3 className="text-xl font-bold">4</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Offline
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <CpuIcon className="w-8 h-8" />
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Resource Usage</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              View resource usage metrics.
            </p>
          </div>
        </div>
        <Card>
          <div className="flex flex-col gap-4 p-8">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <div className="flex-1 grid gap-1">
                <h3 className="text-sm font-medium peer-disabled:translate-y-0.5">
                  CPU Usage
                </h3>
                <div className="flex items-center gap-1 text-sm peer-disabled:translate-y-0.5">
                  <div className="w-1/3">30%</div>
                  <div className="w-full">
                    <div />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="flex-1 grid gap-1">
                <h3 className="text-sm font-medium peer-disabled:translate-y-0.5">
                  Memory Usage
                </h3>
                <div className="flex items-center gap-1 text-sm peer-disabled:translate-y-0.5">
                  <div className="w-1/3">60%</div>
                  <div className="w-full">
                    <div />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <div className="flex-1 grid gap-1">
                <h3 className="text-sm font-medium peer-disabled:translate-y-0.5">
                  Disk Usage
                </h3>
                <div className="flex items-center gap-1 text-sm peer-disabled:translate-y-0.5">
                  <div className="w-1/3">20%</div>
                  <div className="w-full">
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StatusMetrics;
