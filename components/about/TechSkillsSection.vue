<template>
  <section ref="SkillsSection" class="tech-skills-section">
    <div class="skills-bg">
      <div class="l-container">
        <!-- Section Header -->
        <div class="skills-header">
          <span class="skills-read-title-area">
            <AppReadTitle :state="isTextSegmentState" :text="['・', 'KEAHLIAN TEKNOLOGI PROYEK']" :modifier="'section'" />
          </span>

          <div class="skills-headline-wrapper">
            <h2 class="skills-title">
              <span class="pc-only">STACK TEKNOLOGI & KEAHLIAN PROYEK</span>
              <span class="sp-only">STACK TEKNOLOGI & KEAHLIAN</span>
            </h2>
            <p class="skills-desc">
              Kumpulan teknologi inti, library grafis 3D, dan kakas modern yang digunakan secara nyata dalam perancangan serta rekayasa seluruh karya di portofolio ini—dari animasi WebGL 60fps hingga arsitektur front-end berkinerja tinggi.
            </p>
          </div>

          <div class="skills-bounce-line-wrapper">
            <AppBounceLine :state="'expand'" :pc-animation="false" :sp-animation="false" :width="1420" :modifier="'about-skills'" />
          </div>

          <!-- Category Filters -->
          <div class="skills-filter-nav">
            <button
              v-for="cat in filterCategories"
              :key="cat.id"
              class="skills-filter-btn"
              :class="{ 'is-active': activeFilter === cat.id }"
              type="button"
              @click="setFilter(cat.id)"
            >
              <span class="skills-filter-label">{{ cat.label }}</span>
              <span class="skills-filter-count">{{ getCategoryCount(cat.id) }}</span>
            </button>
          </div>
        </div>

        <!-- Technical Skills Grid -->
        <div class="skills-grid">
          <article
            v-for="(skill, index) in filteredSkills"
            :key="skill.id"
            class="skill-card"
            :class="{ 'is-hovered': hoveredSkillId === skill.id }"
            @mouseenter="hoveredSkillId = skill.id"
            @mouseleave="hoveredSkillId = null"
          >
            <!-- Card Top Bar: Index & Category -->
            <div class="skill-card-top">
              <span class="skill-card-index">{{ formatIndex(index + 1) }}</span>
              <div class="skill-card-meta">
                <span class="skill-card-category">{{ skill.category }}</span>
                <span class="skill-card-badge">{{ skill.proficiency }}</span>
              </div>
            </div>

            <!-- Card Icon & Name -->
            <div class="skill-card-hero">
              <div class="skill-icon-box" :class="`skill-icon--${skill.id}`">
                <!-- SVG Icon Mapping -->
                <svg v-if="skill.id === 'threejs'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Three.js Geometric Polyhedron -->
                  <polygon points="32,6 56,50 8,50" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round" fill="rgba(255,255,255,0.06)" />
                  <line x1="32" y1="6" x2="32" y2="50" stroke="#7ec1f9" stroke-width="2" />
                  <line x1="8" y1="50" x2="44" y2="28" stroke="#ffabb7" stroke-width="2" />
                  <line x1="56" y1="50" x2="20" y2="28" stroke="#ffd955" stroke-width="2" />
                  <circle cx="32" cy="6" r="3" fill="#ffffff" />
                  <circle cx="56" cy="50" r="3" fill="#ffffff" />
                  <circle cx="8" cy="50" r="3" fill="#ffffff" />
                  <circle cx="32" cy="35" r="2.5" fill="#7ec1f9" />
                </svg>

                <svg v-else-if="skill.id === 'webgl'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- WebGL / GLSL Shader Cube -->
                  <path d="M32 8L54 20V44L32 56L10 44V20L32 8Z" stroke="#ff4d4d" stroke-width="2.2" fill="rgba(255,77,77,0.08)" />
                  <path d="M32 8V32M54 20L32 32M10 20L32 32" stroke="#ff7676" stroke-width="2" />
                  <path d="M32 32V56" stroke="#990000" stroke-width="2" />
                  <!-- Shader Sine Wave Overlay -->
                  <path d="M16 46C20 40 28 50 32 46C36 42 44 52 48 46" stroke="#ffd955" stroke-width="2" stroke-linecap="round" />
                </svg>

                <svg v-else-if="skill.id === 'vue-nuxt'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Vue / Nuxt Triangles -->
                  <polygon points="32,54 4,6 18,6 32,30 46,6 60,6" fill="#41B883" />
                  <polygon points="32,54 18,6 27,6 32,15 37,6 46,6" fill="#35495E" />
                  <!-- Nuxt Mountain Accent -->
                  <polygon points="32,34 23,50 41,50" fill="#00DC82" opacity="0.8" />
                </svg>

                <svg v-else-if="skill.id === 'gsap'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- GSAP Kinetic Green Motion -->
                  <circle cx="32" cy="32" r="26" stroke="#0ae448" stroke-width="2" stroke-dasharray="4 3" opacity="0.6" />
                  <path d="M38 14L22 34H34L26 50L46 28H32L38 14Z" fill="#0ae448" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" />
                  <circle cx="16" cy="20" r="2" fill="#0ae448" />
                  <circle cx="48" cy="46" r="2" fill="#0ae448" />
                </svg>

                <svg v-else-if="skill.id === 'typescript'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- TypeScript Badge -->
                  <rect x="8" y="8" width="48" height="48" rx="8" fill="#3178C6" />
                  <path d="M16 25H32M24 25V45" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M47 28C45 25 39 25 37 28C35 31 36 34 40 35C45 36.5 48 38 47 42C46 45 41 46 36 44" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
                </svg>

                <svg v-else-if="skill.id === 'javascript'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- JavaScript Badge -->
                  <rect x="8" y="8" width="48" height="48" rx="8" fill="#F7DF1E" />
                  <path d="M26 28V41C26 44 24 45 21 44C19 43.5 18 42 18 42" stroke="#000000" stroke-width="3.5" stroke-linecap="round" />
                  <path d="M46 30C44 27 39 27 37 30C35 33 37 36 41 37C45 38 47 40 46 43C45 46 40 46.5 35 44" stroke="#000000" stroke-width="3.5" stroke-linecap="round" />
                </svg>

                <svg v-else-if="skill.id === 'scss'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Sass / SCSS Ribbon -->
                  <circle cx="32" cy="32" r="26" fill="rgba(207, 100, 154, 0.12)" stroke="#CF649A" stroke-width="2" />
                  <path d="M44 26C40 22 34 22 30 25C26 28 27 32 31 34C37 36 40 38 39 42C38 46 32 47 27 45C22 43 20 38 20 38" stroke="#CF649A" stroke-width="3.5" stroke-linecap="round" />
                  <circle cx="46" cy="39" r="3" fill="#CF649A" />
                </svg>

                <svg v-else-if="skill.id === 'tailwind'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Tailwind Twin Fluid Waves -->
                  <path d="M22 24C24 18 29 16 34 18C39 20 40 25 46 25C51 25 54 22 56 18C54 24 49 26 44 24C39 22 38 17 32 17C27 17 24 20 22 24Z" fill="#38BDF8" />
                  <path d="M10 38C12 32 17 30 22 32C27 34 28 39 34 39C39 39 42 36 44 32C42 38 37 40 32 38C27 36 26 31 20 31C15 31 12 34 10 38Z" fill="#38BDF8" />
                </svg>

                <svg v-else-if="skill.id === 'html5-canvas'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- HTML5 Shield & Canvas Frame -->
                  <path d="M12 8L16 48L32 54L48 48L52 8H12Z" stroke="#E34F26" stroke-width="2.5" fill="rgba(227, 79, 38, 0.08)" stroke-linejoin="round" />
                  <path d="M32 16V46L42 43L44 16H32Z" fill="#EF652A" opacity="0.4" />
                  <circle cx="24" cy="28" r="3" fill="#ffd955" />
                  <circle cx="32" cy="28" r="3" fill="#7ec1f9" />
                  <circle cx="40" cy="28" r="3" fill="#ffabb7" />
                  <line x1="20" y1="36" x2="44" y2="36" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
                </svg>

                <svg v-else-if="skill.id === 'lenis-scroll'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Lenis Smooth Scroll Kinetic Wave -->
                  <circle cx="32" cy="32" r="26" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.4" />
                  <path d="M16 32C20 20 24 44 32 32C40 20 44 44 48 32" stroke="#55b1ff" stroke-width="3" stroke-linecap="round" />
                  <path d="M32 14V18M32 46V50" stroke="#7ec1f9" stroke-width="2" stroke-linecap="round" />
                  <path d="M28 47L32 51L36 47" stroke="#7ec1f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg v-else-if="skill.id === 'webpack-tools'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Webpack Isometric Hexagon Module -->
                  <path d="M32 10L50 20V42L32 52L14 42V20L32 10Z" stroke="#8DD6F9" stroke-width="2" fill="rgba(141, 214, 249, 0.08)" />
                  <path d="M32 20L42 26V37L32 43L22 37V26L32 20Z" fill="#1C78C0" stroke="#ffffff" stroke-width="1.5" />
                  <line x1="32" y1="10" x2="32" y2="20" stroke="#8DD6F9" stroke-width="1.5" />
                  <line x1="50" y1="20" x2="42" y2="26" stroke="#8DD6F9" stroke-width="1.5" />
                  <line x1="50" y1="42" x2="42" y2="37" stroke="#8DD6F9" stroke-width="1.5" />
                  <line x1="32" y1="52" x2="32" y2="43" stroke="#8DD6F9" stroke-width="1.5" />
                  <line x1="14" y1="42" x2="22" y2="37" stroke="#8DD6F9" stroke-width="1.5" />
                  <line x1="14" y1="20" x2="22" y2="26" stroke="#8DD6F9" stroke-width="1.5" />
                </svg>

                <svg v-else-if="skill.id === 'git-github'" class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Git Commit & Branching Tree -->
                  <circle cx="20" cy="46" r="5" stroke="#F05032" stroke-width="2.5" fill="#111" />
                  <circle cx="20" cy="18" r="5" stroke="#F05032" stroke-width="2.5" fill="#111" />
                  <circle cx="44" cy="28" r="5" stroke="#F05032" stroke-width="2.5" fill="#111" />
                  <line x1="20" y1="23" x2="20" y2="41" stroke="#F05032" stroke-width="2.5" />
                  <path d="M20 41C20 32 44 38 44 33" stroke="#F05032" stroke-width="2.5" fill="none" />
                </svg>

                <!-- Fallback Icon -->
                <svg v-else class="skill-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="12" width="40" height="40" rx="8" stroke="#ffffff" stroke-width="2" />
                  <path d="M24 32L30 38L40 26" stroke="#7ec1f9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div class="skill-title-group">
                <h3 class="skill-name">{{ skill.name }}</h3>
                <span class="skill-metrics">{{ skill.metrics }}</span>
              </div>
            </div>

            <!-- Role Description in Indonesian -->
            <p class="skill-role">
              {{ skill.role }}
            </p>

            <!-- Highlights / Capabilities -->
            <div v-if="skill.highlights" class="skill-highlights">
              <span class="skill-highlights-icon">⚡</span>
              <span class="skill-highlights-text">{{ skill.highlights }}</span>
            </div>

            <!-- Project Associations Chips -->
            <div class="skill-projects-area">
              <span class="skill-projects-label">DIGUNAKAN PADA:</span>
              <div class="skill-projects-chips">
                <span
                  v-for="(proj, pIdx) in skill.projects"
                  :key="pIdx"
                  class="skill-project-chip"
                  :class="{ 'is-all': proj.includes('SEMUA') }"
                >
                  {{ proj }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- Bottom Engineering Standards Strip -->
        <div class="skills-footer-strip">
          <div class="skills-footer-line">
            <AppBounceLine :state="'expand'" :pc-animation="false" :sp-animation="false" :width="1420" :modifier="'about-skills-footer'" />
          </div>

          <div class="skills-stats-grid">
            <div class="skills-stat-item">
              <span class="skills-stat-number">07</span>
              <span class="skills-stat-title">PROYEK PILIHAN</span>
              <span class="skills-stat-sub">Semua Menggunakan Modern Stack</span>
            </div>
            <div class="skills-stat-item">
              <span class="skills-stat-number">12</span>
              <span class="skills-stat-title">TEKNOLOGI UTAMA</span>
              <span class="skills-stat-sub">3D, WebGL, Framework & Motion</span>
            </div>
            <div class="skills-stat-item">
              <span class="skills-stat-number">60</span>
              <span class="skills-stat-title">FPS FRAME RATE</span>
              <span class="skills-stat-sub">Performa Animasi & Shader Halus</span>
            </div>
            <div class="skills-stat-item">
              <span class="skills-stat-number">100%</span>
              <span class="skills-stat-title">STANDAR KODE</span>
              <span class="skills-stat-sub">Modular, Efisien & Teruji</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechSkillsSection',

  props: {
    skillsData: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      activeFilter: 'ALL',
      hoveredSkillId: null,
      isTextSegmentState: 'default',
      filterCategories: [
        { id: 'ALL', label: 'SEMUA KEAHLIAN' },
        { id: '3D & WEBGL', label: '3D & SHADER' },
        { id: 'FRAMEWORK & MOTION', label: 'FRAMEWORK & ANIMASI' },
        { id: 'BAHASA & STYLING', label: 'BAHASA & GAYA' },
        { id: 'TOOLS & STANDAR', label: 'STANDAR & KAKAS' },
      ],
    }
  },

  computed: {
    allSkills() {
      if (this.skillsData && this.skillsData.length) {
        return this.skillsData
      }
      return this.$store.getters.technicalSkills || []
    },

    filteredSkills() {
      if (this.activeFilter === 'ALL') {
        return this.allSkills
      }
      if (this.activeFilter === '3D & WEBGL') {
        return this.allSkills.filter(
          (s) => s.category.includes('3D') || s.category.includes('SHADER')
        )
      }
      if (this.activeFilter === 'FRAMEWORK & MOTION') {
        return this.allSkills.filter(
          (s) => s.category.includes('FRAMEWORK') || s.category.includes('MOTION')
        )
      }
      if (this.activeFilter === 'BAHASA & STYLING') {
        return this.allSkills.filter(
          (s) => s.category.includes('BAHASA') || s.category.includes('STYLING') || s.category.includes('DESIGN')
        )
      }
      if (this.activeFilter === 'TOOLS & STANDAR') {
        return this.allSkills.filter(
          (s) => s.category.includes('STANDARDS') || s.category.includes('FISIKA') || s.category.includes('BUILD') || s.category.includes('KONTROL')
        )
      }
      return this.allSkills
    },
  },

  mounted() {
    this.observe = this.$refs.SkillsSection
    if (!this.observe) return

    this.iObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isTextSegmentState = 'center'
            if (this.iObserver) {
              this.iObserver.unobserve(this.observe)
            }
          }
        })
      },
      { rootMargin: '0%' }
    )
    this.iObserver.observe(this.observe)
  },

  beforeDestroy() {
    if (this.iObserver && this.observe) {
      this.iObserver.unobserve(this.observe)
      this.iObserver = null
    }
  },

  methods: {
    setFilter(catId) {
      this.activeFilter = catId
    },

    formatIndex(num) {
      return num < 10 ? `0${num}` : `${num}`
    },

    getCategoryCount(catId) {
      if (catId === 'ALL') return this.allSkills.length
      if (catId === '3D & WEBGL') {
        return this.allSkills.filter(
          (s) => s.category.includes('3D') || s.category.includes('SHADER')
        ).length
      }
      if (catId === 'FRAMEWORK & MOTION') {
        return this.allSkills.filter(
          (s) => s.category.includes('FRAMEWORK') || s.category.includes('MOTION')
        ).length
      }
      if (catId === 'BAHASA & STYLING') {
        return this.allSkills.filter(
          (s) => s.category.includes('BAHASA') || s.category.includes('STYLING') || s.category.includes('DESIGN')
        ).length
      }
      if (catId === 'TOOLS & STANDAR') {
        return this.allSkills.filter(
          (s) => s.category.includes('STANDARDS') || s.category.includes('FISIKA') || s.category.includes('BUILD') || s.category.includes('KONTROL')
        ).length
      }
      return 0
    },
  },
}
</script>

<style lang="scss" scoped>
.tech-skills-section {
  position: relative;
  z-index: 2;
  overflow: hidden;
  background-color: $darkBlack;
}

.skills-bg {
  position: relative;
  padding: 140px 0 160px;

  @include sp() {
    padding: 70px 0 90px;
  }
}

.skills-header {
  margin-bottom: 50px;

  @include sp() {
    margin-bottom: 36px;
  }
}

.skills-read-title-area {
  display: block;
  margin-bottom: 24px;

  @include sp() {
    margin-bottom: 18px;
  }
}

.skills-headline-wrapper {
  margin-bottom: 30px;
}

.skills-title {
  margin: 0 0 16px 0;
  font-family: $sixcaps;
  font-size: vw(100);
  line-height: 0.95;
  letter-spacing: 0.03em;
  color: $white;
  text-transform: uppercase;

  @include tab-vertical() {
    font-size: vw(110);
  }

  @include sp() {
    font-size: vw_sp(96);
    line-height: 1;
  }
}

.skills-desc {
  max-width: 820px;
  font-family: $helvetica;
  font-size: 15px;
  line-height: 1.8;
  color: $gray;
  letter-spacing: 0.02em;

  @include sp() {
    font-size: 13px;
    line-height: 1.7;
  }
}

.skills-bounce-line-wrapper {
  position: relative;
  width: 100%;
  margin: 28px 0 36px;
}

// Category filter tabs
.skills-filter-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @include sp() {
    gap: 8px;
  }
}

.skills-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: $gray;
  font-family: $helvetica;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);

  @include sp() {
    padding: 6px 12px;
    font-size: 11px;
    gap: 6px;
  }

  &:hover {
    color: $white;
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &.is-active {
    color: #000;
    background-color: $white;
    border-color: $white;
    font-weight: 700;

    .skills-filter-count {
      background-color: #000;
      color: $white;
    }
  }
}

.skills-filter-count {
  display: inline-block;
  padding: 1px 6px;
  font-size: 10px;
  line-height: 1.2;
  background-color: rgba(255, 255, 255, 0.1);
  color: $gray;
  border-radius: 10px;
  transition: all 0.3s ease;
}

// Grid of cards
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 70px;

  @include tab() {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @include sp() {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 50px;
  }
}

.skill-card {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 28px 24px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease,
              background-color 0.4s ease,
              box-shadow 0.4s ease;

  @include sp() {
    padding: 22px 18px;
  }

  &:hover,
  &.is-hovered {
    transform: translateY(-4px);
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.28);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);

    .skill-card-index {
      color: $darkPink;
    }

    .skill-icon-box {
      border-color: rgba(255, 255, 255, 0.35);
      background-color: rgba(255, 255, 255, 0.08);
      transform: scale(1.05);
    }

    .skill-project-chip {
      border-color: rgba(255, 255, 255, 0.3);
      color: $white;
    }
  }
}

// Card Top Bar
.skill-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}

.skill-card-index {
  font-family: $sixcaps;
  font-size: 38px;
  line-height: 1;
  letter-spacing: 0.05em;
  color: $gray;
  transition: color 0.3s ease;
}

.skill-card-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.skill-card-category {
  font-family: $helvetica;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #7ec1f9;
  text-transform: uppercase;
}

.skill-card-badge {
  font-family: $helvetica;
  font-size: 9px;
  letter-spacing: 0.06em;
  color: $gray;
  padding: 2px 6px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

// Hero (Icon + Title)
.skill-card-hero {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.skill-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;

  @include sp() {
    width: 48px;
    height: 48px;
    padding: 8px;
  }
}

.skill-svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-title-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skill-name {
  margin: 0;
  font-family: $helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: $white;
  line-height: 1.2;

  @include sp() {
    font-size: 15px;
  }
}

.skill-metrics {
  font-family: $helvetica;
  font-size: 11px;
  letter-spacing: 0.02em;
  color: #ffd955;
}

// Role Narrative
.skill-role {
  margin: 0 0 16px 0;
  font-family: $helvetica;
  font-size: 13px;
  line-height: 1.6;
  color: #c9d3e9;
  letter-spacing: 0.01em;
  flex-grow: 1;

  @include sp() {
    font-size: 12px;
    line-height: 1.55;
  }
}

// Highlights
.skill-highlights {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  margin-bottom: 18px;
  background-color: rgba(255, 255, 255, 0.02);
  border-left: 2px solid $darkPink;
  font-family: $helvetica;
  font-size: 11px;
  color: $gray;
  letter-spacing: 0.02em;

  @include sp() {
    font-size: 10.5px;
  }
}

.skill-highlights-icon {
  font-size: 11px;
}

.skill-highlights-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// Projects Association
.skill-projects-area {
  padding-top: 14px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
}

.skill-projects-label {
  display: block;
  margin-bottom: 8px;
  font-family: $helvetica;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: $gray;
}

.skill-projects-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-project-chip {
  padding: 3px 8px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: $helvetica;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: #aaa;
  transition: all 0.2s ease;

  &.is-all {
    color: #ffd955;
    border-color: rgba(255, 217, 85, 0.3);
    background-color: rgba(255, 217, 85, 0.06);
  }
}

// Bottom Summary Stats Strip
.skills-footer-strip {
  position: relative;
  margin-top: 40px;
}

.skills-footer-line {
  margin-bottom: 36px;
}

.skills-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 24px 0;

  @include tab-vertical() {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }

  @include sp() {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 12px;
  }
}

.skills-stat-item {
  display: flex;
  flex-direction: column;
}

.skills-stat-number {
  font-family: $sixcaps;
  font-size: 64px;
  line-height: 0.9;
  letter-spacing: 0.03em;
  color: $white;
  margin-bottom: 6px;

  @include sp() {
    font-size: 48px;
  }
}

.skills-stat-title {
  font-family: $helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: $white;
  margin-bottom: 4px;
}

.skills-stat-sub {
  font-family: $helvetica;
  font-size: 11px;
  line-height: 1.4;
  color: $gray;
}
</style>
