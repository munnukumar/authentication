import dotenv from "dotenv";
import process from "process";
import path from "path";

export const loadConfig = () => {
  const env = process.env.NODE_ENV ?? "development";
  const filepath = path.join(process.cwd(), ".env");

  console.log(`Loading config from: ${filepath}`);
  dotenv.config({ path: filepath });
};
