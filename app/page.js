import styles from "./page.module.css";
import { mentors } from "@/data";
import Button from "@/components/button/Button";
import Image from "next/image";
import MentorCard from "@/components/mentor-card/MentorCard";
import ChatBubble from "@/components/chat-bubble/ChatBubble";
import { joinClassNames } from "@/utils/join-class-names";
import { Desktop, Mobile } from "@/components/responsive/Responsive";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("@/components/logo/Logo"), { ssr: false });
const Emoji = dynamic(() => import("@/components/emoji/Emoji"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src="./background-desktop.svg" />
      <img className={styles.backgroundMobile} src="./background-mobile.svg" />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="./main_logo.svg" />
          <div className={styles.triangleCaption}>
            Space for like-minded builders <br />
            accelerating TON and Telegram ecosystem
          </div>
        </div>
        <div className={styles.triangleWrapper}>
          <div className={styles.triangle}>
            {/* <div className={styles.triangleImageWrapper}> */}
            {/* <Image src="./triangle.svg" alt="" fill /> */}
            {/* </div> */}
            <Image src="./triangle.svg" alt="" width={525} height={544} />
            <div className={styles.triangleContent}>
              Hello. We are looking for highly intelligent projects building on
              TON and Telegram.
              <br />
              <br />
              To find them, we have devised an accelerator program.
              <br />
              <br />
              Apply before <br />
              <u>10th August 2pm CET</u>.
              <br />
              <br />
              <Button
                text="Apply"
                className={styles.fullWidthButton}
                href="https://tally.so/r/3jxoZx"
                newTab
              />
            </div>
          </div>
        </div>
        <div className={styles.mentorsWrapper}>
          <div className={styles.mentorsTitle}>
            <div className={styles.title}>Mentors</div>
            <Desktop>
              <div>
                <Emoji
                  src="./evergreen_tree.svg"
                  alt=""
                  width={48}
                  height={48}
                />
                <Emoji
                  src="./baby_angel_light_skin_tone.svg"
                  alt=""
                  width={48}
                  height={48}
                />
              </div>
            </Desktop>
            <Mobile>
              <div>
                <Emoji
                  src="./evergreen_tree.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <Emoji
                  src="./baby_angel_light_skin_tone.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </Mobile>
          </div>
          <div className={styles.mentors}>
            {mentors.map((mentor) => (
              <MentorCard key={mentor.name} {...mentor} />
            ))}
          </div>
          <Button
            text="Apply"
            className={joinClassNames(styles.marginCenter, styles.mt30)}
            href="https://tally.so/r/3jxoZx"
            newTab
          />
        </div>
        <div className={styles.partnersWrapper}>
          <div className={styles.title}>
            Initial
            <br />
            contributors & partners
          </div>
          <div className={styles.partnersBlock}>
            <div className={styles.partnersInfo}>
              <div className={styles.partnersInfoContainer}>
                <div className={styles.partnerItem}>
                  <div className={styles.subtitle}>Notcoin</div>
                  <div className={styles.partnersList}>
                    40m+ users, 10m+ holders.
                  </div>
                </div>
              </div>
              <div className={styles.partnersInfoContainer}>
                <div className={styles.partnerItem}>
                  <div className={styles.subtitle}>Community</div>
                  <div className={styles.partnersList}>
                    Telegram native toolset for easy access
                    to a 900M active audience.
                    500+ user-acquisition campaigns.
                    <br />
                    Experience of launching major
                    <br />
                    products on TON.
                  </div>
                </div>
              </div>
              <div className={styles.partnersInfoContainer}>
                <div className={styles.partnerItem}>
                  <div className={styles.subtitle}>Sign</div>
                  <div className={styles.partnersList}>
                    Infrastructure for sybil resistance token
                    launches, airdrops, unlocks and vesting.
                    <br />
                    Over $100M worth of tokens managed.
                  </div>
                </div>
              </div>
              <div className={styles.partnersInfoContainer}>
                <div className={styles.partnerItem}>
                  <div className={styles.subtitle}>1inch</div>
                  <div className={styles.partnersList}>
                    Leading expertise in DeFi with 500b+
                    <br />
                    volume, 100m+ trades, 100+ significant partnerships.
                  </div>
                </div>
              </div>
              <Button
                text="Apply"
                className={joinClassNames(styles.fullWidthButton, styles.mt30)}
                href="https://tally.so/r/3jxoZx"
                newTab
              />
            </div>
            <div className={styles.partnersTriangles}>
              <div className={styles.partners}>
                <Desktop>
                  <Logo src="/logo/union.svg"
                  height={120}
                  rotated />
                </Desktop>
                <Mobile>
                  <Logo src="/logo/union.svg"
                  height={80}
                  rotated />
                </Mobile>
                <Desktop>
                  <Logo
                    src="/logo/logo-notcoin.svg"
                    width={250}
                    height={250}
                    className={styles.partner}
                  />
                </Desktop>
                <Mobile>
                  <Logo
                    src="/logo/logo-notcoin.svg"
                    width={200}
                    height={200}
                    className={styles.partner}
                  />
                </Mobile>
                <Logo
                src="/logo/early.svg"
                rotated
                height={92}
                className={styles.partner}
              />
              </div>
              <div className={styles.partners}>
                <Desktop>
                  <Logo src="/logo/subtract.svg" 
                  height={110}/>
                </Desktop>
                <Mobile>
                  <Logo src="/logo/subtract.svg" 
                  width={90}
                  height={100}/>
                </Mobile>
                <Desktop>
                  <Logo src="/logo/sign.svg"
                  height={100}
                  rotated
                  className={styles.partner} />
                </Desktop>
                <Mobile>
                <Logo src="/logo/sign.svg"
                  height={100}
                  rotated
                  className={styles.partner} />
                </Mobile>
                <Desktop>
                  <Logo src="/logo/1inch.svg"
                  height={100}
                  className={styles.partner} />
                </Desktop>
                <Mobile>
                  <Logo src="/logo/1inch.svg"
                  height={70}
                  className={styles.partner} />
                </Mobile>
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
                fill
                className={styles.expectationsTriangleMain}
              />
              <div className={styles.expectationsTriangleBackWrapper}>
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
              </div>
              <div className={styles.expectationsTriangleContent}>
                <div className={styles.expectationsTriangleEmoji}>👁</div>
                <br />
                <div className={styles.expectationsTriangleText}>
                  What can <br />
                  you expect <br />
                  in Triangle?
                </div>
              </div>
            </div>
          </div>
          <div className={styles.expectationsCaptions}>
            <div className={styles.expectationsCaptionsContainer}>
              <div className={styles.caption}>
                6 weeks with various mentor sessions from
                leading founders of web3 companies 
                and prolific TON ecosystem members
              </div>
              <div className={styles.caption}>
                The program’s focus is Go-To-Market Strategy, 
                technical support and fundraising
              </div>
              <div className={styles.caption}>
                The culmination of Triangle accelerator program 
                is the demo day with an opportunity to get 
                your startup funded
              </div>
            </div>
            <Button
              text="Apply"
              className={joinClassNames(styles.fullWidthButton, styles.mt30)}
              href="https://tally.so/r/3jxoZx"
              newTab
            />
          </div>
        </div>
        <div className={styles.faq}>
          <div>
            <ChatBubble text="What are the areas of interest for Triangle accelerator program?" />
            <div className={styles.borderedList}>
              <div>
                There is no ‘right’ idea for the program, but some of the areas
                that could be of interest are the following:
              </div>
              <ul className={styles.list}>
                <li>Building infrastructure for TON</li>
                <li>Enhancing UX for TON Ecosystem</li>
                <li>Bringing liquidity to TON and Telegram Ecosystem</li>
                <li>Accelerating the Telegram mini apps ecosystem</li>
                <li>Consumer applications bridging web2 and web3</li>
                <li>
                  Creating scalable DeFi solutions, that can fit an audience of
                  hundreds of millions
                </li>
                <li>Libraries for smart-contract development</li>
                <li>Solutions for DAOs and Network States</li>
              </ul>
            </div>
          </div>
          <div>
            <ChatBubble text="What companies are we looking for?" />
            <div className={styles.faqCol}>
              <div className={styles.borderedList}>
                We don’t have strict rules on the stage of projects. Products
                with initial traction would be preferred, however.
                <br />
                <br />
                With the blockchain ecosystem becoming{" "}
                <span className={styles.borderedListTextBold}>
                  chain-agnostic
                </span>
                ,<br /> folks from different chains →<br />
                feel free to explore Telegram ecosystem with us.
              </div>
              <div className={styles.aboveApply}>
                Apply with your project by 10th August 2pm CET.
              </div>
              <Button
                text="Apply"
                className={styles.faqButton}
                href="https://tally.so/r/3jxoZx"
                newTab
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.bottomText}>
            Web3 landscape changes rapidly. Yesterday{"'"}s dreams are today
            {"'"}s solutions for us, such as seamless onboarding to Web3 for
            hundreds of millions of users through Telegram.
            <br />
            <br />
            We’re seeing how the rapid growth of TON blockchain is becoming a
            center of interest in the blockchain industry, day by day.
            <br />
            <br />
            It’s a field for disruptive experiments.
            <br />
            <br />
            We’re on the verge of something completely different, something that
            we didn’t experience before.
            <br />
            <br />
            We need to rethink how great web3 can really be.
          </div>
          <div className={styles.bottomButtons}>
            <div className={styles.sns}>
              <a href="https://t.me/triangle_builders">Telegram</a>
              <a href="https://x.com/triangle_web3">X</a>
              <a href="https://medium.com/triangle-builders">Medium</a>
            </div>
            <div className={styles.sns}>
              <a href="https://tally.so/r/3E0LKN">
                <u>Get in touch</u>
              </a>
            </div>

            {/* <Button
              text="Get in touch"
              color="blue"
              className={styles.getInTouchButton}
              href="https://tally.so/r/3jxoZx"
              newTab
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
