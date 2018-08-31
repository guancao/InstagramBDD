package utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Utility {

	public static WebElement findWebElement(WebDriver driver, String xpath) {
		WebElement webElement = driver.findElement(By.xpath(xpath));
		return webElement;
	}

	public static void sleep(WebDriver driver, int sec) throws InterruptedException {
		Thread.sleep(sec * 1000);
	}

	public static void printTitle(WebDriver driver) {
		String a = driver.getTitle();
		System.out.println("The web page title is : " + a);
	}

	public static String readProperties(String key) throws IOException {
		InputStream fis = new FileInputStream(
				System.getProperty("user.dir") + "\\src\\test\\resources\\objectRepository\\locators.properties");
		Properties prop = new Properties();
		prop.load(fis);
		String value = prop.getProperty(key);
		return value;
	}

	public static void takeScreenshot(WebDriver driver, String a) throws IOException {
		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(src, new File(System.getProperty("user.dir") + "\\screenshots\\" + a + "error.png"));
	}

	public static String readExcel(WebDriver driver, int rownum, int colnum) throws IOException {
		FileInputStream fit = new FileInputStream(System.getProperty("user.dir") + "\\data\\data.xlsx");
		XSSFWorkbook wb = new XSSFWorkbook(fit);
		Sheet sh = wb.getSheetAt(0);
		// rownumber
		int introw = sh.getPhysicalNumberOfRows();
		Row rw = sh.getRow(rownum);
		Cell ce = rw.getCell(colnum);
		String a = ce.getStringCellValue();
		return a;
	}
}
