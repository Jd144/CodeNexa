/* ============================================================
   CODENEXA — content.js (COMPLETE, A to Z)
   L = 3 bhashayein (English, Hindi, Hinglish)
   S = teeno me same text (code/output ke liye)
   ============================================================ */

const L = (en, hi, hing) => ({ en, hi, hing });
const S = s => ({ en: s, hi: s, hing: s });

const SVG = {
  check: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.5 1.5 2.6h4c0-1.1.7-2 1.5-2.6A6 6 0 0 0 12 3z"/></svg>',
  code: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  term: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M6 9l3 3-3 3M11 15h6"/></svg>'
};

/* ---------------- UI STRINGS ---------------- */
const UI = {
  brand: L("CodeNexa","कोडनेक्सा","CodeNexa"),
  tagline: L("Learn AI/ML, R & CMD — 100% Free","AI/ML, R और CMD सीखो — 100% फ्री","AI/ML, R aur CMD seekho — 100% Free"),
  sub: L("Complete courses in Hindi, English & Hinglish. Step by step, from zero, with code, output and practice. Koi bhi seekh sakta hai.","हिंदी, English और Hinglish में पूरे कोर्स। Step-by-step, zero से, code, output और practice के साथ। कोई भी सीख सकता है।","Hindi, English aur Hinglish me poore courses. Step-by-step, zero se, code, output aur practice ke saath. Koi bhi seekh sakta hai."),
  nav_home: L("Home","होम","Home"),
  nav_ml: L("AI/ML","एआई/एमएल","AI/ML"),
  nav_r: L("R","आर","R"),
  nav_cmd: L("CMD","सीएमडी","CMD"),
  nav_faq: L("FAQ","सवाल-जवाब","Sawaal-Jawaab"),
  cta_start: L("Start Learning Free","फ्री सीखना शुरू करो","Free seekhna shuru karo"),
  cta_paths: L("See Courses","कोर्स देखो","Courses dekho"),
  sec_features: L("Why CodeNexa?","CodeNexa ही क्यों?","CodeNexa hi kyun?"),
  sec_features_sub: L("Designed for complete beginners. Sab aasaan bhasha me.","पूरी तरह शुरुआती लोगों के लिए। सब आसान भाषा में।","Bilkul beginners ke liye. Sab aasaan bhasha me."),
  sec_paths: L("Choose Your Course","अपना कोर्स चुनो","Apna course chuno"),
  sec_paths_sub: L("Three courses. All free. Start with any one.","तीन कोर्स। सब फ्री। किसी से भी शुरू करो।","Teen courses. Sab free. Kisi se bhi shuru karo."),
  sec_faq: L("Frequently Asked Questions","अक्सर पूछे जाने वाले सवाल","Aksar pooche jaane wale sawaal"),
  copy: L("Copy","कॉपी","Copy"),
  copied: L("Copied!","कॉपी हो गया!","Copy ho gaya!"),
  done: L("Mark as Completed","पूरा हो गया","Poora ho gaya"),
  done_y: L("✓ Completed","✓ पूरा हो गया","✓ Ho gaya"),
  prev: L("← Previous","← पिछला","← Pichhla"),
  next: L("Next →","अगला →","Agla →"),
  output: L("Output","आउटपुट","Output"),
  exercise: L("✏️ Practice","✏️ अभ्यास","✏️ Abhyaas"),
  your_progress: L("Your Progress","आपकी प्रगति","Aapki pragati"),
  lessons: L("lessons","लेसन्स","lessons"),
  min: L("min","मिनट","min"),
  free: L("Free","फ्री","Free"),
  stat_lessons: L("lessons total","कुल लेसन्स","Total lessons"),
  stat_langs: L("languages","भाषाएँ","Bhashayein"),
  stat_cost: L("always free","हमेशा फ्री","Hamesha free"),
  stat_courses: L("courses","कोर्स","courses"),
  home_hero_h1: L("Coding Seekho, Apni Bhasha Me","कोडिंग सीखो, अपनी भाषा में","Coding seekho, apni bhasha me"),
  footer_made: L("Made with ❤️ for free learners","फ्री सीखने वालों के लिए ❤️ से बनाया गया","Free seekhne walon ke liye ❤️ se banaya gaya")
};

/* ---------------- FEATURES ---------------- */
const FEATURES = [
  { ic:"bulb", t:L("Zero to Hero","शून्य से हीरो तक","Zero se hero tak"), d:L("No prior knowledge needed. Har cheez basics se.","कोई पहले से ज्ञान जरूरी नहीं। सब basics से।","Pehle se koi knowledge zaroori nahi. Sab basics se.") },
  { ic:"code", t:L("Code + Output","कोड + आउटपुट","Code + Output"), d:L("Har lesson me real code aur uska output — copy & run.","हर lesson में असली code और output — copy & run.","Har lesson me asli code aur output — copy & run.") },
  { ic:"term", t:L("3 Languages","3 भाषाएँ","3 Bhashayein"), d:L("English, Hindi aur Hinglish — jo samajh aaye wahi padho.","English, Hindi और Hinglish — जो समझ आए वही पढ़ो।","English, Hindi aur Hinglish — jo samajh aaye wahi padho.") },
  { ic:"check", t:L("100% Free","100% फ्री","100% Free"), d:L("Koi fee nahi, koi login nahi, koi limit nahi.","कोई fee नहीं, कोई login नहीं, कोई limit नहीं।","Koi fee nahi, koi login nahi, koi limit nahi.") }
];

/* ---------------- FAQ ---------------- */
const FAQ = [
  { q:L("Kya mujhe pehle se coding aani chahiye?","क्या मुझे पहले से coding आनी चाहिए?","Kya mujhe pehle se coding aani chahiye?"),
    a:L("Nahi! CodeNexa zero level se start hota hai. Har concept aasaan bhasha me samjhaya gaya hai.","नहीं! CodeNexa zero level से शुरू होता है। हर concept आसान भाषा में समझाया गया है।","Nahi! CodeNexa zero level se start hota hai. Har concept aasaan bhasha me samjhaya gaya hai.") },
  { q:L("Kya ye sach me free hai?","क्या यह सच में free है?","Kya ye sach me free hai?"),
    a:L("Yes, 100% free. Koi payment, koi login nahi chahiye.","हाँ, 100% free। कोई payment, कोई login नहीं चाहिए।","Yes, 100% free. Koi payment, koi login nahi chahiye.") },
  { q:L("Main kaunsa course pehle karun?","मैं कौनसा course पहले करूँ?","Main kaunsa course pehle karun?"),
    a:L("AI/ML seekhna hai to Python se shuru karo. R data analysis ke liye best hai. CMD pehle karo to computer samajh aayega.","AI/ML सीखना है तो Python से शुरू करो। R data analysis के लिए best है। CMD पहले करो तो computer समझ आएगा।","AI/ML seekhna hai to Python se shuru karo. R data analysis ke liye best hai. CMD pehle karo to computer samajh aayega.") },
  { q:L("Course complete hone par kya milega?","Course complete होने पर क्या मिलेगा?","Course complete hone par kya milega?"),
    a:L("Poori coding foundation — AI/ML, R aur command-line skills. Practical knowledge jo kaam aaye.","पूरी coding foundation — AI/ML, R और command-line skills। Practical knowledge जो काम आए।","Poori coding foundation — AI/ML, R aur command-line skills. Practical knowledge jo kaam aaye.") }
];

/* ============================================================
   COURSE 1: AI/ML with Python — 7 lessons (A to Z)
   ============================================================ */
const COURSES = [
{
  id: "ml", icon: "bulb",
  tag: L("AI/ML","एआई/एमएल","AI/ML"),
  title: L("Learn AI & ML with Python","Python से AI और ML सीखो","Python se AI aur ML seekho"),
  desc: L("Machine Learning from scratch. Koi maths degree nahi chahiye. Zero se real model tak.","Machine Learning scratch से। कोई maths degree नहीं चाहिए। Zero से real model तक।","Machine Learning scratch se. Koi maths degree nahi chahiye. Zero se real model tak."),
  color: "linear-gradient(90deg,#8b7bff,#00d4ff)",
  lessons: [
  {
    title: L("AI & ML kya hai?","AI और ML क्या है?","AI aur ML kya hai?"),
    mins: 8,
    theory: [
      L("AI (Artificial Intelligence) ka matlab machines ko insaan jaisi samajh dena — dekhna, bolna, decision lena. ML (Machine Learning) AI ka hissa hai jisme machine examples (data) se khud seekhti hai, hum rules nahi likhte.","AI (Artificial Intelligence) का मतलब machines को इंसान जैसी समझ देना — देखना, बोलना, decision लेना। ML (Machine Learning) AI का हिस्सा है जिसमें machine examples (data) से खुद सीखती है, हम rules नहीं लिखते।","AI (Artificial Intelligence) ka matlab machines ko insaan jaisi samajh dena — dekhna, bolna, decision lena. ML (Machine Learning) AI ka hissa hai jisme machine examples (data) se khud seekhti hai, hum rules nahi likhte."),
      L("Example: bacche ko aam pehchanana sikhana — aap use bahut saare aam dikhaate ho, woh khud seekh jata hai. ML bhi aisa hi hai: machine ko data do, woh khud pattern pakad leti hai.","Example: बच्चे को आम पहचानना सिखाना — आप उसे बहुत सारे आम दिखाते हो, वो खुद सीख जाता है। ML भी ऐसा ही है: machine को data दो, वो खुद pattern पकड़ लेती है।","Example: bacche ko aam pehchanana sikhana — aap use bahut saare aam dikhaate ho, woh khud seekh jata hai. ML bhi aisa hi hai: machine ko data do, woh khud pattern pakad leti hai.")
    ],
    code: { lang: "python", text: S('print("AI = Machine ki samajh")\nprint("ML = Machine khud seekhti hai")') },
    output: S("AI = Machine ki samajh\nML = Machine khud seekhti hai"),
    exercise: L("Apne aas-paas se 3 cheezein socho jo AI use karti hain (Google Maps, YouTube suggestions) — unhe likho.","अपने आस-पास से 3 चीज़ें सोचो जो AI use करती हैं (Google Maps, YouTube suggestions) — उन्हें लिखो।","Apne aas-paas se 3 cheezein socho jo AI use karti hain (Google Maps, YouTube suggestions) — unhe likho.")
  },
  {
    title: L("Python Setup & First Program","Python Setup और पहला Program","Python Setup aur pehla Program"),
    mins: 10,
    theory: [
      L("Python AI/ML ki sabse popular language hai. Do tarike: (1) python.org se install karo, ya (2) Google Colab use karo — browser me free, kuch install nahi karna padta. Shuruaat ke liye Colab best hai.","Python AI/ML की सबसे popular language है। दो तरीके: (1) python.org से install करो, या (2) Google Colab use करो — browser में free, कुछ install नहीं करना पड़ता। शुरुआत के लिए Colab best है।","Python AI/ML ki sabse popular language hai. Do tarike: (1) python.org se install karo, ya (2) Google Colab use karo — browser me free, kuch install nahi karna padta. Shuruaat ke liye Colab best hai."),
      L("print() screen par kuch bhi dikhata hai. Code likho, Run dabao, output dekho. Itna hi!","print() screen पर कुछ भी दिखाता है। Code लिखो, Run दबाओ, output देखो। इतना ही!","print() screen par kuch bhi dikhata hai. Code likho, Run dabao, output dekho. Itna hi!")
    ],
    code: { lang: "python", text: S('print("Hello CodeNexa")\nprint("Main Python seekh raha hoon")') },
    output: S("Hello CodeNexa\nMain Python seekh raha hoon"),
    exercise: L("print() ka use karke apna naam aur apne gaon ka naam print karo.","print() का use करके अपना नाम और अपने गाँव का नाम print करो।","print() ka use karke apna naam aur apne gaon ka naam print karo.")
  },
  {
    title: L("Variables & Data Types","Variables और Data Types","Variables aur Data Types"),
    mins: 10,
    theory: [
      L("Variable ek dabba hai jisme value rakhte ho: naam = 'JD'. Types: int (5), float (3.14), str ('Hello'), bool (True/False). type() batata hai variable kis type ka hai.","Variable एक डिब्बा है जिसमें value रखते हो: naam = 'JD'। Types: int (5), float (3.14), str ('Hello'), bool (True/False)। type() बताता है variable किस type का है।","Variable ek dabba hai jisme value rakhte ho: naam = 'JD'. Types: int (5), float (3.14), str ('Hello'), bool (True/False). type() batata hai variable kis type ka hai."),
      L("Yaad rakho: = ka matlab 'rakho', == ka matlab 'barabar hai'. Dono me fark hai.","याद रखो: = का मतलब 'रखो', == का मतलब 'बराबर है'। दोनों में फर्क है।","Yaad rakho: = ka matlab 'rakho', == ka matlab 'barabar hai'. Dono me fark hai.")
    ],
    code: { lang: "python", text: S('age = 16            # int\ntemperature = 36.5  # float\nname = "JD"         # str\nis_learning = True  # bool\n\nprint(name, age)\nprint(type(age))\nprint(type(name))') },
    output: S("JD 16\n<class 'int'>\n<class 'str'>"),
    exercise: L("4 variables banao: apni umar (int), height (float), naam (str), ek bool. Sab print karo.","4 variables बनाओ: अपनी उमर (int), height (float), नाम (str), एक bool। सब print करो।","4 variables banao: apni umar (int), height (float), naam (str), ek bool. Sab print karo.")
  },
  {
    title: L("Lists, Dictionary & If-Else","Lists, Dictionary और If-Else","Lists, Dictionary aur If-Else"),
    mins: 12,
    theory: [
      L("List = ek line me saari cheezein: phal = ['aam','seb']. Index 0 se shuru — phal[0] = 'aam'. Dictionary me har value ka naam: marks = {'math':90}. len() = kitni cheezein hain.","List = एक line में सारी चीज़ें: phal = ['aam','seb']। Index 0 से शुरू — phal[0] = 'aam'। Dictionary में हर value का नाम: marks = {'math':90}। len() = कितनी चीज़ें हैं।","List = ek line me saari cheezein: phal = ['aam','seb']. Index 0 se shuru — phal[0] = 'aam'. Dictionary me har value ka naam: marks = {'math':90}. len() = kitni cheezein hain."),
      L("if-else se program decision leta hai: agar umar 18+ hai to 'Vote kar sakte ho' warna 'Nahi'. if ke baad colon (:) aur andar wali line me 4 spaces ka indent.","if-else से program decision लेता है: अगर उमर 18+ है तो 'Vote कर सकते हो' वरना 'नहीं'। if के बाद colon (:) और अंदर वाली line में 4 spaces का indent।","if-else se program decision leta hai: agar umar 18+ hai to 'Vote kar sakte ho' warna 'Nahi'. if ke baad colon (:) aur andar wali line me 4 spaces ka indent.")
    ],
    code: { lang: "python", text: S('phal = ["aam", "seb", "kela"]\nmarks = {"math": 90, "science": 85}\nprint(phal[0], len(phal))\nprint(marks["math"])\n\nage = 16\nif age >= 18:\n    print("Vote kar sakte ho")\nelse:\n    print("Abhi chhote ho")') },
    output: S("aam 3\n90\nAbhi chhote ho"),
    exercise: L("Number check karne wala program likho: 0 se bada to 'Positive', chhota to 'Negative', warna 'Zero'.","Number check करने वाला program लिखो: 0 से बड़ा तो 'Positive', छोटा तो 'Negative', वरना 'Zero'।","Number check karne wala program likho: 0 se bada to 'Positive', chhota to 'Negative', warna 'Zero'.")
  },
  {
    title: L("Loops & Functions","Loops और Functions","Loops aur Functions"),
    mins: 12,
    theory: [
      L("Loop = kaam baar-baar bina dobara likhe. for i in range(1,6) = 1 se 5 tak. ML me 1000 rows ke data par ek hi kaam loop se hota hai.","Loop = काम बार-बार बिना दोबारा लिखे। for i in range(1,6) = 1 से 5 तक। ML में 1000 rows के data पर एक ही काम loop से होता है।","Loop = kaam baar-baar bina dobara likhe. for i in range(1,6) = 1 se 5 tak. ML me 1000 rows ke data par ek hi kaam loop se hota hai."),
      L("Function = code ka reusable block. def se banate hain: def add(a,b): return a+b. Function ko call karna padta hai: add(2,3).","Function = code का reusable block। def से बनाते हैं: def add(a,b): return a+b। Function को call करना पड़ता है: add(2,3)।","Function = code ka reusable block. def se banate hain: def add(a,b): return a+b. Function ko call karna padta hai: add(2,3).")
    ],
    code: { lang: "python", text: S('for i in range(1, 6):\n    print("Number:", i)\n\ndef add(a, b):\n    return a + b\n\ndef square(n):\n    return n * n\n\nprint(add(5, 3))\nprint(square(7))') },
    output: S("Number: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5\n8\n49"),
    exercise: L("for loop se 2 ka table print karo (2 se 20 tak). Aur square(9) call karke dekho.","for loop से 2 का table print करो (2 से 20 तक)। और square(9) call करके देखो।","for loop se 2 ka table print karo (2 se 20 tak). Aur square(9) call karke dekho.")
  },
  {
    title: L("Data & Libraries (NumPy, Pandas)","Data और Libraries (NumPy, Pandas)","Data aur Libraries (NumPy, Pandas)"),
    mins: 12,
    theory: [
      L("ML me data = table. Features = jo machine dekhti hai (input), Label = jo batani hai (output). Data hi AI ka fuel hai — jitna sahi data, utna accha model.","ML में data = table। Features = जो machine देखती है (input), Label = जो बतानी है (output)। Data ही AI का fuel है — जितना सही data, उतना अच्छा model।","ML me data = table. Features = jo machine dekhti hai (input), Label = jo batani hai (output). Data hi AI ka fuel hai — jitna sahi data, utna accha model."),
      L("NumPy numbers ka fast maths karta hai, Pandas se table (DataFrame) banta hai — jaise Excel, par code se. head() aur describe() se data samajhna shuru hota hai.","NumPy numbers का fast maths करता है, Pandas से table (DataFrame) बनता है — जैसे Excel, पर code से। head() और describe() से data समझना शुरू होता है।","NumPy numbers ka fast maths karta hai, Pandas se table (DataFrame) banta hai — jaise Excel, par code se. head() aur describe() se data samajhna shuru hota hai.")
    ],
    code: { lang: "python", text: S('import numpy as np\nimport pandas as pd\n\nmarks = np.array([85, 90, 78, 92])\nprint("Mean:", marks.mean(), "Max:", marks.max())\n\nstudents = pd.DataFrame({\n    "name": ["Amit", "Sara", "Rahul"],\n    "hours": [2, 6, 8],\n    "score": [45, 70, 85]\n})\nprint(students)\nprint(students.describe())') },
    output: S("Mean: 86.25 Max: 92\n   name  hours  score\n0  Amit      2     45\n1  Sara      6     70\n2  Rahul     8     85\n       hours      score\ncount   3.0   3.000000\nmean    5.33  66.666667\nmax     8.00  85.000000"),
    exercise: L("Apne 4 doston ka DataFrame banao (naam, study hours, marks) aur describe() chalao.","अपने 4 दोस्तों का DataFrame बनाओ (naam, study hours, marks) और describe() चलाओ।","Apne 4 doston ka DataFrame banao (naam, study hours, marks) aur describe() chalao.")
  },
  {
    title: L("Pehla ML Model (Scikit-learn)","पहला ML Model (Scikit-learn)","Pehla ML Model (Scikit-learn)"),
    mins: 15,
    theory: [
      L("Ab asli ML: data do → model ko fit (sikhao) karo → predict (batao). Scikit-learn (sklearn) me sab ready hai — bas import karke use karo.","अब असली ML: data दो → model को fit (सिखाओ) करो → predict (बताओ)। Scikit-learn (sklearn) में सब ready है — बस import करके use करो।","Ab asli ML: data do → model ko fit (sikhao) karo → predict (batao). Scikit-learn (sklearn) me sab ready hai — bas import karke use karo."),
      L("Steps: 1) data (X, y) banao, 2) train_test_split se kuch data sikhane ke liye aur kuch test ke liye, 3) model.fit(X_train, y_train), 4) accuracy check karo.","Steps: 1) data (X, y) बनाओ, 2) train_test_split से कुछ data सिखाने के लिए और कुछ test के लिए, 3) model.fit(X_train, y_train), 4) accuracy check करो।","Steps: 1) data (X, y) banao
$$
