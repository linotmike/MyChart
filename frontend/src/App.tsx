import { Activity, CalendarDays, ClipboardPlus, FlaskConical, LayoutDashboard, Receipt, Users } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { apiClient, type ApiResponse } from './api/client';

type HealthData = {
  service: string;
  status: string;
};

const modules = [
  { name: 'Patients', description: 'Register, search, and manage patient profiles.', icon: Users },
  { name: 'Appointments', description: 'Book visits, check patients in, and manage daily queues.', icon: CalendarDays },
  { name: 'Clinical', description: 'Record vitals, encounters, diagnoses, and treatment plans.', icon: ClipboardPlus },
  { name: 'Laboratory', description: 'Create lab orders and manage results after Phase 1.', icon: FlaskConical },
  { name: 'Billing', description: 'Create invoices and record payments after clinical workflow.', icon: Receipt },
  { name: 'Reports', description: 'Track visits, revenue, wait times, and clinical activity.', icon: Activity },
];

function useApiHealth() {
  return useQuery({
    queryKey: ['api-health'],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<HealthData>>('/health');
      return response.data;
    },
    retry: false,
  });
}

export default function App() {
  const health = useApiHealth();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Clinic Management Platform</p>
              <h1 className="text-xl font-semibold">MyChart</h1>
            </div>
          </div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
            Phase 1 Foundation
          </div>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-brand-600/20 px-4 py-2 text-sm font-medium text-brand-100 ring-1 ring-brand-600/30">
              Full-stack setup is ready for backend and frontend development
            </div>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Build the clinic workflow first, then expand into a full EMR.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                This foundation connects a Spring Boot API, MySQL, Liquibase, and a React dashboard. The next phase adds organizations, users, roles, and authentication.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-400">API Status</p>
            <div className="mt-5 rounded-2xl bg-slate-900 p-5 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${health.isSuccess ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <p className="text-lg font-semibold">
                  {health.isSuccess ? 'Backend connected' : 'Waiting for backend'}
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                {health.isSuccess
                  ? health.data.message
                  : 'Start the Spring Boot API on port 8080, then this card will update.'}
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article key={module.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 text-brand-100" />
                </div>
                <h3 className="text-lg font-semibold">{module.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{module.description}</p>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}
