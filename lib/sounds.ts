'use client';

export type SoundTheme = 'holo' | 'laser' | 'mechanical';

class CyberSoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;
  public theme: SoundTheme = 'holo';

  private init() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Set sound theme
  setTheme(newTheme: SoundTheme) {
    this.theme = newTheme;
    this.playClick();
  }

  // 1. MAIN CLICK SOUND (Rich, high-tech, ZERO pitch sweep / water drop effect)
  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      if (this.theme === 'holo') {
        // === THEME: HOLO-CHIME (Harmonic sci-fi terminal chord) ===
        // Transient cyber tap (instant crisp attack)
        const trans = this.ctx.createOscillator();
        const transG = this.ctx.createGain();
        trans.type = 'square';
        trans.frequency.setValueAtTime(2400, now);
        transG.gain.setValueAtTime(0.03, now);
        transG.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
        trans.connect(transG);
        transG.connect(this.ctx.destination);
        trans.start(now);
        trans.stop(now + 0.018);

        // Harmonic Tone 1: 587.33 Hz (D5 - Triangle for warmth)
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(587.33, now);
        gain1.gain.setValueAtTime(0.07, now);
        gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);
        osc1.connect(gain1);
        gain1.connect(this.ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.09);

        // Harmonic Tone 2: 880 Hz (A5 - Perfect 5th chord shimmer)
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(880, now);
        gain2.gain.setValueAtTime(0.05, now);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(now);
        osc2.stop(now + 0.1);
      } else if (this.theme === 'laser') {
        // === THEME: LASER (Fast cyberpunk beam pulse) ===
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.linearRampToValueAtTime(400, now + 0.04);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.Q.setValueAtTime(5, now);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.055);
      } else {
        // === THEME: MECHANICAL (Heavy tactile hardware relay) ===
        const oscLow = this.ctx.createOscillator();
        const gainLow = this.ctx.createGain();
        oscLow.type = 'triangle';
        oscLow.frequency.setValueAtTime(160, now);
        gainLow.gain.setValueAtTime(0.08, now);
        gainLow.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        oscLow.connect(gainLow);
        gainLow.connect(this.ctx.destination);
        oscLow.start(now);
        oscLow.stop(now + 0.045);

        const oscHigh = this.ctx.createOscillator();
        const gainHigh = this.ctx.createGain();
        oscHigh.type = 'square';
        oscHigh.frequency.setValueAtTime(1800, now);
        gainHigh.gain.setValueAtTime(0.04, now);
        gainHigh.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
        oscHigh.connect(gainHigh);
        gainHigh.connect(this.ctx.destination);
        oscHigh.start(now);
        oscHigh.stop(now + 0.02);
      }
    } catch {
      // Audio autoplay policy
    }
  }

  // 2. HOVER EFFECT (Subtle electronic contact pip)
  playHover() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(740, now); // F#5 clean frequency
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch {
      // Audio policy
    }
  }

  // 3. TAB / FILTER SWITCH (Two-stage cyber octave engagement)
  playModeSwitch() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Stage 1: Lower cyber fundamental (440 Hz)
      const o1 = this.ctx.createOscillator();
      const g1 = this.ctx.createGain();
      o1.type = 'triangle';
      o1.frequency.setValueAtTime(440, now);
      g1.gain.setValueAtTime(0.05, now);
      g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
      o1.connect(g1);
      g1.connect(this.ctx.destination);
      o1.start(now);
      o1.stop(now + 0.04);

      // Stage 2: Upper cyber octave (880 Hz at +30ms)
      const o2 = this.ctx.createOscillator();
      const g2 = this.ctx.createGain();
      o2.type = 'triangle';
      o2.frequency.setValueAtTime(880, now + 0.028);
      g2.gain.setValueAtTime(0.05, now + 0.028);
      g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      o2.connect(g2);
      g2.connect(this.ctx.destination);
      o2.start(now + 0.028);
      o2.stop(now + 0.09);
    } catch {
      // Audio policy
    }
  }
}

export const cyberAudio = new CyberSoundEngine();
