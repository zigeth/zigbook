<script setup lang="ts">
import { computed } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'
import GlowAccent from './GlowAccent.vue'
import GridAccent from './GridAccent.vue'

type AccentDensity = 'off' | 'low' | 'medium' | 'high'

const props = withDefaults(defineProps<{
  density: AccentDensity
  transitioning?: boolean
}>(), {
  transitioning: false
})

const prefersReducedMotion = usePreferredReducedMotion()

const visible = computed(() => !prefersReducedMotion.value && props.density !== 'off')

interface AccentConfig {
  type: 'glow' | 'grid'
  props: Record<string, unknown>
}

const accentMap: Record<AccentDensity, AccentConfig[]> = {
  off: [],
  low: [
    {
      type: 'glow',
      props: {
        top: '-18rem',
        right: '-12rem',
        size: '28rem',
        opacity: 0.26,
        blur: '120px',
        duration: 22
      }
    }
  ],
  medium: [
    {
      type: 'glow',
      props: {
        top: '-16rem',
        left: '-14rem',
        size: '34rem',
        opacity: 0.32,
        duration: 24
      }
    },
    {
      type: 'glow',
      props: {
        bottom: '-18rem',
        right: '-10rem',
        size: '30rem',
        opacity: 0.28,
        rotation: 22,
        duration: 26,
        from: 'rgba(56, 189, 248, 0.65)',
        via: 'rgba(129, 140, 248, 0.32)',
        to: 'rgba(16, 185, 129, 0.18)'
      }
    }
  ],
  high: [
    {
      type: 'glow',
      props: {
        top: '-20rem',
        left: '-16rem',
        size: '38rem',
        opacity: 0.36,
        duration: 24
      }
    },
    {
      type: 'glow',
      props: {
        bottom: '-24rem',
        right: '-18rem',
        size: '42rem',
        opacity: 0.3,
        rotation: -18,
        duration: 30,
        from: 'rgba(56, 189, 248, 0.6)',
        via: 'rgba(129, 140, 248, 0.35)',
        to: 'rgba(16, 185, 129, 0.18)'
      }
    },
    {
      type: 'grid',
      props: {
        bottom: '-6rem',
        left: '15%',
        width: '28rem',
        height: '28rem',
        stroke: 'rgba(14, 165, 233, 0.18)',
        opacity: 0.45,
        scale: 1.05,
        rotation: -8
      }
    }
  ]
}

const accents = computed(() => (visible.value ? accentMap[props.density] : []))

const accentComponents = {
  glow: GlowAccent,
  grid: GridAccent
} as const
</script>

<template>
  <Teleport to="body">
    <div
      v-if="accents.length"
      :class="['accent-layer', { 'accent-layer--transitioning': props.transitioning }]"
      aria-hidden="true"
    >
      <component
        :is="accentComponents[accent.type]"
        v-for="(accent, index) in accents"
        :key="index"
        v-bind="accent.props"
      />
    </div>
  </Teleport>
</template>

<style scoped>
.accent-layer {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  opacity: 1;
  transition: opacity 240ms ease;
}

.accent-layer--transitioning {
  opacity: 0.55;
}
</style>
