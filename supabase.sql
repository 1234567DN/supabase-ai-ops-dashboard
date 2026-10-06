create table if not exists agents (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialty text not null,
  status text not null default 'healthy',
  current_load integer not null default 0 check (current_load between 0 and 100),
  created_at timestamptz not null default now()
);

create table if not exists task_events (
  id uuid primary key default gen_random_uuid(),
  agent_id uuid references agents(id) on delete set null,
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table agents enable row level security;
alter table task_events enable row level security;
