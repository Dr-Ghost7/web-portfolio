'use client';

class CyberSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  public enabled: boolean = true;
  private lastHoverTime: number = 0;
  private lastTypeTime: number = 0;

  constructor() {
    // Auto-unlock Web Audio on first user interaction anywhere
    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        this.init();
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      };
      window.addEventListener('click', unlockAudio, { once: true });
      window.addEventListener('keydown', unlockAudio, { once: true });
      window.addEventListener('touchstart', unlockAudio, { once: true });
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

        // Dynamics compressor to boost perceived loudness, add punch, and prevent digital clipping
        this.compressor = this.ctx.createDynamicsCompressor();
        this.compressor.threshold.setValueAtTime(-12, this.ctx.currentTime);
        this.compressor.knee.setValueAtTime(20, this.ctx.currentTime);
        this.compressor.ratio.setValueAtTime(10, this.ctx.currentTime);
        this.compressor.attack.setValueAtTime(0.002, this.ctx.currentTime);
        this.compressor.release.setValueAtTime(0.12, this.ctx.currentTime);

        // Louder master gain stage
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.45, this.ctx.currentTime);

        this.compressor.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  private getDestination(): AudioNode | null {
    this.init();
    if (!this.ctx || !this.compressor) return null;
    return this.compressor;
  }

  // 1. PRIMARY CYBERPUNK LASER CLICK (Loud, punchy, crisp laser blaster chirp)
  playLaser() {
    if (!this.enabled) return;
    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      // Layer 1: Laser Beam Sweep (Sawtooth through resonant filter)
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      // Pitch drop: 2600 Hz down to 600 Hz (authentic sci-fi laser zap)
      osc.frequency.setValueAtTime(2600, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.05);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1900, now);
      filter.frequency.exponentialRampToValueAtTime(700, now + 0.05);
      filter.Q.setValueAtTime(3.8, now);

      gain.gain.setValueAtTime(0.38, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(dest);

      osc.start(now);
      osc.stop(now + 0.065);

      // Layer 2: Instant High-Frequency Transient Spike (Click snap)
      const trans = this.ctx.createOscillator();
      const transGain = this.ctx.createGain();
      trans.type = 'square';
      trans.frequency.setValueAtTime(3600, now);
      transGain.gain.setValueAtTime(0.22, now);
      transGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

      trans.connect(transGain);
      transGain.connect(dest);
      trans.start(now);
      trans.stop(now + 0.015);

      // Layer 3: Sub Body Thump (Weight & presence)
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'triangle';
      sub.frequency.setValueAtTime(160, now);
      sub.frequency.linearRampToValueAtTime(80, now + 0.04);
      subGain.gain.setValueAtTime(0.26, now);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      sub.connect(subGain);
      subGain.connect(dest);
      sub.start(now);
      sub.stop(now + 0.05);
    } catch {
      // Audio policy catch
    }
  }

  // Alias playClick to playLaser for full backwards compatibility
  playClick() {
    this.playLaser();
  }

  // 2. CYBER HOVER PIP (Crisp, clearly audible sci-fi frequency blip)
  playHover() {
    if (!this.enabled) return;
    const currentTimeMs = Date.now();
    // Throttle slightly so rapid cursor gestures sound sharp and not muddy
    if (currentTimeMs - this.lastHoverTime < 45) return;
    this.lastHoverTime = currentTimeMs;

    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1650, now);
      osc.frequency.linearRampToValueAtTime(1350, now + 0.025);

      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1000, now);

      // Significantly louder than the old 0.02
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(dest);

      osc.start(now);
      osc.stop(now + 0.03);
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

      // Pulse 1: Rising laser charge
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(750, now);
      osc1.frequency.exponentialRampToValueAtTime(1850, now + 0.04);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc1.connect(gain1);
      gain1.connect(dest);
      osc1.start(now);
      osc1.stop(now + 0.055);

      // Pulse 2: Upper harmonic laser chirp
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1850, now + 0.025);
      osc2.frequency.exponentialRampToValueAtTime(2600, now + 0.07);
      gain2.gain.setValueAtTime(0.28, now + 0.025);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc2.connect(gain2);
      gain2.connect(dest);
      osc2.start(now + 0.025);
      osc2.stop(now + 0.085);
    } catch {
      // Audio policy
    }
  }

  // 4. TERMINAL KEYSTROKE (Tactile mechanical-digital cyber tap)
  playTyping() {
    if (!this.enabled) return;
    const nowMs = Date.now();
    if (nowMs - this.lastTypeTime < 35) return;
    this.lastTypeTime = nowMs;

    try {
      const dest = this.getDestination();
      if (!this.ctx || !dest) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Micro randomized pitch for organic terminal feel
      const freq = 1800 + (Math.random() - 0.5) * 300;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq * 0.6, now + 0.015);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

      osc.connect(gain);
      gain.connect(dest);

      osc.start(now);
      osc.stop(now + 0.02);
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
        const time = now + idx * 0.035;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0.24, time);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

        osc.connect(gain);
        gain.connect(dest);
        osc.start(time);
        osc.stop(time + 0.085);
      });
    } catch {
      // Audio policy
    }
  }
}

export const cyberAudio = new CyberSoundEngine();
