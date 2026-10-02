'use strict';
const entries = [
['因为我觉得狼人杀满足了社交和游戏需求。一起玩狼人杀的人很容易熟起来，尤其在新环境。除此之外，通过发言、表情、逻辑漏洞一步步推断身份，会让人产生“破案”的成就感。','社交 逻辑 观察 成就感'],
['比较喜欢逻辑的对抗和跟人的互动吧。','逻辑 社交 博弈'],
['一开始打狼人杀其实是想认识新朋友，后来因为朋友喜欢打就偶尔一起了。','社交 朋友'],
['我觉得一个就是一大群人一起玩很热闹，另一个是我比较喜欢这种身份推理的玩法吧。','热闹 推理'],
['喜欢盘逻辑找狼的感觉，喜欢和朋友一起玩。','逻辑 推理 朋友'],
['想社交，然后放松，主要是想通过这个认识朋友。','社交 放松 朋友'],
['社交游戏，方便交友聊天。','社交 表达 朋友'],
['可能……是一种 social 方式？平时比较少社交，狼人杀起码是一个能让我多说说中文的机会。另外就是喜欢 argue，在狼人杀里 argue 起码不会显得很爹味……','社交 表达 辩论'],
['狼人杀能让我认识很多不同的人，然后每次开局前那种不知道自己会拿到什么身份的 unknown 感很好玩。','社交 未知'],
['重新连接神经网络，放飞自我。','放松'],
['我觉得狼人杀是一个结合逻辑和沟通的游戏，通过分析表达以及逻辑推理得出最终的答案并带领团队走向胜利。很喜欢这种关注细节分析思维的游戏。','逻辑 表达 推理 团队'],
['狼人杀社交属性比较强，可以快速破冰，而且玩起来比较有梗。','社交 热闹'],
['我觉得打狼人杀是一个很有趣的放松身心的方式，而且每次都可以从别人的行动和发言学到很多新玩法，也会在玩游戏的时候和朋友们有更多的 connections～～','放松 观察 朋友'],
['我喜欢在狼人杀里和朋友斗智斗勇，也会遇到很多新的有意思的玩家。猜测身份的思考和识破身份的成就感让我迷上了这个桌游，＆被高手 / 新手愚弄也是很大的乐趣。','朋友 社交 博弈 推理 成就感 谎言'],
['喜欢玩是因为有朋友在玩的时候特别好玩，而且还可以看朋友拿狼的反应。有时候一句话说对了就能翻盘，很容易上头。','朋友 观察 表达 成就感'],
['因为喜欢骗人。','谎言'],
['狼人杀可以观察熟悉的人在不同身份中不一样的表现。','观察 身份'],
['狼人杀是一个社交属性强的逻辑游戏，玩狼人杀可以在锻炼逻辑思维的同时交到很多好朋友。','社交 逻辑 朋友'],
['我比较喜欢观察每个人的反应，同时推理一下每个人是否有逻辑漏洞，觉得这个博弈的过程很有意思。','观察 推理 逻辑 博弈'],
['社交属性上，可以见到很多朋友；游戏内容上，可以活跃思维，思考站边和每个人的逻辑，最终获得真相的恍然大悟之感。','社交 朋友 逻辑 成就感'],
['喜欢和别人吵架。','辩论'],
['我觉得狼人杀是一个很好玩的社交游戏，通过陈述或整理信息去说服别人争取他人的信任很重要，类似于辩论的胜负判定：说服第三者，而非和你意见相左的人。除此之外，通过狼人杀可以更好地认识一个人是怎么样的。','社交 表达 信任 辩论 观察'],
['就是很喜欢这种有团队有博弈的游戏，而且身份很多、板子很多，完全不一样玩不腻，每局都可以很有节目效果。','团队 博弈 身份 热闹'],
['因为我本身就喜欢玩桌游，然后狼人杀玩的人比较多，所以可以很轻松地组到人。然后我很喜欢玩这种有策略型的游戏，很有成就感。','社交 博弈 成就感'],
['因为可以和朋友一起玩，然后可以推理，可以动动脑子。','朋友 推理'],
['玩好人时喜欢推理每个人是否在说谎，玩狼人时喜欢扮演一个给好人带队的预言家。','推理 谎言 身份'],
['狼人杀在作为交友桌游的同时，在平衡逻辑、发言影响力和调动情绪上做得很好。在任何一个方面做到极致都可以成为“狼人杀高手”；就算都没有做到极致，也能和朋友感受乐趣。我很喜欢这种全面性和玩法多样性。','社交 逻辑 表达 朋友'],
['喜欢被骗，喜欢听男人女人的谎言。','谎言'],
['我喜欢狼人杀，是因为它结合了逻辑推理和沟通表达，要一边分析信息一边和别人互动，每一局都很有挑战性，也很有意思。','逻辑 推理 表达 社交'],
['因为我需要换换脑子，强行通过游戏修改我们平常做项目时思维过于集中的关注点。另外游戏本身很有趣，我喜欢看不同人的性格和反应。','放松 观察'],
['喜欢阵营对抗和猜测其他玩家身份的过程。','博弈 推理 身份'],
['感觉是未知的那种推理，然后比较紧张刺激。','未知 推理'],
['可以锻炼识别谎话和诡辩的能力。','谎言 辩论'],
['喜欢推理的感觉，即便自己是菜，啥都没推出来。','推理'],
['喜欢推理，喜欢逻辑类的游戏，喜欢群体之间不看电子产品的那种感觉。','推理 逻辑 陪伴'],
['因为打狼人杀就像是辩论赛一样，但是比辩论赛气氛欢乐。','辩论 热闹'],
['狼人杀的时候能刷新出一些有点唐的操作。','热闹'],
['因为听说喜欢玩这个游戏的人都比较聪明。','社交'],
['之前看综艺就觉得很好玩，想现实中体验过过瘾。再加上同学们的水平也都挺高，玩得很过瘾。脑力＋社交属性，很难拒绝哈哈哈。','逻辑 社交'],
['主要喜欢和朋友在一块吧，然后推理也比较有意思。','朋友 推理'],
['我喜欢狼人杀因为一切都是未知的，然后有推理的过程，非常刺激。还有狼人杀真假难辨的性质，特别考验个人的语言艺术从而避免暴露。','未知 推理 谎言 表达'],
['我喜欢狼人杀是因为说话的时间很有存在感，14 个人安安静静地、认认真真地听你说话，哈哈哈哈很爽。','表达 被听见']
].map(([text,tags],i)=>({id:'archive-'+i,text,tags:tags.split(' '),number:i+1}));
const topics=[['逻辑',41,41,78,'#bd6157'],['社交',61,54,87,'#e5dfce'],['推理',62,29,48,'#bdb79e'],['朋友',36,67,47,'#c4c5ad'],['博弈',22,46,32,'#969f8c'],['表达',76,42,30,'#aba695'],['谎言',53,76,33,'#a8675b'],['未知',42,18,29,'#8e9e93'],['观察',77,64,28,'#aab99f'],['放松',23,28,26,'#a4a99b'],['成就感',64,88,23,'#a7a18a'],['辩论',23,76,24,'#b78f7d'],['信任',57,12,21,'#949d89'],['身份',84,81,21,'#8a9284'],['热闹',16,61,23,'#929a89'],['陪伴',47,92,18,'#a2a48a'],['团队',83,51,21,'#999580'],['被听见',65,68,19,'#b3a389']];
const $=id=>document.getElementById(id);let selected=null,viewMode="all",letterIndex=0,shared=[];
const config=window.NIGHT_POST_CONFIG||{};
const connected=Boolean(config.url&&config.key);
const all=()=>[...shared,...entries];
const relatedCount=(a,b)=>all().filter(q=>q.tags.includes(a)&&q.tags.includes(b)).length;
function choose(tag){selected=tag;letterIndex=0;render();}
function renderCloud(){const cloud=$('cloud');cloud.querySelectorAll('.word').forEach(n=>n.remove());const svg=cloud.querySelector('svg');svg.replaceChildren();
 for(let i=0;i<topics.length;i++)for(let j=i+1;j<topics.length;j++){const a=topics[i],b=topics[j],n=relatedCount(a[0],b[0]);if(n<2)continue;const line=document.createElementNS('http://www.w3.org/2000/svg','line');[['x1',a[1]*10],['y1',a[2]*6],['x2',b[1]*10],['y2',b[2]*6]].forEach(([k,v])=>line.setAttribute(k,v));if(selected&&(a[0]===selected||b[0]===selected))line.classList.add('active');svg.append(line);}
 topics.forEach(([tag,x,y,size,color],i)=>{const button=document.createElement('button');button.type='button';button.className='word'+(i<2?' hero':'')+(selected===tag?' selected':'')+(selected&&selected!==tag&&!relatedCount(selected,tag)?' dim':'');button.style.cssText=`left:${x}%;top:${y}%;font-size:clamp(${size*.46}px,${size/12}vw,${size}px);color:${color}`;const count=all().filter(q=>q.tags.includes(tag)).length;button.append(document.createTextNode(tag));const small=document.createElement('small');small.textContent=count;button.append(small);button.setAttribute('aria-label',`${tag}，${count}份心事`);button.setAttribute('aria-pressed',String(selected===tag));button.onclick=()=>choose(selected===tag?null:tag);cloud.append(button);});}
function render(){renderCloud();$('total').textContent=all().length;const matches=all().filter(q=>!selected||q.tags.includes(selected));$('voice-title').textContent=selected?`「${selected}」里，藏着这些心事。`:'每个身份背后，都是一个人。';$('result-count').textContent=`${matches.length} 封匿名来信`;$('related').replaceChildren();if(selected){$('related').append('同频关键词：');topics.map(([tag])=>[tag,relatedCount(selected,tag)]).filter(([tag,n])=>tag!==selected&&n>0).sort((a,b)=>b[1]-a[1]).slice(0,5).forEach(([tag,n])=>{const b=document.createElement('button');b.textContent=`${tag} · ${n}`;b.onclick=()=>choose(tag);$('related').append(b);});}
 letterIndex=Math.min(letterIndex,Math.max(0,matches.length-1));
 $('show-all').setAttribute('aria-pressed',String(viewMode==='all'));
 $('show-one').setAttribute('aria-pressed',String(viewMode==='one'));
 $('letter-navigation').hidden=viewMode!=='one';
 $('letter-position').textContent=matches.length?`${letterIndex+1} / ${matches.length}`:'0 / 0';
 $('previous-letter').disabled=letterIndex===0;
 $('next-letter').disabled=letterIndex>=matches.length-1;
 $('quote-grid').classList.toggle('single-letter',viewMode==='one');
 $('quote-grid').replaceChildren();
 const visible=viewMode==='all'?matches:matches.slice(letterIndex,letterIndex+1);
 visible.forEach(q=>{
   const card=document.createElement('article');card.className='quote-card';
   const meta=document.createElement('div');meta.className='quote-meta';
   meta.textContent=String(q.number||entries.length+shared.length-shared.indexOf(q)).padStart(3,'0');
   const quote=document.createElement('blockquote');quote.textContent=q.text;
   card.append(meta,quote);$('quote-grid').append(card);
 });
}
$('reset').onclick=()=>choose(null);
$('show-all').onclick=()=>{viewMode='all';render();};
$('show-one').onclick=()=>{viewMode='one';render();};
$('previous-letter').onclick=()=>{letterIndex=Math.max(0,letterIndex-1);render();};
$('next-letter').onclick=()=>{letterIndex++;render();};
const draftKey='night-letters-draft';try{$('letter').value=localStorage.getItem(draftKey)||'';}catch{}
function updateDraft(){$('char-count').textContent=`${$('letter').value.length} / 500`;try{localStorage.setItem(draftKey,$('letter').value);}catch{}}$('letter').addEventListener('input',updateDraft);updateDraft();
function classify(text){const rules={'逻辑':/逻辑|脑力|动脑/,'社交':/社交|交友|认识|破冰|social|互动/,'推理':/推理|找狼|真相|猜/,'朋友':/朋友|同学/,'博弈':/博弈|策略|对抗|斗智/,'表达':/表达|沟通|发言|说话|语言|中文/,'谎言':/骗|谎|说谎/,'未知':/未知|刺激|unknown|紧张/,'观察':/观察|反应|性格|细节/,'放松':/放松|放飞|换换脑子|解压/,'成就感':/成就|翻盘|胜利/,'辩论':/辩论|吵架|argue|诡辩/,'信任':/信任|说服/,'身份':/身份|扮演|预言家/,'热闹':/热闹|欢乐|梗|节目|笑|操作/,'陪伴':/陪伴|一起|电子产品/,'团队':/团队|阵营|带队/,'被听见':/听我|存在感|听你/};return Object.entries(rules).filter(([,re])=>re.test(text)).map(([t])=>t);}
async function request(path,options={}){const response=await fetch(config.url.replace(/\/$/,'')+'/rest/v1/'+path,{...options,headers:{apikey:config.key,'Content-Type':'application/json',...options.headers},signal:AbortSignal.timeout(15000)});if(!response.ok)throw new Error('邮局暂时连接不上，请稍后重试。');return response.json();}
async function loadShared(){if(!connected)return;try{const rows=await request('night_letters?select=id,body,created_at&order=created_at.desc&limit=1000');shared=rows.map(r=>({id:r.id,text:r.body,tags:classify(r.body)}));render();}catch{$('form-status').textContent='暂时无法读取新的来信，已有心事仍可浏览。';}}
$('storage-note').textContent=connected?'投递后公开展示给所有访客，请勿填写个人信息。':'共享邮局正在连接中；你可以先写下心事，草稿保存在此浏览器。';
$('send').disabled=!connected;if(!connected)$('send').textContent='邮局筹备中';
$('letter-form').addEventListener('submit',async e=>{e.preventDefault();if(!connected)return;const body=$('letter').value.trim();if(!body||body.length>500){$('form-status').textContent='请写下 1–500 字的心事。';return;}$('send').disabled=true;$('form-status').textContent='正在投递……';try{let submissionId;try{const pending=JSON.parse(localStorage.getItem('night-letters-pending')||'null');submissionId=pending?.body===body?pending.id:crypto.randomUUID();localStorage.setItem('night-letters-pending',JSON.stringify({id:submissionId,body}));}catch{submissionId=crypto.randomUUID();}const rows=await request('rpc/post_night_letter',{method:'POST',body:JSON.stringify({letter_body:body,submission_id:submissionId})});const saved=Array.isArray(rows)?rows[0]:rows;shared=shared.filter(q=>q.id!==saved.id);shared.unshift({id:saved.id,text:saved.body,tags:classify(saved.body)});document.querySelector('.postoffice').classList.add('sending');setTimeout(()=>{document.querySelector('.postoffice').classList.remove('sending');$('letter').value='';updateDraft();try{localStorage.removeItem('night-letters-pending');}catch{}choose(null);$('form-status').textContent='信已送达。你的心事已加入星图，所有来到这里的人都能读到。';$('send').disabled=false;},1100);}catch(error){$('form-status').textContent=error.message+' 信还在这里，没有丢失。';$('send').disabled=false;}});
render();loadShared();
