let currentLang = 'zh'; // 默认语言

function applyLang(dict) {
  for (const id in dict) {
    const el = document.getElementById(id);
    if (el) el.textContent = dict[id];
  }


  
  document.body.classList.remove('zh', 'en');
  document.body.classList.add(currentLang);
  document.documentElement.lang = currentLang;
}

function loadLang(lang) {
  fetch(`locales/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      currentLang = lang;
      applyLang(data);
    })
    .catch(err => console.error('语言加载失败:', err));
}

function switchLang() {
  const nextLang = currentLang === 'zh' ? 'en' : 'zh';
  loadLang(nextLang);
}

// 初始化默认语言（重要）
window.addEventListener('DOMContentLoaded', () => {
  loadLang(currentLang);
});
