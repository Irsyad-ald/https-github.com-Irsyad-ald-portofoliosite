<template>
  <AboutTechSkillsSection :skills-data="skillsData" />
</template>

<script>
export default {
  name: 'IndexTechSkillsSection',

  props: {
    skillsData: {
      type: Array,
      default: null,
    },
  },
}
</script>
