# Bug Reports - SauceDemo

---

## BUG-001 - Missing validation for empty username

**Title:** Login allows attempt with empty username field

**Environment:**
- Browser: Chrome (latest)
- URL: https://www.saucedemo.com/

**Severity:** Medium  
**Priority:** High  

**Steps to Reproduce:**
1. Open login page
2. Leave username field empty
3. Enter valid password (secret_sauce)
4. Click Login

**Expected Result:**
- System should show validation error for empty username

**Actual Result:**
- System shows generic error message

---

## BUG-002 - No clear error message for invalid login

**Title:** Error message is not user-friendly on failed login

**Severity:** Low  
**Priority:** Medium  

**Steps to Reproduce:**
1. Enter invalid username
2. Enter invalid password
3. Click Login

**Expected Result:**
- Clear message like "Invalid credentials"

**Actual Result:**
- Generic error message displayed

---

## BUG-003 - Add to cart button does not provide confirmation feedback

**Title:** No visual confirmation when adding product to cart

**Severity:** Low  
**Priority:** Low  

**Steps to Reproduce:**
1. Login
2. Click "Add to cart"
3. Observe UI

**Expected Result:**
- Button state changes or feedback shown

**Actual Result:**
- No clear confirmation feedback