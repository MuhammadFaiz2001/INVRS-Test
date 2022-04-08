const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions()
    .build();

    describe( 'Test Suite' , function(){
     //gives extra time to run test
      this.timeout(15000);
      before(function(){
   
          driver.get( "https://test.invrs.com/home" );
       //couldnt find an id or classname for the login button.
          driver.get( "https://test-app.invrs.com/index.html#/login" );
          driver.findElement(webdriver.By.id("username")).sendKeys("faiz.muhammad1002@gmail.com");
          driver.findElement(webdriver.By.id("password")).sendKeys("testing1");
   
           return driver.findElement(webdriver.By.className("p-button p-component sign-in-button")).click();
      });
   
      after(function(){
   
          return driver.quit();
   
      });
   
      it( 'Test Case', function(){
        
         var condition = webdriver.until.elementLocated(webdriver.By.className('p-autocomplete-input p-inputtext p-component'));
         //wait until page loads
         return driver.wait(condition, 10000);
      
        })});
