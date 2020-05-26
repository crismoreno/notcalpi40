<template>
  <pre>{{this.project}}</pre>
</template>
<script>
import ProjectsService from "../ProjectsService";
export default {
  name: "ProjectDetail",
  data() {
    return {
      project: []
    };
  },
  async created() {
    try {
      this.project = await ProjectsService.getProjectById(
        this.$route.params.id
      );
      console.log(this.project);
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>
