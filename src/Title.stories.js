import Title from "./TitleView.svelte";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Title",
  component: Title,
  decorators: [withKnobs, withA11y],
};

export const Default = () => ({
  Component: Title,
  props: {
    titleText: text("Text", "toto"),
  },
});
