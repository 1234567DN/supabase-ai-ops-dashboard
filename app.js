const state = {
  agents: [
    { name: 'Atlas', specialty: 'Research', status: 'Healthy', load: 72, tasks: 142 },
    { name: 'Nova', specialty: 'Research', status: 'Healthy', load: 48, tasks: 97 },
    { name: 'Forge', specialty: 'Automation', status: 'Healthy', load: 63, tasks: 121 },
    { name: 'Sage', specialty: 'Analysis', status: 'Review', load: 86, tasks: 88 }
  ],
  events: [
    ['Task routed to Forge', 'Automation workflow', '4 min ago'],
    ['Knowledge base refreshed', '2,418 indexed chunks', '18 min ago'],
    ['Sage flagged for review', 'Load threshold exceeded', '42 min ago'],
    ['Realtime channel connected', 'Supabase event stream', '1 hr ago']
  ]
};
function render(){
  const total=state.agents.reduce((sum,a)=>sum+a.tasks,0);
  document.querySelector('#metrics').innerHTML=[['Active agents',state.agents.length],['Tasks completed',total],['Healthy agents',state.agents.filter(a=>a.status==='Healthy').length],['Avg. load',Math.round(state.agents.reduce((s,a)=>s+a.load,0)/state.agents.length)+'%']].map(([label,value])=>`<div class="metric"><div class="metric-label">${label}</div><div class="metric-value">${value}</div></div>`).join('');
  document.querySelector('#agents').innerHTML=state.agents.map(a=>`<div class="agent"><div class="agent-head"><span class="agent-name">${a.name} <span class="muted">· ${a.specialty}</span></span><span class="badge">${a.status}</span></div><div class="bar"><span style="width:${a.load}%"></span></div><div class="muted" style="font-size:11px;margin-top:6px">${a.tasks} tasks · ${a.load}% current load</div></div>`).join('');
  document.querySelector('#events').innerHTML=state.events.map(e=>`<div class="event"><div class="event-head"><strong>${e[0]}</strong><span class="muted">${e[1]}</span></div><time>${e[2]}</time></div>`).join('');
}
document.querySelector('#refresh').addEventListener('click',()=>{state.events.unshift(['Dashboard refreshed','Client-side demo event','just now']);render()});render();
