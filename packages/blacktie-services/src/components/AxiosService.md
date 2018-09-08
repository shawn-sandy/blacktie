**Basic Example.**

```jsx
<axios-service>
  <template slot-scope="{ response, loading }">
    <pre>
      <code>
        {{ response.data }}
      </code>
    </pre>
  </template>
</axios-service>
```


**Set the Url to api**

Connect to the

```jsx
<axios-service url="https://api.coindesk.com/v1/bpi/currentprice.json">
  <template slot-scope="{ response, loading }">
    <pre>
    <code>
      {{ response.data }}
    </code>
  </pre>
  </template>
</axios-service>
```

Return and format data using list

```jsx
<axios-service>
  <template slot-scope="{ response, loading }">
    <ul>
      <li>Login: {{ response.data.login }}</li>
      <li>Avatar Url: {{ response.data.avatar_url }}</li>
      <li>Url: {{ response.data.url }}</li>
      <li>Repos: {{ response.data.public_repos }}</li>
    </ul>
    <pre>
      <code>
        {{ response.data }}
      </code>
    </pre>
  </template>
</axios-service>
```
