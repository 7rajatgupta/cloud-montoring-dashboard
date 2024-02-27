import React from "react";
import AlertCircleIcon from "@/drawables/AlertCircleIcon";
import Card from "./Card";

const Alert = () => {
  return (
    <div className="grid gap-4 max-w-4xl w-full mx-auto">
      <div className="flex items-center gap-2">
        <AlertCircleIcon className="w-8 h-8" />
        <h2 className="font-bold text-2xl">Alert Notifications</h2>
      </div>
      <Card>
        <div className="flex flex-col gap-2 p-4">
          <div className="font-semibold">High CPU Usage</div>
          <div className="text-sm">
            CPU usage has exceeded the threshold on server #123. Please take
            action to avoid service degradation.
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">2m ago</div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-2 p-4">
          <div className="font-semibold">Low Disk Space</div>
          <div className="text-sm">
            Disk space is running low on server #456. Additional storage is
            required to prevent data loss.
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            15m ago
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Alert;
