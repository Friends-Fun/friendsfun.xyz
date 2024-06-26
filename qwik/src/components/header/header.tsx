import { component$ } from "@builder.io/qwik";
import { BsHouse, BsFileEarmarkRuled, BsController, BsJoystick, BsPeople } from "@qwikest/icons/bootstrap";
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
              <BsHouse/> Home
            </a>
          </li>
          <li>
            <a href="/rules">
              <BsFileEarmarkRuled/> Rules
            </a>
          </li>
          <li>
            <a href="/connect">
              <BsController/> Connect
            </a>
          </li>
          <li>
            <a href="/features">
              <BsJoystick/> Features
            </a>
          </li>
          <li>
            <a href="/roleplay">
              <BsPeople/> Role Play
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
