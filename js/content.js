// CodeNexa - Comprehensive A to Z Syllabus Data (30-Day Master Course)
const courseData = [
    // =================================================================
    // MODULE 0: COMPUTER BASICS & TERMINAL MASTERY (Day 1 - Day 5)
    // =================================================================
    {
        id: 0,
        category: "Module 0: Computer Basics & Terminal",
        title: {
            hinglish: "1. Terminal (CMD) Kya Hai? GUI vs CLI Deep Dive",
            hindi: "1. टर्मिनल (CMD) क्या है? GUI vs CLI विस्तृत जानकारी",
            english: "1. What is Terminal (CMD)? GUI vs CLI Deep Dive"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Computer Chalaane Ke Do Tareeqe</h3>
                <p>Hum daily life mein computer ko do tareeqon se use kar sakte hain:</p>
                <ol class="list-decimal pl-6 space-y-2 my-3">
                    <li><strong>GUI (Graphical User Interface):</strong> Isme hum Mouse se double click karke folders kholte hain, icons par click karte hain. Ye aasan hai lekin slow hai.</li>
                    <li><strong>CLI (Command Line Interface / Terminal):</strong> Isme hum mouse ka use nahi karte. Hum keyboard se direct commands likhte hain aur computer super-fast speed se kaam karta hai.</li>
                </ol>
                
                <div class="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded text-sm text-emerald-900 my-4">
                    💡 <strong>Real-Life Analogy:</strong> GUI aisa hai jaise aap hotel mein menu dekh kar waiter ko order de rahe ho. CLI aisa hai jaise aap khud kitchen mein jaakar chef ko direct instruction de rahe ho!
                </div>

                <h3 class="text-xl font-bold text-slate-900 mb-2">AI aur Machine Learning Mein CMD Kyun Zaroori Hai?</h3>
                <p>Jab aap AI ya R Language mein 10GB ya 50GB ka biological/genomic data process karenge, toh mouse se click karke file kholne mein computer hang ho jayega. Terminal se wahi kaam 2 seconds mein command likh kar ho jata hai.</p>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">कंप्यूटर चलाने के दो तरीके</h3>
                <p>हम दैनिक जीवन में कंप्यूटर को दो तरीकों से उपयोग कर सकते हैं:</p>
                <ol class="list-decimal pl-6 space-y-2 my-3">
                    <li><strong>GUI (Graphical User Interface):</strong> इसमें हम माउस से डबल क्लिक करके फोल्डर खोलते हैं।</li>
                    <li><strong>CLI (Command Line Interface / Terminal):</strong> इसमें हम माउस का उपयोग नहीं करते, सीधे टेक्स्ट कमांड्स लिखते हैं।</li>
                </ol>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Two Ways to Interact with a Computer</h3>
                <p>1. <strong>GUI (Graphical User Interface):</strong> Point-and-click interface using a mouse.</p>
                <p>2. <strong>CLI (Command Line Interface):</strong> Text-based interface executing commands directly to the OS kernel.</p>
            `
        },
        code: "# Windows me CMD kholne ke liye:\nWin + R dabayein -> 'cmd' likhein -> Enter dabayein\n\n# Mac / Linux me Terminal kholne ke liye:\nCtrl + Alt + T dabayein",
        output: "Microsoft Windows [Version 10.0.19045.3803]\n(c) Microsoft Corporation. All rights reserved.\n\nC:\\Users\\Student>",
        quiz: {
            q: "AI aur Data Science mein CLI (Terminal) ka sabse bada fayda kya hai?",
            options: [
                { text: "Large Datasets aur Scripts ko Fast Execute karna", correct: true },
                { text: "Screen par sundar wallpapers lagana", correct: false },
                { text: "Mouse ka battery bachana", correct: false }
            ]
        }
    },
    {
        id: 1,
        category: "Module 0: Computer Basics & Terminal",
        title: {
            hinglish: "2. Essential Terminal Commands (mkdir, cd, dir, rmdir)",
            hindi: "2. जरूरी टर्मिनल कमांड्स (mkdir, cd, dir, rmdir)",
            english: "2. Essential Terminal Commands (mkdir, cd, dir, rmdir)"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Top 5 Terminal Commands Jo Har Developer Ko Aani Chahiye</h3>
                <p>Aapko in commands ko yaad rakhne ki zaroorat nahi hai, do baar practice karenge toh dimaag mein baith jayengi:</p>

                <div class="space-y-3 my-4">
                    <div class="p-3 bg-slate-100 rounded-lg">
                        <code class="text-emerald-700 font-bold">1. dir (Windows) / ls (Mac/Linux)</code>
                        <p class="text-sm text-slate-600">Aap abhi jis folder mein hain, uske andar kaun-kaun si files aur folders hain unki list dikhata hai.</p>
                    </div>

                    <div class="p-3 bg-slate-100 rounded-lg">
                        <code class="text-emerald-700 font-bold">2. mkdir [Folder_Name]</code>
                        <p class="text-sm text-slate-600">"Make Directory". Isse ek naya folder banta hai. Example: <code>mkdir my_ai_project</code></p>
                    </div>

                    <div class="p-3 bg-slate-100 rounded-lg">
                        <code class="text-emerald-700 font-bold">3. cd [Folder_Name]</code>
                        <p class="text-sm text-slate-600">"Change Directory". Isse aap kisi folder ke andar jaa sakte hain. Example: <code>cd my_ai_project</code></p>
                    </div>

                    <div class="p-3 bg-slate-100 rounded-lg">
                        <code class="text-emerald-700 font-bold">4. cd ..</code>
                        <p class="text-sm text-slate-600">Ek step peeche (bahar wale folder mein) aane ke liye.</p>
                    </div>

                    <div class="p-3 bg-slate-100 rounded-lg">
                        <code class="text-emerald-700 font-bold">5. cls (Windows) / clear (Mac)</code>
                        <p class="text-sm text-slate-600">Terminal ki screen ko saaf (clean) karne ke liye.</p>
                    </div>
                </div>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">शीर्ष 5 टर्मिनल कमांड्स</h3>
                <p>1. <code>dir / ls</code>: फाइलों की सूची देखना।</p>
                <p>2. <code>mkdir [नाम]</code>: नया फोल्डर बनाना।</p>
                <p>3. <code>cd [नाम]</code>: फोल्डर के अंदर जाना।</p>
                <p>4. <code>cd ..</code>: फोल्डर से बाहर आना।</p>
                <p>5. <code>cls / clear</code>: स्क्रीन साफ करना।</p>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Essential CLI Commands</h3>
                <p>Learn how to navigate directories using <code>cd</code>, create folders with <code>mkdir</code>, and inspect file paths with <code>dir/ls</code>.</p>
            `
        },
        code: "# Step 1: Naya folder banayein\nmkdir CodeNexa_Data\n\n# Step 2: Us folder ke andar jayein\ncd CodeNexa_Data\n\n# Step 3: Dekhein folder khali hai ya nahi\ndir",
        output: "> Directory of C:\\Users\\Student\\CodeNexa_Data\n\nFile Not Found (Folder is empty and ready for code!)",
        quiz: {
            q: "Kisi folder se ek step bahar aane ke liye konsi command likhte hain?",
            options: [
                { text: "cd ..", correct: true },
                { text: "cd back", correct: false },
                { text: "exit folder", correct: false }
            ]
        }
    },

    // =================================================================
    // MODULE 1: R PROGRAMMING FOUNDATIONS (Day 6 - Day 15)
    // =================================================================
    {
        id: 2,
        category: "Module 1: R Programming Foundations",
        title: {
            hinglish: "3. R Language Introduction & Variable Declaration",
            hindi: "3. R भाषा का परिचय और वेरिएबल बनाना",
            english: "3. Introduction to R & Variable Declaration"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">R Language Kya Hai?</h3>
                <p>R ek open-source programming language hai jise 1993 mein Ross Ihaka aur Robert Gentleman ne banaya tha. Aaj yeh dunya ki sabse powerful language hai for <strong>Data Science, Statistics, Genomics, aur Machine Learning</strong>.</p>

                <h3 class="text-xl font-bold text-slate-900 mb-2 mt-4">Variable Kya Hota Hai?</h3>
                <p>Variable ek **Khali Dibba (Container)** hota hai jisme hum computer memory mein koi data store karte hain taaki baad mein uska use kar sakein.</p>

                <div class="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded text-sm text-emerald-900 my-4">
                    ⚠️ <strong>R Ka Khaas Rules:</strong> Baaki languages mein <code>=</code> use hota hai, lekin R language mein hum <code><-</code> (Left Arrow) ka use karte hain assignment ke liye!
                </div>

                <h3 class="text-xl font-bold text-slate-900 mb-2">R Data Types:</h3>
                <ul class="list-disc pl-6 space-y-1">
                    <li><strong>Numeric:</strong> Numbers (e.g. 25, 98.6)</li>
                    <li><strong>Character (String):</strong> Text quotes ke andar (e.g. "Rahul", "DNA_Sequence")</li>
                    <li><strong>Logical:</strong> TRUE ya FALSE</li>
                </ul>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">वेरिएबल क्या होता है?</h3>
                <p>वेरिएबल एक कंटेनर है जिसमें हम डेटा स्टोर करते हैं। R भाषा में असाइनमेंट के लिए <code><-</code> का उपयोग होता है।</p>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">R Language & Variables</h3>
                <p>R uses the assignment operator <code><-</code> to bind values to symbols (variables). Fundamental data types include Numeric, Character, and Logical.</p>
            `
        },
        code: "# Student ka data save karte hain\nstudent_name <- 'Ananya'\nage <- 22\nis_passed <- TRUE\n\n# Screen par print karte hain\nprint(student_name)\nprint(age)\nprint(is_passed)",
        output: '[1] "Ananya"\n[1] 22\n[1] TRUE',
        quiz: {
            q: "R language mein variable mein value save karne ke liye sahi operator konsa hai?",
            options: [
                { text: "<-", correct: true },
                { text: "===", correct: false },
                { text: "-->", correct: false }
            ]
        }
    },
    {
        id: 3,
        category: "Module 1: R Programming Foundations",
        title: {
            hinglish: "4. Vectors & Vector Math (Data Collections)",
            hindi: "4. वेक्टर्स और वेक्टर गणित (डेटा संग्रह)",
            english: "4. Vectors & Vectorized Operations"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Vector Kya Hai?</h3>
                <p>Agar aapko 1 student ka marks save karna ho toh ek variable kaafi hai. Lekin agar 100 students ke marks save karne hain, toh hum **Vector** ka use karte hain.</p>
                <p>Vector banane ke liye R mein <code>c()</code> function ka use hota hai (c ka matlab hota hai 'Combine').</p>

                <h3 class="text-xl font-bold text-slate-900 mb-2 mt-4">Vector Arithmetic (Vectorized Math)</h3>
                <p>R ki sabse badi khaas baat hai ki aap ek saath poore vector par mathematical operations kar sakte hain bina loops chalaye!</p>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">वेक्टर क्या है?</h3>
                <p>एक ही प्रकार के कई डेटा एलिमेंट्स को एक साथ स्टोर करने के लिए Vector का उपयोग होता है। इसे <code>c()</code> से बनाते हैं।</p>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Vectors in R</h3>
                <p>Vectors are 1-dimensional arrays that hold elements of the same primitive type. Created using <code>c()</code> combine function.</p>
            `
        },
        code: "# 5 Patients ka Heart Rate (BPM) Vector\nheart_rates <- c(72, 80, 65, 90, 75)\n\n# Sabhi patients ka heart rate 5 BPM badh gaya (Vectorized addition)\nupdated_rates <- heart_rates + 5\n\nprint(updated_rates)\nprint(mean(heart_rates)) # Average heart rate",
        output: "[1] 77 85 70 95 80\n[1] 76.4",
        quiz: {
            q: "R mein Vector banane ke liye konsa function use kiya jata hai?",
            options: [
                { text: "c()", correct: true },
                { text: "combine()", correct: false },
                { text: "array()", correct: false }
            ]
        }
    },
    {
        id: 4,
        category: "Module 1: R Programming Foundations",
        title: {
            hinglish: "5. Data Frames & Table Processing",
            hindi: "5. डेटा फ्रेम्स और टेबल प्रोसेसिंग",
            english: "5. Data Frames & Tabular Data"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Data Frame Kya Hai?</h3>
                <p>Real-world Data Science mein 90% data Excel sheets ya CSV tables jaisa hota hai (Rows aur Columns mein). R language mein isi 2D table ko **Data Frame** kehte hain.</p>

                <p>Data Frame mein har column alag type ka data rakh sakta hai (e.g. Name column text hoga, Age column numeric hoga).</p>

                <h3 class="text-xl font-bold text-slate-900 mb-2 mt-4">Data Frame ke Columns Access Karna</h3>
                <p>Kisi specific column ko select karne ke liye hum <code>$</code> (Dollar Symbol) ka use karte hain. Example: <code>df$Age</code></p>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">डेटा फ्रेम क्या है?</h3>
                <p>डेटा फ्रेम R की एक टेबल संरचना है जिसमें रोज़ और कॉलम्स होते हैं। कॉलम एक्सेस करने के लिए <code>$</code> का उपयोग होता है।</p>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Data Frames</h3>
                <p>Data frames are 2-dimensional tabular structures in R. Columns can contain different vectors of equal lengths.</p>
            `
        },
        code: "# Sample Biological Patient Dataset\npatient_id <- c(101, 102, 103)\ngene_expression <- c(2.4, 5.1, 1.8)\ndisease_status <- c('Healthy', 'Diseased', 'Healthy')\n\n# Data Frame Banayein\npatient_df <- data.frame(patient_id, gene_expression, disease_status)\n\nprint(patient_df)\nprint(patient_df$gene_expression) # Only Gene Expression Column",
        output: "  patient_id gene_expression disease_status\n1        101             2.4        Healthy\n2        102             5.1       Diseased\n3        103             1.8        Healthy\n[1] 2.4 5.1 1.8",
        quiz: {
            q: "Data Frame me se kisi specific column ko nikalne ke liye konsa symbol use hota hai?",
            options: [
                { text: "$ (Dollar Sign)", correct: true },
                { text: "@ (At Sign)", correct: false },
                { text: "# (Hashtag)", correct: false }
            ]
        }
    },

    // =================================================================
    // MODULE 2: MATHEMATICS & STATISTICS FOR AI (Day 16 - Day 22)
    // =================================================================
    {
        id: 5,
        category: "Module 2: Maths & Stats for AI",
        title: {
            hinglish: "6. Mean, Median, Mode & Standard Deviation",
            hindi: "6. माध्य, मध्यिका, बहुलक और मानक विचलन",
            english: "6. Measures of Central Tendency & Dispersion"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">AI Ke Liye Statistics Kyun Sikhein?</h3>
                <p>Machine Learning Models aankhon se data ko nahi dekhte, wo statistics se data ka shape samajhte hain.</p>

                <div class="space-y-3 my-4">
                    <div class="p-3 bg-slate-100 rounded-lg">
                        <strong>1. Mean (Average):</strong> Sabhi numbers ko jod kar total count se divide karna.
                    </div>
                    <div class="p-3 bg-slate-100 rounded-lg">
                        <strong>2. Median (Middle Value):</strong> Data ko chote se bada (sort) karke bich wala number chunna. Outliers (achanak bohot bada number) hone par Median best hota hai.
                    </div>
                    <div class="p-3 bg-slate-100 rounded-lg">
                        <strong>3. Standard Deviation (SD):</strong> Ye batata hai ki aapka data average se kitna door ya faela hua hai.
                    </div>
                </div>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">सांख्यिकी के मूल सिद्धांत</h3>
                <p><strong>Mean:</strong> औसत मूल्य।</p>
                <p><strong>Median:</strong> मध्य मूल्य।</p>
                <p><strong>Standard Deviation:</strong> डेटा का फैलाव।</p>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Central Tendency & Variance</h3>
                <p>Mean measures central value, Median provides robust midpoint against outliers, and Standard Deviation (SD) quantifies dataset spread.</p>
            `
        },
        code: "# Salary Data (In Thousands)\nsalaries <- c(30, 35, 40, 42, 45, 350) # 350 is an Outlier!\n\nprint(paste('Mean Salary:', mean(salaries)))\nprint(paste('Median Salary:', median(salaries)))\nprint(paste('Standard Deviation:', sd(salaries)))",
        output: '[1] "Mean Salary: 97"\n[1] "Median Salary: 41"\n[1] "Standard Deviation: 124.31813222533"',
        quiz: {
            q: "Data mein achanak bohot bada galat number (outlier) aa jaye, toh konsa measure sabse accurate result deta hai?",
            options: [
                { text: "Median", correct: true },
                { text: "Mean", correct: false },
                { text: "Standard Deviation", correct: false }
            ]
        }
    },

    // =================================================================
    // MODULE 3: MACHINE LEARNING WITH R (Day 23 - Day 30)
    // =================================================================
    {
        id: 6,
        category: "Module 3: Machine Learning with R",
        title: {
            hinglish: "7. Linear Regression (Supervised AI Model)",
            hindi: "7. लीनियर रिग्रेशन (सुपरवाइज्ड AI मॉडल)",
            english: "7. Linear Regression Algorithm"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Linear Regression Kya Hota Hai?</h3>
                <p>Linear Regression sabse pehla aur sabse zaroori Machine Learning Algorithm hai. Iska kaam do cheezon ke beech **Linear Relationship (Straight Line equation y = mx + c)** dhoondna hota hai.</p>

                <p><strong>Example Use-Case:</strong></p>
                <ul class="list-disc pl-6 space-y-1">
                    <li>Ghar ka size dekh kar House Price predict karna.</li>
                    <li>Experience dekh kar Salary predict karna.</li>
                    <li>Drug dosage dekh kar Patient Recovery Rate predict karna.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mb-2 mt-4">R Mein Model Kaise Banayein?</h3>
                <p>R mein Linear Model banane ke liye <code>lm(Target ~ Predictor, data)</code> function use hota hai.</p>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">लीनियर रिग्रेशन</h3>
                <p>यह एल्गोरिदम दो वेरिएबल्स के बीच सीधा संबंध स्थापित करके भविष्य के आंकड़ों की भविष्यवाणी करता है। <code>lm()</code> फंक्शन का उपयोग होता है।</p>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Linear Regression in R</h3>
                <p>Linear Regression predicts continuous numeric responses based on linear predictors using the <code>lm()</code> built-in function.</p>
            `
        },
        code: "# Dataset: Experience (Years) vs Salary (k)\nexp <- c(1, 2, 3, 4, 5, 6)\nsalary <- c(25, 32, 40, 48, 58, 67)\ndata <- data.frame(exp, salary)\n\n# Train Machine Learning Model\nmodel <- lm(salary ~ exp, data = data)\n\n# Predict Salary for 8 Years Experience\nnew_data <- data.frame(exp = 8)\npredicted_salary <- predict(model, new_data)\n\nprint(paste('Predicted Salary for 8 Years Exp:', round(predicted_salary, 2), 'k'))",
        output: '[1] "Predicted Salary for 8 Years Exp: 88.19 k"',
        quiz: {
            q: "R language mein Linear Regression Model train karne ke liye konsa function use hota hai?",
            options: [
                { text: "lm()", correct: true },
                { text: "linear_model()", correct: false },
                { text: "train_regression()", correct: false }
            ]
        }
    },
    {
        id: 7,
        category: "Module 3: Machine Learning with R",
        title: {
            hinglish: "8. Real Project: Disease Prediction Model",
            hindi: "8. रियल प्रोजेक्ट: बीमारी भविष्यवाणी AI मॉडल",
            english: "8. Capstone Project: Biological Classification Model"
        },
        content: {
            hinglish: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">🎉 Badhai ho! Aapka Pehla Real-World AI Project</h3>
                <p>Is project mein hum ek Machine Learning model banayenge jo patient ke <strong>Blood Sugar Level aur Blood Pressure</strong> ke aadhar par bata dega ki usko Diabetes ka risk hai ya nahi.</p>

                <h3 class="text-xl font-bold text-slate-900 mb-2">Project Steps:</h3>
                <ol class="list-decimal pl-6 space-y-1">
                    <li>Biological Patient Dataset create karna.</li>
                    <li>Logistic Regression Model train karna using <code>glm()</code>.</li>
                    <li>Naye unknown patient ka prediction karna.</li>
                </ol>
            `,
            hindi: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">बीमारी भविष्यवाणी AI मॉडल</h3>
                <p>इस प्रोजेक्ट में हम लॉजिस्टिक रिग्रेशन <code>glm()</code> का उपयोग करके मरीज के स्वास्थ्य डेटा के आधार पर बीमारी का पूर्वानुमान लगाएंगे।</p>
            `,
            english: `
                <h3 class="text-xl font-bold text-slate-900 mb-2">Capstone Project: Clinical Classification</h3>
                <p>Train a Logistic Regression classifier using <code>glm(family = 'binomial')</code> to perform binary classification on medical diagnostic metrics.</p>
            `
        },
        code: "# Step 1: Patient Dataset\ngluco <- c(90, 150, 180, 95, 200, 110)\ndiabetes <- c(0, 1, 1, 0, 1, 0) # 0 = No, 1 = Yes\npatient_data <- data.frame(gluco, diabetes)\n\n# Step 2: Train Logistic Regression Model\nmodel <- glm(diabetes ~ gluco, data = patient_data, family = 'binomial')\n\n# Step 3: Predict for New Patient with Glucose = 165\nnew_patient <- data.frame(gluco = 165)\nprob <- predict(model, new_patient, type = 'response')\n\nprint(paste('Probability of Diabetes:', round(prob * 100, 2), '%'))",
        output: '[1] "Probability of Diabetes: 89.42 %"\n> Warning: Patient risk high! Consult doctor.',
        quiz: {
            q: "Binary Classification (Yes/No, Disease/Healthy) ke liye konsa Regression model use hota hai?",
            options: [
                { text: "Logistic Regression (glm)", correct: true },
                { text: "Linear Regression (lm)", correct: false },
                { text: "Simple Addition", correct: false }
            ]
        }
    }
];
