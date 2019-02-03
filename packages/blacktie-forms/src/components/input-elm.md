### Example

```jsx
 <InputElm
  id="myfiels"
  v-model="email"
  label="Email Address"
  name="field-name1"
  type="email"
  placeholder="Enter your Em@il address"
  required
  error-message="Please enter a valid email address"
  @error-msg="alert"
  />
```
