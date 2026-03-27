# GoRide: High-Fidelity Registration Prototype
A functional HTML/JS prototype built to test the friction and flow of a **Mobile-Only OTP Registration**.

## 🎯 The UX Goal
The objective was to minimize "Time-to-Value" for new riders. In a transit app, every second spent on a registration screen is a potential drop-off. I moved from Figma to code to test the physical "feel" of numeric inputs and auto-advance logic.

## 🧠 Interaction Logic (The "Why")
I implemented the following JS-driven states to ensure a seamless experience:

* **Numeric-First Input:** Used `input type="tel"` to force the mobile numeric keypad, reducing typing errors.
* **Real-time Validation:** The "Get OTP" button remains in a `disabled` state until exactly 10 digits are entered.
* **Auto-Focus & Auto-Advance:** Once the OTP screen loads, the first input is automatically focused. As the user types, the focus jumps to the next box (and backspaces move it back).
* **State-Based Timer:** A 30-second `setInterval` countdown manages the "Resend OTP" button to prevent API spamming and user confusion.

## 🛠️ Tech Stack
* **HTML5/CSS3:** Semantic structure and mobile-responsive layout.
* **Vanilla JavaScript:** DOM manipulation, event listeners, and state management (No external libraries used).

## 🚀 Live Demo
[View Live Prototype](https://sourav2.github.io/GoRide-Prototype/) 
*(Note: Replace this with your actual GitHub Pages link)*
