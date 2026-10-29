# 🏃‍♂️ Escape from the Monster Chase Logic Game Project

Welcome to the **Escape from the Monster Chase Logic Game** project! This simple project was specifically created to **practice loop logic (`while loop`) and branching (`if-else`)** using the **JavaScript** programming language. 

The output of this program will be displayed directly in your **terminal / console**. 

---

## 📌 How It Works & Logic Testing

To test the entire program logic flow, we need to manually input the variable values on **Lines 11, 12, and 16 (Phase 1)** as well as **Lines 58, 63, and 68 (Phase 2)** before running the code. 

There are **5 different ending conditions (outputs)** that you can test using the number combinations below:

### 1️⃣ Condition 1: Congratulations! You successfully escaped the monster (Phase 1 Instant Win)
*The player runs very fast and completely escapes during Phase 1.*
* **Line 11** (`let langkah`) = `35`
* **Line 12** (`let seranganMonster`) = `10`
* **Line 16** (`stamina`) = `stamina - 10`

### 2️⃣ Condition 2: You successfully escaped but fell asleep from exhaustion (Phase 1 Win But Tired)
*The player forces themselves to run fast and completely runs out of energy at the end of Phase 1.*
* **Line 11** (`let langkah`) = `35`
* **Line 12** (`let seranganMonster`) = `10`
* **Line 16** (`stamina`) = `stamina - 45`

### 3️⃣ Condition 3: Congratulations! You successfully escaped after resting (Phase 2 Win)
*The player hides in the bushes during Phase 1, then successfully makes a full escape in Phase 2.*
* **First Loop Values (Phase 1):**
  * **Line 11** = `14` | **Line 12** = `16` | **Line 16** = `stamina - 29`
* **Second Loop Values (Phase 2):**
  * **Line 58** (`jarakAman`) = `jarakAman + 15`
  * **Line 63** (`darahPemain`) = `darahPemain - 7`
  * **Line 68** (`stamina`) = `stamina - 13`

### 4️⃣ Condition 4: What a pity! You got caught at the very last second! (Phase 2 Loss)
*The player successfully hides in Phase 1, but gets caught by the monster while trying to run in Phase 2.*
* **First Loop Values (Phase 1):** Same as number 3.
* **Second Loop Values (Phase 2):**
  * **Line 58** (`jarakAman`) = `jarakAman + 5`
  * **Line 63** (`darahPemain`) = `darahPemain - 25`
  * **Line 68** (`stamina`) = `stamina - 13`

### 5️⃣ Condition 5: You are exhausted and captured to the Monster's lair (Phase 1 Instant Loss)
*The player runs out of health and stamina at the very beginning of the game before having a chance to hide.*
* **Line 11** (`let langkah`) = `10`
* **Line 12** (`let seranganMonster`) = `45`
* **Line 16** (`stamina`) = `stamina - 45`

---

## 🎯 Conclusion
This project was purely made to **test and sharpen logical thinking** in programming. Even though the code can still be refactored to be cleaner, this project successfully helped me **deeply understand** how data flows within loops and conditional structures.

**Thank you for checking out and testing my project!** 🙏

---

> *Catatan: Saya tidak bisa bahasa Inggris, ini terjemahan dari AI. (Note: I do not speak English, this is an AI translation).*
