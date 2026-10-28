import re

# 1. Update src/styles.css
with open("src/styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Update glow to red + white highlight
old_glow = r'''@keyframes ecgPulseGlow \{.*?\}'''
new_glow = '''@keyframes ecgPulseGlow {
  0% {
    filter: drop-shadow(0 0 1.5px rgba(239, 68, 68, 0.4));
  }
  26% {
    filter: drop-shadow(0 0 2.5px rgba(239, 68, 68, 0.5));
  }
  36% {
    filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.95)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.85));
  }
  48% {
    filter: drop-shadow(0 0 6px rgba(239, 68, 68, 0.75)) drop-shadow(0 0 3px rgba(255, 255, 255, 0.65));
  }
  64% {
    filter: drop-shadow(0 0 1.5px rgba(239, 68, 68, 0.4));
  }
  100% {
    filter: drop-shadow(0 0 1.5px rgba(239, 68, 68, 0.4));
  }
}'''

css_updated = re.sub(old_glow, new_glow, css, flags=re.DOTALL)

# Update badgePulseHalo border color
css_updated = css_updated.replace('border: 1.5px solid rgba(0, 101, 145, 0.45);', 'border: 1.5px solid rgba(239, 68, 68, 0.5);')

with open("src/styles.css", "w", encoding="utf-8") as f:
    f.write(css_updated)
print("Updated src/styles.css successfully!")

# 2. Update src/main.js header icon
with open("src/main.js", "r", encoding="utf-8") as f:
    main_code = f.read()

old_header_icon = r'''<div class="dynamic-heartbeat-badge relative w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/25 via-secondary/10 to-sky-50 flex items-center justify-center text-secondary border-2 border-secondary/40 shadow-xs group-hover:scale-105 transition-transform" title="Live Cardiac Telemetry Active \(0\.5x Physiological Rhythm\)">\s*<svg class="w-7 h-7 heartbeat-pulse overflow-visible"[^>]*>.*?<!-- Active seamless travelling ECG telemetry wave \(zero loop jump\) -->\s*<path class="ecg-rhythm-line"[^>]*/>\s*</svg>\s*</div>'''

new_header_icon = '''<div class="dynamic-heartbeat-badge relative w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 via-rose-50 to-red-50 flex items-center justify-center border-2 border-red-300/80 shadow-xs group-hover:scale-105 transition-transform" title="Live Cardiac Telemetry Active">
            <svg class="w-7 h-7 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Red Heart Contour & Fill -->
              <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
              <!-- Continuous White ECG Base Guide Trace -->
              <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.45"/>
              <!-- Continuous White Active Telemetry Wave -->
              <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>'''

main_code_updated, count_main = re.subn(old_header_icon, new_header_icon, main_code, flags=re.DOTALL)
print(f"Updated src/main.js header icon: {count_main} match(es)")
with open("src/main.js", "w", encoding="utf-8") as f:
    f.write(main_code_updated)

# 3. Update src/views/landingView.js
with open("src/views/landingView.js", "r", encoding="utf-8") as f:
    landing_code = f.read()

# Update hero icon
old_landing_hero_icon = r'''<div class="dynamic-heartbeat-badge relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-secondary/25 via-secondary/10 to-sky-50 flex items-center justify-center text-secondary border-2 border-secondary/40 shadow-md shrink-0" title="Live Cardiac Telemetry Active">\s*<svg class="w-10 h-10 sm:w-12 sm:h-12 heartbeat-pulse overflow-visible"[^>]*>.*?<!-- Active seamless travelling ECG telemetry wave \(zero loop jump\) -->\s*<path class="ecg-rhythm-line"[^>]*/>\s*</svg>\s*</div>'''

new_landing_hero_icon = '''<div class="dynamic-heartbeat-badge relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-500/20 via-rose-50 to-red-50 flex items-center justify-center border-2 border-red-300/80 shadow-md shrink-0" title="Live Cardiac Telemetry Active">
    <svg class="w-10 h-10 sm:w-12 sm:h-12 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Red Heart Contour & Fill -->
      <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
      <!-- Continuous White ECG Base Guide Trace -->
      <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.45"/>
      <!-- Continuous White Active Telemetry Wave -->
      <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>'''

landing_code_updated, count_hero = re.subn(old_landing_hero_icon, new_landing_hero_icon, landing_code, flags=re.DOTALL)
print(f"Updated hero icon in landingView.js: {count_hero} match(es)")

# Update footer icon
old_landing_footer_icon = r'''<div class="dynamic-heartbeat-badge relative w-7 h-7 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/25 shadow-xs">\s*<svg class="w-4 h-4 heartbeat-pulse"[^>]*>.*?<path class="ecg-rhythm-line"[^>]*/>\s*</svg>\s*</div>'''

new_landing_footer_icon = '''<div class="dynamic-heartbeat-badge relative w-7 h-7 rounded-lg bg-red-500/15 flex items-center justify-center border border-red-300/60 shadow-xs">
  <svg class="w-4 h-4 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
    <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.45"/>
    <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>'''

landing_code_updated, count_footer = re.subn(old_landing_footer_icon, new_landing_footer_icon, landing_code_updated, flags=re.DOTALL)
print(f"Updated footer icon in landingView.js: {count_footer} match(es)")

# Remove Continue with Google and Continue with GitHub buttons and the "or with email" divider
old_social_logins = r'''<div class="flex flex-col gap-2\.5"><button[^>]*>.*?<span>Continue with Google</span></button><button[^>]*>.*?<span>Continue with GitHub</span></button></div><div class="flex items-center gap-3 my-0\.5"><div class="flex-1 h-px bg-outline-variant/50"></div><span class="text-\[11px\] uppercase tracking-wider text-on-surface-variant font-medium">or with email</span><div class="flex-1 h-px bg-outline-variant/50"></div></div>'''

landing_code_updated, count_social = re.subn(old_social_logins, '', landing_code_updated, flags=re.DOTALL)
print(f"Removed Google and GitHub buttons from landingView.js: {count_social} match(es)")

with open("src/views/landingView.js", "w", encoding="utf-8") as f:
    f.write(landing_code_updated)
