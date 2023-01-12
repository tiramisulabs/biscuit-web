// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxtjs/web-vitals",
    "@nuxtjs/fontaine",
    "nuxt-delay-hydration",
  ],
  app: {
    head: {
      titleTemplate:
        "biscuitland - A brand new bleeding edge non bloated Discord library",
      meta: [
        {
          name: "description",
          content: "A brand new bleeding edge non bloated Discord library.",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
    },
  },
  delayHydration: {
    mode: "mount",
  },
});
