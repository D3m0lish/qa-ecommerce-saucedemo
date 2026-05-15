# Test Cases - SauceDemo

## TC-001 - Valid Login

**Description:** Verify that a user can log in with valid credentials.

**Preconditions:**
- User is on login page

**Test Steps:**
1. Open https://www.saucedemo.com/
2. Enter valid username (standard_user)
3. Enter valid password (secret_sauce)
4. Click Login button

**Expected Result:**
- User is redirected to the products page

---

## TC-002 - Invalid Login

**Description:** Verify login fails with invalid credentials.

**Preconditions:**
- User is on login page

**Test Steps:**
1. Open https://www.saucedemo.com/
2. Enter invalid username
3. Enter invalid password
4. Click Login button

**Expected Result:**
- Error message is displayed
- User remains on login page

---

## TC-003 - Add Product to Cart

**Description:** Verify that a user can add a product to the shopping cart.

**Preconditions:**
- User is logged in

**Test Steps:**
1. Open product list page
2. Click "Add to cart" on a product
3. Open shopping cart

**Expected Result:**
- Product appears in the cart

---

## TC-004 - Remove Product from Cart

**Description:** Verify that a user can remove a product from the cart.

**Preconditions:**
- Product is already in cart

**Test Steps:**
1. Open shopping cart
2. Click "Remove" button

**Expected Result:**
- Product is removed from cart