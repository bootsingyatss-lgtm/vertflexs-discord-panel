/* ==== RESET & BASE ==== */
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

/* ==== HERO – First Gradient Design ==== */
.hero {
    text-align:center;
    padding:120px 20px;
}
.hero h1 {
    font-size:3rem;
    margin-bottom:20px;
    text-shadow:0 2px 4px rgba(0,0,0,.3);
}
.hero p {
    font-size:1.2rem;
    margin-bottom:40px;
    opacity:.9;
}
.login-btn {
    background:#7289da;
    color:#fff;
    border:none;
    padding:15px 34px;
    font-size:1.1rem;
    border-radius:14px;                     /* rounded */
    cursor:pointer;
    transition:background .3s, transform .2s;
    box-shadow:0 6px 20px rgba(114,137,218,.5);
}
.login-btn:hover {
    background:#5b6eae;
    transform:translateY(-3px);
}

/* ==== SLIDE-IN PANEL ==== */
.login-panel {
    position:fixed;
    top:0; right:-440px;                    /* start off-screen */
    width:440px; height:100vh;
    background:#2f3136;
    box-shadow:-6px 0 25px rgba(0,0,0,.6);
    transition:right .5s cubic-bezier(.2,.8,.4,1);
    z-index:1001;
    padding:28px;
    border-top-left-radius:16px;
    border-bottom-left-radius:16px;
}
.login-panel.open { right:0; }              /* slide in */

/* Panel content */
.panel-content { height:100%; display:flex; flex-direction:column; justify-content:center; }
.close-btn {
    position:absolute; top:24px; right:24px;
    background:none; border:none; color:#fff;
    font-size:2.2rem; width:40px; height:40px;
    display:flex; align-items:center; justify-content:center;
    border-radius:50%;
    cursor:pointer;
    transition:background .2s;
}
.close-btn:hover { background:rgba(255,255,255,.15); }

.login-panel h2 {
    text-align:center;
    margin-bottom:32px;
    font-size:1.6rem;
}
.input-group { margin-bottom:22px; }
.input-group label {
    display:block;
    margin-bottom:7px;
    color:#dcddde;
    font-weight:500;
}
.input-group input {
    width:100%;
    padding:13px 16px;
    background:#40444b;
    border:1px solid #40444b;
    border-radius:10px;                     /* rounded input */
    color:#fff;
    font-size:1rem;
    transition:border-color .3s;
}
.input-group input:focus {
    outline:none;
    border-color:#7289da;
    box-shadow:0 0 0 2px rgba(114,137,218,.3);
}

.submit-btn {
    width:100%;
    background:#7289da;
    color:#fff;
    border:none;
    padding:13px;
    border-radius:10px;
    font-size:1rem;
    font-weight:600;
    cursor:pointer;
    transition:background .3s;
}
.submit-btn:hover { background:#5b6eae; }

.note {
    text-align:center;
    margin-top:22px;
    color:#72767d;
    font-size:.9rem;
}

/* ==== OVERLAY ==== */
.overlay {
    position:fixed; inset:0;
    background:rgba(0,0,0,.55);
    opacity:0; visibility:hidden;
    transition:opacity .4s;
    z-index:1000;
}
.overlay.open { opacity:1; visibility:visible; }

/* ==== RESPONSIVE ==== */
@media (max-width:768px) {
    .login-panel { width:100%; right:-100%; border-radius:0; }
    .hero h1 { font-size:2.3rem; }
    .login-btn { padding:14px 28px; }
}
