import styles from "./page.module.css";
import { mentors } from "@/data";
import Button from "@/components/button/Button";
import Image from "next/image";
import MentorCard from "@/components/mentor-card/MentorCard";
import ChatBubble from "@/components/chat-bubble/ChatBubble";
import Logo from "@/components/logo/Logo";
import { joinClassNames } from "@/utils/join-class-names";

export default function Home() {
  return (
    <div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="TRIANGLE" fill />
      </div>
      <div className={styles.container}>
        <div className={styles.triangleWrapper}>
          <div className={styles.triangle}>
            <Image src="/triangle.svg" alt="" width={596} height={544} />
            <div className={styles.triangleContent}>
              Hello. We are looking for highly intelligent projects building on telegram/ton.
              <br /><br />
              To find them, we have devised an acceleration program.
              <br /><br />
              Apply your project until 10 august 2pm CET.
              <br /><br />
              <Button text="Apply project" variant="outlined" color="white" className={styles.fullWidthButton} />
            </div>
          </div>
          <div className={styles.triangleCaption}>
            Space for like-minded<br />builders accelerating<br />Telegram & Ton ecosystems
          </div>
        </div>
        <div className={styles.mentorsWrapper}>
          <div className={styles.spaceBetween}>
            <div className={styles.title}>Mentors</div>
            <div className={styles.title}>🌲👼</div>
          </div>
          <div className={styles.mentors}>
            {mentors.map((mentor) => (
              <MentorCard key={mentor.name} {...mentor} />
            ))}
          </div>
          <Button
            text="Apply project"
            color="blue"
            className={joinClassNames(styles.fullWidthButton, styles.mt30)}
          />
        </div>
        <div className={styles.partnersWrapper}>
          <div className={styles.title}>
            Initial<br />
            contributors & partners
          </div>
          <div className={styles.subtitle}>
            Notcoin and Open Builders Ecosystems<span className={styles.caption}> gives priority access to the user-acquisition toolsets and best practices of launching on Telegram & Ton</span>
          </div>
          <div className={styles.partners}>
            <Logo src="/logo/logo-notcoin.svg" width={300} height={300} />
            <Logo src="/logo/union.svg" rotated className={styles.partner} />
            <Logo src="/logo/subtract.svg" className={styles.partner} />
            <Logo src="/logo/early.svg" rotated className={styles.partner} />
          </div>
          <div className={styles.partnersBottom}>
            <div className={styles.partners}>
              <Logo src="/logo/sign.svg" rotated />
              <Logo src="/logo/1inch.svg" className={styles.partner} />
            </div>
            <div className={styles.partnersCaption}>
              <div>
                <div className={styles.subtitleBold}>Sign Protocol</div>
                <div className={styles.caption}>
                  gives access for technical solutions:<br/>
                  product 1 , product 2
                </div>
              </div>
              <div>
                <div className={styles.subtitleBold}>1inch</div>
                <div className={styles.caption}>
                  gives access for DeFi-leading<br />
                  experience and grants program
                </div>
              </div>
              <Button text="Apply project" color="blue" />
            </div>
          </div>
        </div>
        <div className={styles.expectationsWrapper}>
          <div className={styles.expectationsTriangleWrapper}>
            <div className={styles.expectationsTriangle}>
              <Image src="/triangle.svg" alt="" width={525} height={480} />
              <div className={styles.expectationsTriangleContent}>
                <div className={styles.expectationsTriangleEmoji}>👁</div>
                <br />
                <div className={styles.expectationsTriangleText}>
                  What can <br />
                  you expect?
                </div>
              </div>
            </div>
            <div className={styles.expectationsCaptions}>
              <div className={joinClassNames(styles.caption, styles.expectationsCaption1)}>
                6 weeks with various mentor sessions from leading founders of web3 companies, and prolific TON ecosystem
                members.
              </div>
              <div className={joinClassNames(styles.caption, styles.expectationsCaption2)}>
                The program’s focus is on Go-To-Market Strategy, technical support and fundraising.
              </div>
              <div className={joinClassNames(styles.caption, styles.expectationsCaption3)}>
                The Triangle accelerator will culminate in a demo day with
                the opportunity to attract investment opportunities
                for your company.
              </div>
            </div>
          </div>
          <Button
            text="Apply project"
            variant="outlined"
            className={joinClassNames(styles.fullWidthButton, styles.mt30)}
          />
        </div>
        <div className={styles.faq}>
          <div>
            <ChatBubble text="What the areas of interest for Triangle accelerator?" />
            <div className={styles.borderedList}>
              <div>
                There is no ‘right’ idea for the program, but some of the areas that could be if interest are the following:
              </div>
              <ul className={styles.list}>
                <li>Building infrastructure for TON</li>
                <li>Building infrastructure for TON</li>
                <li>Enhancing UX for the TON Ecosystem</li>
                <li>Bringing liquidity to the Telegram&TON Ecosystems</li>
                <li>Accelerating the mini-apps ecosystem</li>
                <li>Consumer applications bridging web2 and web3</li>
                <li>Creating a DeFi solutions for hundreds millions audience</li>
                <li>Libraries for smart-contract development</li>
                <li>Solutions for DAOs and Network States</li>
              </ul>
            </div>
          </div>
          <div>
            <ChatBubble text="What companies are we looking for?" />
            <div className={styles.faqCol}>
              <div className={styles.borderedList}>
                We don’t have strict rules on the stage of projects. Products with initial traction would be preferred.
                <br /><br />
                With the blockchain ecosystem becoming <span
                className={styles.borderedListTextBold}>chain-agnostic</span>,
                folks from different chains →
                feel free to explore telegram ecosystem with us.
              </div>
              <Button text="Apply project" className={styles.faqButton} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
