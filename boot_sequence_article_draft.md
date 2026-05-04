# Building a "Security-First" Intro: Creating a Simulated Boot Sequence in React

When building my professional portfolio, I didn't want it to feel like just another resume. As a Security Researcher and Software Engineer, I wanted the very first interaction to scream **"System Hardened."** 

The result was a simulated terminal boot sequence that "decrypts" my portfolio before the user can see it. Here is a breakdown of how I built it using React.

---

### The Vision: Branding Through Showmanship
In the technical world, your personal brand is everything. By creating a terminal-style intro, I immediately communicate three things to a visitor:
1. I am comfortable in a command-line environment.
2. I value security-first aesthetics.
3. I pay attention to the "User Experience" (UX) of my projects.

### Step 1: Defining the "System Logs"
The sequence starts with a "Script"—a simple array of strings that look like real kernel or security logs. By using prefixes like `[SYSTEM]`, `[KERN]`, and `[SEC]`, I mimic the output of a real Linux boot process.

```javascript
const messages = [
  "[SYSTEM] Initiating Secure Boot...",
  "[KERN] Loading Kernel Modules...",
  "[SEC] Checking for authorized signature...",
  "[SEC] Signature Verified: KOEHL_COMISKEY_v1.0",
  "[SYS] System Ready. Accessing Portfolio."
];
```

### Step 2: The Logic of Time
To make the text appear one line at a time, I used the `useState` and `useEffect` hooks. 

I created a `logs` state to hold the messages currently visible on the screen. Inside `useEffect`, I set up a `setInterval`. Every 200 milliseconds, the "heartbeat" of the component fires, grabbing the next string from my script and pushing it into the visible logs. 

Once the script is empty, I clear the interval (`clearInterval`) and trigger a callback to fade the intro out and show the main site.

### Step 3: Aesthetic Details (The "Hacker" Look)
A terminal isn't a terminal without the right CSS. I focused on three key visual elements:
- **Typography:** Using monospaced fonts (like Courier New) is non-negotiable.
- **Dynamic Timestamps:** Every line is prefixed with a real-time ISO string (`new Date().toISOString()`), which makes the "logs" feel alive.
- **The Blinking Cursor:** Adding a small, solid green block at the end of the text tells the eye that the "system" is still processing data.

### Conclusion: Learning in Public
Building this wasn't just about a "cool intro." It was an exercise in managing complex timing in React and understanding how to transition between two completely different UI states. 

Technical articles don't always have to be about complex algorithms. Sometimes, the best articles are about how you used simple tools—like strings and timers—to create a powerful first impression.

---
*Drafted for Koehl Comiskey's Portfolio.*
