/* ===== MOCK DATA ===== */
const BOT = {
  name: "DzaireyBot",
  tag: "#0042",
  status: "online",
  stats: { servers: 1247, users: 89432, commands: 524801, uptime: "99.8%" },
  servers: [
    { id: "1", name: "Dzairey Gaming",      members: 4821, icon: "D" },
    { id: "2", name: "La Communauté FR",     members: 12043, icon: "L" },
    { id: "3", name: "Support Officiel",     members: 3205, icon: "S" },
    { id: "4", name: "Espace Détente",       members: 987,  icon: "E" },
    { id: "5", name: "Anime & Manga FR",     members: 6701, icon: "A" },
    { id: "6", name: "Tech & Dev",           members: 2350, icon: "T" },
    { id: "7", name: "Music Lounge",         members: 1890, icon: "M" },
    { id: "8", name: "Clan Warrior",         members: 543,  icon: "C" },
  ],
  recentCommands: [
    { user: "Hamza#1234",  cmd: "!ban",    server: "Dzairey Gaming",   time: "il y a 2 min",  status: "success" },
    { user: "Yasmine#5678",cmd: "!play",   server: "Music Lounge",     time: "il y a 5 min",  status: "success" },
    { user: "Karim#9012",  cmd: "!warn",   server: "Support Officiel", time: "il y a 8 min",  status: "success" },
    { user: "Nour#3456",   cmd: "!meme",   server: "Espace Détente",   time: "il y a 12 min", status: "success" },
    { user: "Amine#7890",  cmd: "!kick",   server: "La Communauté FR", time: "il y a 15 min", status: "danger" },
    { user: "Sara#2468",   cmd: "!rank",   server: "Tech & Dev",       time: "il y a 19 min", status: "success" },
    { user: "Riad#1357",   cmd: "!help",   server: "Clan Warrior",     time: "il y a 23 min", status: "success" },
    { user: "Lina#8024",   cmd: "!stats",  server: "Anime & Manga FR", time: "il y a 30 min", status: "success" },
  ]
};

const COMMANDS = [
  /* Modération */
  { name: "ban",       cat: "Modération", desc: "Bannir un membre du serveur.",              usage: "!ban @user [raison]",        cooldown: "0s" },
  { name: "kick",      cat: "Modération", desc: "Expulser un membre du serveur.",             usage: "!kick @user [raison]",       cooldown: "0s" },
  { name: "mute",      cat: "Modération", desc: "Mettre en sourdine un membre.",              usage: "!mute @user [durée] [raison]",cooldown: "0s" },
  { name: "unmute",    cat: "Modération", desc: "Retirer la sourdine d'un membre.",           usage: "!unmute @user",              cooldown: "0s" },
  { name: "warn",      cat: "Modération", desc: "Avertir un membre.",                         usage: "!warn @user [raison]",       cooldown: "0s" },
  { name: "warnings",  cat: "Modération", desc: "Voir les avertissements d'un membre.",       usage: "!warnings @user",            cooldown: "3s" },
  { name: "purge",     cat: "Modération", desc: "Supprimer des messages en masse.",           usage: "!purge [1-100]",             cooldown: "5s" },
  { name: "lock",      cat: "Modération", desc: "Verrouiller un salon.",                      usage: "!lock [#salon]",             cooldown: "0s" },
  /* Fun */
  { name: "meme",      cat: "Fun",        desc: "Envoyer un mème aléatoire.",                 usage: "!meme",                      cooldown: "5s" },
  { name: "blague",    cat: "Fun",        desc: "Une blague aléatoire en français.",          usage: "!blague",                    cooldown: "3s" },
  { name: "rps",       cat: "Fun",        desc: "Pierre-feuille-ciseaux contre le bot.",      usage: "!rps [pierre|feuille|ciseaux]",cooldown:"3s"},
  { name: "8ball",     cat: "Fun",        desc: "Poser une question à la boule magique.",     usage: "!8ball [question]",          cooldown: "3s" },
  { name: "poll",      cat: "Fun",        desc: "Créer un sondage.",                          usage: "!poll [question]",           cooldown: "10s" },
  { name: "ship",      cat: "Fun",        desc: "Calculer la compatibilité entre deux users.","usage": "!ship @user1 @user2",      cooldown: "5s" },
  /* Utilitaire */
  { name: "help",      cat: "Utilitaire", desc: "Afficher la liste des commandes.",           usage: "!help [commande]",           cooldown: "3s" },
  { name: "ping",      cat: "Utilitaire", desc: "Vérifier la latence du bot.",                usage: "!ping",                      cooldown: "5s" },
  { name: "stats",     cat: "Utilitaire", desc: "Statistiques du bot.",                       usage: "!stats",                     cooldown: "5s" },
  { name: "userinfo",  cat: "Utilitaire", desc: "Informations sur un utilisateur.",           usage: "!userinfo [@user]",          cooldown: "3s" },
  { name: "serverinfo",cat: "Utilitaire", desc: "Informations sur le serveur.",               usage: "!serverinfo",                cooldown: "3s" },
  { name: "avatar",    cat: "Utilitaire", desc: "Afficher l'avatar d'un utilisateur.",        usage: "!avatar [@user]",            cooldown: "3s" },
  { name: "rank",      cat: "Utilitaire", desc: "Voir son classement sur le serveur.",        usage: "!rank [@user]",              cooldown: "5s" },
  { name: "leaderboard",cat:"Utilitaire", desc: "Top 10 des membres les plus actifs.",        usage: "!leaderboard",               cooldown: "10s"},
  { name: "remind",    cat: "Utilitaire", desc: "Définir un rappel temporisé.",               usage: "!remind [durée] [message]",  cooldown: "5s" },
  /* Musique */
  { name: "play",      cat: "Musique",    desc: "Jouer une musique dans le salon vocal.",     usage: "!play [titre/URL]",          cooldown: "2s" },
  { name: "pause",     cat: "Musique",    desc: "Mettre en pause la musique.",                usage: "!pause",                     cooldown: "2s" },
  { name: "resume",    cat: "Musique",    desc: "Reprendre la musique.",                      usage: "!resume",                    cooldown: "2s" },
  { name: "skip",      cat: "Musique",    desc: "Passer à la musique suivante.",              usage: "!skip",                      cooldown: "2s" },
  { name: "queue",     cat: "Musique",    desc: "Voir la file d'attente musicale.",           usage: "!queue",                     cooldown: "3s" },
  { name: "volume",    cat: "Musique",    desc: "Changer le volume (0-100).",                 usage: "!volume [0-100]",            cooldown: "2s" },
  { name: "stop",      cat: "Musique",    desc: "Arrêter la musique et vider la file.",       usage: "!stop",                      cooldown: "2s" },
  { name: "nowplaying",cat: "Musique",    desc: "Voir la musique en cours de lecture.",       usage: "!nowplaying",                cooldown: "3s" },
];

const CHART_DATA = {
  labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  values: [1240, 1890, 1530, 2100, 2450, 3200, 2780]
};

/* ===== ANIMATED COUNTER ===== */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const isFloat = String(target).includes('.');
  function update(time) {
    const progress = Math.min((time - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = isFloat
      ? (parseFloat(target) * ease).toFixed(1)
      : Math.floor(parseFloat(target.toString().replace(/,/g, '')) * ease).toLocaleString('fr-FR');
    el.textContent = isFloat ? current + '%' : current;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = isFloat ? target + '%' : parseFloat(target.toString().replace(/,/g,'')).toLocaleString('fr-FR');
  }
  requestAnimationFrame(update);
}

function initCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const val = el.dataset.counter;
    animateCounter(el, val);
  });
}

/* ===== SIDEBAR TOGGLE ===== */
function initSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  const btnMenu  = document.getElementById('btn-menu');
  if (!sidebar) return;

  function open()  { sidebar.classList.add('open'); overlay.classList.add('show'); }
  function close() { sidebar.classList.remove('open'); overlay.classList.remove('show'); }

  btnMenu?.addEventListener('click', open);
  overlay?.addEventListener('click', close);
}

/* ===== TOAST ===== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    danger:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    info:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `${icons[type] || icons.info}<span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

/* ===== CHART ===== */
function initChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof Chart === 'undefined') return;

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: CHART_DATA.labels,
      datasets: [{
        label: 'Commandes',
        data: CHART_DATA.values,
        backgroundColor: 'rgba(114,137,218,.6)',
        borderColor:     '#7289da',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
        hoverBackgroundColor: 'rgba(114,137,218,.9)',
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: {
        backgroundColor: '#2c2f33',
        titleColor: '#fff',
        bodyColor: '#b9bbbe',
        borderColor: '#40444b',
        borderWidth: 1,
        callbacks: { label: ctx => ` ${ctx.parsed.y.toLocaleString('fr-FR')} commandes` }
      }},
      scales: {
        x: { grid: { color: 'rgba(64,68,75,.4)' }, ticks: { color: '#b9bbbe' } },
        y: { grid: { color: 'rgba(64,68,75,.4)' }, ticks: { color: '#b9bbbe', callback: v => v.toLocaleString('fr-FR') } }
      }
    }
  });
}

/* ===== SERVER LIST (index) ===== */
function renderServerList(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = BOT.servers.map(s => `
    <div class="server-item">
      <div class="avatar-placeholder avatar-square">${s.icon}</div>
      <div class="server-info">
        <div class="server-name">${s.name}</div>
        <div class="server-members">${s.members.toLocaleString('fr-FR')} membres</div>
      </div>
      <span class="badge success">En ligne</span>
    </div>
  `).join('');
}

/* ===== RECENT COMMANDS TABLE ===== */
function renderRecentCommands(tbodyId) {
  const el = document.getElementById(tbodyId);
  if (!el) return;
  el.innerHTML = BOT.recentCommands.map(c => `
    <tr>
      <td><code style="font-size:13px;color:var(--accent)">${c.cmd}</code></td>
      <td>${c.user}</td>
      <td>${c.server}</td>
      <td>${c.time}</td>
      <td><span class="badge ${c.status === 'success' ? 'success' : 'danger'}">${c.status === 'success' ? 'Succès' : 'Erreur'}</span></td>
    </tr>
  `).join('');
}

/* ===== COMMANDS PAGE ===== */
let activeCategory = 'Tous';
let searchQuery = '';

function renderCommands() {
  const grid = document.getElementById('cmd-grid');
  if (!grid) return;

  const filtered = COMMANDS.filter(c => {
    const matchCat = activeCategory === 'Tous' || c.cat === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || c.name.includes(q) || c.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">Aucune commande trouvée.</div>';
    return;
  }

  const catColors = { Modération: 'danger', Fun: 'warning', Utilitaire: 'info', Musique: 'success' };

  grid.innerHTML = filtered.map(c => `
    <div class="cmd-card" data-cat="${c.cat}">
      <div class="cmd-card-header">
        <span class="cmd-name">!${c.name}</span>
        <span class="badge ${catColors[c.cat] || 'muted'}">${c.cat}</span>
      </div>
      <p class="cmd-desc">${c.desc}</p>
      <div class="cmd-meta">
        <span class="cmd-usage">${c.usage}</span>
        <button class="btn-copy" onclick="copyCmd('${c.usage}', this)">Copier</button>
      </div>
      <div style="margin-top:8px;font-size:11px;color:var(--text-muted)">
        <svg style="width:12px;height:12px;vertical-align:middle;margin-right:3px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Cooldown : ${c.cooldown}
      </div>
    </div>
  `).join('');
}

function copyCmd(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copié !';
    btn.style.background = 'var(--success)';
    btn.style.color = '#fff';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.color = ''; }, 1400);
  }).catch(() => showToast('Impossible de copier.', 'danger'));
}

function initCommandsPage() {
  const searchInput = document.getElementById('cmd-search');
  const tabs = document.querySelectorAll('.tab-btn');

  if (!searchInput) return;

  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderCommands();
  });

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderCommands();
    });
  });

  renderCommands();
}

/* ===== DASHBOARD CONFIG PAGE ===== */
function initDashboardPage() {
  const form = document.getElementById('config-form');
  const serverSelect = document.getElementById('server-select');

  if (!serverSelect) return;

  BOT.servers.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = s.name;
    serverSelect.appendChild(opt);
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sauvegarde...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Sauvegardé !';
      btn.style.background = 'var(--success)';
      showToast('Configuration sauvegardée avec succès !', 'success');
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 2000);
    }, 900);
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initCounters();
  initChart('commands-chart');
  renderServerList('server-list');
  renderRecentCommands('recent-tbody');
  initCommandsPage();
  initDashboardPage();
});
