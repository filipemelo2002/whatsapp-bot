import { Builder, By, Key, until, Capabilities } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

(async function App() {
  const service = new chrome.ServiceBuilder(chromedriver.path).build();
  chrome.setDefaultService(service);
  const driver = await new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  try {
    await driver.get('https://web.whatsapp.com/');
    await driver.wait(until.elementLocated(By.id('pane-side')));
  } finally {
    await driver.quit();
  }
})();
