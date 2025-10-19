<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  top?: string
  left?: string
  right?: string
  bottom?: string
  size?: string
  blur?: string
  opacity?: number
  rotation?: number
  duration?: number
  delay?: number
  from?: string
  via?: string
  to?: string
}>(), {
  top: 'auto',
  left: 'auto',
  right: 'auto',
  bottom: 'auto',
  size: '28rem',
  blur: '110px',
  opacity: 0.35,
  rotation: 0,
  duration: 18,
  delay: 0,
  from: 'rgba(16, 185, 129, 0.75)',
  via: 'rgba(56, 189, 248, 0.4)',
  to: 'rgba(129, 140, 248, 0.22)'
})

const style = computed(() => ({
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  width: props.size,
  height: props.size,
  opacity: String(props.opacity),
  filter: `blur(${props.blur})`,
  animationDuration: `${props.duration}s`,
  animationDelay: `${props.delay}s`,
  '--accent-rotation': `${props.rotation}deg`,
  background: `radial-gradient(circle at 30% 30%, ${props.from}, ${props.via}, ${props.to})`
}))
</script>

<template>
  <div class="accent-glow" :style="style" aria-hidden="true" />
</template>

<style scoped>
.accent-glow {
  position: absolute;
  pointer-events: none;
  border-radius: 9999px;
  animation-name: accent-drift;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  mix-blend-mode: screen;
}

@keyframes accent-drift {
  0%   { transform: translate3d(-3%, -2%, 0) scale(1) rotate(var(--accent-rotation, 0deg)); }
  50%  { transform: translate3d(3%, 2%, 0) scale(1.05) rotate(var(--accent-rotation, 0deg)); }
  100% { transform: translate3d(-3%, -2%, 0) scale(1) rotate(var(--accent-rotation, 0deg)); }
}

:global(.motion-safe) .accent-glow {
  animation-play-state: running;
}

@media (prefers-reduced-motion: reduce) {
  .accent-glow {
    animation: none;
  }
}
</style>
