// CodeNexa Complete Course Data (A to Z Syllabus)
const courseData = [
    // -------------------------------------------------------------
    // MODULE 0: TERMINAL & CMD BASICS
    // -------------------------------------------------------------
    {
        id: 0,
        category: "Module 0: Computer Basics",
        title: {
            hinglish: "1. Terminal / CMD Kya Hai aur Kyun Seekhein?",
            hindi: "1. टर्मिनल / CMD क्या है और क्यों सीखें?",
            english: "1. What is Terminal / CMD & Why Learn It?"
        },
        content: {
            hinglish: `<p>Terminal (CMD) computer ko text-commands se chalane ka rasta hai. Mouse se click karne ke bajaye hum commands likhte hain.</p>
                       <p><strong>AI & ML mein zaroorat:</strong> Big datasets aur R/Python scripts ko terminal se hi fast execute kiya jata hai.</p>`,
            hindi: `<p>टर्मिनल (CMD) कंप्यूटर को टेक्स्ट-कमांड्स से चलाने का माध्यम है।</p>
                    <p><strong>AI में उपयोग:</strong> बड़े डेटासेट और AI मॉडल्स को टर्मिनल से ही तेज़ी से चलाया जाता है।</p>`,
            english: `<p>The Terminal (CMD) is a command-line interface to execute system operations by typing text instructions.</p>`
        },
        code: "mkdir CodeNexa_AI\ncd CodeNexa_AI\ndir",
        output: "> Directory 'CodeNexa_AI' created successfully.\n> Switched to CodeNexa_AI directory.",
        quiz: {
            q: "Terminal / CMD ka primary use kya hai?",
            options: [
                { text: "Text Commands se computer ko fast instructions dena", correct: true },
                { text: "Video streaming karne ke liye", correct: false },
                { text: "Photos edit karne ke liye", correct: false }
            ]
        }
    },
    {
        id: 1,
        category: "Module 0: Computer Basics",
        title: {
            hinglish: "2. Basic CMD Commands (cd, mkdir, ls)",
            hindi: "2. बुनियादी CMD कमांड्स (cd, mkdir, ls)",
            english: "2. Essential CMD Commands (cd, mkdir, ls)"
        },
        content: {
            hinglish: `<p>Aayein sabse zaroori 3 commands seekhein:</p>
                       <ul>
                         <li><code>mkdir</code> = Naya Folder (Directory) banana.</li>
                         <li><code>cd</code> = Folder ke andar jaana ya bahar aana.</li>
                         <li><code>ls</code> ya <code>dir</code> = Folder ke andar ki saari files dekhna.</li>
                       </ul>`,
            hindi: `<p>3 सबसे महत्वपूर्ण कमांड्स:</p>
                    <ul>
                      <li><code>mkdir</code> = नया फोल्डर बनाना।</li>
                      <li><code>cd</code> = फोल्डर के अंदर जाना।</li>
                      <li><code>dir</code> = फोल्डर की फाइलें देखना।</li>
                    </ul>`,
            english: `<p>Top 3 Terminal Commands:</p>
                      <ul>
                        <li><code>mkdir</code>: Create directory</li>
                        <li><code>cd</code>: Change directory</li>
                        <li><code>ls / dir</code>: List files in directory</li>
                      </ul>`
        },
        code: "mkdir Project1\ncd Project1\ncd ..",
        output: "> Folder Project1 created.\n> Switched inside Project1.\n> Moved back to main directory.",
        quiz: {
            q: "Naya folder banane ke liye konsi command use hoti hai?",
            options: [
                { text: "mkdir", correct: true },
                { text: "cd", correct: false },
                { text: "delete", correct: false }
            ]
        }
    },

    // -------------------------------------------------------------
    // MODULE 1: R LANGUAGE CORE
    // -------------------------------------------------------------
    {
        id: 2,
        category: "Module 1: R Language Core",
        title: {
            hinglish: "3. R Language Intro & Variables",
            hindi: "3. R भाषा का परिचय और वेरिएबल",
            english: "3. R Programming Intro & Variables"
        },
        content: {
            hinglish: `<p>R Language ko <strong>Data Science, Statistics, aur Bioinformatics</strong> ke liye banaya gaya hai.</p>
                       <p>R mein variable banana bohot aasan hai. Hum <code><-</code> (Arrow) ka use karte hain.</p>`,
            hindi: `<p>R भाषा को विशेष रूप से **डेटा साइंस और सांख्यिकी** के लिए डिज़ाइन किया गया है।</p>`,
            english: `<p>R is an open-source programming language designed for statistical computing and data analysis.</p>`
        },
        code: '# R Code\nstudent_name <- "Rahul"\nage <- 21\nprint(student_name)',
        output: '[1] "Rahul"',
        quiz: {
            q: "R mein value assign karne ke liye kya use hota hai?",
            options: [
                { text: "<- (Arrow operator)", correct: true },
                { text: "== (Double equals)", correct: false },
                { text: "->> (Triple arrow)", correct: false }
            ]
        }
    },
    {
        id: 3,
        category: "Module 1: R Language Core",
        title: {
            hinglish: "4. R Vectors & Data Frames",
            hindi: "4. R वेक्टर्स और डेटा फ्रेम्स",
            english: "4. R Vectors & Data Frames"
        },
        content: {
            hinglish: `<p>R mein multiple values ko ek saath save karne ke liye <strong>Vector</strong> <code>c(...)</code> aur table jaisa data save karne ke liye <strong>Data Frame</strong> ka use hota hai.</p>`,
            hindi: `<p>R में एक से अधिक मानों को सहेजने के लिए **Vector** और टेबल डेटा के लिए **Data Frame** का उपयोग होता है।</p>`,
            english: `<p>Vectors store elements of the same type, while Data Frames represent tabular datasets in R.</p>`
        },
        code: 'genes <- c("GeneA", "GeneB", "GeneC")\nexpression <- c(12.5, 45.2, 8.9)\ndata <- data.frame(genes, expression)\nprint(data)',
        output: "  genes expression\n1 GeneA       12.5\n2 GeneB       45.2\n3 GeneC        8.9",
        quiz: {
            q: "R mein multiple values ko vector banane ke liye kya likhte hain?",
            options: [
                { text: "c(val1, val2)", correct: true },
                { text: "vector[]", correct: false },
                { text: "list()", correct: false }
            ]
        }
    },

    // -------------------------------------------------------------
    // MODULE 2: STATISTICS FOR AI
    // -------------------------------------------------------------
    {
        id: 4,
        category: "Module 2: Maths for AI",
        title: {
            hinglish: "5. Mean, Median & Variance (Stats Basics)",
            hindi: "5. माध्य, मध्यिका और विचरण (स्टैट्स)",
            english: "5. Mean, Median & Standard Deviation"
        },
        content: {
            hinglish: `<p>AI/ML ka base mathematics hai. Datasets ko samajhne ke liye 3 main cheezein hain:</p>
                       <ul>
                         <li><strong>Mean:</strong> Sabhi values ka average.</li>
                         <li><strong>Median:</strong> Middle value.</li>
                         <li><strong>SD (Standard Deviation):</strong> Data kitna faela hua hai.</li>
                       </ul>`,
            hindi: `<p>AI/ML का आधार सांख्यिकी है। औसतन मान समझने के लिए **Mean, Median, aur SD** का उपयोग होता है।</p>`,
            english: `<p>Understanding central tendency and spread is critical before feeding data to ML algorithms.</p>`
        },
        code: 'scores <- c(80, 85, 90, 95, 100)\nprint(mean(scores))\nprint(sd(scores))',
        output: "[1] 90\n[1] 7.905694",
        quiz: {
            q: "R mein Average nikalne ke liye konsa function hai?",
            options: [
                { text: "mean()", correct: true },
                { text: "avg()", correct: false },
                { text: "sum()", correct: false }
            ]
        }
    },

    // -------------------------------------------------------------
    // MODULE 3: MACHINE LEARNING
    // -------------------------------------------------------------
    {
        id: 5,
        category: "Module 3: Machine Learning",
        title: {
            hinglish: "6. Linear Regression Model (Prediction AI)",
            hindi: "6. लीनियर रिग्रेशन मॉडल (भविष्यवाणी AI)",
            english: "6. Linear Regression in R"
        },
        content: {
            hinglish: `<p><strong>Linear Regression</strong> ek aisa AI algorithm hai jo purane data ko dekh kar aage ki <strong>Continuous Numerical Value</strong> predict karta hai (e.g. House Price, Patient Health Risk).</p>`,
            hindi: `<p>**Linear Regression** एक ऐसा एल्गोरिदम है जो पिछले डेटा के आधार पर भविष्य के नंबर की भविष्यवाणी करता है।</p>`,
            english: `<p>Linear Regression models the linear relationship between a dependent variable and independent predictors.</p>`
        },
        code: '# Linear Regression Model\nexperience <- c(1, 2, 3, 4, 5)\nsalary <- c(30, 40, 50, 65, 80)\nmodel <- lm(salary ~ experience)\nprint(summary(model))',
        output: "Coefficients:\n(Intercept)  experience  \n     16.50       12.50  \n> Model trained successfully!",
        quiz: {
            q: "R mein Linear Regression Model banane ke liye konsa function use hota hai?",
            options: [
                { text: "lm()", correct: true },
                { text: "predict()", correct: false },
                { text: "reg()", correct: false }
            ]
        }
    }
];
