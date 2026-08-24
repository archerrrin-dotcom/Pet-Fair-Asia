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

document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('#brandNav');
  const panels=document.querySelector('#brandPanels');
  const a='assets/';
  const brands=[
    ['心养日记','IMG_2523.jpeg','场馆 / 明黄色陈列墙与日记式角色系统',['IMG_2524.jpeg','IMG_2525.jpeg','IMG_2526.jpeg','IMG_2527.jpeg']],
    ['朗诺','IMG_2327.jpeg','场馆 / 插画猫粮与冻干陈列',['IMG_2326.jpeg','IMG_2328.jpeg','IMG_2329.jpeg','IMG_2327.jpeg']],
    ['有鱼','IMG_2300.jpeg','场馆 / 蓝色海洋感的品牌空间',['IMG_2301.jpeg','IMG_2302.jpeg','IMG_2303.jpeg','IMG_2300.jpeg']],
    ['金故','IMG_2251.jpeg','场馆 / GoldenTales 的亮黄展台',['IMG_2252.jpeg','IMG_2253.jpeg','IMG_2254.jpeg','IMG_2255.jpeg']],
    ['伯纳天纯','IMG_2019.jpeg','场馆 / 自然风景主视觉的产品陈列',['IMG_2011.jpeg','IMG_2012.jpeg','IMG_2013.jpeg','IMG_2018.jpeg']]
  ];
  const photo=(file,alt,kind)=>'<div class="photo '+kind+'"><img src="'+a+file+'" alt="'+alt+'"></div>';
  if(nav&&panels)brands.forEach((b)=>{
    const i=nav.querySelectorAll('.brand-button').length;
    nav.insertAdjacentHTML('beforeend','<button class="brand-button" data-id="'+i+'">'+b[0]+'</button>');
    panels.insertAdjacentHTML('beforeend','<div class="brand-panel" id="panel'+i+'"><div>'+photo(b[1],b[0]+'场馆','scene')+'<p class="caption">'+b[2]+'</p></div><div class="packs">'+b[3].map((f,n)=>photo(f,b[0]+'包装 '+(n+1),'pack')).join('')+'</div></div>');
  });
  const pending=document.querySelector('#brands .pending');
  if(pending)pending.remove();
  const brandIntro=document.querySelector('#brands > .thought');
  if(brandIntro)brandIntro.remove();
  const exhibitSection=document.querySelector('.exhibit-wrap')?.previousElementSibling;
  if(exhibitSection){const exhibitIntro=exhibitSection.querySelector('.thought');if(exhibitIntro)exhibitIntro.remove();}
  const profiles=[
    ['supplement-1','心养日记','SOULFEED DIARY','把日常喂养，<br>做成一面温暖的“日记墙”。','心养日记以大面积明黄和成排陈列建立记忆点，包装上统一的小人物和宠物图形把不同品类串成一套轻松的日常叙事。信息足够清楚，但不把“专业”画得很硬。','IMG_2523.jpeg',['IMG_2524.jpeg','IMG_2525.jpeg','IMG_2526.jpeg','IMG_2527.jpeg']],
    ['supplement-3','朗诺','RANOVA','用插画猫，<br>把货架做成一组肖像。','朗诺把每款产品的猫咪形象做成包装正面的视觉主角，金色字标、彩色画框与品类配色共同形成系列感。面对高密度陈列时，角色插画替代了复杂的功能符号，让消费者能先凭形象辨认，再走近读取配方和品类。','IMG_2327.jpeg',['IMG_2326.jpeg','IMG_2328.jpeg','IMG_2329.jpeg','IMG_2327.jpeg']],
    ['supplement-4','有鱼','YOUYU','把“鱼”从原料，<br>延伸成一整个蓝色场景。','有鱼的展位用饱和蓝色与水下画面先建立海洋联想，再把昆虫蛋白、海洋原料等信息放回具体产品上。品牌空间与包装的色彩保持一致，远看形成清晰色块，近看能从不同系列中读到更细的品类区分。','IMG_2300.jpeg',['IMG_2301.jpeg','IMG_2302.jpeg','IMG_2303.jpeg','IMG_2300.jpeg']],
    ['supplement-5','金故','GOLDENTALES','亮黄、白猫与山野，<br>把产品做得很会发光。','金故以高纯度黄色建立强识别，再在包装上加入白猫、山野和小鸡等具象角色。主视觉并不追求极简，而是把原料、宠物形象和场景一起放大，形成适合堆头和拍照的高能量画面。','IMG_2251.jpeg',['IMG_2252.jpeg','IMG_2253.jpeg','IMG_2254.jpeg','IMG_2255.jpeg']],
    ['supplement-6','伯纳天纯','PURE NATURAL','用山川与原野，<br>替产品建立天然想象。','伯纳天纯的包装把风景摄影、动物和深蓝色标识组合起来，形成更偏自然纪录片式的视觉语言。不同配方通过山色与色块变化区分，但品牌名始终稳定地留在顶部，既保留了系列感，也适合在多品类陈列中快速辨认。','IMG_2019.jpeg',['IMG_2011.jpeg','IMG_2012.jpeg','IMG_2013.jpeg','IMG_2018.jpeg']]
  ];
  profiles.forEach((p,n)=>{
    const tab=document.querySelector('[data-analysis="'+p[0]+'"]');
    const panel=document.querySelector('#analysis-'+p[0]);
    if(tab){const status=tab.querySelector('span');if(status)status.textContent=('0'+(n+4)).slice(-2)+' / 已补图';}
    if(panel)panel.innerHTML='<div><div style="max-width:560px;margin-bottom:30px"><p class="section-title" style="margin:0 0 12px">'+p[1]+' / '+p[2]+'</p><h3 style="font-size:clamp(24px,3vw,38px);line-height:1.28;letter-spacing:-.05em;margin:0 0 16px">'+p[3]+'</h3><p class="thought" style="margin:0">'+p[4]+'</p></div><div style="display:grid;grid-template-columns:1.25fr 1fr;gap:14px"><img src="'+a+p[5]+'" alt="'+p[1]+'展位" style="width:100%;height:100%;min-height:340px;object-fit:cover"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">'+p[6].map((f,i)=>'<img src="'+a+f+'" alt="'+p[1]+'包装 '+(i+1)+'" style="width:100%;height:100%;min-height:162px;object-fit:cover">').join('')+'</div></div></div>';
  });
});
