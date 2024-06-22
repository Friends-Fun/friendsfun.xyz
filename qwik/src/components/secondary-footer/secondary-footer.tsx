/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./secondary-footer.module.css";
import { LuLayers } from "@qwikest/icons/lucide";
import { BsMinecart} from "@qwikest/icons/bootstrap";
import Socials from "../socials/socials";

export default component$(() => {

  return (
    <div class={styles.secondaryFooter}>
      {/*FriendsFun Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
        <BsMinecart/> FriendsFun
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="/about"
              >
              About us
            </a>
          </li>
          <li>
            <a
              href="/terms-of-service"
              >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/feedback"
              >
              Feedback
            </a>
          </li>
          <li>
            <a href="mailto:info@friendsfun.xyz">
              Contact us
            </a>
          </li>
        </ul>
      </div>

      {/*Resources Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuLayers /> Resources
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="https://status.kspcommunity.com"
              target="_blank"
              >
              Status page
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kspcommunity/kspcommunity.com"
              target="_blank"
              >
              Open Source
            </a>
          </li>
        </ul>
      </div>

      <div class={styles.column}>
        <Socials />
      </div>

    </div>
  );
});