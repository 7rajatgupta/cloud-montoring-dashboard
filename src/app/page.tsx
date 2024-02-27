import Alert from "@/components/Alert";
import DashboardMetrics from "@/components/Metrics";
import Nav from "@/components/Nav";
import StatusMetrics from "@/components/StatusMetrics";

export default function Home() {
  return (
    <>
      <Nav />
      <section>
        <DashboardMetrics />
      </section>
      <StatusMetrics />
      <Alert />
    </>
  );
}
