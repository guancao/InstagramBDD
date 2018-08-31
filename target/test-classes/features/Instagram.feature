Feature: user can sign up a new account, log in and log out account, follow another user, like a photo, unlike a photo 

@Smoke 
Scenario: user can sign up a new account 
	Given I am in webpage: "home_page" 
	Then I input "my_email" to "emailOrPhone" 
	And I input "my_fullName" to "fullName" 
	And I input "my_username" to "username" 
	And I input "my_password" to "password"
	Then I click "btn_signUp" 
	Then I am in webpage: "account_page"
	
@P1 @Regression
Scenario: user can log in and log out
	Given I am in webpage: "home_page"
	Then I click "login"
	And I input "my_username" to "username" 
	And I input "my_password" to "password"
	Then I click "btn_login"
	Then I am in webpage: "account_page"
	Then I click "my_account"
	Then I click "settings"
	And I click "log_out"

@P2 @Regression
Scenario: user can search for "Brynn Cartelli" and follow her
	Given I am in webpage: "home_page"
	Then I click "login"
	And I input "my_username" to "username" 
	And I input "my_password" to "password"
	Then I click "btn_login"
	Then I am in webpage: "account_page"
	Given I am in webpage: "account_page"
	And I move to click "search"
	Then I input "my_search" to "search_box"
	And I click "brynncartelli"
	And I am in webpage: "brynn_page"
	And I click "btn_follow"
 	Then The result should be based on "btn_following" and "expected_result"
 	
 @TC004 @Regression
 Scenario: user can like a picture in "Brynn Cartelli"
	Given I am in webpage: "home_page"
	Then I click "login"
	And I input "my_username" to "username" 
	And I input "my_password" to "password"
	Then I click "btn_login"
	And I click "story_brynncartelli"
#	And I click "btn_close"
	And I click "btn_like"
	
@TC005
Scenario: user can unlike a picture in "Brynn Cartelli"
	Given I am in webpage: "home_page"
	Then I click "login"
	And I input "my_username" to "username" 
	And I input "my_password" to "password"
	Then I click "btn_login"
	And I click "story_brynncartelli"
#	And I click "btn_close"
	And I click "btn_like"
	And I click "btn_unlike"
	
