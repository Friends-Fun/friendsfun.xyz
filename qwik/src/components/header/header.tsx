import { component$ } from "@builder.io/qwik";
import QwikLogo from "../../media/icons/friendsfun/friendsfun_logo_128x128.png?jsx";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <QwikLogo />
        </div>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/rules">
              Rules
            </a>
          </li>
          <li>
            <a href="/connect">
              Connect
            </a>
          </li>
          <li>
            <a href="/features">
              Features
            </a>
          </li>
          <li>
            <a href="/roleplay">
              Role Play
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
