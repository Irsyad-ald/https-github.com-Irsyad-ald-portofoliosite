<template>
  <div class="about">
    <div class="about-bg">
      <div class="about-inner">
        <div class="l-container">
          <h2 ref="AboutTitle" class="about-title">
            <span class="about-title-read-area">
              <AppReadTitle :state="isTextSegmentState" :text="['・', 'ABOUT ME']" :sp-animation="false" :modifier="'section'" />
            </span>
            <span class="pc-only">
              <span class="about-title-wrapper about-title-wrapper-01">
                <AppTextAnimation :state="isTextSegmentState" :rotate="$BASEROTATE.right" text="I BEGAN MY CODING JOURNEY IN 2022. IT MIGHT SEEM LATER THAN" :sp-animation="false" />
              </span>
              <span class="about-title-wrapper about-title-wrapper-02">
                <AppTextAnimation
                  :state="isTextSegmentState"
                  :start="0.12"
                  :rotate="$BASEROTATE.left"
                  text="MOST, BUT I FOUND A GENUINE PASSION THAT TRANSFORMED MY"
                  :sp-animation="false"
                />
              </span>
              <span class="about-title-wrapper about-title-wrapper-03">
                <AppTextAnimation :state="isTextSegmentState" :start="0.24" :rotate="$BASEROTATE.right" text="LIFE. WRITING CODE TIRELESSLY EVERY DAY, AND MY GREATEST" :sp-animation="false" />
              </span>
              <span class="about-title-wrapper about-title-wrapper-04">
                <AppTextAnimation :state="isTextSegmentState" :start="0.36" :rotate="$BASEROTATE.left" text="STRENGTH IS AN INSATIABLE CURIOSITY THAT NEVER FADES AWAY." :sp-animation="false" />
              </span>
            </span>
            <span class="sp-only">
              <span class="about-title-wrapper-sp about-title-wrapper-01-sp">I BEGAN CODING IN 2022.</span>IT MIGHT SEEM LATER<br />THAN MOST, BUT I FOUND<br />A LIFE-CHANGING PASSION.<br />MY GREATEST STRENGTH IS<br />AN INSATIABLE CURIOSITY<br />THAT NEVER FADES.
            </span>
            <span class="pc-only">
              <AppBounceLine :state="isTextUnderlineState" :start="0.6" :width="1000" :origin="'left'" :sp-animation="false" :modifier="'index-about'" />
            </span>
            <span class="sp-only">
              <span class="about-text-underline"></span>
            </span>
          </h2>
          <p class="about-read-text">
            <span class="pc-only">
              <AppReadTitle
                :state="isTextSegmentState"
                :start="0.48"
                :text="[
                  'EXPLORATIONS OF INTERACTION AND CREATIVE VISUALS I DEVELOP EVERY DAY CAN BE FOUND ON CODEPEN AND',
                  'GITHUB, RANGING FROM MICRO CSS ANIMATIONS TO ADVANCED SHADERS IN THREE.JS.',
                  'NOT ALL WORKS ARE PUBLICLY SHARED THERE,',
                  'BUT YOU CAN EXPLORE SELECTED HIGHLIGHTS THROUGH THIS PORTFOLIO.',
                ]"
                :sp-animation="false"
              />
            </span>
            <span class="sp-only"
              >EXPLORATIONS OF INTERACTION AND CREATIVE VISUALS I DEVELOP EVERY DAY CAN BE FOUND ON CODEPEN AND GITHUB, RANGING FROM MICRO CSS ANIMATIONS TO ADVANCED SHADERS IN THREE.JS. NOT ALL WORKS ARE PUBLICLY SHARED, BUT YOU CAN EXPLORE SELECTED HIGHLIGHTS THROUGH THIS PORTFOLIO.</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isTextSegmentState: 'default',
      isTextUnderlineState: 'default',
    }
  },
  mounted() {
    /* text-animation */
    this.observe = this.$refs.AboutTitle
    this.iObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isTextSegmentState = 'center'
            this.isTextUnderlineState = 'extend'
            this.iObserver.unobserve(this.observe)
          }
        })
      },
      { rootMargin: '0%' }
    )
    this.iObserver.observe(this.observe)
  },

  beforeDestroy() {
    this.iObserver.unobserve(this.observe)
    this.iObserver = null
  },
}
</script>

<style scoped lang="scss">
.about-bg {
  position: relative;

  @include sp() {
    overflow: hidden;
  }
}

.about-inner {
  padding: 333px 0 568px 0;

  @include tab-vertical() {
    padding: 213px 0 448px 0;
  }

  @include sp() {
    padding: 118px 0 340px;
  }
}

.about-title {
  position: relative;
  width: vw(1090);
  margin: 0 0 85px 0;
  padding: 0 56px 0 40px;
  color: $darkBlue;
  font-size: vw(80);
  font-family: $sixcaps;
  text-transform: uppercase;
  line-height: 0.964;

  @include tab {
    width: vw(1070);
    padding: 0 vw(56) 0 vw(40);
    font-size: vw(76);
    line-height: 1;
  }

  @include tab-vertical() {
    width: vw(998);
    font-size: vw(70);
  }

  @include sp() {
    width: auto;
    margin: 0 0 54px 0;
    padding: 0 vw_sp(20);
    font-size: vw_sp(120);
    white-space: nowrap;
  }
}

.about-title-read-area {
  position: absolute;
  top: -4px;
  left: 42px;
  color: $white;

  @include tab-vertical() {
    left: vw(46);
  }

  @include sp() {
    left: 9px;
  }
}

.about-title-wrapper {
  display: block;
}

.about-title-wrapper-01 {
  // padding: 0 0 0 vw(156);
  text-align: right;
}

.about-title-wrapper-04 {
  padding: 0 vw(150) 0 0;
}

.about-title-wrapper-01-sp {
  display: block;
  text-align: right;
}

.about-read-text {
  width: vw(1090);
  color: $darkBlue;
  padding: 0 56px 0 40px;
  font-size: 12px;
  text-align: right;
  letter-spacing: 0.02em;

  @include tab {
    padding: 0 vw(75) 0 vw(40);
  }

  @include tab-vertical() {
    padding: 0 vw(160) 0 40px;
  }

  @include sp() {
    width: calc(270px + #{vw_sp(20)});
    margin: 0 0 0 auto;
    padding: 0 vw_sp(20);
    font-size: 10px;
    line-height: 1.3;
  }
}

.about-text-underline {
  position: absolute;
  bottom: -34px;
  right: vw_sp(20);
  background-color: $darkBlue;
  width: calc(100% - #{vw_sp(40)});
  height: 1px;
}
</style>
