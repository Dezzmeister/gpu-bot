import * as data from "../data.json";
import { login } from "./services/discord";

async function run(): Promise<void> {
    await login(data);
}

run();