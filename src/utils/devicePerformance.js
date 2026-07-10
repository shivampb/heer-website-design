/**
 * Intelligent Hardware & RAM Performance Tier Detection Utility
 * 
 * Determines device performance tier ('low-tier' vs 'high-tier') to adaptively
 * optimize heavy JS scroll loops, GPU blur filters, and continuous animations.
 */

let cachedTier = null;

export function getDeviceTier() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'high-tier';
  }

  if (cachedTier) {
    return cachedTier;
  }

  // Check user accessibility preference for reduced motion
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    cachedTier = 'low-tier';
    return cachedTier;
  }

  // Device Memory API (in GB, e.g. 0.5, 1, 2, 4, 8) - supported on Chromium Android & desktop
  const memory = navigator.deviceMemory || 4;

  // Hardware Concurrency API (number of logical CPU cores)
  const cores = navigator.hardwareConcurrency || 4;

  // Check if mobile / touch device with smaller viewport
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;

  // If low RAM (<= 3GB), low CPU cores (<= 2 cores), or small touch mobile device, classify as 'low-tier'
  if (memory <= 3 || cores <= 2 || (isTouchDevice && isSmallScreen)) {
    cachedTier = 'low-tier';
  } else {
    cachedTier = 'high-tier';
  }

  return cachedTier;
}

export function isLowRamDevice() {
  return getDeviceTier() === 'low-tier';
}
