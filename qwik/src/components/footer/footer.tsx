/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a class={styles.anchor}>
          <span>© Friendsfun 2024. All rights reserved.</span>
        </a>
      </div>
    </footer>
  );
});
