/* ==== BASE ==== */
* { margin:0; padding:0; box-sizing:border-box; }
html, body { height:100%; }
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color:#fff;
    overflow-x:hidden;
}

/* ==== LAYOUT ==== */
.container { max-width:1200px; margin:auto; padding:20px; position:relative; }

/* ==== HERO ==== */
.hero {
    text-align:center;
    padding:120px 20px;
}
.hero h1 { font-size:3rem; margin-bottom:20px; text-shadow:0 2px 4px rgba(0,0,0,.3); }
.hero p { font-size:1.2rem; margin-bottom:40px; opacity:.9; }
.login-btn {
    background:#7289da;
    color:#fff;
    border:none;
    padding:14px 32px;
    font-size:1.1rem;
    border-radius:12px;               /* rounded */
    cursor:pointer;
    transition:background .3s, transform .2s;
    box-shadow:0 4px 15px rgba(114,137,218,.4);
}
.login-btn:hover { background:#5b6eae; transform:translateY(-2px); }

/* ==== SIDE PANEL (slide-in) ==== */
.login-panel {
    position:fixed;
    top:0; right:-420px;               /* start off-screen */
    width:420px; height:100vh;
    background:#36393f;
    box-shadow:-4px 0 20px rgba(0,0,0,.5);
    transition:right .45s cubic-bezier(.22,.61,.35,1);
    z-index:1001;
    padding:24px;
}
.login-panel.open { right:0; }         /* slide in */

/* panel inner */
.panel-content { height:100%; display:flex; flex-direction:column; justify-content:center; }
.close-btn {
    position:absolute; top:20px; right:20px;
    background:none; border:none; color:#fff;
    font-size:2rem; width:36px; height:36px;
    display:flex; align-items:center; justify-content:center;
    border-radius:50%;
    cursor:pointer;
    transition:background .2s;
}
.close-btn:hover { background:rgba(255,255,255,.1); }

.login-panel h2 { text-align:center; margin-bottom:30px; }
.input-group { margin-bottom:20px; }
.input-group label { display:block; margin-bottom:6px; color:#dcddde; }
.input-group input {
    width:100%; padding:12px 14px;
    background:#40444b; border:1px solid #40444b;
    border-radius:8px;                 /* rounded input */
    color:#fff; font-size:1rem;
    transition:border-color .3s;
}
.input-group input:focus { outline:none; border-color:#7289da; }

.submit-btn {
    width:100%; background:#7289da; color:#fff;
    border:none; padding:12px; border-radius:8px;
    font-size:1rem; cursor:pointer;
    transition:background .3s;
}
.submit-btn:hover { background:#5b6eae; }

.note { text-align:center; margin-top:20px; color:#72767d; font-size:.9rem; }

/* ==== OVERLAY ==== */
.overlay {
    position:fixed; inset:0;
    background:rgba(0,0,0,.5);
    opacity:0; visibility:hidden;
    transition:opacity .35s;
    z-index:1000;
}
.overlay.open { opacity:1; visibility:visible; }

/* ==== RESPONSIVE ==== */
@media (max-width:768px) {
    .login-panel { width:100%; right:-100%; }
    .hero h1 { font-size:2.2rem; }
}
