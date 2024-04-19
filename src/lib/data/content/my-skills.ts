import { SkillItemPropsI } from "@/components/pages/index/proto/Skills";
interface MY_SKILLS_I {
  title: string;
  group: "SKILLS" | "TOOLS" | "EXPERIENCE";
  children: SkillItemPropsI[];
}
export const MY_SKILLS: MY_SKILLS_I[] = [
  {
    title: "Tools",
    group: "TOOLS",
    children: [
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "fa-brands:react",
          className: "text-primary",
        },
        groupIcon: {
          icon: "pepicons-pop:code",
          className:"text-purple-500 size-7",
        },
        title: "ReactJS",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "teenyicons:nextjs-outline",
          className: "text-white",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "NextJS",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "vscode-icons:file-type-light-js",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "ES6",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "vscode-icons:file-type-typescript",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "TypeScript",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:react-query-icon",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "TanStack Query",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "noto:bear",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Zustand",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:redux",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Redux",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "vscode-icons:file-type-html",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "HTML5",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "vscode-icons:file-type-css",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "CSS3",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "vscode-icons:file-type-scss",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "SCSS",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:tailwindcss-icon",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Tailwind Css",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "simple-icons:shadcnui",
          className: "text-white",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "ShadCn UI",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "simple-icons:nextui",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Next UI",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "devicon:antdesign",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "AntD",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:material-ui",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "MDUi",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "pixelarticons:animation",
          className: "text-green-500",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Gsap",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "flat-color-icons:android-os",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "TWA",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:pwa",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "PWA",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:web3js",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Web3 Js",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "simple-icons:walletconnect",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Web3Modal(SDK)",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:ethereum",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Viem ( Eth  Lib )",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:ethereum",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Wagmi (Eth SDK)",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "token-branded:tron",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "TronWeb (SDK)",
      },
      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:graphql",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "GraphQL",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "vscode-icons:file-type-yaml",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "REST Api",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "logos:nodejs-icon",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Node Js",
      },
      {
        colorClassName: "bg-white",
        icon: {
          icon: "logos:nestjs",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "Nest Js",
      },

      {
        colorClassName: "bg-purple-500",
        icon: {
          icon: "devicon:postgresql-wordmark",
          className: "text-primary",
        },
        groupIcon: {
            icon: "pepicons-pop:code",
            className:"text-purple-500 size-7",
          },
        title: "PostgreSQL",
      },
    ],
  },
  {
    title: "Skills",
    group: "SKILLS",

    children: [
      {
        colorClassName: "bg-primary",
        icon: {
          icon: "ph:devices-light",
          className: "text-primary",
        },
        groupIcon: {
          icon: "basil:lightning-solid",
          className: "text-primary",
        },
        title: "Responsive Design",
      },
      {
        colorClassName: "bg-primary",
        icon: {
          icon: "ic:twotone-data-object",
          className: "text-primary",
        },
        groupIcon: {
          icon: "basil:lightning-solid",
          className: "text-primary",
        },
        title: "OOP",
      },
      {
        colorClassName: "bg-primary",
        icon: {
          icon: "carbon:ibm-engineering-systems-design-rhapsody-sn1",
          className: "text-primary",
        },
        groupIcon: {
          icon: "basil:lightning-solid",
          className: "text-primary",
        },
        title: "Design Patterns",
      },
      {
        colorClassName: "bg-primary",
        icon: {
          icon: "mdi:code-tags-check",
          className: "text-primary",
        },
        groupIcon: {
          icon: "basil:lightning-solid",
          className: "text-primary",
        },
        title: "Clean Code",
      },
    ],
  },
  {
    title: "Experience",
    children: [
      {
        colorClassName: "bg-green-500",
        icon: {
          icon: "fluent-emoji-flat:spider-web",
          className: "text-primary",
        },
        groupIcon: {
          icon: "icon-park-twotone:experiment-one",
          className: "text-green-500",
        },
        title: "+10 WEB3 DAPP",
      },
      {
        colorClassName: "bg-green-500",
        icon: {
          icon: "simple-icons:smartthings",
          className: "text-primary",
        },
        groupIcon: {
          icon: "icon-park-twotone:experiment-one",
          className: "text-green-500",
        },
        title: "+12 Smart Contract",
      },
      {
        colorClassName: "bg-green-500",
        icon: {
          icon: "logos:pwa",
          className: "text-primary",
        },
        groupIcon: {
          icon: "icon-park-twotone:experiment-one",
          className: "text-green-500",
        },
        title: "+25 PWA website",
      },
      {
        colorClassName: "bg-green-500",
        icon: {
          icon: "fluent-emoji:shopping-bags",
          className: "text-primary",
        },
        groupIcon: {
          icon: "icon-park-twotone:experiment-one",
          className: "text-green-500",
        },
        title: "+25 Shop website",
      },
      {
        colorClassName: "bg-green-500",
        icon: {
          icon: "logos:telegram",
          className: "text-primary",
        },
        groupIcon: {
          icon: "icon-park-twotone:experiment-one",
          className: "text-green-500",
        },
        title: "+5 Telegram Bot",
      },
      {
        colorClassName: "bg-green-500",
        icon: {
          icon: "logos:telegram",
          className: "text-primary",
        },
        groupIcon: {
          icon: "icon-park-twotone:experiment-one",
          className: "text-green-500",
        },
        title: "+2 Telegram MiniApp",
      },
    ],
    group: "EXPERIENCE",
  },
];
