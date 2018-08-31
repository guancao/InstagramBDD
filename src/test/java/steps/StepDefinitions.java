package steps;

import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.Utility;

public class StepDefinitions extends Utility {
	
	WebDriver driver;

	@Before
	public void initialize() {
		System.out.println("this is before class");
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\chromedriver.exe");
		// Webdriver is interface
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://www.instagram.com/?hl=en");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@After
	public void tearDown() {
		driver.manage().deleteAllCookies();
//		driver.close();
		driver.quit();
	}
	
	@Given("^I am in Instagram homepage$")
	public void homepage(){ 
		System.out.println("user is on the landing page");
		printTitle(driver);
	}

	@Given ("^I am in webpage: \"([^\"]*)\"$")
	public void landPage(String key) throws IOException, InterruptedException  {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		System.out.println("user is on the web page: " + readProperties(key) );
		printTitle(driver);
	}

	@When("^I click \"([^\"]*)\"$")
	public void clickOnElement(String key) throws IOException, InterruptedException  {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(readProperties(key))));
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath(readProperties(key))));
		try {
			findWebElement(driver, readProperties(key)).click();
		} catch (Exception e) {
			try {
				Actions ac=new Actions(driver);
				ac.moveToElement(findWebElement(driver,readProperties(key))).click().build().perform();
			} catch (Exception e1) {
				JavascriptExecutor jse =(JavascriptExecutor) driver;
				jse.executeScript("arguments[0].click();", findWebElement(driver, readProperties(key)));
			}
		}
	}
	
	@Then("^I move to click \"([^\"]*)\"$")
	public void moveToClick(String key) throws IOException {
		WebDriverWait wait = new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(readProperties(key))));
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath(readProperties(key))));
		Actions ac=new Actions(driver);
		ac.moveToElement(findWebElement(driver,readProperties(key))).click().build().perform();
	}

	@Then("^I use JavaScriptExecutor to click \"([^\"]*)\"$")
	public void javascriptExecutorClick(String key) throws IOException {
		JavascriptExecutor jse =(JavascriptExecutor) driver;
		jse.executeScript("arguments[0].click();", findWebElement(driver, readProperties(key)));
	}
	
	@Then("^I select \"([^\"]*)\" \"([^\"]*)\"$")
	public void selectOnMenu(String key1, String key2) throws IOException  {
		Select select = new Select(findWebElement(driver,readProperties(key1)));
		try {
		select.selectByVisibleText(readProperties(key2));
		} catch (Exception ex) {
			select.selectByIndex(Integer.parseInt(readProperties(key2)));
		}
	}
	
	@Then("^I input \"([^\"]*)\" to \"([^\"]*)\"$")
	public void inputToField(String value_key, String element_key) throws IOException {
		findWebElement(driver, readProperties(element_key)).sendKeys(readProperties(value_key));
	}
	
	@Then("^The result should be based on \"([^\"]*)\" and \"([^\"]*)\"$")
    public void the_result_should_be(String key1, String key2) throws IOException {
		String actualResult = findWebElement(driver, readProperties(key1)).getText();
		String expectedResult = readProperties(key2);
        assertEquals(expectedResult, actualResult);
    }
	
	@Then ("^I print \"([^\"]*)\"$")   //need to work on this
	public void printElements(String key) throws IOException, InterruptedException  {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}

}
