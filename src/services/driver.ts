import { Builder, ThenableWebDriver } from "selenium-webdriver";

let driver: ThenableWebDriver;

export function getDriver(): ThenableWebDriver {
    if (!driver) {
        driver = new Builder().forBrowser("chrome").build();
    }

    return driver;
}

export async function stopDriver(): Promise<void> {
    await driver.quit();
}