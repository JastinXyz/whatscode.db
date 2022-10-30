# whatscode.db
Just some json database.

### Example

```js
const data = require('whatscode.db');

// set
data.set("name", "value") // { name: "value" }
data.set("another", "val") // { name: "value", another: "val" }

// get
data.get("name") // value
data.get("another") // val

// delete
data.delete("another") // { name: "value" }

// has
data.has("name") // true
data.has("another") // false

// all
data.all() // { name: "value" }
```