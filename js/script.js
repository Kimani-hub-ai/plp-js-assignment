// 1. Button Click
document.getElementById("magicBtn").addEventListener("click", () => {
    alert("🎉 Button clicked!");
  });
  
  // 2. Keypress Detection
  const keyInput = document.getElementById("keyInput");
  const keyDisplay = document.getElementById("keyDisplay");
  
  keyInput.addEventListener("keydown", (e) => {
    keyDisplay.textContent = `You pressed: ${e.key}`;
  });
  
  // 3. Secret Double Click and Long Press
  const secretZone = document.getElementById("secretZone");
  const secretMsg = document.getElementById("secretMessage");
  let pressTimer;
  
  secretZone.addEventListener("dblclick", () => {
    secretMsg.textContent = "🎯 Double-clicked!";
  });
  
  secretZone.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
      secretMsg.textContent = "⏳ Long press activated!";
    }, 800);
  });
  
  secretZone.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
  });
  
  // 4. Change Button Color
  document.getElementById("colorChangeBtn").addEventListener("click", function () {
    this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  
  
  
  // 5. Tabs
  const tabBtns = document.querySelectorAll(".tabBtn");
  const tabContents = document.querySelectorAll(".tabContent");
  
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
  
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
  
      document.getElementById(`tab${target}`).classList.add("active");
    });
  });
  
  // 6. Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    const feedback = document.getElementById("formFeedback");
  
    if (!email.includes("@")) {
      feedback.textContent = "❌ Invalid email format!";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "🔐 Password must be at least 8 characters.";
      return;
    }
  
    feedback.textContent = "✅ All good! Form submitted.";
  });
  
  // Bonus: Real-time feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("formFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "🔐 Too short!";
    } else {
      feedback.textContent = "✔️ Strong enough!";
    }
  });
  