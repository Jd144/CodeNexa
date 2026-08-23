// CODE NEXA MAIN ENGINE
let currentLessonIndex = parseInt(localStorage.getItem('cn_lessonIndex')) || 0;
let currentLanguage = localStorage.getItem('cn_language') || 'hinglish';
let completedLessons = JSON.parse(localStorage.getItem('cn_completed')) || [];

// LANDING PAGE LOGIC
function startOnboarding() {
    document.getElementById('onboarding-modal').classList.remove('hidden');
}

function closeOnboarding() {
    document.getElementById('onboarding-modal').classList.add('hidden');
}

function nextStep() {
    document.getElementById('quiz-step-1').classList.add('hidden');
    document.getElementById('quiz-step-2').classList.remove('hidden');
}

function finishOnboarding(lang) {
    localStorage.setItem('cn_language', lang);
    window.location.href = 'course.html';
}

function openLoginModal() {
    alert("CodeNexa is 100% Free! No Login Required. Click 'Start Learning Free' to begin!");
}

// COURSE LMS LOGIC
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('course.html')) {
        document.getElementById('langSelector').value = currentLanguage;
        renderSidebar();
        loadLesson(currentLessonIndex);
    }
});

function loadLesson(index) {
    currentLessonIndex = index;
    localStorage.setItem('cn_lessonIndex', currentLessonIndex);

    const lesson = courseData[currentLessonIndex];
    
    document.getElementById('lesson-category').innerText = lesson.category;
    document.getElementById('lesson-title').innerText = lesson.title[currentLanguage];
    document.getElementById('lesson-content').innerHTML = lesson.content[currentLanguage];
    document.getElementById('code-content').innerText = lesson.code;
    document.getElementById('terminal-output').innerText = lesson.output;

    // Load Quiz
    document.getElementById('quiz-question').innerText = "Q: " + lesson.quiz.q;
    const quizContainer = document.getElementById('quiz-options');
    quizContainer.innerHTML = '';
    document.getElementById('quiz-feedback').classList.add('hidden');

    lesson.quiz.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left hover:border-emerald-600 hover:bg-emerald-50 transition text-sm font-medium";
        btn.innerText = opt.text;
        btn.onclick = () => checkQuiz(opt.correct);
        quizContainer.appendChild(btn);
    });

    document.getElementById('prev-btn').disabled = currentLessonIndex === 0;
    document.getElementById('next-btn').disabled = currentLessonIndex === courseData.length - 1;

    updateCompleteButtonUI();
    renderSidebar();
    updateProgress();
    switchTab('theory');
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.add('hidden'));
    
    document.getElementById('tab-btn-theory').className = "py-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center gap-2";
    document.getElementById('tab-btn-lab').className = "py-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center gap-2";
    document.getElementById('tab-btn-quiz').className = "py-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center gap-2";

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`tab-btn-${tabName}`).className = "py-3 text-sm font-bold border-b-2 border-emerald-600 text-emerald-700 flex items-center gap-2";
}

function checkQuiz(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');
    if (isCorrect) {
        feedback.className = "text-sm font-bold text-emerald-800 bg-emerald-100 p-3 rounded-xl border border-emerald-200 block";
        feedback.innerText = "✅ Sahi Answer! Excellent!";
    } else {
        feedback.className = "text-sm font-bold text-rose-800 bg-rose-100 p-3 rounded-xl border border-rose-200 block";
        feedback.innerText = "❌ Galat Answer! Phir se koshish karein.";
    }
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cn_language', lang);
    loadLesson(currentLessonIndex);
}

function renderSidebar() {
    const list = document.getElementById('module-list');
    if (!list) return;
    list.innerHTML = '';

    courseData.forEach((lesson, index) => {
        const isCompleted = completedLessons.includes(lesson.id);
        const isActive = index === currentLessonIndex;

        const item = document.createElement('button');
        item.className = `w-full text-left px-3.5 py-3 rounded-xl text-xs flex items-center justify-between mb-1 transition ${
            isActive ? 'bg-emerald-700 text-white font-bold shadow' : 'hover:bg-slate-100 text-slate-700'
        }`;
        
        item.onclick = () => loadLesson(index);
        item.innerHTML = `
            <span class="truncate">${lesson.title[currentLanguage]}</span>
            ${isCompleted ? `<i class="fa-solid fa-circle-check ${isActive ? 'text-yellow-300' : 'text-emerald-600'} ml-2"></i>` : ''}
        `;
        list.appendChild(item);
    });
}

function toggleComplete() {
    const lessonId = courseData[currentLessonIndex].id;
    if (completedLessons.includes(lessonId)) {
        completedLessons = completedLessons.filter(id => id !== lessonId);
    } else {
        completedLessons.push(lessonId);
    }
    localStorage.setItem('cn_completed', JSON.stringify(completedLessons));
    updateCompleteButtonUI();
    renderSidebar();
    updateProgress();
}

function updateCompleteButtonUI() {
    const lessonId = courseData[currentLessonIndex].id;
    const btn = document.getElementById('complete-btn');
    if (!btn) return;
    if (completedLessons.includes(lessonId)) {
        btn.className = "px-4 py-2 text-sm font-semibold rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-2";
        btn.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600"></i> Completed';
    } else {
        btn.className = "px-4 py-2 text-sm font-semibold rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition flex items-center gap-2";
        btn.innerHTML = '<i class="fa-regular fa-circle"></i> Mark Complete';
    }
}

function updateProgress() {
    const percent = Math.round((completedLessons.length / courseData.length) * 100);
    const bar = document.getElementById('progress-bar');
    const text = document.getElementById('progress-text');
    if (bar) bar.style.width = percent + '%';
    if (text) text.innerText = `Progress: ${percent}%`;
}

function navigateLesson(step) {
    const newIndex = currentLessonIndex + step;
    if (newIndex >= 0 && newIndex < courseData.length) {
        loadLesson(newIndex);
    }
}

function copyCode() {
    const code = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(code);
    alert("Code Copied!");
}
