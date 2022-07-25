import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ command, mode }) => {
  const port = 3000
  console.log(command, mode)
  const env = loadEnv(mode, process.cwd())
  console.log(env.VITE_NAME)
  if (mode === "development") {
    console.log("development")
  } else {
    console.log("production")
  }

  return {
    server: {
      port,
    }
  }
})