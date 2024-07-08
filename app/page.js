import styles from "./page.module.css";
import { mentors } from "@/data";
import Button from "@/components/button/Button";
import Image from "next/image";
import MentorCard from "@/components/mentor-card/MentorCard";
import ChatBubble from "@/components/chat-bubble/ChatBubble";
import Logo from "@/components/logo/Logo";
import { joinClassNames } from "@/utils/join-class-names";
import { Desktop, Mobile } from "@/components/responsive/Responsive";

export default function Home() {
  return (
    <div>
      <div className={styles.logo}>
        <Image src="./main_logo.svg" alt="TRIANGLE" fill />
      </div>
      <div className={styles.container}>
        <div className={styles.triangleWrapper}>
          <div className={styles.triangle}>
            <Image src="./triangle.svg" alt="" width={596} height={544} />
            <div className={styles.triangleContent}>
              Hello. We are looking for highly intelligent projects building on telegram/ton.
              <br /><br />
              To find them, we have devised an acceleration program.
              <br /><br />
              Apply your project until 10 august 2pm CET.
              <br /><br />
              <Button
                text="Apply project"
                variant="outlined"
                color="white"
                className={styles.fullWidthButton}
                href="https://tally.so/r/3jxoZx"
                newTab
              />
            </div>
          </div>
          <div className={styles.triangleCaption}>
            Space for like-minded<br />builders accelerating<br />Telegram & Ton ecosystems
          </div>
        </div>
        <div className={styles.mentorsWrapper}>
          <div className={styles.mentorsTitle}>
            <div className={styles.title}>Mentors</div>
            <Desktop>
              <div>
                <Image src="./evergreen_tree.svg" alt="" width={48} height={48} />
                <Image src="./baby_angel_light_skin_tone.svg" alt="" width={48} height={48} />
              </div>
            </Desktop>
            <Mobile>
              <div>
                <Image src="./evergreen_tree.svg" alt="" width={24} height={24} />
                <Image src="./baby_angel_light_skin_tone.svg" alt="" width={24} height={24} />
              </div>
            </Mobile>
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
            href="https://tally.so/r/3jxoZx"
            newTab
          />
        </div>
        <div className={styles.partnersWrapper}>
          <div className={styles.title}>
            Initial<br />
            contributors & partners
          </div>
          <div className={styles.partnersBlock}>
            <div className={styles.partnersInfo}>
              <div>
                <div className={styles.subtitle}>
                  Notcoin and Open Builders
                </div>
                <ul className={styles.partnersList}>
                  <li>40m+ users, 10m+ holders.</li>
                  <li>500 user-acquisition campaigns</li>
                  <li>Experience of launching of major products on TON ecosystem.</li>
                  <li>Infrastructure and toolsets</li>
                  <li>Access for leading network from ton, telegram and web3 ecosystems.</li>
                </ul>
              </div>
              <div>
                <div className={styles.subtitleBold}>Sign Protocol</div>
                <ul className={styles.partnersList}>
                  <li>Infrastructure for token launches, management and token-distribution.</li>
                  <li>Amount of project w/ whom you working on tokenmanagement -{'>'} experts in BD</li>
                  <li>The first product in history invested by x3 Sequoia -{'>'} fundraise experts</li>
                </ul>
              </div>
              <div>
                <div className={styles.subtitleBold}>1inch</div>
                <ul className={styles.partnersList}>
                  <li>Amount of ecosystems you supporting/cooperating -{'>'} experts in ecosystem-growth</li>
                  <li>Amount of your total trading volume or smth like that -{'>'} DeFi OGs</li>
                </ul>
              </div>
              <Button
                text="Apply project"
                color="blue"
                className={styles.fullWidthButton}
                href="https://tally.so/r/3jxoZx"
                newTab
              />
            </div>
            <div className={styles.partnersTriangles}>
              <div className={styles.partners}>
                <Logo src="/logo/union.svg" rotated />
                <Desktop>
                  <Logo src="/logo/logo-notcoin.svg" width={300} height={300} className={styles.partner} />
                </Desktop>
                <Mobile>
                  <Logo src="/logo/logo-notcoin.svg" width={200} height={200} className={styles.partner} />
                </Mobile>
                <Logo src="/logo/early.svg" rotated className={styles.partner} />
              </div>
              <div className={styles.partners}>
                <Logo src="/logo/subtract.svg" />
                <Logo src="/logo/sign.svg" rotated className={styles.partner} />
                <Logo src="/logo/1inch.svg" className={styles.partner} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.expectationsWrapper}>
          <div className={styles.expectationsTriangleWrapper}>
            <div className={styles.expectationsTriangle}>
              <Image
                src="./triangle.svg"
                alt=""
                width={525}
                height={480}
                className={styles.expectationsTriangleMain}
              />
              <Desktop>
                {new Array(10).fill(1).map((_, index) => (
                  <Image
                    key={index}
                    src="./triangle.svg"
                    alt=""
                    width={525}
                    height={480}
                    className={styles.expectationsTriangleBack}
                    style={{ left: -20 * (index + 1), zIndex: 10 - index }}
                  />
                ))}
              </Desktop>
              <div className={styles.expectationsTriangleContent}>
                <div className={styles.expectationsTriangleEmoji}>👁</div>
                <br />
                <div className={styles.expectationsTriangleText}>
                  What can <br />
                  you expect?
                </div>
              </div>
            </div>
          </div>
          <div className={styles.expectationsCaptions}>
            <div className={styles.caption}>
              6 weeks with various mentor sessions from leading founders of web3 companies, and prolific TON ecosystem
              members.
            </div>
            <div className={styles.caption}>
              The program’s focus is on Go-To-Market Strategy, technical support and fundraising.
            </div>
            <div className={styles.caption}>
              The Triangle accelerator will culminate in a demo day with
              the opportunity to attract investment opportunities
              for your company.
            </div>
            <Button
              text="Apply project"
              variant="outlined"
              className={joinClassNames(styles.fullWidthButton, styles.mt30)}
              href="https://tally.so/r/3jxoZx"
              newTab
            />
          </div>
        </div>
        <div className={styles.faq}>
          <div>
            <ChatBubble text="What the areas of interest for Triangle accelerator?" />
            <div className={styles.borderedList}>
              <div>
                There is no ‘right’ idea for the program, but some of the areas that could be if interest are the
                following:
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
              <Button
                text="Apply project"
                className={styles.faqButton}
                href="https://tally.so/r/3jxoZx"
                newTab
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.bottomText}>
            It’s a community where you can find a support from experienced folks of web3 industry.
            <br /><br />
            Web3-field changes rapidly. Nowadays we have a solution which bringing opportunities today what can’t be
            imagined yesterday - seamless onboarding of multimillion users audience to web3 through telegram.dience to
            web3 through telegram.
            <br /><br />
            Depending on it we’re seeing how TON blockchain rapidly growing and becoming day by day a center of interest
            in blockchain industry.
            <br /><br />
            it’s a field for disrupting experiments.
            <br /><br />
            We’re on stage of smth completely different, we haven’t those experience before → we need to rethink how
            great
            web3 can really be.
          </div>
        </div>
        <div className={styles.bottomButtons}>
          <div className={styles.sns}>
            <div>Telegram</div>
            <div>X</div>
          </div>
          <Button
            text="Get in touch"
            color="blue"
            className={styles.getInTouchButton}
            href="https://tally.so/r/3jxoZx"
            newTab
          />
        </div>
      </div>
    </div>
  );
}
