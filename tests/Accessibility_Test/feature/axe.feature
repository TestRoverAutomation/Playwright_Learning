@axe-core
Feature: Accessibility Testing

  Background: Navigate to home page
    Given I navigate to the ecommerce homepage

  # Scenario: Homepage accessibility scan
  #   When I run accessibility scan
  #   Then there should be no accessibility violations

  # Accessibility Testing by Layout Sections

  Scenario: Main Header accessibility validation
    When I scan the main header section for accessibility issues
    Then there should be no accessibility violations

  Scenario: Navigation Header accessibility validation
    When I scan the navigation header section for accessibility issues
    Then there should be no accessibility violations

  Scenario: Footer accessibility validation
    When I scan the footer section for accessibility issues
    Then there should be no accessibility violations

  # Scenario: Main content accessibility validation
  #   When I scan the main content for accessibility issues
  #   Then there should be no accessibility violations

  # Accessibility audit across important pages
  Scenario Outline: Accessibility scan for important "<pages>"
    Given I navigate ecommerce  to "<pages>"
    When I scan the main content for accessibility issues
    Then there should be no accessibility violations

    Examples:
      | pages                                          |
      | /                                              |
      | /index.php?route=product/special               |
      | /index.php?route=extension/maza/blog/home      |
      | /index.php?route=account/login                 |
      | /index.php?route=account/register              |
      | /index.php?route=product/category&path=20      |
      | /index.php?route=product/product&product_id=40 |
      | /index.php?route=checkout/cart                 |
      | /index.php?route=checkout/checkout             |
