<template>
  <AboutTechSkillsSection :skills-data="skillsData" />
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
}
</script>
