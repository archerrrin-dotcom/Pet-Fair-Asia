document.addEventListener('DOMContentLoaded',()=>{
  const brandNav=document.querySelector('#brandNav');
  const brandPanels=document.querySelector('#brandPanels');
  if(brandNav&&brandPanels){
    const index=brandNav.querySelectorAll('.brand-button').length;
    brandNav.insertAdjacentHTML('beforeend','<button class="brand-button" data-id="'+index+'">布兰德</button>');
    brandPanels.insertAdjacentHTML('beforeend','<div class="brand-panel" id="panel'+index+'"><div><div class="photo scene"><img src="assets/IMG_2496.jpeg" alt="布兰德场馆"></div><p class="caption">场馆 / 蓝色空间与鱼油主视觉</p></div><div class="packs"><div class="photo pack"><img src="assets/IMG_2497.jpeg" alt="布兰德场馆空间"></div><div class="photo pack"><img src="assets/IMG_2503.jpeg" alt="布兰德营养餐盒"></div><div class="photo pack"><img src="assets/IMG_2504.jpeg" alt="布兰德营养餐盒包装"></div><div class="photo pack"><img src="assets/IMG_2505.jpeg" alt="布兰德鲜煮鱼条"></div></div></div>');
  }

  const pending=document.querySelector('#brands .pending');
  if(pending)pending.innerHTML='<b>本轮已确认 15 个重点品牌。</b><br>待补拍/未在本批照片中可靠确认：皇家、渴望、宽福、爱肯拿、大宠爱、顽皮、喵梵思、米奇旋风、迈路士。<br><span style="display:inline-block;margin-top:8px">补充关注：心养日记、朗诺、有鱼、金故、伯纳天纯（待指认照片）</span>';

  const analysisTab=document.querySelector('[data-analysis="supplement-2"]');
  const analysisPanel=document.querySelector('#analysis-supplement-2');
  if(analysisTab){
    const status=analysisTab.querySelector('span');
    if(status)status.textContent='03 / 已补图';
  }
  if(analysisPanel){
    analysisPanel.innerHTML='<div><div style="max-width:560px;margin-bottom:30px"><p class="section-title" style="margin:0 0 12px">布兰德 / BRIGHT</p><h3 style="font-size:clamp(24px,3vw,38px);line-height:1.28;letter-spacing:-.05em;margin:0 0 16px">把“营养”做成<br>高可见度的货架语言。</h3><p class="thought" style="margin:0">布兰德的展位以大面积蓝色和飘带式装置建立远距离识别，鱼油卖点则用金色与水滴图形放大。包装从功能化的主粮到色彩更轻盈的营养餐盒，形成了清晰的品类层级：大包装负责专业感，盒装零食用更明亮的色彩降低尝新门槛，也给展陈留下了可被近距离观看的细节。</p></div><div style="display:grid;grid-template-columns:1.25fr 1fr;gap:14px"><img src="assets/IMG_2496.jpeg" alt="布兰德展位" style="width:100%;height:100%;min-height:340px;object-fit:cover"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><img src="assets/IMG_2497.jpeg" alt="布兰德空间装置" style="width:100%;height:100%;min-height:162px;object-fit:cover"><img src="assets/IMG_2503.jpeg" alt="布兰德餐盒系列" style="width:100%;height:100%;min-height:162px;object-fit:cover"><img src="assets/IMG_2504.jpeg" alt="布兰德营养餐盒" style="width:100%;height:100%;min-height:162px;object-fit:cover"><img src="assets/IMG_2505.jpeg" alt="布兰德鲜煮鱼条" style="width:100%;height:100%;min-height:162px;object-fit:cover"></div></div></div>';
  }
});
