/* ============================================================
   CODENEXA — content.js
   Har cheez L(English, Hindi, Hinglish) me
   ============================================================ */

const L = (en, hi, hing) => ({ en, hi, hing });

const SVG = {
  check: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.5 1.5 2.6h4c0-1.1.7-2 1.5-2.6A6 6 0 0 0 12 3z"/></svg>',
  code: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  term: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M6 9l3 3-3 3M11 15h6"/></svg>'
};

/* ---------------- UI STRINGS ---------------- */
const UI = {
  brand: L('CodeNexa', 'कोडनेक्सा', 'CodeNexa'),
  tagline: L('Learn AI/ML, R & CMD — 100% Free', 'AI/ML, R और CMD सीखो — 100% फ्री', 'AI/ML, R aur CMD seekho — 100% Free'),
  sub: L('Courses in Hindi, English & Hinglish. Step by step, from zero, with code, output and practice.', 'हिंदी, English और Hinglish में कोर्स। Step-by-step, zero से, code, output और practice के साथ।', 'Hindi, English aur Hinglish me courses. Step-by-step, zero se, code, output aur practice ke saath.'),
  nav_home: L('Home', 'होम', 'Home'),
  nav_ml: L('AI/ML', 'एआई/एमएल', 'AI/ML'),
  nav_r: L('R', 'आर', 'R'),
  nav_cmd: L('CMD', 'सीएमडी', 'CMD'),
  nav_faq: L('FAQ', 'सवाल-जवाब', 'Sawaal-Jawaab'),
  cta_start: L('Start Learning Free', 'फ्री सीखना शुरू करो', 'Free seekhna shuru karo'),
  cta_paths: L('See Courses', 'कोर्स देखो', 'Courses dekho'),
  sec_features: L('Why CodeNexa?', 'CodeNexa ही क्यों?', 'CodeNexa hi kyun?'),
  sec_features_sub: L('Designed for complete beginners. Sab samjha jata hai.', 'पूरी तरह शुरुआती लोगों के लिए। सब समझाया जाता है।', 'Bilkul beginners ke liye. Sab samjhaya jata hai.'),
  sec_paths: L('Choose Your Course', 'अपना कोर्स चुनो', 'Apna course chuno'),
  sec_paths_sub: L('Three courses. All free. Start with any one.', 'तीन कोर्स। सब फ्री। किसी से भी शुरू करो।', 'Teen courses. Sab free. Kisi se bhi shuru karo.'),
  sec_faq: L('Frequently Asked Questions', 'अक्सर पूछे जाने वाले सवाल', 'Aksar pooche jaane wale sawaal'),
  copy: L('Copy', 'कॉपी', 'Copy'),
  copied: L('Copied!', 'कॉपी हो गया!', 'Copy ho gaya!'),
  done: L('Mark as Completed', 'पूरा हो गया', 'Poora ho gaya'),
  done_y: L('✓ Completed', '✓ पूरा हो गया', '✓ Ho gaya'),
  prev: L('← Previous', '← पिछला', '← Pichhla'),
  next: L('Next →', 'अगला →', 'Agla →'),
  output: L('Output', 'आउटपुट', 'Output'),
  exercise: L('✏️ Practice Time', '✏️ अभ्यास करो', '✏️ Abhyaas karo'),
  your_progress: L('Your Progress', 'आपकी प्रगति', 'Aapki pragati'),
  lessons: L('lessons', 'लेसन्स', 'lessons'),
  min: L('min', 'मिनट', 'min'),
  free: L('Free', 'फ्री', 'Free'),
  stat_lessons: L('lessons total', 'कुल लेसन्स', 'Total lessons'),
  stat_langs: L('languages', 'भाषाएँ', 'Bhashayein'),
  stat_cost: L('always free', 'हमेशा फ्री', 'Hamesha free'),
  stat_courses: L('courses', 'कोर्स', 'courses'),
  home_hero_h1: L('Coding Seekho, Apni Bhasha Me', 'कोडिंग सीखो, अपनी भाषा में', 'Coding seekho, apni bhasha me'),
  grad_word: L('Apni Bhasha Me', 'अपनी भाषा में', 'Apni bhasha me'),
  footer_made: L('Made with ❤️ for free learners', 'फ्री सीखने वालों के लिए ❤️ से बनाया गया', 'Free seekhne walon ke liye ❤️ se banaya gaya')
};

/* ---------------- FEATURES ---------------- */
const FEATURES = [
  { ic: 'bulb', t: L('Zero to Hero', 'शून्य से हीरो तक', 'Zero se hero tak'), d: L('No prior knowledge needed. Har cheez basics se.', 'कोई पहले से ज्ञान जरूरी नहीं। सब basics से।', 'Pehle se koi knowledge zaroori nahi. Sab basics se.') },
  { ic: 'code', t: L('Code + Output', 'कोड + आउटपुट', 'Code + Output'), d: L('Har lesson me real code aur uski output — copy & run karo.', 'हर lesson में असली code और उसका output — copy & run करो।', 'Har lesson me asli code aur uska output — copy & run karo.') },
  { ic: 'term', t: L('3 Languages', '3 भाषाएँ', '3 Bhashayein'), d: L('English, Hindi aur Hinglish — jo samajh aaye wahi padho.', 'English, Hindi और Hinglish — जो समझ आए वही पढ़ो।', 'English, Hindi aur Hinglish — jo samajh aaye wahi padho.') },
  { ic: 'check', t: L('100% Free', '100% फ्री', '100% Free'), d: L('Koi fee nahi, koi login nahi, koi limit nahi.', 'कोई fee नहीं, कोई login नहीं, कोई limit नहीं।', 'Koi fee nahi, koi login nahi, koi limit nahi.') }
];

/* ---------------- FAQ ---------------- */
const FAQ = [
  { q: L('Kya mujhe pehle se coding aani chahiye?', 'क्या मुझे पहले से coding आनी चाहिए?', 'Kya mujhe pehle se coding aani chahiye?'),
    a: L('Nahi! CodeNexa zero level se start hota hai. Har concept aasaan bhasha me samjhaya gaya hai.', 'नहीं! CodeNexa zero level से शुरू होता है। हर concept आसान भाषा में समझाया गया है।', 'Nahi! CodeNexa zero level se start hota hai. Har concept aasaan bhasha me samjhaya gaya hai.') },
  { q: L('Kya ye sach me free hai?', 'क्या यह सच में free है?', 'Kya ye sach me free hai?'),
    a: L('Yes, 100% free. Koi payment, koi login nahi chahiye.', 'हाँ, 100% free। कोई payment, कोई login नहीं चाहिए।', 'Yes, 100% free. Koi payment, koi login nahi chahiye.') },
  { q: L('Main kaunsa course pehle karun?', 'मैं कौनसा course पहले करूँ?', 'Main kaunsa course pehle karun?'),
    a: L('Agar AI/ML seekhna hai to Python se shuru karo. R data analysis ke liye best hai. CMD pehle karo to computer samajh aayega.', 'अगर AI/ML सीखना है तो Python से शुरू करो। R data analysis के लिए best है। CMD पहले करो तो computer समझ आएगा।', 'Agar AI/ML seekhna hai to Python se shuru karo. R data analysis ke liye best hai. CMD pehle karo to computer samajh aayega.') },
  { q: L('Course complete hone par kya milega?', 'Course complete होने पर क्या मिलेगा?', 'Course complete hone par kya milega?'),
    a: L('Poori coding foundation — AI/ML, R aur terminal ki command-line skills. Practical knowledge jo kaam aaye.', 'पूरी coding foundation — AI/ML, R और terminal की command-line skills। Practical knowledge जो काम आए।', 'Poori coding foundation — AI/ML, R aur terminal ki command-line skills. Practical knowledge jo kaam aaye.') }
];

/* ---------------- COURSES (3 bhashayein, 6 lessons each) ---------------- */
const COURSES = [
/* ========== COURSE 1: AI/ML (Python) ========== */
{
  id: 'ml', icon: 'bulb',
  tag: L('AI/ML', 'एआई/एमएल', 'AI/ML'),
  title: L('Learn AI & ML with Python', 'Python से AI और ML सीखो', 'Python se AI aur ML seekho'),
  desc: L('Machine Learning from scratch — koi maths degree nahi chahiye.', 'Machine Learning scratch से — कोई maths degree नहीं चाहिए।', 'Machine Learning scratch se — koi maths degree nahi chahiye.'),
  color: 'linear-gradient(90deg,#8b7bff,#00d4ff)',
  lessons: [
  {
    title: L('What is AI & Machine Learning?', 'AI और Machine Learning क्या है?', 'AI aur Machine Learning kya hai?'),
    mins: 8,
    theory: [
      L('AI (Artificial Intelligence) = machines ko insaan jaisi soch dena. Machine Learning (ML) = AI
