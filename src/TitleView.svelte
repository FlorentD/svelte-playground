<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<script>
  import Title from "./Title.svelte";
  export let titleText = "Bonjour";
</script>

<Title>{titleText}</Title>
