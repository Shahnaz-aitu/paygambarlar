(function(){
  const cfg=window.backgroundAudio||{};
  const dock=document.getElementById('musicDock');
  const topButton=document.getElementById('musicButton');
  if(!dock||!topButton)return;

  const audio=document.createElement('audio');
  audio.preload='metadata';
  audio.loop=cfg.loop!==false;
  if(cfg.src)audio.src=cfg.src;

  const volumeSaved=Number(localStorage.getItem('paygambarlar-music-volume'));
  audio.volume=Number.isFinite(volumeSaved)?Math.min(1,Math.max(0,volumeSaved)):.35;

  function fmt(n){if(!isFinite(n))return'0:00';n=Math.max(0,Math.floor(n));return`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`}
  function label(key){return typeof t==='function'?t(key):key}

  function render(){
    if(!cfg.available){
      dock.innerHTML=`<div class="music-panel"><div><strong>♪ ${label('music')}</strong><small>${label('musicMissing')}</small></div></div>`;
      topButton.disabled=false;topButton.textContent='♪';topButton.classList.remove('playing');
      return;
    }
    dock.innerHTML=`<div class="music-panel"><button class="music-main" data-music-play>${audio.paused?'▶':'❚❚'}</button><div class="music-meta"><strong>♪ ${label('music')}</strong><span data-music-time>${fmt(audio.currentTime)} / ${fmt(audio.duration)}</span></div><input data-music-progress type="range" min="0" max="1000" value="0" aria-label="progress"><input data-music-volume type="range" min="0" max="1" step=".05" value="${audio.volume}" aria-label="volume"></div>`;
    const play=dock.querySelector('[data-music-play]');
    const progress=dock.querySelector('[data-music-progress]');
    const volume=dock.querySelector('[data-music-volume]');
    play.addEventListener('click',toggle);
    progress.addEventListener('input',()=>{if(audio.duration)audio.currentTime=audio.duration*Number(progress.value)/1000});
    volume.addEventListener('input',()=>{audio.volume=Number(volume.value);localStorage.setItem('paygambarlar-music-volume',String(audio.volume))});
    update();
  }

  function update(){
    const time=dock.querySelector('[data-music-time]');
    const progress=dock.querySelector('[data-music-progress]');
    if(time)time.textContent=`${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
    if(progress&&audio.duration)progress.value=Math.round(audio.currentTime/audio.duration*1000);
    const main=dock.querySelector('[data-music-play]');
    if(main)main.textContent=audio.paused?'▶':'❚❚';
    topButton.textContent=audio.paused?'♪':'❚❚';
    topButton.classList.toggle('playing',!audio.paused);
  }

  async function toggle(){
    if(!cfg.available){dock.classList.toggle('open');render();return}
    try{audio.paused?await audio.play():audio.pause()}catch(e){dock.classList.add('open')}
    update();
  }

  topButton.addEventListener('click',()=>{
    if(!cfg.available){dock.classList.toggle('open');render();return}
    if(dock.classList.contains('open')){toggle()}else{dock.classList.add('open');render();toggle()}
  });
  audio.addEventListener('loadedmetadata',()=>{const saved=Number(localStorage.getItem('paygambarlar-music-position')||0);if(saved>0&&saved<audio.duration-2)audio.currentTime=saved;update()});
  audio.addEventListener('timeupdate',()=>{if(audio.currentTime)localStorage.setItem('paygambarlar-music-position',String(audio.currentTime));update()});
  audio.addEventListener('play',update);audio.addEventListener('pause',update);
  audio.addEventListener('error',()=>{cfg.available=false;render()});
  window.addEventListener('languagechange',render);
  render();
})();
