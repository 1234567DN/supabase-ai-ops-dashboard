# Supabase AI Operations Dashboard

A responsive front-end dashboard for monitoring an AI-agent workforce. The demo uses local data but includes a Supabase schema for agents and task events, making the integration path explicit.

## Highlights

- Clean responsive dashboard UI
- Agent health, workload, and task metrics
- Recent automation event feed
- Supabase-ready SQL schema with row-level security enabled
- Clear seam for connecting n8n webhooks or Supabase realtime subscriptions

## Run locally

No build step is required. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Integration path

1. Run `supabase.sql` in a Supabase project.
2. Replace the demo state in `app.js` with authenticated Supabase queries.
3. Send n8n task events to the `task_events` table through a server-side webhook.
4. Subscribe to realtime changes to update agent health without polling.
