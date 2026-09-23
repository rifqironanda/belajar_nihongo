import { useEffect, useMemo, useState } from 'react'
import { BookOpen, Brain, Check, ChevronLeft, ChevronRight, CircleHelp, Clock3, ExternalLink, GraduationCap, Home, Languages, Menu, RotateCcw, Sparkles, Target, Trophy, X } from 'lucide-react'
import { lessons, sources } from './data'
import { questionBanks, levelMeta, allQuestions } from './questions'

const nav = [
  {id:'home', label:'Beranda', icon:Home},
  {id:'learn', label:'Materi', icon:BookOpen},
  {id:'quiz', label:'Kuis', icon:Brain},
  {id:'exam', label:'Simulasi', icon:GraduationCap},
]

function shuffle(items){ return [...items].sort(() => Math.random() - .5) }
function prepareQuestions(items){return shuffle(items).map(q=>{const opts=shuffle(q.options.map((x,i)=>({x,ok:i===q.answer})));return {...q,options:opts.map(o=>o.x),answer:opts.findIndex(o=>o.ok)}})}
function speak(text){ if('speechSynthesis' in window){ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang='ja-JP'; u.rate=.82; speechSynthesis.speak(u) } }

function App(){
  const [page,setPage]=useState('home')
  const [done,setDone]=useState(()=>JSON.parse(localStorage.getItem('manabi-done')||'[]'))
  const [streak,setStreak]=useState(()=>Number(localStorage.getItem('manabi-streak')||1))
  const [open,setOpen]=useState(false)
  useEffect(()=>localStorage.setItem('manabi-done',JSON.stringify(done)),[done])
  const go=(id)=>{setPage(id);setOpen(false);window.scrollTo({top:0,behavior:'smooth'})}
  return <div className="app-shell">
    <aside className={open?'sidebar open':'sidebar'}>
      <button className="close-mobile" onClick={()=>setOpen(false)} aria-label="Tutup menu"><X/></button>
      <div className="brand"><span>学</span><div><b>MANABI</b><small>日本語 • NIHONGO</small></div></div>
      <nav>{nav.map(({id,label,icon:Icon})=><button key={id} className={page===id?'active':''} onClick={()=>go(id)}><Icon size={19}/>{label}</button>)}</nav>
      <div className="sidebar-goal"><Target size={22}/><b>Target hari ini</b><span>{done.length}/18 pelajaran selesai</span><div><i style={{width:`${done.length/18*100}%`}}/></div></div>
      <p className="sidebar-note">毎日少しずつ<br/><span>Sedikit demi sedikit, setiap hari.</span></p>
    </aside>
    <main>
      <header className="topbar"><button className="menu-btn" onClick={()=>setOpen(true)}><Menu/></button><div><span className="eyebrow">Selamat datang kembali</span><strong>今日もがんばりましょう！</strong></div><div className="streak">🔥 <b>{streak}</b><span>hari</span></div></header>
      {page==='home'&&<HomePage go={go} done={done}/>} 
      {page==='learn'&&<Learn done={done} setDone={setDone}/>} 
      {page==='quiz'&&<Quiz/>}
      {page==='exam'&&<Exam/>}
      <footer><span>学び続ける • Terus belajar</span><div>{sources.map(s=><a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}<ExternalLink size={12}/></a>)}</div><small>Materi diringkas dari Irodori. Soal latihan bersifat orisinal dan bukan soal resmi JFT-Basic/JLPT.</small></footer>
    </main>
    {open&&<button className="backdrop" onClick={()=>setOpen(false)} aria-label="Tutup menu"/>}
  </div>
}

function HomePage({go,done}){
  const next=lessons.find(l=>!done.includes(l.id))||lessons[0]
  return <section className="page home-page">
    <div className="hero">
      <div><span className="pill"><Sparkles size={15}/> Irodori learning path</span><h1>Bahasa Jepang untuk<br/><em>kehidupan nyata.</em></h1><p>Belajar melalui situasi sehari-hari, cek pemahaman lewat kuis, lalu ukur kesiapanmu dalam simulasi ujian.</p><button className="primary" onClick={()=>go('learn')}>Mulai belajar <ChevronRight/></button></div>
      <div className="sun-card"><span className="sun">日</span><div className="float-word w1">話す<small>berbicara</small></div><div className="float-word w2">読む<small>membaca</small></div><div className="float-word w3">聞く<small>menyimak</small></div><div className="mountain"/></div>
    </div>
    <div className="stats"><article><Languages/><div><b>18</b><span>Pelajaran Irodori</span></div></article><article><Brain/><div><b>{allQuestions.length}</b><span>Soal latihan</span></div></article><article><Trophy/><div><b>{Math.round(done.length/18*100)}%</b><span>Progres materi</span></div></article></div>
    <div className="section-heading"><div><span className="eyebrow">LANJUTKAN PERJALANANMU</span><h2>Pelajaran berikutnya</h2></div><button className="text-btn" onClick={()=>go('learn')}>Lihat semua <ChevronRight/></button></div>
    <article className="next-lesson" style={{'--accent':next.color}}><span className="lesson-number">{String(next.id).padStart(2,'0')}</span><div><small>{next.topic}</small><h3>{next.jp}</h3><p>{next.title} — {next.canDo}</p></div><button onClick={()=>go('learn')} aria-label="Buka materi"><ChevronRight/></button></article>
    <div className="practice-grid"><article className="practice-card quiz-card"><div><CircleHelp/><span>LATIHAN CEPAT</span></div><h3>Uji pemahamanmu</h3><p>Jawaban langsung dibahas agar kamu tahu alasan di baliknya.</p><button onClick={()=>go('quiz')}>Mulai kuis</button></article><article className="practice-card exam-card"><div><Clock3/><span>MODE FOKUS</span></div><h3>Simulasi JFT-Basic</h3><p>Latihan terukur dengan timer dan ringkasan kemampuan per bagian.</p><button onClick={()=>go('exam')}>Buka simulasi</button></article></div>
  </section>
}

function Learn({done,setDone}){
  const [selected,setSelected]=useState(lessons[0]); const [filter,setFilter]=useState('Semua')
  const topics=['Semua',...new Set(lessons.map(l=>l.topic))]
  const list=filter==='Semua'?lessons:lessons.filter(l=>l.topic===filter)
  const toggle=()=>setDone(done.includes(selected.id)?done.filter(x=>x!==selected.id):[...done,selected.id])
  return <section className="page"><div className="page-title"><span className="eyebrow">IRODORI STARTER • A1</span><h1>Pilih satu situasi,<br/>lalu praktikkan.</h1><p>Fokus pada apa yang dapat kamu lakukan (Can-do), bukan sekadar menghafal pola.</p></div>
    <div className="filter-row">{topics.map(t=><button className={filter===t?'active':''} onClick={()=>setFilter(t)} key={t}>{t}</button>)}</div>
    <div className="learn-layout"><div className="lesson-list">{list.map(l=><button key={l.id} className={selected.id===l.id?'selected':''} onClick={()=>setSelected(l)}><i style={{background:l.color}}>{done.includes(l.id)?<Check size={16}/>:String(l.id).padStart(2,'0')}</i><span><small>{l.topic}</small><b>{l.jp}</b></span><ChevronRight/></button>)}</div>
      <article className="lesson-detail" style={{'--accent':selected.color}}><div className="detail-top"><span>LESSON {String(selected.id).padStart(2,'0')}</span><button className={done.includes(selected.id)?'complete done':'complete'} onClick={toggle}>{done.includes(selected.id)?<Check/>:null}{done.includes(selected.id)?'Selesai':'Tandai selesai'}</button></div><small>{selected.topic}</small><h2>{selected.jp}</h2><button className="listen" onClick={()=>speak(selected.jp)}>▶ Dengarkan pelafalan</button><h3>{selected.title}</h3><div className="cando"><Target/><div><b>Can-do</b><p>{selected.canDo}</p></div></div><h4>Pola yang dipakai</h4><div className="pattern-list">{selected.grammar.map((g,i)=><div key={g}><span>{i+1}</span><b>{g}</b></div>)}</div><h4>Fokus kosakata</h4><div className="chips">{selected.words.map(w=><span key={w}>{w}</span>)}</div><a href="https://www.irodori.jpf.go.jp/en/starter/pdf.html" target="_blank" rel="noreferrer">Buka materi resmi Irodori <ExternalLink/></a></article>
    </div></section>
}

function Quiz(){
  const [level,setLevel]=useState(null)
  const pool=useMemo(()=>level?prepareQuestions(questionBanks[level]):[],[level])
  const [idx,setIdx]=useState(0),[picked,setPicked]=useState(null),[score,setScore]=useState(0),[finished,setFinished]=useState(false)
  const resetLevel=()=>{setLevel(null);setIdx(0);setPicked(null);setScore(0);setFinished(false)}
  if(!level)return <section className="page quiz-page"><div className="quiz-head"><div><span className="eyebrow">IRODORI A1 • BAB 5</span><h1>Pilih level latihan.</h1><p>Setiap level berisi 30 soal. Jawaban dan pembahasan ditampilkan setelah kamu memilih.</p></div><span className="score-badge">90 soal</span></div><div className="practice-grid">{Object.entries(levelMeta).map(([id,m])=><article className="practice-card quiz-card" key={id}><div><Brain/><span>{m.scope}</span></div><h3>{m.label}</h3><p>{m.note}</p><button onClick={()=>setLevel(id)}>Mulai 30 soal</button></article>)}</div></section>
  const q=pool[idx]
  const choose=(i)=>{if(picked!==null)return;setPicked(i);if(i===q.answer)setScore(s=>s+1)}
  const next=()=>{if(idx===pool.length-1)setFinished(true);else{setIdx(i=>i+1);setPicked(null)}}
  if(finished)return <Result score={score} total={pool.length} reset={resetLevel} label={`Hasil ${levelMeta[level].label}`}/>
  return <section className="page quiz-page"><div className="quiz-head"><div><span className="eyebrow">{levelMeta[level].scope.toUpperCase()}</span><h1>{levelMeta[level].label} • 30 soal</h1></div><span className="score-badge">{score} benar</span></div><div className="progress"><i style={{width:`${(idx+1)/pool.length*100}%`}}/></div><article className="question-card"><div className="question-meta"><span>{q.section}</span><b>{idx+1} / {pool.length}</b></div><h2>{q.q}</h2><div className="options">{q.options.map((o,i)=><button key={o} className={picked===null?'':i===q.answer?'correct':picked===i?'wrong':'muted'} onClick={()=>choose(i)}><span>{String.fromCharCode(65+i)}</span>{o}{picked!==null&&i===q.answer?<Check/>:null}</button>)}</div>{picked!==null&&<div className={picked===q.answer?'feedback good':'feedback bad'}><b>{picked===q.answer?'正解！ Tepat sekali.':'Belum tepat — mari pahami.'}</b><p>{q.why}</p></div>}<button className="primary next" disabled={picked===null} onClick={next}>{idx===pool.length-1?'Lihat hasil':'Soal berikutnya'} <ChevronRight/></button></article></section>
}

function Exam(){
  const [level,setLevel]=useState(null)
  const exam=useMemo(()=>level?prepareQuestions(questionBanks[level]):[],[level])
  const [started,setStarted]=useState(false),[idx,setIdx]=useState(0),[answers,setAnswers]=useState({}),[time,setTime]=useState(30*60),[done,setDone]=useState(false)
  useEffect(()=>{if(!started||done)return; if(time<=0){setDone(true);return} const id=setInterval(()=>setTime(t=>t-1),1000);return()=>clearInterval(id)},[started,done,time])
  const resetExam=()=>{setLevel(null);setStarted(false);setIdx(0);setAnswers({});setTime(30*60);setDone(false)}
  if(!level)return <section className="page exam-intro"><div className="exam-mark">試</div><span className="eyebrow">SIMULASI LATIHAN • 3 LEVEL</span><h1>Pilih tingkat simulasi.</h1><p>Setiap simulasi memuat 30 soal dan timer 30 menit. Ini latihan non-resmi.</p><div className="filter-row">{Object.entries(levelMeta).map(([id,m])=><button key={id} onClick={()=>setLevel(id)}>{m.label} • 30 soal</button>)}</div></section>
  if(!started)return <section className="page exam-intro"><div className="exam-mark">試</div><span className="eyebrow">{levelMeta[level].scope.toUpperCase()}</span><h1>{levelMeta[level].label}</h1><p>{levelMeta[level].note} Kerjakan {exam.length} soal dalam 30 menit tanpa pembahasan selama ujian.</p><div className="exam-facts"><div><Clock3/><b>30 menit</b><span>Timer otomatis</span></div><div><CircleHelp/><b>{exam.length} soal</b><span>Arti • bunpou • kanji</span></div><div><Trophy/><b>70%</b><span>Target latihan</span></div></div><button className="primary" onClick={()=>setStarted(true)}>Mulai simulasi <ChevronRight/></button></section>
  const score=Object.entries(answers).filter(([i,v])=>exam[i]?.answer===v).length
  if(done)return <Result score={score} total={exam.length} reset={resetExam} label={`Hasil simulasi ${levelMeta[level].label}`}/>
  const q=exam[idx],mm=String(Math.floor(time/60)).padStart(2,'0'),ss=String(time%60).padStart(2,'0')
  return <section className="page exam-page"><div className="exam-bar"><div><span className="eyebrow">SIMULASI {levelMeta[level].label.toUpperCase()}</span><b>{q.section}</b></div><span className={time<120?'timer urgent':'timer'}><Clock3/>{mm}:{ss}</span><button onClick={()=>setDone(true)}>Selesaikan</button></div><div className="exam-layout"><div className="number-grid">{exam.map((_,i)=><button key={i} className={`${i===idx?'now':''} ${answers[i]!==undefined?'answered':''}`} onClick={()=>setIdx(i)}>{i+1}</button>)}</div><article className="question-card"><div className="question-meta"><span>SOAL {idx+1}</span><b>{Object.keys(answers).length}/{exam.length} terjawab</b></div><h2>{q.q}</h2><div className="options">{q.options.map((o,i)=><button key={o} className={answers[idx]===i?'selected-option':''} onClick={()=>setAnswers({...answers,[idx]:i})}><span>{String.fromCharCode(65+i)}</span>{o}</button>)}</div><div className="exam-nav"><button disabled={idx===0} onClick={()=>setIdx(idx-1)}><ChevronLeft/> Sebelumnya</button><button className="primary" onClick={()=>idx===exam.length-1?setDone(true):setIdx(idx+1)}>{idx===exam.length-1?'Selesai':'Berikutnya'} <ChevronRight/></button></div></article></div></section>
}

function Result({score,total,reset,label}){const pct=Math.round(score/total*100);return <section className="page result"><div className="result-ring" style={{'--pct':`${pct*3.6}deg`}}><div><b>{pct}</b><span>/100</span></div></div><span className="eyebrow">{label.toUpperCase()}</span><h1>{pct>=80?'すばらしい！ Luar biasa.':pct>=60?'いいですね！ Teruskan.':'もう一度！ Coba lagi.'}</h1><p>Kamu menjawab <b>{score}</b> dari <b>{total}</b> soal dengan benar.</p><div className="result-note">{pct>=70?'Fondasi cukup baik. Lanjutkan materi yang belum selesai dan pertahankan latihan rutin.':'Tinjau kembali pola kalimat dan kosakata Irodori, lalu coba simulasi sekali lagi.'}</div><button className="primary" onClick={reset}><RotateCcw/> Ulangi latihan</button></section>}

export default App
