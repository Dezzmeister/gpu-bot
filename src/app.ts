import * as data from "../data.json";
import { login } from "./services/discord";
import { stopDriver } from "./services/driver";

async function run(): Promise<void> {
    await login(data);
    await stopDriver();
}

run();