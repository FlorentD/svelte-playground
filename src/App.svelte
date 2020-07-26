<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import { onMount } from "svelte";
  import Form from "./Form.svelte";
  export let name;
  export let message;
  onMount(async () => {
    let data = await (await fetch("/api")).json();
    message = data.msg;
    console.log("MESSAGE: ", message);
  });
</script>

<Tailwindcss />
<main>
  <h1 class="title">Hello {name}!</h1>
  <h2>{message}</h2>
  <h3>Change me!</h3>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <Form />
</main>
