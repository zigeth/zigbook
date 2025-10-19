<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  top?: string
  left?: string
  right?: string
  bottom?: string
  width?: string
  height?: string
  stroke?: string
  opacity?: number
  scale?: number
  rotation?: number
  duration?: number
}>(), {
  top: 'auto',
  left: 'auto',
  right: 'auto',
  bottom: 'auto',
  width: '32rem',
  height: '32rem',
  stroke: 'rgba(15, 23, 42, 0.12)',
  opacity: 0.5,
  scale: 1,
  rotation: 0,
  duration: 28
})

const style = computed(() => ({
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  width: props.width,
  height: props.height,
  opacity: String(props.opacity),
  animationDuration: `${props.duration}s`,
  '--accent-scale': props.scale,
  '--accent-rotation': `${props.rotation}deg`
}))
</script>

<template>
  <div class="accent-grid" :style="style" aria-hidden="true">
    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
      <defs>
        <pattern id="grid-accent-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" :stroke="stroke" stroke-width="1.2" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#grid-accent-pattern)" />
    </svg>
  </div>
</template>

<style scoped>
.accent-grid {
  position: absolute;
  pointer-events: none;
  overflow: hidden;
  animation: accent-pan linear infinite;
  mix-blend-mode: soft-light;
}

@keyframes accent-pan {
  0% { transform: translate3d(0, 0, 0) scale(var(--accent-scale, 1)) rotate(var(--accent-rotation, 0deg)); }
  50% { transform: translate3d(1.8%, 1.2%, 0) scale(calc(var(--accent-scale, 1) * 1.02)) rotate(var(--accent-rotation, 0deg)); }
  100% { transform: translate3d(0, 0, 0) scale(var(--accent-scale, 1)) rotate(var(--accent-rotation, 0deg)); }
}

@media (prefers-reduced-motion: reduce) {
  .accent-grid {
    animation: none;
  }
}
</style>
