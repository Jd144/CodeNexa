/* ============================================================
   CODENEXA — content.js  (FULL A-Z DATA)
   L = 3 languages (English, Hindi, Hinglish)
   S = same text in all 3 languages (code/output ke liye)
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
  brand: L("CodeNexa", "कोडनेक्सा", "CodeNexa"),
  tagline: L("Learn AI/ML, R & CMD — 100% Free", "AI/ML, R और CMD सीखो — 100% फ्री", "AI/ML, R aur CMD seekho — 100% Free"),
  sub: L("Complete courses in Hindi, English & Hinglish. Step by step, from zero, with code, output and practice. Koi bhi seekh sakta hai.", "हिंदी, English और Hinglish में पूरे कोर्स। Step-by-step, zero से, code, output और practice के साथ। कोई भी सीख सकता है।", "Hindi, English aur Hinglish me poore courses. Step-by-step, zero se, code, output aur practice ke saath. Koi bhi seekh sakta hai."),
  nav_home: L("Home", "होम", "Home"),
  nav_ml: L("AI/ML", "एआई/एमएल", "AI/ML"),
  nav_r: L("R", "आर", "R"),
  nav_cmd: L("CMD", "सीएमडी", "CMD"),
  nav_faq: L("FAQ", "सवाल-जवाब", "Sawaal-Jawaab"),
  cta_start: L("Start Learning Free", "फ्री सीखना शुरू करो", "Free seekhna shuru karo"),
  cta_paths: L("See Courses", "कोर्स देखो", "Courses dekho"),
  sec_features: L("Why CodeNexa?", "CodeNexa ही क्यों?", "CodeNexa hi kyun?"),
  sec_features_sub: L("Designed for complete beginners. Sab aasaan bhasha me.", "पूरी तरह शुरुआती लोगों के लिए। सब आसान भाषा में।", "Bilkul beginners ke liye. Sab aasaan bhasha me."),
  sec_paths: L("Choose Your Course", "अपना कोर्स चुनो", "Apna course chuno"),
  sec_paths_sub: L("Three courses, 44 lessons. All free. Start with any one.", "तीन कोर्स, 44 लेसन्स। सब फ्री। किसी से भी शुरू करो।", "Teen courses, 44 lessons. Sab free. Kisi se bhi shuru karo."),
  sec_faq: L("Frequently Asked Questions", "अक्सर पूछे जाने वाले सवाल", "Aksar pooche jaane wale sawaal"),
  copy: L("Copy", "कॉपी", "Copy"),
  copied: L("Copied!", "कॉपी हो गया!", "Copy ho gaya!"),
  done: L("Mark as Completed", "पूरा हो गया", "Poora ho gaya"),
  done_y: L("✓ Completed", "✓ पूरा हो गया", "✓ Ho gaya"),
  prev: L("← Previous", "← पिछला", "← Pichhla"),
  next: L("Next →", "अगला →", "Agla →"),
  output: L("Output", "आउटपुट", "Output"),
  exercise: L("✏️ Practice Time", "✏️ अभ्यास करो", "✏️ Abhyaas karo"),
  your_progress: L("Your Progress", "आपकी प्रगति", "Aapki pragati"),
  lessons: L("lessons", "लेसन्स", "lessons"),
  min: L("min", "मिनट", "min"),
  free: L("Free", "फ्री", "Free"),
  stat_lessons: L("lessons total", "कुल लेसन्स", "Total lessons"),
  stat_langs: L("languages", "भाषाएँ", "Bhashayein"),
  stat_cost: L("always free", "हमेशा फ्री", "Hamesha free"),
  stat_courses: L("courses", "कोर्स", "courses"),
  home_hero_h1: L("Coding Seekho, Apni Bhasha Me", "कोडिंग सीखो, अपनी भाषा में", "Coding seekho, apni bhasha me"),
  footer_made: L("Made with ❤️ for free learners", "फ्री सीखने वालों के लिए ❤️ से बनाया गया", "Free seekhne walon ke liye ❤️ se banaya gaya")
};

/* ---------------- FEATURES ---------------- */
const FEATURES = [
  { ic: "bulb", t: L("Zero to Hero", "शून्य से हीरो तक", "Zero se hero tak"), d: L("No prior knowledge needed. Har cheez basics se samjhi gayi hai.", "कोई पहले से ज्ञान जरूरी नहीं। सब basics से समझाया गया है।", "Pehle se koi knowledge zaroori nahi. Sab basics se samjhaya gaya hai.") },
  { ic: "code", t: L("Code + Output", "कोड + आउटपुट", "Code + Output"), d: L("Har lesson me real code aur uska output — copy karo aur run karo.", "हर lesson में असली code और उसका output — copy करो और run करो।", "Har lesson me asli code aur uska output — copy karo aur run karo.") },
  { ic: "term", t: L("3 Languages", "3 भाषाएँ", "3 Bhashayein"), d: L("English, Hindi aur Hinglish — jo samajh aaye wahi padho.", "English, Hindi और Hinglish — जो समझ आए वही पढ़ो।", "English, Hindi aur Hinglish — jo samajh aaye wahi padho.") },
  { ic: "check", t: L("100% Free", "100% फ्री", "100% Free"), d: L("Koi fee nahi, koi login nahi, koi limit nahi.", "कोई fee नहीं, कोई login नहीं, कोई limit नहीं।", "Koi fee nahi, koi login nahi, koi limit nahi.") }
];

/* ---------------- FAQ ---------------- */
const FAQ = [
  { q: L("Kya mujhe pehle se coding aani chahiye?", "क्या मुझे पहले से coding आनी चाहिए?", "Kya mujhe pehle se coding aani chahiye?"),
    a: L("Nahi! CodeNexa zero level se start hota hai. Har concept aasaan bhasha me samjhaya gaya hai.", "नहीं! CodeNexa zero level से शुरू होता है। हर concept आसान भाषा में समझाया गया है।", "Nahi! CodeNexa zero level se start hota hai. Har concept aasaan bhasha me samjhaya gaya hai.") },
  { q: L("Kya ye sach me free hai?", "क्या यह सच में free है?", "Kya ye sach me free hai?"),
    a: L("Yes, 100% free. Koi payment, koi login nahi chahiye.", "हाँ, 100% free। कोई payment, कोई login नहीं चाहिए।", "Yes, 100% free. Koi payment, koi login nahi chahiye.") },
  { q: L("Main kaunsa course pehle karun?", "मैं कौनसा course पहले करूँ?", "Main kaunsa course pehle karun?"),
    a: L("Agar AI/ML seekhna hai to Python se shuru karo. R data analysis ke liye best hai. CMD pehle karo to computer samajh aayega.", "अगर AI/ML सीखना है तो Python से शुरू करो। R data analysis के लिए best है। CMD पहले करो तो computer समझ आएगा।", "Agar AI/ML seekhna hai to Python se shuru karo. R data analysis ke liye best hai. CMD pehle karo to computer samajh aayega.") },
  { q: L("Course complete hone par kya milega?", "Course complete होने पर क्या मिलेगा?", "Course complete hone par kya milega?"),
    a: L("Poori coding foundation — AI/ML, R aur terminal ki command-line skills. Practical knowledge jo kaam aaye.", "पूरी coding foundation — AI/ML, R और terminal की command-line skills। Practical knowledge जो काम आए।", "Poori coding foundation — AI/ML, R aur terminal ki command-line skills. Practical knowledge jo kaam aaye.") }
];

/* ============================================================
   COURSE 1: AI/ML with Python — 16 lessons (A to Z)
   ============================================================ */
const COURSES = [
{
  id: "ml", icon: "bulb",
  tag: L("AI/ML", "एआई/एमएल", "AI/ML"),
  title: L("Learn AI & ML with Python", "Python से AI और ML सीखो", "Python se AI aur ML seekho"),
  desc: L("Machine Learning from scratch. Koi maths degree nahi chahiye. Zero se project tak.", "Machine Learning scratch से। कोई maths degree नहीं चाहिए। Zero से project तक।", "Machine Learning scratch se. Koi maths degree nahi chahiye. Zero se project tak."),
  color: "linear-gradient(90deg,#8b7bff,#00d4ff)",
  lessons: [
  {
    title: L("What is AI & Machine Learning?", "AI और Machine Learning क्या है?", "AI aur Machine Learning kya hai?"),
    mins: 8,
    theory: [
      L("AI (Artificial Intelligence) ka matlab hai machines ko insaan jaisi samajh dena. Jaise aap dekh sakte ho, bol sakte ho, decision le sakte ho — AI wahi kaam machine se karwata hai.", "AI (Artificial Intelligence) का मतलब है machines को इंसान जैसी समझ देना। जैसे आप देख सकते हो, बोल सकते हो, decision ले सकते हो — AI वही काम machine से करवाता है।", "AI (Artificial Intelligence) ka matlab hai machines ko insaan jaisi samajh dena. Jaise aap dekh sakte ho, bol sakte ho, decision le sakte ho — AI wahi kaam machine se karwata hai."),
      L("Machine Learning (ML) AI ka hissa hai. Yahan hum machine ko rules nahi likhte, balki bahut saare examples (data) dete hain. Machine un examples se khud pattern seekh leti hai.", "Machine Learning (ML) AI का हिस्सा है। यहाँ हम machine को rules नहीं लिखते, बल्कि बहुत सारे examples (data) देते हैं। Machine उन examples से खुद pattern सीख लेती है।", "Machine Learning (ML) AI ka hissa hai. Yahan hum machine ko rules nahi likhte, balki bahut saare examples (data) dete hain. Machine un examples se khud pattern seekh leti hai."),
      L("Example: Bacche ko aam pehchanana sikhana. Aap use bahut saare aam dikhate ho, woh khud seekh jata hai ki aam kaise dikhta hai. ML bilkul aisa hi hai — machine ko data dikhao, woh khud seekh jati hai.", "Example: बच्चे को आम पहचानना सिखाना। आप उसे बहुत सारे आम दिखाते हो, वो खुद सीख जाता है कि आम कैसा दिखता है। ML बिल्कुल ऐसा ही है — machine को data दिखाओ, वो खुद सीख जाती है।", "Example: Bacche ko aam pehchanana sikhana. Aap use bahut saare aam dikhate ho, woh khud seekh jata hai ki aam kaisa dikhta hai. ML bilkul aisa hi hai — machine ko data dikhao, woh khud seekh jati hai.")
    ],
    code: { lang: "python", text: S('print("AI = Machine ki samajh")\nprint("ML = Machine khud seekhti hai")') },
    output: S("AI = Machine ki samajh\nML = Machine khud seekhti hai"),
    exercise: L("Apne aas-paas se 3 cheezein socho jo AI use karti hain (jaise Google Maps, YouTube suggestions). Unhe likho.", "अपने आस-पास से 3 चीज़ें सोचो जो AI use करती हैं (जैसे Google Maps, YouTube suggestions)। उन्हें लिखो।", "Apne aas-paas se 3 cheezein socho jo AI use karti hain (jaise Google Maps, YouTube suggestions). Unhe likho.")
  },
  {
    title: L("Python Setup & First Program", "Python Setup और पहला Program", "Python Setup aur pehla Program"),
    mins: 10,
    theory: [
      L("Python ek aasaan programming language hai jise AI/ML ki duniya me sabse zyada use kiya jata hai. Isse padhna English jaise aasaan hai.", "Python एक आसान programming language है जिसे AI/ML की दुनिया में सबसे ज़्यादा use किया जाता है। इसे पढ़ना English जैसे आसान है।", "Python ek aasaan programming language hai jise AI/ML ki duniya me sabse zyada use kiya jata hai. Isse padhna English jaise aasaan hai."),
      L("Do tareeke: (1) python.org se Python install karo, ya (2) Google Colab use karo — ye browser me hi free me chal jata hai, kuch install nahi karna padta. Shuruaat ke liye Colab best hai.", "दो तरीके: (1) python.org से Python install करो, या (2) Google Colab use करो — ये browser में ही free में चल जाता है, कुछ install नहीं करना पड़ता। शुरुआत के लिए Colab best है।", "Do tareeke: (1) python.org se Python install karo, ya (2) Google Colab use karo — ye browser me hi free me chal jata hai, kuch install nahi karna padta. Shuruaat ke liye Colab best hai."),
      L("Python me print() function screen par kuch bhi dikhata hai. Code likhne ke baad Run dabao aur output dekho.", "Python में print() function screen पर कुछ भी दिखाता है। Code लिखने के बाद Run दबाओ और output देखो।", "Python me print() function screen par kuch bhi dikhata hai. Code likhne ke baad Run dabao aur output dekho.")
    ],
    code: { lang: "python", text: S('print("Hello CodeNexa")\nprint("Main Python seekh raha hoon")') },
    output: S("Hello CodeNexa\nMain Python seekh raha hoon"),
    exercise: L("print() ka use karke apna naam aur apne gaon ka naam print karo.", "print() का use करके अपना नाम और अपने गाँव का नाम print करो।", "print() ka use karke apna naam aur apne gaon ka naam print karo.")
  },
  {
    title: L("Variables & Data Types", "Variables और Data Types", "Variables aur Data Types"),
    mins: 10,
    theory: [
      L("Variable ek dabba hai jisme aap koi value rakhte ho. Jaise: naam = 'JD' matlab dabbe 'naam' me 'JD' rakha.", "Variable एक डिब्बा है जिसमें आप कोई value रखते हो। जैसे: naam = 'JD' मतलब डिब्बे 'naam' में 'JD' रखा।", "Variable ek dabba hai jisme aap koi value rakhte ho. Jaise: naam = 'JD' matlab dabbe 'naam' me 'JD' rakha."),
      L("Python me main data types: int (poora number jaise 5), float (decimal jaise 3.14), str (text jaise 'Hello'), bool (True ya False).", "Python में main data types: int (पूरा number जैसे 5), float (decimal जैसे 3.14), str (text जैसे 'Hello'), bool (True या False)।", "Python me main data types: int (poora number jaise 5), float (decimal jaise 3.14), str (text jaise 'Hello'), bool (True ya False)."),
      L("type() function batata hai ki variable kis type ka hai. = ka matlab 'rakho' hota hai, == ka matlab 'barabar hai' — dono me fark yaad rakho.", "type() function बताता है कि variable किस type का है। = का मतलब 'रखो' होता है, == का मतलब 'बराबर है' — दोनों में फर्क याद रखो।", "type() function batata hai ki variable kis type ka hai. = ka matlab 'rakho' hota hai, == ka matlab 'barabar hai' — dono me fark yaad rakho.")
    ],
    code: { lang: "python", text: S('age = 16          # int\ntemperature = 36.5 # float\nname = "JD"        # str\nis_learning = True # bool\n\nprint(name)\nprint(age)\nprint(type(age))\nprint(type(name))') },
    output: S("JD\n16\n<class 'int'>\n<class 'str'>"),
    exercise: L("4 alag-alag variables banao: apni umar (int), apna height (float), apna naam (str), aur ek bool variable. Sab print karo.", "4 अलग-अलग variables बनाओ: अपनी उमर (int), अपना height (float), अपना नाम (str), और एक bool variable। सब print करो।", "4 alag-alag variables banao: apni umar (int), apna height (float), apna naam (str), aur ek bool variable. Sab print karo.")
  },
  {
    title: L("Lists & Dictionaries", "Lists और Dictionaries", "Lists aur Dictionaries"),
    mins: 12,
    theory: [
      L("List ek line me bahut saari cheezein rakhne ka tarika hai. Jaise: phal = ['aam', 'seb', 'kela']. Index 0 se shuru hota hai — phal[0] = 'aam'.", "List एक line में बहुत सारी चीज़ें रखने का तरीका है। जैसे: phal = ['aam', 'seb', 'kela']। Index 0 से शुरू होता है — phal[0] = 'aam'।", "List ek line me bahut saari cheezein rakhne ka tarika hai. Jaise: phal = ['aam', 'seb', 'kela']. Index 0 se shuru hota hai — phal[0] = 'aam'."),
      L("Dictionary me har value ke saath ek naam (key) hota hai. Jaise: marks = {'math': 90, 'science': 85}. marks['math'] = 90. Ye bahut useful hai data ke liye.", "Dictionary में हर value के साथ एक नाम (key) होता है। जैसे: marks = {'math': 90, 'science': 85}। marks['math'] = 90। ये बहुत useful है data के लिए।", "Dictionary me har value ke saath ek naam (key) hota hai. Jaise: marks = {'math': 90, 'science': 85}. marks['math'] = 90. Ye bahut useful hai data ke liye."),
      L("len() batata hai kitni cheezein hain. List me append() se nayi cheez jodte hain. Ye dono ML me data handle karne ke liye zaroori hain.", "len() बताता है कितनी चीज़ें हैं। List में append() से नयी चीज़ जोड़ते हैं। ये दोनों ML में data handle करने के लिए ज़रूरी हैं।", "len() batata hai kitni cheezein hain. List me append() se nayi cheez jodte hain. Ye dono ML me data handle karne ke liye zaroori hain.")
    ],
    code: { lang: "python", text: S('phal = ["aam", "seb", "kela"]\nprint(phal[0])      # aam\nprint(len(phal))    # 3\n\nmarks = {"math": 90, "science": 85}\nprint(marks["math"])\n\nphal.append("angoor")\nprint(phal)') },
    output: S("aam\n3\n90\n['aam', 'seb', 'kela', 'angoor']"),
    exercise: L("Apne 3 favorite films ki list banao. Ek dictionary banao jisme tumhara naam, umar aur gaon ho. Dono print karo.", "अपने 3 favorite films की list बनाओ। एक dictionary बनाओ जिसमें तुम्हारा नाम, उमर और गाँव हो। दोनों print करो।", "Apne 3 favorite films ki list banao. Ek dictionary banao jisme tumhara naam, umar aur gaon ho. Dono print karo.")
  },
  {
    title: L("If-Else — Decision Lelo", "If-Else — Decision लो", "If-Else — Decision lo"),
    mins: 10,
    theory: [
      L("Program ko decision lena sikhane ke liye if-else use hota hai. Jaise: agar umar 18 se zyada hai to 'Vote kar sakte ho' warna 'Abhi nahi'.", "Program को decision लेना सिखाने के लिए if-else use होता है। जैसे: अगर उमर 18 से ज़्यादा है तो 'Vote कर सकते हो' वरना 'अभी नहीं'।", "Program ko decision lena sikhane ke liye if-else use hota hai. Jaise: agar umar 18 se zyada hai to 'Vote kar sakte ho' warna 'Abhi nahi'."),
      L("Comparison operators: > (bada), < (chhota), >= (bada ya barabar), == (barabar), != (barabar nahi). Ye condition banate hain.", "Comparison operators: > (बड़ा), < (छोटा), >= (बड़ा या बराबर), == (बराबर), != (बराबर नहीं)। ये condition बनाते हैं।", "Comparison operators: > (bada), < (chhota), >= (bada ya barabar), == (barabar), != (barabar nahi). Ye condition banate hain."),
      L("Yad rakho: if ke baad colon (:) lagta hai aur uske neeche wali line ke aage 4 spaces ka indent hota hai. Indent hi batata hai ki kaunsi line if ke andar hai.", "याद रखो: if के बाद colon (:) लगता है और उसके नीचे वाली line के आगे 4 spaces का indent होता है। Indent ही बताता है कि कौनसी line if के अंदर है।", "Yad rakho: if ke baad colon (:) lagta hai aur uske neeche wali line ke aage 4 spaces ka indent hota hai. Indent hi batata hai ki kaunsi line if ke andar hai.")
    ],
    code: { lang: "python", text: S('age = 16\n\nif age >= 18:\n    print("Aap vote kar sakte ho")\nelse:\n    print("Aap abhi chhote ho")\n\nmarks = 75\nif marks >= 90:\n    print("Grade A")\nelif marks >= 70:\n    print("Grade B")\nelse:\n    print("Grade C")') },
    output: S("Aap abhi chhote ho\nGrade B"),
    exercise: L("Ek program banao jo number check kare: agar 0 se bada hai to 'Positive', chhota hai to 'Negative', warna 'Zero' print kare.", "एक program बनाओ जो number check करे: अगर 0 से बड़ा है तो 'Positive', छोटा है तो 'Negative', वरना 'Zero' print करे।", "Ek program banao jo number check kare: agar 0 se bada hai to 'Positive', chhota hai to 'Negative', warna 'Zero' print kare.")
  },
  {
    title: L("Loops — Repeat Karna", "Loops — Repeat करना", "Loops — Repeat karna"),
    mins: 12,
    theory: [
      L("Loop ka matlab hai kaam ko baar-baar karna bina dobara likhe. for loop list ya range ke har item par chalta hai.", "Loop का मतलब है काम को बार-बार करना बिना दोबारा लिखे। for loop list या range के हर item पर चलता है।", "Loop ka matlab hai kaam ko baar-baar karna bina dobara likhe. for loop list ya range ke har item par chalta hai."),
      L("range(5) = 0,1,2,3,4 deta hai. range(1,6) = 1 se 5 tak. while loop tab tak chalta hai jab tak condition True hai.", "range(5) = 0,1,2,3,4 देता है। range(1,6) = 1 से 5 तक। while loop तब तक चलता है जब तक condition True है।", "range(5) = 0,1,2,3,4 deta hai. range(1,6) = 1 se 5 tak. while loop tab tak chalta hai jab tak condition True hai."),
      L("Loop hi machine ko 'kaam karne' ka sabse bada hathiyar hai. ML me 1000 rows ke data par ek hi kaam 1000 baar loop se hota hai.", "Loop ही machine को 'काम करने' का सबसे बड़ा हथियार है। ML में 1000 rows के data पर एक ही काम 1000 बार loop से होता है।", "Loop hi machine ko 'kaam karne' ka sabse bada hathiyar hai. ML me 1000 rows ke data par ek hi kaam 1000 baar loop se hota hai.")
    ],
    code: { lang: "python", text: S('# 1 se 5 tak print karo\nfor i in range(1, 6):\n    print("Number:", i)\n\n# list par loop\nphal = ["aam", "seb", "kela"]\nfor f in phal:\n    print("Phal:", f)\n\n# while loop\ncount = 1\nwhile count <= 3:\n    print("Count:", count)\n    count = count + 1') },
    output: S("Number: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5\nPhal: aam\nPhal: seb\nPhal: kela\nCount: 1\nCount: 2\nCount: 3"),
    exercise: L("for loop se 2 ka table print karo (2, 4, 6 ... 20). Socho: range me kya likhna hoga?", "for loop से 2 का table print करो (2, 4, 6 ... 20)। सोचो: range में क्या लिखना होगा?", "for loop se 2 ka table print karo (2, 4, 6 ... 20). Socho: range me kya likhna hoga?")
  },
  {
    title: L("Functions — Code ka Reusable Block", "Functions — Code का Reusable Block", "Functions — Code ka Reusable Block"),
    mins: 12,
    theory: [
      L("Function code ka ek block hai jise aap ek baar likho aur jitni baar chaaho use karo. def se function banate hain.", "Function code का एक block है जिसे आप एक बार लिखो और जितनी बार चाहो use करो। def से function बनाते हैं।", "Function code ka ek block hai jise aap ek baar likho aur jitni baar chaaho use karo. def se function banate hain."),
      L("Function me input (parameter) jata hai aur wo output (return) karta hai. Jaise: add(a, b) = a + b. Function ko 'call' karna padta hai.", "Function में input (parameter) जाता है और वो output (return) करता है। जैसे: add(a, b) = a + b। Function को 'call' करना पड़ता है।", "Function me input (parameter) jata hai aur wo output (return) karta hai. Jaise: add(a, b) = a + b. Function ko 'call' karna padta hai."),
      L("Scikit-learn (ML ka library) me bhi har model ek function jaisa hota hai: model.fit(data) — fit matlab 'sikhao', predict matlab 'batao'.", "Scikit-learn (ML का library) में भी हर model एक function जैसा होता है: model.fit(data) — fit मतलब 'सिखाओ', predict मतलब 'बताओ'।", "Scikit-learn (ML ka library) me bhi har model ek function jaisa hota hai: model.fit(data) — fit matlab 'sikhao', predict matlab 'batao'.")
    ],
    code: { lang: "python", text: S('def add(a, b):\n    return a + b\n\ndef greet(name):\n    return "Hello " + name\n\nprint(add(5, 3))\nprint(greet("JD"))\nprint(add(10, 20))') },
    output: S("8\nHello JD\n30"),
    exercise: L("Ek function banao 'square(n)' jo n ka square return kare. Phir square(5) aur square(7) print karo.", "एक function बनाओ 'square(n)' जो n का square return करे। फिर square(5) और square(7) print करो।", "Ek function banao 'square(n)' jo n ka square return kare. Phir square(5) aur square(7) print karo.")
  },
  {
    title: L("Data Kya Hai? Features & Labels", "Data क्या है? Features और Labels", "Data kya hai? Features aur Labels"),
    mins: 10,
    theory: [
      L("ML ki poori duniya data par khadi hai. Data = information. Jaise ek table jisme har row ek student hai aur columns uske baare me jaankari.", "ML की पूरी दुनिया data पर खड़ी है। Data = information। जैसे एक table जिसमें हर row एक student है और columns उसके बारे में जानकारी।", "ML ki poori duniya data par khadi hai. Data = information. Jaise ek table jisme har row ek student hai aur columns uske baare me jaankari."),
      L("Features = wo cheezein jo machine dekhti hai (input). Jaise student ke study hours aur previous score. Label = wo cheezein jo machine batani hai (output). Jaise pass ya fail.", "Features = वो चीज़ें जो machine देखती है (input)। जैसे student के study hours और previous score। Label = वो चीज़ें जो machine बतानी है (output)। जैसे pass या fail।", "Features = wo cheezein jo machine dekhti hai (input). Jaise student ke study hours aur previous score. Label = wo cheezein jo machine batani hai (output). Jaise pass ya fail."),
      L("Jitna sahi aur zyada data, utna accha model. Ghar banane se pehle aapko sahi maal chahiye — model banane se pehle sahi data chahiye. Isliye data ko 'fuel of AI' kehte hain.", "जितना सही और ज़्यादा data, उतना अच्छा model। घर बनाने से पहले आपको सही माल चाहिए — model बनाने से पहले सही data चाहिए। इसलिए data को 'fuel of AI' कहते हैं।", "Jitna sahi aur zyada data, utna accha model. Ghar banane se pehle aapko sahi maal chahiye — model banane se pehle sahi data chahiye. Isliye data ko 'fuel of AI' kehte hain.")
    ],
    code: { lang: "python", text: S('# Student data: [study_hours, previous_score] = features\nX = [[2, 40], [5, 60], [7, 80], [9, 90]]\n\n# Label: pass = 1, fail = 0\ny = [0, 1, 1, 1]\n\nprint("Features:", X)\nprint("Labels:", y)\nprint("Total students:", len(X))') },
    output: S("Features: [[2, 40], [5, 60], [7, 80], [9, 90]]\nLabels: [0, 1, 1, 1]\nTotal students: 4"),
    exercise: L("Apne 3 doston ka data banao: study hours aur pass/fail. Features X aur labels y banao — bilkul upar wale code jaisa.", "अपने 3 दोस्तों का data बनाओ: study hours और pass/fail। Features X और labels y बनाओ — बिल्कुल ऊपर वाले code जैसा।", "Apne 3 doston ka data banao: study hours aur pass/fail. Features X aur labels y banao — bilkul upar wale code jaisa.")
  },
  {
    title: L("NumPy — Numbers ka Power", "NumPy — Numbers की Power", "NumPy — Numbers ki Power"),
    mins: 12,
    theory: [
      L("NumPy Python ka library hai jo numbers ke sath fast maths karta hai. ML me saara data numbers me hota hai, isliye NumPy sabse zaroori library hai.", "NumPy Python का library है जो numbers के साथ fast maths करता है। ML में सारा data numbers में होता है, इसलिए NumPy सबसे ज़रूरी library है।", "NumPy Python ka library hai jo numbers ke sath fast maths karta hai. ML me saara data numbers me hota hai, isliye NumPy sabse zaroori library hai."),
      L("np.array() se number ka grid banta hai (jaise table). .mean() average, .max() sabse bada, .shape batata hai kitni rows aur columns hain.", "np.array() से number का grid बनता है (जैसे table)। .mean() average, .max() सबसे बड़ा, .shape बताता है कितनी rows और columns हैं।", "np.array() se number ka grid banta hai (jaise table). .mean() average, .max() sabse bada, .shape batata hai kitni rows aur columns hain."),
      L("Install karna ho to terminal me likho: pip install numpy. Colab me sab already installed hota hai.", "Install करना हो तो terminal में लिखो: pip install numpy। Colab में सब already installed होता है।", "Install karna ho to terminal me likho: pip install numpy. Colab me sab already installed hota hai.")
    ],
    code: { lang: "python", text: S('import numpy as np\n\nmarks = np.array([85, 90, 78, 92, 88])\nprint(marks)\nprint("Mean:", marks.mean())\nprint("Max:", marks.max())\nprint("Min:", marks.min())\nprint("Sum:", marks.sum())\nprint("Shape:", marks.shape)') },
    output: S("[85 90 78 92 88]\nMean: 86.6\nMax: 92\nMin: 78\nSum: 433\nShape: (5,)"),
    exercise: L("Apne 5 subjects ke marks ka NumPy array banao. Mean, max aur min print karo. Kis subject me sabse zyada marks hai?", "अपने 5 subjects के marks का NumPy array बनाओ। Mean, max और min print करो। किस subject में सबसे ज़्यादा marks है?", "Apne 5 subjects ke marks ka NumPy array banao. Mean, max aur min print karo. Kis subject me sabse zyada marks hai?")
  },
  {
    title: L("Pandas — Data ka Table (DataFrame)", "Pandas — Data का Table (DataFrame)", "Pandas — Data ka Table (DataFrame)"),
    mins: 12,
    theory: [
      L("Pandas se data table (DataFrame) banate aur handle karte hain. Ye Excel jaisa hai, lekin code se. ML me 90% kaam data ko saaf karne ka hota hai — Pandas wahi karta hai.", "Pandas से data table (DataFrame) बनाते और handle करते हैं। ये Excel जैसा है, लेकिन code से। ML में 90% काम data को साफ करने का होता है — Pandas वही करता है।", "Pandas se data table (DataFrame) banate aur handle karte hain. Ye Excel jaisa hai, lekin code se. ML me 90% kaam data ko saaf karne ka hota hai — Pandas wahi karta hai."),
      L("pd.DataFrame() se table banti hai. pd.read_csv('file.csv') se file se data aata hai — ye sabse common tarika hai kyunki data files me milta hai.", "pd.DataFrame() से table बनती है। pd.read_csv('file.csv') से file से data आता है — ये सबसे common तरीका है क्योंकि data files में मिलता है।", "pd.DataFrame() se table banti hai. pd.read_csv('file.csv') se file se data aata hai — ye sabse common tarika hai kyunki data files me milta hai."),
      L("head() pehli 5 rows, info() har column ki jaankari, describe() ka statistics (mean, min, max) — ye teeno data ko samajhne ke liye pehle hamesha use karo.", "head() पहली 5 rows, info() हर column की जानकारी, describe() का statistics (mean, min, max) — ये तीनों data को समझने के लिए पहले हमेशा use करो।", "head() pehli 5 rows, info() har column ki jaankari, describe() ka statistics (mean, min, max) — ye teeno data ko samajhne ke liye pehle hamesha use karo.")
    ],
    code: { lang: "python", text: S('import pandas as pd\n\nstudents = pd.DataFrame({\n    "name": ["Amit", "Sara", "Rahul", "Priya"],\n    "hours": [2, 6, 8, 5],\n    "score": [45, 70, 85, 60]\n})\n\nprint(students)\nprint("----")\nprint(students.head())\nprint("----")\nprint(students.describe())') },
    output: S("    name  hours  score\n0   Amit      2     45\n1   Sara      6     70\n2  Rahul      8     85\n3  Priya      5     60\n----\n    name  hours  score\n0   Amit      2     45\n1   Sara      6     70\n2  Rahul      8     85\n3  Priya      5     60\n----\n          hours      score\ncount  4.000000   4.000000\nmean   5.250000  65.000000\nstd    2.500000  16.583124\nmin    2.000000  45.000000\nmax    8.000000  85.000000"),
    exercise: L("Apne 4 doston ka DataFrame banao: naam, study hours, aur marks. Phir describe() chalao aur dekho mean kya hai.", "अपने 4 दोस्तों का DataFrame बनाओ: naam, study hours, और marks। फिर describe() चलाओ और देखो mean क्या है।", "Apne 4 doston ka DataFrame banao: naam, study hours, aur marks. Phir describe() chalao aur dekho mean kya hai.")
  },
  {
    title: L("Data Cleaning — Data Saaf Karna", "Data Cleaning — Data साफ करना", "Data Cleaning — Data saaf karna"),
    mins: 12,
    theory: [
      L("Asli duniya ka data kabhi perfect nahi hota. Kuch values missing hoti hain, kuch galat. Data cleaning = us data ko model ke layak banana.", "असली दुनिया का data कभी perfect नहीं होता। कुछ values missing होती हैं, कुछ गलत। Data cleaning = उस data को model के लायक बनाना।", "Asli duniya ka data kabhi perfect nahi hota. Kuch values missing hoti hain, kuch galat. Data cleaning = us data ko model ke layak banana."),
      L("isnull() batata hai kahan value missing hai. dropna() wali row hata deta hai. fillna(0) missing value ki jagah 0 bhar deta hai. Ye teeno sabse common hain.", "isnull() बताता है कहाँ value missing है। dropna() वाली row हटा देता है। fillna(0) missing value की जगह 0 भर देता है। ये तीनों सबसे common हैं।", "isnull() batata hai kahan value missing hai. dropna() wali row hata deta hai. fillna(0) missing value ki jagah 0 bhar deta hai. Ye teeno sabse common hain."),
      L("Rule yaad rakho: garbage in, garbage out. Agar data galat hai to model bhi galat hoga. Isliye professional data scientist apna aadha time data cleaning me lagate hain.", "Rule याद रखो: garbage in, garbage out। अगर data गलत है तो model भी गलत होगा। इसलिए professional data scientist अपना आधा time data cleaning में लगाते हैं।", "Rule yaad rakho: garbage in, garbage out. Agar data galat hai to model bhi galat hoga. Isliye professional data scientist apna aadha time data cleaning me lagate hain.")
    ],
    code: { lang: "python", text: S('import pandas as pd\n\ndata = pd.DataFrame({\n    "name": ["Amit", "Sara", None, "Priya"],\n    "marks": [45, None, 85, 60]\n})\n\nprint("Missing values:")\nprint(data.isnull())\nprint("----")\n\n# missing wali rows hatao\ndata_clean = data.dropna()\nprint(data_clean)\nprint("----")\n\n# missing ko 0 se bharo\ndata_fill = data.fillna(0)\nprint(data_fill)') },
    output: S("Missing values:\n    name  marks\n0  False  False\n1  False   True\n2   True  False\n3  False  False\n----\n   name  marks\n0  Amit   45.0\n3  Priya  60.0\n----\n   name  marks\n0  Amit   45.0\n1  Sara    0.0\n2  None   85.0\n3  Priya  60.0"),
    exercise: L("Ek DataFrame banao jisme 5 students hain aur 2 ki marks missing ho. dropna() aur fillna(0) dono try karo aur fark dekho.", "एक DataFrame बनाओ जिसमें 5 students हैं और 2 की marks missing हो। dropna() और fillna(0) दोनों try करो और फर्क देखो।", "Ek DataFrame banao jisme 5 students hain aur 2 ki marks missing ho. dropna() aur fillna(0) dono try karo aur fark dekho.")
  },
  {
    title: L("Matplotlib — Data ka Chitra (Graph)", "Matplotlib — Data का चित्र (Graph)", "Matplotlib — Data ka Chitra (Graph)"),
    mins: 12,
    theory: [
      L("Data ko numbers me dekhne se samajh kam aati hai, graph me dekhne se zyada aati hai. Matplotlib se line, bar aur pie charts banate hain.", "Data को numbers में देखने से समझ कम आती है, graph में देखने से ज़्यादा आती है। Matplotlib से line, bar और pie charts बनाते हैं।", "Data ko numbers me dekhne se samajh kam aati hai, graph me dekhne se zyada aati hai. Matplotlib se line, bar aur pie charts banate hain."),
      L("plt.plot(x, y) line chart, plt.bar() bar chart, plt.pie() pie chart banata hai. plt.show() se graph dikhta hai. plt.title() se heading lagti hai.", "plt.plot(x, y) line chart, plt.bar() bar chart, plt.pie() pie chart बनाता है। plt.show() से graph दिखता है। plt.title() से heading लगती है।", "plt.plot(x, y) line chart, plt.bar() bar chart, plt.pie() pie chart banata hai. plt.show() se graph dikhta hai. plt.title() se heading lagti hai."),
      L("Graph dekh kar hi samajh aata hai ki data me pattern hai ya nahi — jaise marks badh rahe hain ya ghat rahe hain. Ye ML se pehle ka important step hai.", "Graph देख कर ही समझ आता है कि data में pattern है या नहीं — जैसे marks बढ़ रहे हैं या घट रहे हैं। ये ML से पहले का important step है।", "Graph dekh kar hi samajh aata hai ki data me pattern hai
