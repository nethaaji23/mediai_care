with open("src/main.js", "r", encoding="utf-8") as f:
    main_code = f.read()

old_main_badge = '''<div class="dynamic-heartbeat-badge relative w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/25 via-secondary/10 to-sky-50 flex items-center justify-center text-secondary border-2 border-secondary/40 shadow-xs group-hover:scale-105 transition-transform" title="Live Cardiac Telemetry Active (0.5x Physiological Rhythm)">
            <svg class="w-7 h-7 heartbeat-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.3"/>
              <!-- Continuous unbroken ECG base trace (zero line gap/break) -->
              <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#006591" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.35"/>
              <!-- Active seamless travelling ECG telemetry wave (zero loop jump) -->
              <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#006591" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>'''

new_main_badge = '''<div class="dynamic-heartbeat-badge relative w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 via-rose-50 to-red-50 flex items-center justify-center border-2 border-red-300/80 shadow-xs group-hover:scale-105 transition-transform" title="Live Cardiac Telemetry Active">
            <svg class="w-7 h-7 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Red Heart Contour & Fill -->
              <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
              <!-- Continuous White ECG Base Guide Trace -->
              <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.5"/>
              <!-- Continuous White Active Telemetry Wave -->
              <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>'''

if old_main_badge in main_code:
    main_code = main_code.replace(old_main_badge, new_main_badge)
    print("Replaced main header badge successfully!")
else:
    print("Could not find exact old_main_badge")

with open("src/main.js", "w", encoding="utf-8") as f:
    f.write(main_code)

# Now update landingView hero
with open("src/views/landingView.js", "r", encoding="utf-8") as f:
    landing_code = f.read()

old_landing_hero = '''<div class="dynamic-heartbeat-badge relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-secondary/25 via-secondary/10 to-sky-50 flex items-center justify-center text-secondary border-2 border-secondary/40 shadow-md shrink-0" title="Live Cardiac Telemetry Active">
    <svg class="w-10 h-10 sm:w-12 sm:h-12 heartbeat-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.3"/>
      <!-- Continuous unbroken ECG base trace (zero line gap/break) -->
      <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#006591" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.35"/>
      <!-- Active seamless travelling ECG telemetry wave (zero loop jump) -->
      <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#006591" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>'''

new_landing_hero = '''<div class="dynamic-heartbeat-badge relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-500/20 via-rose-50 to-red-50 flex items-center justify-center border-2 border-red-300/80 shadow-md shrink-0" title="Live Cardiac Telemetry Active">
    <svg class="w-10 h-10 sm:w-12 sm:h-12 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Red Heart Contour & Fill -->
      <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
      <!-- Continuous White ECG Base Guide Trace -->
      <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.5"/>
      <!-- Continuous White Active Telemetry Wave -->
      <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>'''

if old_landing_hero in landing_code:
    landing_code = landing_code.replace(old_landing_hero, new_landing_hero)
    print("Replaced landing hero badge successfully!")
else:
    print("Could not find exact old_landing_hero")

with open("src/views/landingView.js", "w", encoding="utf-8") as f:
    f.write(landing_code)
