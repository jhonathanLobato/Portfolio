const PANEL = document.getElementById('panel');
const TABS = [
    { key:'sobre',    btn:'#tabbtn-sobre',    tmpl:'#tmpl-sobre' },
    { key:'projetos', btn:'#tabbtn-projetos', tmpl:'#tmpl-projetos' },
    { key:'blog',     btn:'#tabbtn-blog',     tmpl:'#tmpl-blog' },
    { key:'contato',  btn:'#tabbtn-contato',  tmpl:'#tmpl-contato' },
];


function setActiveTab(key, pushHash=true){
    const tab = TABS.find(t => t.key === key) || TABS[0];
    const tpl = document.querySelector(tab.tmpl);
    if(!tpl) return;

    PANEL.innerHTML = '';
    PANEL.appendChild(tpl.content.cloneNode(true));
    colorizeActive(tab.key);

    document.title = `${tab.key.charAt(0).toUpperCase()+tab.key.slice(1)} — Jhonathan`;
    if (pushHash) location.hash = '#' + tab.key;
    PANEL.focus({ preventScroll:true });
}

document.querySelectorAll('[id^="tabbtn-"]').forEach(b => b.addEventListener('click', ()=>{
    const key = b.id.replace('tabbtn-','');
    setActiveTab(key);
}));

window.addEventListener('hashchange', ()=>{
    const key = (location.hash || '#sobre').slice(1);
    setActiveTab(key, false);
});

setActiveTab((location.hash || '#sobre').slice(1));
