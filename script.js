const i18n = {
  ar: {
    main_title: "مؤقت المذاكرة ونظام الامتحانات", select_subject: "اختر المادة للبدء", select_session_instruction: "اختر نوع الجلسة للبدء:",
    btn_homework: "واجب ورقي (120 دقيقة - 100 نقطة)", btn_study: "مذاكرة درس", btn_summary: "تلخيص مادة", btn_back: "العودة للقائمة الرئيسية",
    label_time: "حدد مدة الجلسة بالدقائق (1 - 120 دقيقة):", btn_start: "ابدأ الجلسة ⏱️", btn_cancel: "إلغاء", timer_instruction: "قم بالعمل في الكشكول الآن!",
    timer_break_instruction: "استمتع ببوقت الاستراحة والترفيه! 🎮🎬",
    btn_finish: "انتهاء", btn_abort: "إلغاء الجلسة", btn_home: "الرئيسية", history_title: "سجل الإنجازات", btn_clear_all: "مسح الكل",
    empty_history: "لا يوجد سجلات بعد", setup_title: "إعداد جلسة {type}: {subject}", study_topic_label: "عنوان الدرس المراد مذاكرته:", summary_topic_label: "عنوان الموضوع المراد تلخيصه:",
    untitled: "بدون عنوان", topic_label: "الموضوع: ", result_title_success: "أحسنت! أتممت {type} 🎉", result_title_failed: "انتهى الوقت! ⏰",
    result_msg_success: "أنهيت {type} <strong>{subject}</strong> {topic} في:<br><br><span style='font-size: 1.3rem; color: #3182ce;'>{time}</span>{reward}",
    result_msg_failed: "لم تنهِ {type} <strong>{subject}</strong> في الوقت المحدد ({minutes} دقيقة).", time_taken_str: "{mins} د و {secs} ث",
    time_expired_str: "انتهى الوقت ({minutes} د)", completed_in: "تم في: ", status_failed: "الحالة: ", delete_btn: "حذف",
    confirm_clear_all: "مسح جميع السجلات؟", type_homework: "واجب", type_study: "مذاكرة", type_summary: "تلخيص", 
    type_gaming: "استراحة لعب", type_watch: "استراحة مشاهدة",
    pause_btn_text: "إيقاف مؤقت", resume_btn_text: "استئناف", pause_credits_label: "الفرص: ",
    gaming_label: "{m} د للعب", watch_label: "{m} د للمشاهدة",
    available_label: "المتاح: {m} دقيقة",
    reward_msg: "<br><br><span style='color: #d69e2e; font-weight: bold;'>⭐حصلت على +{pts} نجمة!</span>",
    nav_instructions: "التعليمات ℹ️", nav_store: "المتجر 🛒", nav_logout: "خروج",
    label_username: "اسم المستخدم:", label_password: "كلمة المرور:", btn_login: "دخول",
    msg_no_account: "ليس لديك حساب؟", link_create_account: "إنشاء حساب جديد",
    break_section_title: "وقتا الاستراحة والمكافآت", btn_start_game: "بدء وقت اللعب 🎮", btn_start_watch: "بدء وقت المشاهدة 🎬",
    shop_title: "المتجر 🛒", shop_subtitle: "استبدل نجوم المذاكرة التي جمعتها بمكافآت ومتعة!", btn_create_product: "➕ إنشاء منتج جديد (200⭐)",
    btn_back_home: "العودة للرئيسية", add_item_title: "إنشاء منتج جديد للمتجر", add_item_cost: "⭐ تكلفة نشر منتج جديد: 200 نجمة",
    label_img_url: "رابط الصورة (URL):", label_item_title: "اسم المنتج:", label_item_desc: "الوصف:", label_item_price: "السعر بالنجوم (للمشترين):",
    btn_publish_item: "خصم 200⭐ ونشر المنتج", owner_badge: "منتجك (لا يمكنك شراؤه)", buy_btn: "شراء عادي",
    inst_title: "📖 دليل استخدام التطبيق", 
    inst_sec1_title: "1️⃣ نظام المذاكرة والمؤقت",
    inst_sec1_p1: "• اختر المادة ثم حدد نوع الجلسة (واجب، مذاكرة درس، أو تلخيص).",
    inst_sec1_p2: "• عند إتمام الجلسة في الوقت المحدد، ستحصل على نجوم مكافأة ⭐ تضاف لحسابك تلقائياً.",
    inst_sec2_title: "💎 امتحانات الأدمن والنقاط النادرة",
    inst_sec2_p1: "• يقدم الأدمن امتحانات أسبوعية وشهرية. للحصول على نقطة الأدمن النادرة 💎 يجب الإجابة على كل الأسئلة بالكامل والحصول على الدرجة الكاملة.",
    inst_sec2_p2: "• تتيح لك نقطة الأدمن إمكانية الخصم مرة واحدة في المتجر عند تفعيلها على المنتج المطلوب.",
    inst_sec3_title: "🎶 عنصر أغاني وأفكار (140 نجمة)",
    inst_sec3_p1: "• يتيح لك هذا العنصر كتابة أغنيتك أو فكرتك وإرسالها للأدمن. عند موافقة الأدمن عليها، سيتم نشرها في الموقع رسمياً!",
    btn_understand: "فهمت ذلك، العودة للرئيسية",
    currency_stars: "نجوم المذاكرة", currency_gems: "نقاط الأدمن", currency_credits: "فرص الإيقاف",
    waiting_exam_title: "صالة انتظار الامتحان المباشر",
    waiting_exam_desc: "في انتظار تحديد الامتحان ونشره بواسطة الأدمن...",
    exam_ready_title: "الامتحان جاهز الآن!",
    exam_ready_desc: "قام الأدمن بنشر الامتحان. يمكنك البدء الآن!",
    btn_start_exam_now: "بدء الامتحان الآن 🚀",
    btn_submit_exam: "إرسال الحل للإدمن 📤",
    status_online: "متصل الآن", status_offline: "غير متصل",
    admin_panel_title: "👑 لوحة تحكم الأدمن",
    admin_create_exam: "➕ إنشاء امتحان جديد",
    label_subject: "المادة:", label_repeat_type: "نوع التكرار:", label_duration: "مدة الامتحان (بالدقائق):", label_q_count: "عدد الأسئلة المطلوب الإجابة عليها:",
    btn_publish_exam: "نشر الامتحان 🚀", admin_users_list_title: "👥 قائمة المستخدمين وحالة التواجد", admin_songs_title: "🎶 الأغاني والأفكار المقترحة في الموقع",
    admin_change_pass_title: "🔐 تغيير كلمة مرور الأدمن",
    label_new_admin_pass: "كلمة المرور الجديدة للأدمن:",
    btn_save_admin_pass: "حفظ كلمة المرور الجديدة 💾",
    msg_admin_pass_updated: "تم تغيير كلمة مرور الأدمن بنجاح! 🔑",
    msg_admin_pass_empty: "يرجى كتابة كلمة مرور جديدة أولاً!",
    subjects: {
      english: "اللغة الإنجليزية",
      history: "التاريخ",
      programming: "البرمجة",
      arabic: "اللغة العربية",
      gaming: "استراحة لعب",
      watch: "استراحة مشاهدة"
    }
  },
  en: {
    main_title: "Study Timer & Exam System", select_subject: "Select a Subject to Start", select_session_instruction: "Choose session type:",
    btn_homework: "Homework (120 mins - 100 Points)", btn_study: "Study Lesson", btn_summary: "Summarize Subject", btn_back: "Back to Main Menu",
    label_time: "Set Duration in minutes (1-120):", btn_start: "Start Session ⏱️", btn_cancel: "Cancel", timer_instruction: "Work on your notebook now!",
    timer_break_instruction: "Enjoy your break and entertainment time! 🎮🎬",
    btn_finish: "Finish", btn_abort: "Cancel Session", btn_home: "Home", history_title: "Achievements Log", btn_clear_all: "Clear All",
    empty_history: "No records yet", setup_title: "Setup {type} session: {subject}", study_topic_label: "Lesson Topic:", summary_topic_label: "Summary Topic:",
    untitled: "Untitled", topic_label: "Topic: ", result_title_success: "Great job! Completed {type} 🎉", result_title_failed: "Time's up! ⏰",
    result_msg_success: "Finished {type} <strong>{subject}</strong> {topic} in:<br><br><span style='font-size: 1.3rem; color: #3182ce;'>{time}</span>{reward}",
    result_msg_failed: "You did not finish {type} <strong>{subject}</strong> in time ({minutes} mins).", time_taken_str: "{mins}m {secs}s",
    time_expired_str: "Time expired ({minutes} mins)", completed_in: "Completed in: ", status_failed: "Status: ", delete_btn: "Delete",
    confirm_clear_all: "Clear all records?", type_homework: "Homework", type_study: "Study", type_summary: "Summary", 
    type_gaming: "Gaming Break", type_watch: "Watch Break",
    pause_btn_text: "Pause", resume_btn_text: "Resume", pause_credits_label: "Credits: ",
    gaming_label: "{m} mins gaming", watch_label: "{m} mins watching",
    available_label: "Available: {m} mins",
    reward_msg: "<br><br><span style='color: #d69e2e; font-weight: bold;'>⭐ You earned +{pts} Stars!</span>",
    nav_instructions: "Instructions ℹ️", nav_store: "Store 🛒", nav_logout: "Logout",
    label_username: "Username:", label_password: "Password:", btn_login: "Login",
    msg_no_account: "Don't have an account?", link_create_account: "Create New Account",
    break_section_title: "Break Time & Rewards", btn_start_game: "Start Gaming Time 🎮", btn_start_watch: "Start Watching Time 🎬",
    shop_title: "Store 🛒", shop_subtitle: "Exchange your collected study stars for fun rewards!", btn_create_product: "➕ New Product (200⭐)",
    btn_back_home: "Back to Home", add_item_title: "Create New Shop Item", add_item_cost: "⭐ Cost to publish new product: 200 Stars",
    label_img_url: "Image Link (URL):", label_item_title: "Product Name:", label_item_desc: "Description:", label_item_price: "Price in Stars (for buyers):",
    btn_publish_item: "Deduct 200⭐ & Publish", owner_badge: "Your Item (Cannot Buy)", buy_btn: "Buy Regular",
    inst_title: "📖 App User Guide", 
    inst_sec1_title: "1️⃣ Study System & Timer",
    inst_sec1_p1: "• Choose a subject then select session type (Homework, Study Lesson, or Summary).",
    inst_sec1_p2: "• Upon completing the session on time, you will automatically earn ⭐ reward stars.",
    inst_sec2_title: "💎 Admin Exams & Rare Gems",
    inst_sec2_p1: "• Admin provides exams. To earn rare Admin Gems 💎, you must score full marks with full correct answers.",
    inst_sec2_p2: "• Gems allow a one-time discount in the shop when activated on a chosen product.",
    inst_sec3_title: "🎶 Songs & Ideas Item (140 Stars)",
    inst_sec3_p1: "• This item allows you to submit your song or idea to the Admin. Once approved, it will be published officially on the website!",
    btn_understand: "Got it, back to home",
    currency_stars: "Study Stars", currency_gems: "Admin Gems", currency_credits: "Pause Credits",
    waiting_exam_title: "Exam Waiting Lounge",
    waiting_exam_desc: "Waiting for the admin to schedule and publish the exam...",
    exam_ready_title: "Exam is Ready Now!",
    exam_ready_desc: "Admin published the exam. You can start now!",
    btn_start_exam_now: "Start Exam Now 🚀",
    btn_submit_exam: "Submit to Admin 📤",
    status_online: "Online", status_offline: "Offline",
    admin_panel_title: "👑 Admin Control Panel",
    admin_create_exam: "➕ Create New Exam",
    label_subject: "Subject:", label_repeat_type: "Frequency:", label_duration: "Exam Duration (mins):", label_q_count: "Number of Questions:",
    btn_publish_exam: "Publish Exam 🚀", admin_users_list_title: "👥 Users List & Presence Status", admin_songs_title: "🎶 Suggested Songs & Ideas",
    admin_change_pass_title: "🔐 Change Admin Password",
    label_new_admin_pass: "New Admin Password:",
    btn_save_admin_pass: "Save New Password 💾",
    msg_admin_pass_updated: "Admin password updated successfully! 🔑",
    msg_admin_pass_empty: "Please enter a new password first!",
    subjects: {
      english: "English",
      history: "History",
      programming: "Programming",
      arabic: "Arabic",
      gaming: "Gaming Break",
      watch: "Watching Break"
    }
  }
};

const SUBJECT_KEYS = [{key:'english'}, {key:'history'}, {key:'programming'}, {key:'arabic'}];
let timerInterval = null, secondsElapsed = 0, totalSecondsRemaining = 0, isPaused = false;
let pauseCredits = 2, totalPoints = 0, adminPoints = 0, gameTimeMins = 0, watchTimeMins = 0;
let selectedSubjectKey = "arabic", sessionType = "واجب", currentTopic = "", allottedMinutes = 120, currentLang = "ar";
let isSignUpMode = false, currentUser = null;
let isBreakSession = false, isExamSession = false;

const $ = (id) => document.getElementById(id);

const DEFAULT_SHOP_ITEMS = [
  { id: 1, creator: "system", title: "🎮 وقت اللعب (30 دقيقة)", script: "استبدل النجوم بـ 30 دقيقة لعب ألعاب فيديو", price: 50, img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80", type: "game", mins: 30, sales: [] },
  { id: 2, creator: "system", title: "🎬 وقت المشاهدة (30 دقيقة)", script: "استبدل النجوم بـ 30 دقيقة مشاهدة أنمي أو يوتيوب", price: 40, img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&q=80", type: "watch", mins: 30, sales: [] },
  { id: 3, creator: "system", title: "🎶 أغاني وأفكار (مشاركة مع الموقع)", script: "اكتب أغنيتك أو فكرتك وأرسلها للأدمن لنشرها بالموقع!", price: 140, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80", type: "song_idea", sales: [] }
];

document.addEventListener("DOMContentLoaded", () => {
  checkAuthStatus();
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const toggleCheckbox = $('theme-toggle-checkbox');
  if(toggleCheckbox) toggleCheckbox.checked = (savedTheme === "dark");

  setupPresenceSystem();
});

function setupPresenceSystem() {
  const setStatus = (status) => {
    if (!currentUser) return;
    let users = JSON.parse(localStorage.getItem("app_users") || "{}");
    if (users[currentUser]) {
      users[currentUser].isOnline = (status === 'online');
      users[currentUser].lastActive = Date.now();
      localStorage.setItem("app_users", JSON.stringify(users));
    }
  };

  window.addEventListener("focus", () => setStatus('online'));
  window.addEventListener("blur", () => setStatus('online'));
  window.addEventListener("beforeunload", () => setStatus('offline'));
}

function toggleAuthMode(e) {
  if(e) e.preventDefault();
  isSignUpMode = !isSignUpMode;
  $('auth-title').textContent = isSignUpMode ? (currentLang === 'ar' ? "إنشاء حساب جديد" : "Create Account") : (currentLang === 'ar' ? "تسجيل الدخول" : "Login");
  $('auth-submit-btn').textContent = isSignUpMode ? (currentLang === 'ar' ? "إنشاء حساب" : "Sign Up") : (currentLang === 'ar' ? "دخول" : "Login");
  $('auth-toggle-msg').textContent = isSignUpMode ? (currentLang === 'ar' ? "لديك حساب بالفعل؟" : "Already have an account?") : i18n[currentLang].msg_no_account;
  $('auth-toggle-link').textContent = isSignUpMode ? (currentLang === 'ar' ? "تسجيل الدخول" : "Login") : i18n[currentLang].link_create_account;
}

// --- 3. تسجيل الدخول / إنشاء حساب عبر Firebase Firestore ---
async function handleAuth(e) {
  e.preventDefault();
  const username = $('username-input').value.trim();
  const password = $('password-input').value.trim();

  if (!username || !password) return alert("يرجى ملء كافة البيانات!");

  // دخول الأدمن
  if (username === "admin" && password === getAdminPassword()) {
    currentUser = "admin";
    localStorage.setItem("current_user", "admin");
    loginSuccess();
    openAdminPanel();
    return;
  }

  const userRef = db.collection("users").doc(username);
  const doc = await userRef.get();

  if (isSignUpMode) {
    if (doc.exists) {
      return alert("اسم المستخدم هذا موجود بالفعل!");
    }
    // إنشاء مستخدم جديد
    await userRef.set({
      password: password,
      points: 0,
      adminPoints: 0,
      pauseCredits: 2,
      gameTime: 0,
      watchTime: 0,
      isOnline: true,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    alert("تم إنشاء الحساب بنجاح في السحابة!");
    toggleAuthMode();
  } else {
    if (!doc.exists || doc.data().password !== password) {
      return alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
    currentUser = username;
    await userRef.update({ isOnline: true });
    localStorage.setItem("current_user", username);
    loginSuccess();
  }
}

function getAdminPassword() {
  return localStorage.getItem("admin_password") || "admin123";
}

function changeAdminPassword() {
  const newPassInput = document.getElementById("new-admin-pass-input");
  const newPass = newPassInput.value.trim();
  const currentLang = localStorage.getItem("app_lang") || "ar";

  if (!newPass) {
    alert(i18n[currentLang].msg_admin_pass_empty || "يرجى كتابة كلمة مرور جديدة أولاً!");
    return;
  }

  localStorage.setItem("admin_password", newPass);
  alert(i18n[currentLang].msg_admin_pass_updated || "تم تغيير كلمة مرور الأدمن بنجاح! 🔑");
  newPassInput.value = "";
}

function checkAuthStatus() {
  const savedUser = localStorage.getItem("current_user");
  if(savedUser) {
    currentUser = savedUser;
    loginSuccess();
  } else {
    $('auth-screen').classList.remove('hidden');
    $('app-container').classList.add('hidden');
  }
}

function loginSuccess() {
  $('auth-screen').classList.add('hidden');
  $('app-container').classList.remove('hidden');
  $('user-name-text').textContent = currentUser;
  initUserData();
  
  if (currentUser === 'admin') {
    $('admin-panel-btn').style.display = 'inline-block';
    openAdminPanel();
  } else {
    $('admin-panel-btn').style.display = 'none';
    showScreen('subject-selection');
  }

  applyLanguage(localStorage.getItem("lang") || "ar");
  checkAvailableAdminExam();
  renderShop();
}

function logout() {
  if (currentUser) {
    let users = JSON.parse(localStorage.getItem("app_users") || "{}");
    if (users[currentUser]) {
      users[currentUser].isOnline = false;
      localStorage.setItem("app_users", JSON.stringify(users));
    }
  }
  localStorage.removeItem("current_user");
  currentUser = null;

  document.querySelectorAll('.view-screen').forEach(s => s.classList.add('hidden'));
  $('app-container').classList.add('hidden');
  $('auth-screen').classList.remove('hidden');
}

// --- 2. جلب بيانات المستخدم عند تسجيل الدخول ---
function initUserData() {
  if (!currentUser) return;

  db.collection("users").doc(currentUser).get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      pauseCredits = data.pauseCredits ?? 2;
      totalPoints = data.points ?? 0;
      adminPoints = data.adminPoints ?? 0;
      gameTimeMins = data.gameTime ?? 0;
      watchTimeMins = data.watchTime ?? 0;
      updateUI();
    }
  }).catch((error) => console.error("خطأ في جلب البيانات: ", error));
}

function saveUserData() {
  if (!currentUser) return;
  
  const userData = {
    pauseCredits: pauseCredits,
    points: totalPoints,
    adminPoints: adminPoints,
    gameTime: gameTimeMins,
    watchTime: watchTimeMins,
    isOnline: true,
    lastActive: firebase.firestore.FieldValue.serverTimestamp()
  };

  // الحفظ في مجموعة users
  db.collection("users").doc(currentUser).set(userData, { merge: true })
    .catch((error) => console.error("خطأ في حفظ البيانات: ", error));
}

function updateUI() {
  $('pause-credits-text').textContent = `${pauseCredits}`;
  $('points-text').textContent = `${totalPoints} ⭐`;
  $('admin-points-text').textContent = `💎 ${adminPoints}`;
  
  $('game-time-text').textContent = i18n[currentLang].gaming_label.replace('{m}', gameTimeMins);$('watch-time-text').textContent = i18n[currentLang].watch_label.replace('{m}', watchTimeMins);
  
  const availText = i18n[currentLang].available_label;
  if($('sub-game-time'))$('sub-game-time').textContent = availText.replace('{m}', gameTimeMins);
  if($('sub-watch-time'))$('sub-watch-time').textContent = availText.replace('{m}', watchTimeMins);

  saveUserData();
}

function handleSubjectClick(key) { 
  selectedSubjectKey = key; 
  $('selected-subject-title').textContent = `${i18n[currentLang].subjects[key]}`; 
  showScreen('session-type-screen'); 
}

function startHomeworkSession() { 
  startTask(selectedSubjectKey, 120, 'واجب', 'حل واجب 120 دقيقة'); 
}

function showCustomSetup(type) { 
  sessionType = type; 
  $('custom-setup-title').textContent = `${getTranslatedType(type)}: ${i18n[currentLang].subjects[selectedSubjectKey]}`;
  $('custom-topic-label').textContent = type === 'مذاكرة' ? i18n[currentLang].study_topic_label : i18n[currentLang].summary_topic_label; 
  $('custom-topic').value = ""; 
  $('custom-time').value = "60"; 
  showScreen('custom-setup-screen'); 
}

function confirmCustomStart() { 
  let time = parseInt($('custom-time').value) || 60; 
  let topic = $('custom-topic').value.trim() || i18n[currentLang].untitled;
  startTask(selectedSubjectKey, Math.min(Math.max(time, 1), 120), sessionType, topic); 
}

function openAdminPanel() {
  if (currentUser !== 'admin') {
    alert("هذه الصفحة مخصصة للأدمن فقط!");
    showScreen('subject-selection');
    return;
  }
  generateExamInputFields();
  renderAdminUsersList();
  renderAcceptedSongs();
  showScreen('admin-panel-screen');
}

function generateExamInputFields() {
  const count = parseInt($('exam-question-count').value) || 1;
  const container = $('exam-questions-inputs');
  container.innerHTML = "<h4>الأسئلة:</h4>";
  for(let i = 1; i <= count; i++) {
    container.innerHTML += `
      <div class="form-group" style="border:1px solid var(--border-color); padding:10px; border-radius:8px; margin-bottom:10px;">
        <label>السؤال ${i}:</label>
        <input type="text" id="admin-q-${i}" class="input-field" placeholder="اكتب السؤال هنا...">
      </div>
    `;
  }
}

// --- 4. نشر امتحان جديد بواسطة الأدمن في Firebase ---
function saveAdminExam() {
  const subject = $('exam-subject').value;
  const type = $('exam-type').value;
  const duration = parseInt($('exam-duration').value) || 30;
  const count = parseInt($('exam-question-count').value) || 1;
  
  let questions = [];
  for (let i = 1; i <= count; i++) {
    const q = $(`admin-q-${i}`).value.trim();
    if (q) questions.push(q);
  }

  if (questions.length === 0) return alert("يرجى كتابة الأسئلة بشكل صحيح!");

  const examData = {
    subject,
    type,
    duration,
    questions,
    createdDate: new Date().toLocaleDateString(),
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection("exams").doc("current_exam").set(examData)
    .then(() => {
      alert("تم نشر امتحان الأدمن بنجاح على السحابة! 🚀");
      showScreen('subject-selection');
      checkAvailableAdminExam();
    })
    .catch((error) => console.error("خطأ في نشر الامتحان: ", error));
}

// --- 5. الاستماع التلقائي المباشر (Real-time) للامتحانات المتاحة ---
function checkAvailableAdminExam() {
  db.collection("exams").doc("current_exam").onSnapshot((doc) => {
    const loungeCard = $('exam-waiting-lounge');
    const banner = $('admin-exam-banner');
    const loungeIcon = $('lounge-status-icon');
    const loungeTitle = $('lounge-title');
    const loungeDesc = $('lounge-subtitle');

    if (doc.exists) {
      const exam = doc.data();
      loungeCard.classList.remove('pulse-border');
      loungeCard.classList.add('exam-ready');
      loungeIcon.textContent = "📝";
      loungeTitle.textContent = i18n[currentLang].exam_ready_title;
      loungeDesc.textContent = i18n[currentLang].exam_ready_desc;

      banner.classList.remove('hidden');
      $('exam-banner-info').innerHTML = `<strong>امتحان الأدمن (${exam.type}):</strong> مادة ${i18n[currentLang].subjects[exam.subject]} | المدة: ${exam.duration} دقيقة | عدد الأسئلة: ${exam.questions.length}`;
    } else {
      loungeCard.classList.add('pulse-border');
      loungeCard.classList.remove('exam-ready');
      loungeIcon.textContent = "⏳";
      loungeTitle.textContent = i18n[currentLang].waiting_exam_title;
      loungeDesc.textContent = i18n[currentLang].waiting_exam_desc;

      banner.classList.add('hidden');
    }
  });
}

function startAdminExam() {
  const exam = JSON.parse(localStorage.getItem("current_admin_exam"));
  if (!exam) return;

  isExamSession = true;
  totalSecondsRemaining = exam.duration * 60;
  secondsElapsed = 0;

  $('exam-take-title').textContent = `امتحان الأدمن: ${i18n[currentLang].subjects[exam.subject]}`;
  
  const qContainer = $('exam-questions-container');
  qContainer.innerHTML = exam.questions.map((q, idx) => `
    <div style="margin-bottom:15px; border-bottom:1px solid var(--border-color); padding-bottom:10px;">
      <p><strong>س${idx+1}: ${q}</strong></p>
      <label>كتابة الحل بالنص:</label>
      <textarea id="user-exam-text-${idx}" class="input-field" style="height:70px;"></textarea>
      
      <label style="margin-top:8px; display:block;">أو ارفع رابط صورة الحل:</label>
      <input type="text" id="user-exam-img-${idx}" class="input-field" placeholder="https://example.com/answer-image.jpg">
    </div>
  `).join('');

  showScreen('exam-take-screen');
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    totalSecondsRemaining--;
    secondsElapsed++;
    $('exam-timer-display').textContent = `${Math.floor(totalSecondsRemaining/60).toString().padStart(2,'0')}:${(totalSecondsRemaining%60).toString().padStart(2,'0')}`;
    if(totalSecondsRemaining <= 0) {
      clearInterval(timerInterval);
      submitExamAnswers();
    }
  }, 1000);
}

function submitExamAnswers() {
  clearInterval(timerInterval);
  const exam = JSON.parse(localStorage.getItem("current_admin_exam"));
  let answers = [];

  exam.questions.forEach((q, idx) => {
    const text = $(`user-exam-text-${idx}`)?.value.trim() || '';
    const img = $(`user-exam-img-${idx}`)?.value.trim() || '';
    answers.push({ question: q, text, img });
  });

  let users = JSON.parse(localStorage.getItem("app_users") || "{}");
  if (users[currentUser]) {
    if (!users[currentUser].submittedExams) users[currentUser].submittedExams = [];
    users[currentUser].submittedExams.unshift({
      id: Date.now(),
      examId: exam.id,
      subject: exam.subject,
      answers,
      status: "بانتظار التصحيح",
      feedback: "",
      score: null
    });
    localStorage.setItem("app_users", JSON.stringify(users));
  }

  alert("تم إرسال إجاباتك للأدمن بنجاح! سيتم تصحيحها قريباً.");
  showScreen('subject-selection');
}

function renderAdminUsersList() {
  const users = JSON.parse(localStorage.getItem("app_users") || "{}");
  const list = $('admin-users-list');
  list.innerHTML = "";

  Object.keys(users).forEach(u => {
    if (u === 'admin') return;
    const userData = users[u];
    const exams = userData.submittedExams || [];
    const isOnline = userData.isOnline ?? false;

    list.innerHTML += `
      <div style="border:1px solid var(--border-color); padding:10px; border-radius:8px; margin-bottom:10px; background:var(--bg-color);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4>👤 ${u} (⭐ ${userData.points} | 💎 ${userData.adminPoints || 0})</h4>
          <span class="user-status-tag">
            <span class="status-indicator ${isOnline ? 'online' : 'offline'}"></span>
            <small style="font-weight:bold; color: ${isOnline ? 'var(--success-color)' : 'var(--subtext-color)'}">
              ${isOnline ? i18n[currentLang].status_online : i18n[currentLang].status_offline}
            </small>
          </span>
        </div>
        <p><small>عدد الامتحانات المقدمة: ${exams.length}</small></p>
        
        ${exams.map((ex, exIdx) => `
          <div style="margin-top:8px; padding:8px; background:var(--card-bg); border-radius:6px;">
            <strong>امتحان ${i18n[currentLang].subjects[ex.subject]} - الحالة: ${ex.status}</strong>
            <div style="font-size:0.85rem; margin:5px 0;">
              ${ex.answers.map((a, i) => `
                <p><strong>س${i+1}:</strong> ${a.question}</p>
                <p>💬 الإجابة: ${a.text || 'لا توجد إجابة نصية'}</p>
                ${a.img ? `<p>🖼️ صورة: <a href="${a.img}" target="_blank">عرض الصورة</a></p>` : ''}
              `).join('')}
            </div>
            
            ${ex.status === "بانتظار التصحيح" ? `
              <div style="margin-top:8px;">
                <label>ملاحظات/شرح الأدمن للخطأ:</label>
                <input type="text" id="admin-feedback-${u}-${exIdx}" class="input-field" placeholder="اكتب الشرح هنا...">
                <div style="display:flex; gap:5px; margin-top:5px;">
                  <button class="btn success-btn" style="flex:1;" onclick="gradeExam('${u}', ${exIdx}, true)">الدرجة الكاملة (+1 نقطة أدمن 💎)</button>
                  <button class="btn cancel-btn" style="flex:1;" onclick="gradeExam('${u}', ${exIdx}, false)">إجابة غير كاملة / خاطئة</button>
                </div>
              </div>
            ` : `<p style="color:var(--success-color);">النتيجة: ${ex.score} - ${ex.feedback ? `شرح الأدمن: ${ex.feedback}` : ''}</p>`}
          </div>
        `).join('')}
      </div>
    `;
  });
}

function gradeExam(username, examIndex, isFullCorrect) {
  let users = JSON.parse(localStorage.getItem("app_users") || "{}");
  const feedback = $(`admin-feedback-${username}-${examIndex}`)?.value.trim() || '';

  if (users[username] && users[username].submittedExams[examIndex]) {
    const exam = users[username].submittedExams[examIndex];
    exam.status = "تم التصحيح";
    exam.feedback = feedback;
    
    if (isFullCorrect) {
      exam.score = "ممتاز! الدرجة الكاملة 💯";
      users[username].adminPoints = (users[username].adminPoints || 0) + 1;
      alert(`تم تصحيح الامتحان مع الدرجة الكاملة! تم منح الطالب ${username} +1 نقطة أدمن 💎`);
    } else {
      exam.score = "لم يحصل على الدرجة الكاملة";
      alert(`تم تسجيل النتيجة واللاحظات للطالب ${username}`);
    }

    localStorage.setItem("app_users", JSON.stringify(users));
    renderAdminUsersList();
  }
}

function openStore() {
  $('main-app-title').classList.add('hidden');
  renderShop();
  showScreen('shop-screen');
}

function closeStore() {
  $('main-app-title').classList.remove('hidden');
  showScreen('subject-selection');
}

function getShopItems() {
  return JSON.parse(localStorage.getItem("custom_shop_items") || JSON.stringify(DEFAULT_SHOP_ITEMS));
}

function renderShop() {
  const items = getShopItems();
  const shopGrid = $('shop-grid');
  
  shopGrid.innerHTML = items.map(item => {
    const isOwner = item.creator === currentUser;
    let discountAmount = item.price >= 150 ? 100 : 30;
    let discountedPrice = Math.max(0, item.price - discountAmount);
    
    let adminDiscountBadge = "";
    if (adminPoints > 0) {
      adminDiscountBadge = `<small style="color:#ecc94b; display:block; font-weight:bold; margin-top:3px;">💎 خصم الأدمن (توفير ${discountAmount}⭐) متاح!</small>`;
    }

    return `
      <div class="shop-item">
        <img src="${item.img || 'https://via.placeholder.com/150'}" class="shop-item-img" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
        <h3>${item.title}</h3>
        <p class="shop-item-script">${item.script}</p>
        <div class="shop-item-price">⭐ ${item.price}</div>
        ${adminDiscountBadge}
        <small style="color:var(--subtext-color);">المنشئ: ${isOwner ? 'أنت' : item.creator}</small>
        
        ${isOwner ? `
          <button class="btn secondary-btn" style="width:100%; margin-top:10px; cursor:not-allowed;" disabled>${i18n[currentLang].owner_badge}</button>
        ` : `
          <div style="display:flex; flex-direction:column; gap:6px; margin-top:10px;">
            <button class="btn subject-btn" onclick="buyShopItem(${item.id}, false)">شراء عادي (⭐ ${item.price})</button>${adminPoints > 0 ? `
              <button class="btn success-btn" style="background:#d69e2e;" onclick="buyShopItem(${item.id}, true)">💎 استخدام نقطة الأدمن لشراء بـ ⭐ ${discountedPrice}</button>
            ` : ''}
          </div>
        `}
      </div>
    `;
  }).join('');
}

function buyShopItem(id, useAdminPoint) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if(!item) return;

  if (item.creator === currentUser) {
    return alert("لا يمكنك شراء منتجك الخاص!");
  }

  let finalPrice = item.price;

  if (useAdminPoint) {
    if (adminPoints <= 0) return alert("ليس لديك نقاط أدمن لاستخدام هذا الخصم!");
    let discountAmount = item.price >= 150 ? 100 : 30;
    finalPrice = Math.max(0, item.price - discountAmount);
  }

  if (totalPoints < finalPrice) {
    return alert("عذراً، لا تمتلك نجوم كافية لإنهاء الشراء!");
  }

  if (item.type === 'song_idea') {
    const userSubmission = prompt("اكتب الأغنية أو الفكرة التي تريد مشاركتها وإرسالها للأدمن:");
    if (!userSubmission || !userSubmission.trim()) return alert("تم إلغاء الشراء، يرجى كتابة الأغنية أو الفكرة.");

    let pendingSubmissions = JSON.parse(localStorage.getItem("pending_songs_ideas") || "[]");
    pendingSubmissions.push({
      id: Date.now(),
      user: currentUser,
      text: userSubmission.trim(),
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem("pending_songs_ideas", JSON.stringify(pendingSubmissions));
    alert("تم إرسال أغنيتك/فكرتك للأدمن بنجاح وسيتم مراجعتها لنشرها بالموقع! 🎵");
  }

  totalPoints -= finalPrice;
  
  if (useAdminPoint) {
    adminPoints--;
  }
  
  if (item.creator !== 'system') {
    let users = JSON.parse(localStorage.getItem("app_users") || "{}");
    if (users[item.creator]) {
      users[item.creator].points = (users[item.creator].points || 0) + finalPrice;
      localStorage.setItem("app_users", JSON.stringify(users));
    }
  }

  if(item.type === 'game') gameTimeMins += (item.mins || 30);
  if(item.type === 'watch') watchTimeMins += (item.mins || 30);

  updateUI();
  alert(`مبروك! تم شراء "${item.title}" بنجاح 🎉`);
  renderShop();
}

function renderAcceptedSongs() {
  let pending = JSON.parse(localStorage.getItem("pending_songs_ideas") || "[]");
  let accepted = JSON.parse(localStorage.getItem("accepted_songs_ideas") || "[]");
  const container = $('accepted-songs-list');
  
  container.innerHTML = `
    <h4>طلبات معلقة بانتظار الموافقة:</h4>
    ${pending.length === 0 ? '<p><small>لا توجد طلبات جديدة</small></p>' : pending.map((p, idx) => `
      <div style="padding:8px; background:var(--card-bg); border-radius:6px; margin-top:5px;">
        <p><strong>${p.user}:</strong> "${p.text}"</p>
        <button class="btn success-btn small-btn" onclick="approveSong(${idx})">قبول ونشر في الموقع 🎵</button>
      </div>
    `).join('')}

    <h4 style="margin-top:15px;">الأغاني والأفكار المنشورة:</h4>
    ${accepted.map(a => `<p>🎶 <strong>${a.user}:</strong> "${a.text}"</p>`).join('')}
  `;
}

function approveSong(index) {
  let pending = JSON.parse(localStorage.getItem("pending_songs_ideas") || "[]");
  let accepted = JSON.parse(localStorage.getItem("accepted_songs_ideas") || "[]");

  const item = pending.splice(index, 1)[0];
  accepted.push(item);

  localStorage.setItem("pending_songs_ideas", JSON.stringify(pending));
  localStorage.setItem("accepted_songs_ideas", JSON.stringify(accepted));
  alert("تمت الموافقة ونشر الأغنية/الفكرة بالموقع!");
  renderAcceptedSongs();
}

function saveNewShopItem() {
  if (totalPoints < 200) return alert("عذراً! تحتاج إلى 200 نجمة لإنشاء منتج جديد.");
  const img = $('item-img-url').value.trim();
  const title = $('item-title').value.trim();
  const script = $('item-script').value.trim();
  const price = parseInt($('item-price').value) || 0;

  if(!title || !script || price <= 0) return alert("يرجى ملء كافة البيانات بشكل صحيح!");

  totalPoints -= 200;
  updateUI();

  const items = getShopItems();
  items.push({ id: Date.now(), creator: currentUser, title, script, price, img: img || "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&q=80", sales: [] });
  localStorage.setItem("custom_shop_items", JSON.stringify(items));
  
  $('item-img-url').value = ""; $('item-title').value = ""; $('item-script').value = ""; $('item-price').value = "50";
  alert("تم خصم 200 نجمة ونشر منتجك بنجاح! 🚀");
  openStore();
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  const toggleCheckbox = $('theme-toggle-checkbox');
  if(toggleCheckbox) toggleCheckbox.checked = (newTheme === "dark");
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  $('lang-btn-text').textContent = lang === "ar" ? "EN" : "عربي";
  document.querySelectorAll('[data-i18n]').forEach(e => {
    const k = e.getAttribute('data-i18n'); 
    if (i18n[lang][k]) e.textContent = i18n[lang][k];
  });
  updateUI(); 
  renderSubjectButtons(); 
  renderHistory();
  renderShop();
  checkAvailableAdminExam();
}

function toggleLanguage() { localStorage.setItem("lang", currentLang === "ar" ? "en" : "ar"); applyLanguage(localStorage.getItem("lang")); }
function openInstructions() { $('main-app-title').classList.add('hidden'); showScreen('instructions-screen'); }
function closeInstructions() { $('main-app-title').classList.remove('hidden'); showScreen('subject-selection'); }

function useRewardTime(type) {
  if (type === 'gaming' && gameTimeMins <= 0) return alert("ليس لديك دقائق لعب كافية!");
  if (type === 'watch' && watchTimeMins <= 0) return alert("ليس لديك دقائق مشاهدة كافية!");
  startRewardTimer(type === 'gaming' ? gameTimeMins : watchTimeMins, type);
}

function startRewardTimer(minutes, type) {
  isBreakSession = true; selectedSubjectKey = type; sessionType = type === 'gaming' ? 'لعب' : 'مشاهدة';
  currentTopic = ""; allottedMinutes = minutes; totalSecondsRemaining = minutes * 60; secondsElapsed = 0; isPaused = false;
  $('main-app-title').classList.remove('hidden');
  $('current-subject-title').textContent = i18n[currentLang].subjects[type];$('timer-topic-detail').classList.add('hidden');
  document.querySelector('#timer-screen .instruction').textContent = i18n[currentLang].timer_break_instruction;
  updateTimerDisplay(totalSecondsRemaining); updatePauseBtnUI(); showScreen('timer-screen');
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if(!isPaused) {
      totalSecondsRemaining--; secondsElapsed++; updateTimerDisplay(totalSecondsRemaining);
      if (totalSecondsRemaining <= 0) { clearInterval(timerInterval); completeTask(false); }
    }
  }, 1000);
}

function renderSubjectButtons() { $('subjects-grid').innerHTML = SUBJECT_KEYS.map(i => `<button class="btn subject-btn" onclick="handleSubjectClick('${i.key}')">${i18n[currentLang].subjects[i.key]}</button>`).join(''); }
function showScreen(id) { document.querySelectorAll('.view-screen').forEach(s => s.classList.add('hidden')); $(id).classList.remove('hidden'); }

function startTask(key, mins, type, topic = '') {
  isBreakSession = false; 
  selectedSubjectKey = key; 
  sessionType = type; 
  currentTopic = topic; 
  allottedMinutes = mins; 
  secondsElapsed = 0;
  totalSecondsRemaining = mins * 60; 
  isPaused = false;

  $('main-app-title').classList.remove('hidden');$('current-subject-title').textContent = `${getTranslatedType(type)} - ${i18n[currentLang].subjects[key]}`;
  $('timer-topic-detail').textContent = topic ? `${i18n[currentLang].topic_label}${topic}` : '';
  $('timer-topic-detail').classList.toggle('hidden', !topic);
  document.querySelector('#timer-screen .instruction').textContent = i18n[currentLang].timer_instruction;
  
  updateTimerDisplay(totalSecondsRemaining); 
  updatePauseBtnUI(); 
  showScreen('timer-screen'); 
  runTimer();
}

function runTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isPaused) {
      totalSecondsRemaining--; secondsElapsed++; updateTimerDisplay(totalSecondsRemaining);
      if (totalSecondsRemaining <= 0) { clearInterval(timerInterval); completeTask(false); }
    }
  }, 1000);
}

function togglePauseTimer() {
  if (!isPaused && pauseCredits > 0) { isPaused = true; pauseCredits--; } else { isPaused = false; }
  updateUI(); updatePauseBtnUI();
}

function updatePauseBtnUI() {
  const btn = $('pause-btn');
  btn.textContent = isPaused ? i18n[currentLang].resume_btn_text : i18n[currentLang].pause_btn_text;
  btn.style.backgroundColor = isPaused ? "#38a169" : "#d69e2e";
  btn.disabled = !isPaused && pauseCredits <= 0;
}

function updateTimerDisplay(s) { $('timer-display').textContent = `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`; }
function cancelTask() { clearInterval(timerInterval); showScreen('subject-selection'); }
function finishTask() { clearInterval(timerInterval); completeTask(true); }

function completeTask(isSuccess) {
  let earnedPoints = 0;
  let minsSpent = Math.max(1, Math.floor(secondsElapsed / 60)); 

  if (isBreakSession) {
    if (selectedSubjectKey === 'gaming') gameTimeMins = Math.max(0, gameTimeMins - minsSpent);
    else if (selectedSubjectKey === 'watch') watchTimeMins = Math.max(0, watchTimeMins - minsSpent);
    updateUI();
    const timeStr = i18n[currentLang].time_taken_str.replace('{mins}', Math.floor(secondsElapsed / 60)).replace('{secs}', secondsElapsed % 60);
    $('result-title').textContent = "استراحة سعيدة! 🎮🎬"; 
    $('result-title').style.color = "#38a169";
    $('result-message').innerHTML = `Session finished: <strong>${i18n[currentLang].subjects[selectedSubjectKey]}</strong><br><br><span style='font-size: 1.3rem; color: #3182ce;'>${timeStr}</span>`;
    saveHistoryRecord(selectedSubjectKey, selectedSubjectKey, "", timeStr, true);
    showScreen('result-screen');
    return;
  }

  if (isSuccess) {
    if (secondsElapsed < 10) {
      alert("⚠️️ تنبيه: الجلسة قصيرة جداً (أقل من 10 ثوانٍ)، فلم يتم احتساب نقاط لها لحماية النظام.");
      earnedPoints = 0;
    } else if (sessionType === 'واجب') {
      let ratio = Math.min(1, secondsElapsed / (allottedMinutes * 60));
      earnedPoints = Math.max(5, Math.floor(100 * ratio));
    } else {
      earnedPoints = Math.floor(minsSpent * 0.5); 
    }
    totalPoints += earnedPoints; 
    updateUI();
  }

  const timeStr = i18n[currentLang].time_taken_str.replace('{mins}', Math.floor(secondsElapsed / 60)).replace('{secs}', secondsElapsed % 60);
  $('result-title').textContent = isSuccess ? i18n[currentLang].result_title_success.replace('{type}', getTranslatedType(sessionType)) : i18n[currentLang].result_title_failed;
  $('result-title').style.color = isSuccess ? "#38a169" : "#e53e3e";
  
  $('result-message').innerHTML = isSuccess 
    ? i18n[currentLang].result_msg_success.replace('{type}', getTranslatedType(sessionType)).replace('{subject}', i18n[currentLang].subjects[selectedSubjectKey]).replace('{topic}', currentTopic ? `(${currentTopic})` : '').replace('{time}', timeStr).replace('{reward}', i18n[currentLang].reward_msg.replace('{pts}', earnedPoints))
    : i18n[currentLang].result_msg_failed.replace('{type}', getTranslatedType(sessionType)).replace('{subject}', i18n[currentLang].subjects[selectedSubjectKey]).replace('{minutes}', allottedMinutes);

  saveHistoryRecord(selectedSubjectKey, sessionType, currentTopic, isSuccess ? timeStr : i18n[currentLang].time_expired_str.replace('{minutes}', allottedMinutes), isSuccess);
  showScreen('result-screen');
}

function getTranslatedType(type) {
  if (type === 'gaming') return i18n[currentLang].type_gaming;
  if (type === 'watch') return i18n[currentLang].type_watch;
  return type === 'مذاكرة' ? i18n[currentLang].type_study : (type === 'تلخيص' ? i18n[currentLang].type_summary : i18n[currentLang].type_homework);
}

function getUserHistory() {
  if(!currentUser) return [];
  let users = JSON.parse(localStorage.getItem("app_users") || "{}");
  return users[currentUser]?.history || [];
}

function saveHistoryRecord(key, type, topic, timeText, isSuccess) {
  if(!currentUser) return;
  let users = JSON.parse(localStorage.getItem("app_users") || "{}");
  if(!users[currentUser].history) users[currentUser].history = [];
  users[currentUser].history.unshift({ id: Date.now(), subjectKey: key, type, topic, timeText, dateText: new Date().toLocaleDateString(), isSuccess });
  localStorage.setItem("app_users", JSON.stringify(users)); renderHistory();
}

function deleteHistoryRecord(id) {
  if(!currentUser) return;
  let users = JSON.parse(localStorage.getItem("app_users") || "{}");
  if(users[currentUser] && users[currentUser].history) {
    users[currentUser].history = users[currentUser].history.filter(i => i.id !== id);
    localStorage.setItem("app_users", JSON.stringify(users));
  }
  renderHistory();
}

function clearAllHistory() {
  if (confirm(i18n[currentLang].confirm_clear_all)) {
    if(!currentUser) return;
    let users = JSON.parse(localStorage.getItem("app_users") || "{}");
    if(users[currentUser]) { users[currentUser].history = []; localStorage.setItem("app_users", JSON.stringify(users)); }
    renderHistory();
  }
}

function renderHistory() {
  const h = getUserHistory();
  if (!h.length) return $('history-list').innerHTML = `<li class="empty-msg">${i18n[currentLang].empty_history}</li>`;
  $('history-list').innerHTML = h.map(i => `
    <li class="history-item ${i.isSuccess ? '' : 'failed'}">
      <div>
        <strong>${i18n[currentLang].subjects[i.subjectKey] || i.subjectKey} (${getTranslatedType(i.type)})</strong>
        ${i.topic ? `<br><small>📖 ${i.topic}</small>` : ''}
        <br><small>${i.timeText}</small>
      </div>
      <button class="delete-item-btn" onclick="deleteHistoryRecord(${i.id})" title="${i18n[currentLang].delete_btn}">✕</button>
    </li>
  `).join('');
}