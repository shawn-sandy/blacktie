### Example

``` jsx
 <input-elm
      v-bind="$attrs"
      :value="value"
      :class=" elmClass "
      :name="name"
      type="email"
      :aria-label="name"
      v-on="listeners"
      @blur="validate($event)"
      required
    >
```