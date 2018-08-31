package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/Instagram.feature", 
					glue = {"steps" }, 
					plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json", "html:target/cucumber" }, 
					tags="@Regression") //, @TC005") //"@P2") //"@Smoke")

public class InstagramRunner extends AbstractTestNGCucumberTests {

}
