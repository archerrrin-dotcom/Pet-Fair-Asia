document.addEventListener('DOMContentLoaded',()=>{
  const brandNav=document.querySelector('#brandNav');
  const brandPanels=document.querySelector('#brandPanels');
  if(brandNav&&brandPanels){
    const index=brandNav.querySelectorAll('.brand-button').length;
    brandNav.insertAdjacentHTML('beforeend','<button class="brand-button" data-id="'+index+'">莱野</button>');
    brandPanels.insertAdjacentHTML('beforeend','<div class="brand-panel" id="panel'+index+'"><div><div class="photo scene"><img src="assets/IMG_2593.jpeg" alt="莱野场馆"></div><p class="caption">场馆 / 山川湖海的空间叙事</p></div><div class="packs"><div class="photo pack"><img src="assets/IMG_2595.jpeg" alt="莱野包装 1"></div><div class="photo pack"><img src="assets/IMG_2596.jpeg" alt="莱野包装 2"></div><div class="photo pack"><img src="assets/IMG_2598.jpeg" alt="莱野包装 3"></div><div class="photo pack"><img src="assets/IMG_2594.jpeg" alt="莱野展位与包装"></div></div></div>');
  }

  const pending=document.querySelector('#brands .pending');
  if(pending)pending.innerHTML='<b>本轮已确认 14 个重点品牌。</b><br>待补拍/未在本批照片中可靠确认：皇家、渴望、宽福、爱肯拿、大宠爱、顽皮、喵梵思、米奇旋风、迈路士。<br><span style="display:inline-block;margin-top:8px">补充关注：心养日记、布兰德、朗诺、有鱼、金故、伯纳天纯（待指认照片）</span>';

  const analysisTab=document.querySelector('[data-analysis="supplement-0"]');
  const analysisPanel=document.querySelector('#analysis-supplement-0');
  if(analysisTab){
    const status=analysisTab.querySelector('span');
    if(status)status.textContent='02 / 已补图';
  }
  if(analysisPanel){
    analysisPanel.innerHTML='<div><div style="max-width:560px;margin-bottom:30px"><p class="section-title" style="margin:0 0 12px">莱野 / LAIYE</p><h3 style="font-size:clamp(24px,3vw,38px);line-height:1.28;letter-spacing:-.05em;margin:0 0 16px">山川、黑红与<br>一眼能认出的猫粮包装。</h3><p class="thought" style="margin:0">展位用层叠山形和低饱和岩石质感承接“山川湖海”的品牌语境；深黑底搭配高饱和红色包装，把产品在复杂展场中迅速推到视线前。空间的克制与包装的高对比形成分工：前者建立自然、原生的想象，后者负责货架上的识别与配方信息的快速传达。</p></div><div style="display:grid;grid-template-columns:1.25fr 1fr;gap:14px"><img src="assets/IMG_2593.jpeg" alt="莱野展位" style="width:100%;height:100%;min-height:340px;object-fit:cover"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><img src="assets/IMG_2595.jpeg" alt="莱野包装细节" style="width:100%;height:100%;min-height:162px;object-fit:cover"><img src="assets/IMG_2596.jpeg" alt="莱野包装系列" style="width:100%;height:100%;min-height:162px;object-fit:cover"><img src="assets/IMG_2598.jpeg" alt="莱野鲜食冻干包装" style="width:100%;height:100%;min-height:162px;object-fit:cover"><img src="assets/IMG_2594.jpeg" alt="莱野展位空间" style="width:100%;height:100%;min-height:162px;object-fit:cover"></div></div></div>';
  }
});
