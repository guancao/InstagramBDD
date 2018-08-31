$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Instagram.feature");
formatter.feature({
  "line": 1,
  "name": "user can sign up a new account, log in and log out account, follow another user, like a photo, unlike a photo",
  "description": "",
  "id": "user-can-sign-up-a-new-account,-log-in-and-log-out-account,-follow-another-user,-like-a-photo,-unlike-a-photo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4926725194,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user can log in and log out",
  "description": "",
  "id": "user-can-sign-up-a-new-account,-log-in-and-log-out-account,-follow-another-user,-like-a-photo,-unlike-a-photo;user-can-log-in-and-log-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@P1"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am in webpage: \"home_page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I input \"my_username\" to \"username\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input \"my_password\" to \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click \"btn_login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am in webpage: \"account_page\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click \"my_account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click \"settings\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click \"log_out\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "home_page",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.landPage(String)"
});
formatter.result({
  "duration": 85924942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "duration": 151877482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my_username",
      "offset": 9
    },
    {
      "val": "username",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.inputToField(String,String)"
});
formatter.result({
  "duration": 106148238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my_password",
      "offset": 9
    },
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.inputToField(String,String)"
});
formatter.result({
  "duration": 95651495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_login",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "duration": 30524791553,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //button[text()\u003d\u0027Log in\u0027] (tried for 30 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027GC-LENOVO\u0027, ip: \u0027192.168.6.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\guanc\\AppData\\Local\\Temp\\scoped_dir15708_20384}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d67.0.3396.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d1771096f8b69a657e708a5da259e9cb\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat steps.StepDefinitions.clickOnElement(StepDefinitions.java:64)\r\n\tat ✽.Then I click \"btn_login\"(src/test/resources/features/Instagram.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "account_page",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.landPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "my_account",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "settings",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "log_out",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1038698351,
  "status": "passed"
});
formatter.before({
  "duration": 4155437417,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "user can search for \"Brynn Cartelli\" and follow her",
  "description": "",
  "id": "user-can-sign-up-a-new-account,-log-in-and-log-out-account,-follow-another-user,-like-a-photo,-unlike-a-photo;user-can-search-for-\"brynn-cartelli\"-and-follow-her",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@P2"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am in webpage: \"home_page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I input \"my_username\" to \"username\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I input \"my_password\" to \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click \"btn_login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I am in webpage: \"account_page\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I am in webpage: \"account_page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I move to click \"search\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I input \"my_search\" to \"search_box\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click \"brynncartelli\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I am in webpage: \"brynn_page\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click \"btn_follow\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The result should be based on \"btn_following\" and \"expected_result\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "home_page",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.landPage(String)"
});
formatter.result({
  "duration": 40561465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "duration": 175663267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my_username",
      "offset": 9
    },
    {
      "val": "username",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.inputToField(String,String)"
});
formatter.result({
  "duration": 157046719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my_password",
      "offset": 9
    },
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.inputToField(String,String)"
});
formatter.result({
  "duration": 85883734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_login",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "duration": 123229513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "account_page",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.landPage(String)"
});
formatter.result({
  "duration": 9523431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "account_page",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.landPage(String)"
});
formatter.result({
  "duration": 8798096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.moveToClick(String)"
});
formatter.result({
  "duration": 20570756740,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //div[contains(.,\u0027Search\u0027)] (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat steps.StepDefinitions.moveToClick(StepDefinitions.java:81)\r\n\tat ✽.And I move to click \"search\"(src/test/resources/features/Instagram.feature:34)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //div[contains(.,\u0027Search\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027GC-LENOVO\u0027, ip: \u0027192.168.6.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat steps.StepDefinitions.moveToClick(StepDefinitions.java:81)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "my_search",
      "offset": 9
    },
    {
      "val": "search_box",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.inputToField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "brynncartelli",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "brynn_page",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.landPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_follow",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_following",
      "offset": 31
    },
    {
      "val": "expected_result",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.the_result_should_be(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 919729310,
  "status": "passed"
});
formatter.before({
  "duration": 5403374464,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "user can like a picture in \"Brynn Cartelli\"",
  "description": "",
  "id": "user-can-sign-up-a-new-account,-log-in-and-log-out-account,-follow-another-user,-like-a-photo,-unlike-a-photo;user-can-like-a-picture-in-\"brynn-cartelli\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@TC004"
    },
    {
      "line": 41,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I am in webpage: \"home_page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I click \"login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I input \"my_username\" to \"username\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I input \"my_password\" to \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click \"btn_login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click \"story_brynncartelli\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#\tAnd I click \"btn_close\""
    }
  ],
  "line": 50,
  "name": "I click \"btn_like\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "home_page",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.landPage(String)"
});
formatter.result({
  "duration": 32000406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "duration": 144822157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my_username",
      "offset": 9
    },
    {
      "val": "username",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.inputToField(String,String)"
});
formatter.result({
  "duration": 115236249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my_password",
      "offset": 9
    },
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.inputToField(String,String)"
});
formatter.result({
  "duration": 126176069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_login",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "duration": 30548449338,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //button[text()\u003d\u0027Log in\u0027] (tried for 30 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027GC-LENOVO\u0027, ip: \u0027192.168.6.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\guanc\\AppData\\Local\\Temp\\scoped_dir21872_13370}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d67.0.3396.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ab0aba4df02a18094c70238dc6a04418\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat steps.StepDefinitions.clickOnElement(StepDefinitions.java:64)\r\n\tat ✽.Then I click \"btn_login\"(src/test/resources/features/Instagram.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "story_brynncartelli",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_like",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 890472339,
  "status": "passed"
});
});