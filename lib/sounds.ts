'use client';

class CyberSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private limiter: DynamicsCompressorNode | null = null;
  public enabled: boolean = true;
  private lastHoverTime: number = 0;
  private lastTypeTime: number = 0;

  constructor() {
    // Immediate auto-unlock on first user interaction anywhere
    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        this.init();
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      };
      window.addEventListener('click', unlockAudio, { once: true, passive: true });
      window.addEventListener('keydown', unlockAudio, { once: true, passive: true });
      window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
    }
  }

  private init() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();

        // Brickwall limiter with high threshold so it preserves FULL volume while preventing distortion
        this.limiter = this.ctx.createDynamicsCompressor();
        this.limiter.threshold.setValueAtTime(-1.5, this.ctx.currentTime); // only catch true peaks
        this.limiter.knee.setValueAtTime(6, this.ctx.currentTime);
        this.limiter.ratio.setValueAtTime(20, this.ctx.currentTime); // hard brickwall limit
        this.limiter.attack.setValueAtTime(0.001, this.ctx.currentTime);
        this.limiter.release.setValueAtTime(0.05, this.ctx.currentTime);

        // Maximum unattenuated master gain stage
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.95, this.ctx.currentTime); // 95% full output scale

        this.limiter.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  private getDestination(): AudioNode | null {
    this.init();
    if (!this.ctx || !this.limiter) return null;
    return this.limiter;
  }

  // 1. PRIMARY CYBERPUNK LASER CLICK (Loud, punchy, crisp, arcade-level presence)
  playLaser() {
    if (!this.enabled) return;
    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      // Layer 1: High-Energy Laser Sawtooth Sweep (Main zap body)
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      // Pitch sweeps from 2400 Hz down to 500 Hz (sitting right in human ear's high sensitivity range)
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.07);

      // Lowpass filter allowing full brightness and harmonics
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(4500, now);
      filter.frequency.exponentialRampToValueAtTime(1200, now + 0.07);
      filter.Q.setValueAtTime(2.5, now);

      // Full amplitude gain
      gain.gain.setValueAtTime(0.75, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(dest);

      osc.start(now);
      osc.stop(now + 0.09);

      // Layer 2: Instant High-Frequency Attack Snap (Click/tick edge)
      const snap = this.ctx.createOscillator();
      const snapGain = this.ctx.createGain();
      snap.type = 'square';
      snap.frequency.setValueAtTime(3200, now);
      snap.frequency.exponentialRampToValueAtTime(1800, now + 0.02);
      snapGain.gain.setValueAtTime(0.55, now);
      snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

      snap.connect(snapGain);
      snapGain.connect(dest);
      snap.start(now);
      snap.stop(now + 0.03);

      // Layer 3: Solid Sub-Thump (Physical weight so sound feels thick & loud)
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'triangle';
      sub.frequency.setValueAtTime(180, now);
      sub.frequency.linearRampToValueAtTime(75, now + 0.05);
      subGain.gain.setValueAtTime(0.65, now);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      sub.connect(subGain);
      subGain.connect(dest);
      sub.start(now);
      sub.stop(now + 0.065);
    } catch {
      // Audio policy catch
    }
  }

  // Alias playClick to playLaser for full compatibility
  playClick() {
    this.playLaser();
  }

  // 2. CYBER HOVER PIP (Loud, crisp, clearly audible electronic frequency chirp)
  playHover() {
    if (!this.enabled) return;
    const currentTimeMs = Date.now();
    // Throttle slightly to keep rapid sweeping sharp
    if (currentTimeMs - this.lastHoverTime < 35) return;
    this.lastHoverTime = currentTimeMs;

    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      // Sharp, distinct sci-fi chirp
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1850, now);
      osc.frequency.exponentialRampToValueAtTime(1150, now + 0.035);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.Q.setValueAtTime(1.8, now);

      // Boosted gain so it is instantly noticeable even at low system volume
      gain.gain.setValueAtTime(0.48, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(dest);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch {
      // Audio policy
    }
  }

  // 3. CYBER ENGAGE / MODE SWITCH / MODAL OPEN (Ascending laser energy beam)
  playModeSwitch() {
    if (!this.enabled) return;
    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      // Pulse 1: Fast rising laser charge
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(650, now);
      osc1.frequency.exponentialRampToValueAtTime(1900, now + 0.05);
      gain1.gain.setValueAtTime(0.70, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.065);

      osc1.connect(gain1);
      gain1.connect(dest);
      osc1.start(now);
      osc1.stop(now + 0.07);

      // Pulse 2: Upper harmonic laser burst
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1900, now + 0.03);
      osc2.frequency.exponentialRampToValueAtTime(2900, now + 0.09);
      gain2.gain.setValueAtTime(0.65, now + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

      osc2.connect(gain2);
      gain2.connect(dest);
      osc2.start(now + 0.03);
      osc2.stop(now + 0.105);
    } catch {
      // Audio policy
    }
  }

  // 4. TERMINAL KEYSTROKE (Loud, punchy tactile mechanical-digital cyber tap)
  playTyping() {
    if (!this.enabled) return;
    const nowMs = Date.now();
    if (nowMs - this.lastTypeTime < 30) return;
    this.lastTypeTime = nowMs;

    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freq = 1950 + (Math.random() - 0.5) * 350;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq * 0.5, now + 0.02);

      // Boosted gain for typing
      gain.gain.setValueAtTime(0.42, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

      osc.connect(gain);
      gain.connect(dest);

      osc.start(now);
      osc.stop(now + 0.028);
    } catch {
      // Audio policy
    }
  }

  // 5. SUCCESS CONFIRMATION (Ascending sci-fi laser chord)
  playSuccess() {
    if (!this.enabled) return;
    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      const notes = [659.25, 880, 1174.66, 1760]; // E5, A5, D6, A6 cyber cascade
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const time = now + idx * 0.038;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0.55, time);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.1);

        osc.connect(gain);
        gain.connect(dest);
        osc.start(time);
        osc.stop(time + 0.11);
      });
    } catch {
      // Audio policy
    }
  }
}

export const cyberAudio = new CyberSoundEngine();
