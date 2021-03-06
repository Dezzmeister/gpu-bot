import { By } from "selenium-webdriver";
import { getDriver } from "./driver";

export async function login(data: {email: string, password: string}): Promise<void> {
    const driver = await getDriver();
    await driver.get("https://discord.com/login");

    const emailInput = await driver.findElement(By.name("email"));
    const passwordInput = await driver.findElement(By.name("password"));
    const submit = await driver.findElement(By.xpath(`//button[@type='submit']`));

    await emailInput.sendKeys(data.email);
    await passwordInput.sendKeys(data.password);
    await submit.click();
}

export async function getServer(server: string): Promise<void> {
    const driver = await getDriver();
    await driver.get(`https://discord.com/channels/${server}`);
}

export async function getChannel(server: string, channel: string): Promise<void> {
    const driver = await getDriver();
    await driver.get(`https://discord.com/channels/${server}/${channel}`);
}

