<template>
  <div ref="HeaderLogo" class="header-logo is-top is-op">
    <button
      class="header-link js-click-target"
      aria-label="Ahmad Irsyad Ald Logo"
      @click="onClickSameUrlReload"
    >
      <span
        v-for="(item, index) of nameItems"
        :key="index"
        ref="HeaderLogoText"
        class="header-logo-text"
        style="transform: translateY(60px)"
        :class="{
          'header-logo-fade-text': item.fade,
          'header-logo-keep-text': !item.fade,
          'header-logo-space': item.isSpace,
        }"
        >{{ item.char }}</span
      >
    </button>
  </div>
</template>

<script>
import { personalInfo } from '~/config/profile'

export default {
  data: () => {
    const fullText =
      (personalInfo && personalInfo.logo && personalInfo.logo.initial) ||
      'AHMAD IRSYAD ALD'
    const shortText =
      (personalInfo && personalInfo.logo && personalInfo.logo.scrolled) || 'ALD'

    const keepStartIndex =
      fullText.lastIndexOf(shortText) >= 0
        ? fullText.lastIndexOf(shortText)
        : fullText.length - shortText.length

    const nameItems = fullText.split('').map((char, index) => {
      const isSpace = char === ' '
      const isFade = index < keepStartIndex
      return {
        char: isSpace ? '\u00A0' : char,
        fade: isFade,
        isSpace,
      }
    })

    return {
      nameItems,
      name: fullText.split(''),
    }
  },
  computed: {
    openningEnd() {
      return this.$store.getters['openning/state']
    },
    hambergerMenuState() {
      return this.$store.getters['hambergerMenu/state']
    },
    defaultTransitionState() {
      return this.$store.getters['bg-transition/state']
    },
    pickupTransitionState() {
      return this.$store.getters['indexPickup/transition']
    },
    imageTransitionState() {
      return this.$store.getters['image-transition/state']
    },
    indexPickupState() {
      return this.$store.getters['indexPickup/state']
    },
  },

  watch: {
    defaultTransitionState: function () {
      if (this.defaultTransitionState) {
        if (this.$asscroll) this.$asscroll.off('scroll', this.onScroll)
        if (this.$refs.HeaderLogo) this.$refs.HeaderLogo.classList.add('is-top')
      } else if (this.$asscroll) {
        this.$asscroll.on('scroll', this.onScroll)
      }
    },
    imageTransitionState: function () {
      if (this.imageTransitionState) {
        if (this.$asscroll) this.$asscroll.off('scroll', this.onScroll)
        if (this.$refs.HeaderLogo) this.$refs.HeaderLogo.classList.add('is-top')
      } else if (this.$asscroll) {
        this.$asscroll.on('scroll', this.onScroll)
      }
    },
    pickupTransitionState: function () {
      if (this.pickupTransitionState) {
        if (this.$asscroll) this.$asscroll.off('scroll', this.onScroll)
        if (this.$refs.HeaderLogo) this.$refs.HeaderLogo.classList.add('is-top')
      } else if (this.$asscroll) {
        this.$asscroll.on('scroll', this.onScroll)
      }
    },
    openningEnd: function () {
      this.$gsap.to(this.$refs.HeaderLogoText, {
        duration: 1.2,
        delay: -0.8,
        ease: this.$EASING.transform,
        stagger: {
          each: 0.04,
        },
        y: 0,
        clearProps: 'all',
        onComplete: () => {
          if (this.$refs.HeaderLogo) {
            this.$refs.HeaderLogo.classList.remove('is-op')
          }
        },
      })
    },
    hambergerMenuState: function () {
      // ハンバーガーメニューが開いて、PCだった時にロゴを動かす
      if (this.hambergerMenuState && this.$SITECONFIG.isPc) {
        this.$gsap.to(this.$refs.HeaderLogo, {
          delay: 0.16,
          duration: 0.3,
          ease: this.$EASING.transform,
          x: -560,
        })
      } else {
        this.$gsap.to(this.$refs.HeaderLogo, {
          delay: 0,
          duration: 0.3,
          ease: this.$EASING.transform,
          x: 0,
        })
      }
    },
  },

  mounted() {
    if (this.$asscroll) {
      this.$asscroll.on('scroll', this.onScroll)
    }
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },

  beforeDestroy() {
    if (this.$asscroll) {
      this.$asscroll.off('scroll', this.onScroll)
    }
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      // ハンバーガーメニューが開いている時と遷移中は処理を返す
      if (this.hambergerMenuState || this.indexPickupState) return
      if (!this.$refs.HeaderLogo) return

      const scrollPos =
        this.$asscroll && typeof this.$asscroll.targetPos === 'number'
          ? this.$asscroll.targetPos
          : window.pageYOffset || document.documentElement.scrollTop || 0

      if (scrollPos < 1.0) {
        this.$refs.HeaderLogo.classList.add('is-top')
      } else {
        this.$refs.HeaderLogo.classList.remove('is-top')
      }
    },

    onClickSameUrlReload(e) {
      e.preventDefault()

      if (this.$route.name === 'index') {
        this.$router.go({ path: this.$router.currentRoute.path, force: true })
      } else {
        this.$preDefaultEvent(true)
        if (this.$asscroll) this.$asscroll.disable()
        this.$store.commit('bg-transition/start', '#f0efeb')
        this.$store.commit('mouse/loading')

        setTimeout(() => {
          this.$router.push(`/`)
          this.$store.commit('mouse/loadend')
        }, this.$SITECONFIG.pageTransitionDuration)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.header-logo-text {
  display: inline-block;
  white-space: pre;
  vertical-align: baseline;
  transition: transform $base-duration $transform-easing,
    opacity $base-duration $transform-easing,
    max-width $base-duration $transform-easing,
    margin $base-duration $transform-easing;
}

.header-logo.is-op {
  user-select: none;
  pointer-events: none;
}

.is-op .header-logo-text {
  transition-delay: 0s !important;
}

// Fade text (AHMAD IRSYAD) - collapses & moves up when scrolled
.header-logo-fade-text {
  transform: translateY(-100%);
  opacity: 0;
  max-width: 0;
  margin: 0;
  overflow: hidden;
  pointer-events: none;
  transition-delay: 0s;
}

// Kept text (ALD) - always visible, slides into place
.header-logo-keep-text {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 0s;
}

// Space span
.header-logo-space {
  display: inline-block;
}

// When at top (is-top), all fading text is fully expanded and visible
.is-top .header-logo-fade-text {
  transform: translateY(0);
  opacity: 1;
  max-width: 60px;
  overflow: visible;
  pointer-events: auto;
  transition-delay: $base-duration * 0.25;
}

.is-top .header-logo-space {
  max-width: 25px;
}

.header-logo.is-top {
  transition-delay: 0s;
}

.header-logo {
  position: fixed;
  top: 20px;
  left: 40px;
  z-index: 10;
  overflow: hidden;
  white-space: nowrap;
  transition: width 0.01s linear;
  transition-delay: $base-duration * 0.25;
  cursor: pointer;

  @include sp() {
    top: 14px;
    left: 20px;
  }

  & .header-link {
    display: block;
    color: $black;
    font-size: 50px;
    font-family: $sixcaps;
    letter-spacing: 0.04em;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;

    @include hover() {
      & .header-logo-fade-text {
        transform: translateY(0);
        opacity: 1;
        max-width: 60px;
        overflow: visible;
        pointer-events: auto;
        transition-delay: $base-duration * 0.25;
      }
    }
  }
}
</style>
